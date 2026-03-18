"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On homepage, scroll to anchor. On subpages, navigate to homepage with anchor.
  const sectionHref = (anchor: string) => (isHome ? anchor : `/${anchor}`);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-wave-bg/80 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.03)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo — scrolls to top on homepage, navigates home from subpages */}
        <a
          href="/"
          onClick={(e) => {
            if (isHome) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center gap-2 group"
        >
          <img src="/wave-hand.png" alt="Wave" width={36} height={36} className="w-9 h-9" />
          <span className="text-xl font-bold text-white group-hover:text-wave-primary transition-colors">
            Wave
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href={sectionHref("#how-it-works")}
            className="text-sm text-wave-muted hover:text-white transition-colors"
          >
            How It Works
          </a>
          <a
            href={sectionHref("#features")}
            className="text-sm text-wave-muted hover:text-white transition-colors"
          >
            Features
          </a>
          <a
            href={sectionHref("#privacy")}
            className="text-sm text-wave-muted hover:text-white transition-colors"
          >
            Privacy
          </a>
          <a
            href={sectionHref("#download")}
            className="text-sm font-semibold text-white bg-wave-primary hover:bg-wave-primary/90 px-5 py-2 rounded-full transition-all"
          >
            Download
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-wave-surface/95 backdrop-blur-xl border-t border-wave-surface">
          <div className="px-6 py-4 flex flex-col gap-4">
            <a
              href={sectionHref("#how-it-works")}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-wave-muted hover:text-white transition-colors"
            >
              How It Works
            </a>
            <a
              href={sectionHref("#features")}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-wave-muted hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href={sectionHref("#privacy")}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-wave-muted hover:text-white transition-colors"
            >
              Privacy
            </a>
            <a
              href={sectionHref("#download")}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-semibold text-white bg-wave-primary px-5 py-2.5 rounded-full text-center"
            >
              Download
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
