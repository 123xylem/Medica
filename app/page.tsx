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
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <SearchBar onSearch={setSearchQuery} />
        {searchQuery && <ArticleLayout query={searchQuery} />}
      </main>
    </div>
  );
}
