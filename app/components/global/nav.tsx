"use client";

import Link from "next/link";
import { NavLinks } from "./nav-links";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between h-16 bg-white border-b border-rich-black/10">
      <Link className="mr-auto" href="/">
        <span className="text-2xl font-bold text-cerulean">Medica</span>
      </Link>

      <NavLinks />
    </nav>
  );
}
