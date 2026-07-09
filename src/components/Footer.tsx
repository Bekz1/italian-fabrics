import Image from "next/image";
import type { Dictionary } from "@/i18n/get-dictionary";
import { BUSINESS } from "@/lib/site";
import { SocialLinks } from "./SocialLinks";

type Props = { dict: Dictionary };

export function Footer({ dict }: Props) {
  const phoneHref = dict.contact.phone.replace(/\s/g, "");

  const links = [
    { label: dict.nav.about, href: "#about" },
    { label: dict.services.label, href: "#services" },
    { label: dict.partners.label, href: "#partners" },
    { label: dict.faq.label, href: "#faq" },
    { label: dict.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="border-t border-gold/20 bg-navy text-cream/60">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt={dict.seo.logoAlt}
                width={48}
                height={48}
                className="rounded-full opacity-90"
              />
              <span className="font-serif text-base tracking-wide text-gold-light">
                ITALIANFABRICS.UZ
              </span>
            </div>
            <p className="mt-5 max-w-xs font-sans text-sm leading-relaxed text-cream/50">
              {dict.footer.description}
            </p>
          </div>

          <nav aria-label={dict.footer.linksHeading}>
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-light/80">
              {dict.footer.linksHeading}
            </h2>
            <ul className="mt-5 space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-cream/60 transition-colors hover:text-gold-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-light/80">
              {dict.footer.contactHeading}
            </h2>
            <address className="mt-5 space-y-3 not-italic">
              <a
                href={BUSINESS.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block font-sans text-sm leading-relaxed text-cream/60 transition-colors hover:text-gold-light"
              >
                {dict.contact.location}
              </a>
              <a
                href={`tel:${phoneHref}`}
                className="block font-sans text-sm text-cream/60 transition-colors hover:text-gold-light"
              >
                {dict.contact.phone}
              </a>
              <a
                href={`mailto:${dict.contact.email}`}
                className="block break-all font-sans text-sm text-cream/60 transition-colors hover:text-gold-light"
              >
                {dict.contact.email}
              </a>
            </address>
          </div>

          <div>
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-light/80">
              {dict.footer.followHeading}
            </h2>
            <div className="mt-5 flex justify-start">
              <SocialLinks dict={dict} variant="dark" />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-5 border-t border-gold/10 pt-8 sm:flex-row sm:justify-between">
          <p className="order-2 font-sans text-xs text-cream/40 sm:order-1">
            &copy; {new Date().getFullYear()} ItalianFabrics.uz — {dict.footer.rights}
          </p>
          <div className="order-1 flex items-center gap-3 sm:order-2">
            <span className="h-1 w-10 italian-flag rounded-full" aria-hidden="true" />
            <span className="font-sans text-xs font-medium uppercase tracking-[0.25em] text-gold/70">
              {dict.footer.madeInItaly}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
