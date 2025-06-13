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
    queryFn: () => scrapeArticles(query),
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
  const [summaryText, setSummaryText] = useState("");
  const [keywords, setKeywords] = useState([]);
  useEffect(() => {
    if (data) {
      console.log(data);

      setArticles(data);
      setSummaryText(data.summary);
      setKeywords(data.keywords);
    }
  }, [data]);
  console.log(articles, typeof articles);
  return (
    <div className="flex flex-col items-center justify-center">
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      <h1 className="text-2xl font-bold">Search Results</h1>
      <div id="results" className="flex flex-wrap items-center justify-center">
        {articles.id + " " + articles.title}
        {/* {articles.map((article: Article) => {
          return <ArticleCard key={article.id} article={article} />;
        })} */}
      </div>
      {summaryText && <ArticleSummary summaryText={summaryText} />}
      {keywords && <KeywordMap keywords={keywords} />}
    </div>
  );
};

export default ArticleLayout;
