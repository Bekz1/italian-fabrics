import type { Dictionary } from "@/i18n/get-dictionary";
import { BUSINESS } from "@/lib/site";
import { SectionHeader } from "./SectionHeader";

type Props = { dict: Dictionary };

export function Contact({ dict }: Props) {
  const phoneHref = dict.contact.phone.replace(/\s/g, "");

  return (
    <section id="contact" aria-labelledby="contact-heading" className="section-padding relative overflow-hidden bg-white">
      <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-champagne/40 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          label={dict.contact.label}
          title={dict.contact.title}
          id="contact-heading"
          className="mb-4"
        />
        <p className="mx-auto max-w-2xl text-center font-sans text-base leading-relaxed text-navy/60">
          {dict.contact.subtitle}
        </p>

        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-2">
          <address className="flex flex-col justify-center gap-4 not-italic">
            <a
              href={BUSINESS.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-xl border border-gold/20 bg-cream/40 p-5 transition-all hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5"
            >
              <ContactIcon type="location" />
              <span className="min-w-0">
                <span className="block font-sans text-sm leading-relaxed text-navy/70">
                  {dict.contact.location}
                </span>
                <span className="mt-1 inline-flex items-center gap-1 font-sans text-xs font-medium uppercase tracking-[0.15em] text-gold-dark transition-colors group-hover:text-gold">
                  {dict.contact.viewMap}
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </span>
              </span>
            </a>

            <a
              href={`tel:${phoneHref}`}
              className="group flex items-center gap-4 rounded-xl border border-gold/20 bg-cream/40 p-5 transition-all hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5"
            >
              <ContactIcon type="phone" />
              <span className="font-serif text-lg text-gold-dark transition-colors group-hover:text-gold">
                {dict.contact.phone}
              </span>
            </a>

            <a
              href={`mailto:${dict.contact.email}`}
              className="group flex items-center gap-4 rounded-xl border border-gold/20 bg-cream/40 p-5 transition-all hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5"
            >
              <ContactIcon type="email" />
              <span className="min-w-0 break-words font-serif text-lg text-gold-dark transition-colors group-hover:text-gold">
                {dict.contact.email}
              </span>
            </a>
          </address>

          <div className="overflow-hidden rounded-xl border border-gold/20 shadow-lg shadow-gold/5">
            <iframe
              src={BUSINESS.mapEmbedUrl}
              title={dict.contact.location}
              className="h-full min-h-[320px] w-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactIcon({ type }: { type: "location" | "phone" | "email" }) {
  const paths: Record<typeof type, React.ReactNode> = {
    location: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </>
    ),
    phone: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    ),
    email: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    ),
  };

  return (
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/25 bg-white" aria-hidden="true">
      <svg className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        {paths[type]}
      </svg>
    </span>
  );
}
