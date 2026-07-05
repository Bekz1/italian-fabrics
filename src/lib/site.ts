export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://italianfabrics.uz";

export const BUSINESS = {
  name: "ItalianFabrics.uz",
  email: "bekzododilv@gmail.com",
  phone: "+998908008888",
  phoneDisplay: "+998 90 800 88 88",
  address: {
    locality: "Tashkent",
    country: "Uzbekistan",
  },
} as const;

export const SOCIAL = {
  telegram: "https://t.me/italian_fabrics_uz",
  telegramHandle: "@italian_fabrics_uz",
  instagram: "https://instagram.com/o_bekz",
  threads: "https://threads.net/@o_bekz",
  youtube: "https://youtube.com/@o_bekz",
} as const;

export type SocialPlatform = keyof typeof SOCIAL;

export const SOCIAL_LINKS = [
  { platform: "telegram" as const, href: SOCIAL.telegram },
  { platform: "instagram" as const, href: SOCIAL.instagram },
  { platform: "threads" as const, href: SOCIAL.threads },
  { platform: "youtube" as const, href: SOCIAL.youtube },
];
