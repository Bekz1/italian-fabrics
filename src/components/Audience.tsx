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
              className="group relative overflow-hidden rounded-lg border border-gold/15 bg-cream/50 p-8 pl-10 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5"
            >
              <span
                className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-gold/60 to-gold/10 transition-all duration-300 group-hover:w-1.5"
                aria-hidden="true"
              />
              <span className="font-serif text-sm font-semibold text-gold-dark/70" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 id={`audience-${i}-heading`} className="mt-2 font-serif text-xl font-semibold text-navy">
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
