import type { Dictionary } from "@/i18n/get-dictionary";

type Props = { dict: Dictionary };

export function Contact({ dict }: Props) {
  const phoneHref = dict.contact.phone.replace(/\s/g, "");

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="mx-auto max-w-2xl text-center">
        <p className="section-label mb-3">{dict.contact.label}</p>
        <h2 className="section-title">{dict.contact.title}</h2>
        <p className="mt-4 font-sans text-base leading-relaxed text-navy/60">
          {dict.contact.subtitle}
        </p>
        <div className="mx-auto my-8 h-px w-16 bg-gold" />

        <div className="space-y-4">
          <p className="font-sans text-sm text-navy/60">{dict.contact.location}</p>
          <a
            href={`tel:${phoneHref}`}
            className="block font-serif text-xl text-gold-dark transition-colors hover:text-gold"
          >
            {dict.contact.phone}
          </a>
          <a
            href={`mailto:${dict.contact.email}`}
            className="block font-serif text-xl text-gold-dark transition-colors hover:text-gold"
          >
            {dict.contact.email}
          </a>
        </div>
      </div>
    </section>
  );
}
