"use client";

import { useState, useEffect } from "react";
import ArticleCard from "./article-card";
import { Article } from "@/types/";
import ArticleSummary from "./article-summary";
import KeywordMap from "./keyword-map";
import scrapeArticles from "@/lib/api/scrape-articles";
import { useQuery } from "@tanstack/react-query";

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
  // const [summaryText, setSummaryText] = useState("");
  const [keywords, setKeywords] = useState({});
  useEffect(() => {
    if (data) {
      setArticles(data.articles);
      // setSummaryText(data.summary);
      setKeywords(data.keywords);
    }
  }, [data]);
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {isLoading && <p className="text-2xl font-bold">Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      <h1 className="text-2xl font-bold">
        Search Results: {articles.length || 0}
      </h1>
      {keywords && <KeywordMap keywords={keywords} />}
      <div id="results" className="flex flex-wrap  gap-4">
        {articles &&
          articles.map((article: Article) => {
            return <ArticleCard key={article.id} article={article} />;
          })}
      </div>
      {/* {summaryText && <ArticleSummary summaryText={summaryText} />} */}
    </div>
  );
};

export default ArticleLayout;
