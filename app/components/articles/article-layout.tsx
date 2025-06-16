"use client";

import { useState, useEffect } from "react";
import ArticleCard from "./article-card";
import { Article } from "@/types/";
import SummaryOverview from "./summary-overview";
import scrapeArticles from "@/lib/api/scrape-articles";
import { useQuery } from "@tanstack/react-query";
import summariseArticles from "@/lib/api/summarise-articles";
import { Loader } from "lucide-react";

const ArticleLayout = ({ query }: { query: string }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["articles", query],
    queryFn: async () => {
      const data = await scrapeArticles(query);
      return data;
    },
    enabled: !!query,
    // Only select the data we need
    // select: (data) => ({
    //   articles: data?.articles,
    //   count: data?.count
    // }),
    // Don't refetch if we have data
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  const [articles, setArticles] = useState([]);
  const [keywords, setKeywords] = useState({});
  const [summaryText, setSummaryText] = useState("");

  useEffect(() => {
    if (data) {
      setArticles(data.articles);
      setKeywords(data.keywords);

      if (!data.summary_text) {
        setSummaryText("No summary available");
      } else {
        summariseArticles(data.summary_text)
          .then((summary) => {
            if (summary) setSummaryText(summary);
          })
          .catch((err) => console.error("Summary error:", err));
      }
    }
  }, [data]);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {isLoading && (
        <p className="text-2xl font-bold">
          Loading...
          <Loader className="animate-spin" />
        </p>
      )}
      {error && <p>Error: {error.message}</p>}

      {!isLoading && (
        <>
          <h1 className="text-2xl font-bold">
            Search Results: {articles.length || 0}
          </h1>

          <SummaryOverview
            keywords={keywords}
            summaryText={summaryText}
            isLoading={!summaryText && !!data?.summary_text}
          />

          <div id="results" className="flex flex-wrap gap-4">
            {articles?.map((article: Article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ArticleLayout;
