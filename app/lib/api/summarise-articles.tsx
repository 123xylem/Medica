"use server";
import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";

const grokMiniKey = process.env["GROK_MINI_GITHUB_TOKEN"];
const grokKey = process.env["GROK_GITHUB_TOKEN"];
const openAiKey = process.env["OPEN_AI_41_GITHUB_TOKEN"];
const tokens = [grokMiniKey, grokKey, openAiKey];
const models = ["xai/grok-3-mini", "xai/grok-3", "openai/gpt-4.1"];
const endpoint = "https://models.github.ai/inference";

export default async function summariseArticles(
  text: string,
  retry: number = 0
) {
  const client = ModelClient(
    endpoint,
    new AzureKeyCredential(tokens[retry] || "")
  );
  try {
    const response = await client.path("/chat/completions").post({
      body: {
        messages: [
          {
            role: "system",
            content:
              "You are a top scientist able to explain research to laymen. You dont waste time being friendly or asking follow up questions.All anseers are in plain english text",
          },
          {
            role: "user",
            content:
              text +
              " Summarise the findings in a concise manner. Do not introduce or ask follow up questions.",
          },
        ],
        temperature: 1.0,
        top_p: 1.0,
        model: models[retry],
      },
    });
    if (response.status == "429") {
      throw new Error("Rate limit exceeded");
    }
    if (isUnexpected(response)) {
      throw response.body.error;
    }

    console.log(
      response.body.choices[0].message.content,
      "response using Model:",
      models[retry]
    );
    return response.body.choices[0].message.content;
  } catch (err) {
    if (err instanceof Error && err.message.includes("429")) {
      return await summariseArticles(text, retry + 1);
    }
    return "Error summarising text" + JSON.stringify(err);
  }
}
