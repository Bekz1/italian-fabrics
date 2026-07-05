import type { Dictionary } from "@/i18n/get-dictionary";
import { SectionHeader } from "./SectionHeader";

type Props = { dict: Dictionary };

export function FAQ({ dict }: Props) {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="section-padding bg-champagne/20">
      <div className="mx-auto max-w-3xl">
        <SectionHeader label={dict.faq.label} title={dict.faq.title} id="faq-heading" className="mb-12" />

        <div className="space-y-6">
          {dict.faq.items.map((item, i) => (
            <article
              key={item.question}
              aria-labelledby={`faq-${i}-heading`}
              className="rounded-lg border border-gold/20 bg-cream p-6"
            >
              <h3 id={`faq-${i}-heading`} className="font-serif text-base font-semibold text-navy md:text-lg">
                {item.question}
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-navy/65">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
