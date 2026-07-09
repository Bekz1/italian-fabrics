import type { Dictionary } from "@/i18n/get-dictionary";
import { SectionHeader } from "./SectionHeader";

type Props = { dict: Dictionary };

export function FAQ({ dict }: Props) {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="section-padding bg-champagne/20">
      <div className="mx-auto max-w-3xl">
        <SectionHeader label={dict.faq.label} title={dict.faq.title} id="faq-heading" className="mb-12" />

        <div className="space-y-4">
          {dict.faq.items.map((item, i) => (
            <details
              key={item.question}
              className="group overflow-hidden rounded-xl border border-gold/20 bg-cream transition-all duration-300 open:border-gold/40 open:shadow-md open:shadow-gold/5 hover:border-gold/40"
            >
              <summary className="flex cursor-pointer list-none items-center gap-4 p-6 [&::-webkit-details-marker]:hidden">
                <span
                  className="font-sans text-sm font-semibold text-gold-dark/60 transition-colors group-open:text-gold-dark"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="flex-1 font-serif text-base font-semibold text-navy md:text-lg">
                  {item.question}
                </h3>
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold-dark transition-all duration-300 group-open:rotate-180 group-open:border-gold group-open:bg-gold group-open:text-white"
                  aria-hidden="true"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 pl-16">
                <p className="font-sans text-sm leading-relaxed text-navy/65">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
