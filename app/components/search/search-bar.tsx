"use client";

import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    console.log(search, "searching");
    e.preventDefault();
    onSearch(search);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center justify-center gap-2 max-w-2xl mx-auto"
    >
      <input
        type="text"
        placeholder="Search for a study with keywords"
        className="w-full px-4 py-2 rounded-md border border-prussian-blue/20 
                   focus:outline-none focus:border-cerulean focus:ring-1 focus:ring-cerulean
                   text-rich-black placeholder:text-prussian-blue/50 bg-white"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="bg-cerulean text-white px-6 py-2 rounded-md
                   hover:text-cerulean hover:!bg-black 
                   focus:ring-2 focus:ring-cerulean cursor-pointer
                   transition-all duration-100"
      >
        Search
      </button>
    </form>
  );
}
