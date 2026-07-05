"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { localeNames, locales } from "@/i18n/config";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

export function Header({ locale, dict }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: dict.nav.about },
    { href: "#services", label: dict.nav.services },
    { href: "#contact", label: dict.nav.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/20 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-12">
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt={dict.seo.logoAlt}
            width={48}
            height={48}
            className="rounded-full"
          />
          <span className="hidden font-serif text-lg font-semibold tracking-wide text-navy sm:block">
            ITALIANFABRICS.UZ
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm font-medium uppercase tracking-wider text-navy/70 transition-colors hover:text-gold-dark"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 rounded-full border border-gold/30 px-3 py-1.5 font-sans text-xs font-medium uppercase tracking-wider text-navy transition-colors hover:border-gold hover:bg-gold/5"
              aria-label="Change language"
            >
              {locale.toUpperCase()}
              <svg
                className={`h-3 w-3 transition-transform ${langOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 min-w-[140px] overflow-hidden rounded-lg border border-gold/20 bg-cream shadow-lg">
                {locales.map((l) => (
                  <Link
                    key={l}
                    href={`/${l}`}
                    onClick={() => setLangOpen(false)}
                    className={`block px-4 py-2.5 font-sans text-sm transition-colors hover:bg-gold/10 ${
                      l === locale
                        ? "bg-gold/10 font-medium text-gold-dark"
                        : "text-navy/70"
                    }`}
                  >
                    {localeNames[l]}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold/20 md:hidden"
            aria-label="Toggle menu"
          >
            <svg className="h-5 w-5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-gold/10 bg-cream px-6 py-4 md:hidden" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 font-sans text-sm font-medium uppercase tracking-wider text-navy/70 transition-colors hover:text-gold-dark"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
