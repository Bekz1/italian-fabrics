import type { Dictionary } from "@/i18n/get-dictionary";
import { SectionHeader } from "./SectionHeader";

type Props = { dict: Dictionary };

export function Audience({ dict }: Props) {
  return (
    <section id="audience" aria-labelledby="audience-heading" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label={dict.audience.label}
          title={dict.audience.title}
          id="audience-heading"
          className="mb-4"
        />
        <p className="mx-auto mt-4 max-w-2xl text-center font-sans text-base leading-relaxed text-navy/60">
          {dict.audience.subtitle}
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {dict.audience.items.map((item, i) => (
            <article
              key={item.title}
              aria-labelledby={`audience-${i}-heading`}
              className="rounded-lg border border-gold/15 bg-cream/50 p-8 transition-colors hover:border-gold/30"
            >
              <h3 id={`audience-${i}-heading`} className="font-serif text-xl font-semibold text-navy">
                {item.title}
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-navy/60">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
