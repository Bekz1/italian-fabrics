import type { Dictionary } from "@/i18n/get-dictionary";
import { SectionHeader } from "./SectionHeader";

type Props = { dict: Dictionary };

export function Services({ dict }: Props) {
  return (
    <section id="services" aria-labelledby="services-heading" className="section-padding relative overflow-hidden bg-navy text-cream">
      <div className="absolute inset-0 bg-fabric-texture opacity-30" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          label={dict.services.label}
          title={dict.services.title}
          id="services-heading"
          dark
          className="mb-4"
        />
        <p className="mx-auto mt-4 max-w-2xl text-center font-sans text-base leading-relaxed text-cream/60">
          {dict.services.subtitle}
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {dict.services.items.map((item, i) => (
            <article
              key={item.title}
              aria-labelledby={`service-${i}-heading`}
              className="rounded-lg border border-gold/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 font-serif text-sm font-semibold text-gold-light"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                id={`service-${i}-heading`}
                className="mt-4 font-serif text-xl font-semibold text-gold-light"
              >
                {item.title}
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-cream/60">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
