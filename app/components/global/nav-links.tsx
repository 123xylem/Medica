"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <div id="nav-menu" className="flex items-center gap-8 ml-auto">
      <Link
        href="/"
        className={`text-sm font-medium ${
          pathname === "/"
            ? "text-rich-black border-b-2 border-cerulean"
            : "text-prussian-blue hover:text-rich-black hover:border-b-2 hover:border-prussian-blue/30"
        }`}
      >
        Home
      </Link>
      <Link
        href="/trending-studies"
        className={`text-sm font-medium ${
          pathname.startsWith("/trending-studies")
            ? "text-rich-black border-b-2 border-cerulean"
            : "text-prussian-blue hover:text-rich-black hover:border-b-2 hover:border-prussian-blue/30"
        }`}
      >
        Trending Studies
      </Link>
    </div>
  );
}
