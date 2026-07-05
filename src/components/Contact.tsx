import type { Dictionary } from "@/i18n/get-dictionary";
import { SectionHeader } from "./SectionHeader";
import { SocialLinks } from "./SocialLinks";

type Props = { dict: Dictionary };

export function Contact({ dict }: Props) {
  const phoneHref = dict.contact.phone.replace(/\s/g, "");

  return (
    <section id="contact" aria-labelledby="contact-heading" className="section-padding bg-white">
      <div className="mx-auto max-w-2xl text-center">
        <SectionHeader
          label={dict.contact.label}
          title={dict.contact.title}
          id="contact-heading"
          className="mb-4"
        />
        <p className="font-sans text-base leading-relaxed text-navy/60">{dict.contact.subtitle}</p>

        <address className="mt-8 space-y-4 not-italic">
          <p className="font-sans text-sm text-navy/60">{dict.contact.location}</p>
          <p>
            <a
              href={`tel:${phoneHref}`}
              className="font-serif text-xl text-gold-dark transition-colors hover:text-gold"
            >
              {dict.contact.phone}
            </a>
          </p>
          <p>
            <a
              href={`mailto:${dict.contact.email}`}
              className="font-serif text-xl text-gold-dark transition-colors hover:text-gold"
            >
              {dict.contact.email}
            </a>
          </p>
        </address>

        <div className="mt-10">
          <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.2em] text-navy/50">
            {dict.contact.followUs}
          </p>
          <SocialLinks dict={dict} />
        </div>
      </div>
    </section>
  );
}
