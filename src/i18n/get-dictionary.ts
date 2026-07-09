import type { Locale } from "./config";

export type Dictionary = {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  seo: {
    h1: string;
    logoAlt: string;
    organizationDescription: string;
    knowsAbout: string[];
  };
  nav: {
    about: string;
    services: string;
    contact: string;
  };
  hero: {
    tagline: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
  };
  partners: {
    label: string;
    title: string;
    subtitle: string;
    marqueeLabel: string;
    disclaimer: string;
  };
  about: {
    label: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
  };
  services: {
    label: string;
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  values: {
    label: string;
    title: string;
    items: { title: string; description: string }[];
  };
  whyItaly: {
    label: string;
    title: string;
    p1: string;
    p2: string;
    pointsHeading: string;
    points: string[];
  };
  audience: {
    label: string;
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  process: {
    label: string;
    title: string;
    subtitle: string;
    steps: { title: string; description: string }[];
  };
  faq: {
    label: string;
    title: string;
    items: { question: string; answer: string }[];
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    location: string;
    viewMap: string;
    phone: string;
    email: string;
    followUs: string;
    socialTelegram: string;
    socialInstagram: string;
    socialThreads: string;
    socialYoutube: string;
  };
  footer: {
    tagline: string;
    rights: string;
    madeInItaly: string;
    linksHeading: string;
    contactHeading: string;
    followHeading: string;
    description: string;
  };
};

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./messages/en.json").then((m) => m.default),
  ru: () => import("./messages/ru.json").then((m) => m.default),
  uz: () => import("./messages/uz.json").then((m) => m.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
