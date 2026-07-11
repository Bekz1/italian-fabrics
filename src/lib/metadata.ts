import type { Metadata } from "next";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { defaultLocale, locales } from "@/i18n/config";
import { SITE_URL } from "./site";

export function buildPageMetadata(locale: Locale, dict: Dictionary): Metadata {
  const url = `${SITE_URL}/${locale}`;

  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = `${SITE_URL}/${l}`;
  }
  languages["x-default"] = `${SITE_URL}/${defaultLocale}`;

  return {
    title: {
      absolute: dict.meta.title,
    },
    description: dict.meta.description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      type: "website",
      locale: locale === "uz" ? "uz_UZ" : locale === "ru" ? "ru_RU" : "en_US",
      url,
      siteName: "ItalianFabrics.uz",
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 1200,
          alt: dict.seo.logoAlt,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 1200,
          alt: dict.seo.logoAlt,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    category: "business",
  };
}
