import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { BUSINESS, SITE_URL, SOCIAL } from "@/lib/site";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

export function JsonLd({ locale, dict }: Props) {
  const pageUrl = `${SITE_URL}/${locale}`;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: BUSINESS.name,
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        description: dict.seo.organizationDescription,
        email: BUSINESS.email,
        telephone: BUSINESS.phone,
        areaServed: {
          "@type": "Country",
          name: "Uzbekistan",
        },
        sameAs: [SOCIAL.telegram, SOCIAL.instagram, SOCIAL.threads, SOCIAL.youtube],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#localbusiness`,
        name: BUSINESS.name,
        description: dict.seo.organizationDescription,
        url: pageUrl,
        image: `${SITE_URL}/logo.png`,
        email: BUSINESS.email,
        telephone: BUSINESS.phone,
        priceRange: "$$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: BUSINESS.address.street,
          addressLocality: BUSINESS.address.locality,
          addressCountry: "UZ",
        },
        hasMap: BUSINESS.mapUrl,
        areaServed: [
          { "@type": "City", name: "Tashkent" },
          { "@type": "Country", name: "Uzbekistan" },
        ],
        knowsAbout: dict.seo.knowsAbout,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: BUSINESS.name,
        description: dict.meta.description,
        inLanguage: ["en", "ru", "uz"],
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: dict.meta.title,
        description: dict.meta.description,
        inLanguage: locale,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#localbusiness` },
        primaryImageOfPage: `${SITE_URL}/logo.png`,
        mainEntity: { "@id": `${pageUrl}/#faq` },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["#hero-heading", "#about-heading", "#services-heading"],
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}/#faq`,
        url: `${pageUrl}#faq`,
        inLanguage: locale,
        isPartOf: { "@id": `${pageUrl}/#webpage` },
        mainEntity: dict.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
