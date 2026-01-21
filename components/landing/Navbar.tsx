"use client";

import Link from "next/link";
import { MoveRight } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6">
      <nav className="glass flex items-center justify-between w-full max-w-7xl px-4 py-3 rounded-2xl shadow-sm border border-white/20 dark:border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">H</span>
          </div>
          <span className="text-xl font-bold tracking-tight hidden sm:block">
            Hello it&apos;s my id
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link
            href="#features"
            className="hover:text-primary transition-colors"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="hover:text-primary transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#templates"
            className="hover:text-primary transition-colors"
          >
            Templates
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-medium hover:text-primary transition-colors px-4 py-2"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="group flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
          >
            Join for free
            <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
