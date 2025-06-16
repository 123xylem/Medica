"use client";

import Image from "next/image";
import SearchBar from "@/components/search/search-bar";
import ArticleLayout from "@/components/articles/article-layout";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Medica</h1>
          <p className="text-lg">
            Medica is a tool that quickly helps you find the latest research in
            an easily digestable summary. It focuses on Meta Analyses of topics
            to gain bigger picture insights.
          </p>
          <p className="text-lg">Enter one or two keywords to get started. </p>
        </div>

        <SearchBar onSearch={setSearchQuery} />
        {searchQuery && <ArticleLayout query={searchQuery} />}
      </main>
    </div>
  );
}
