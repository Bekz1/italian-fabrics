import type { Dictionary } from "@/i18n/get-dictionary";
import { SectionHeader } from "./SectionHeader";

type Props = { dict: Dictionary };

export function Values({ dict }: Props) {
  return (
    <section id="values" aria-labelledby="values-heading" className="section-padding bg-cream">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label={dict.values.label}
          title={dict.values.title}
          id="values-heading"
          className="mb-16"
        />

        <div className="grid gap-8 md:grid-cols-3">
          {dict.values.items.map((item, i) => (
            <article key={item.title} aria-labelledby={`value-${i}-heading`} className="text-center">
              <div
                className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold/30 bg-gold/5"
                aria-hidden="true"
              >
                <span className="font-serif text-2xl font-semibold text-gold-dark">
                  {["L", "Q", "H"][i]}
                </span>
              </div>
              <h3 id={`value-${i}-heading`} className="font-serif text-xl font-semibold text-navy">
                {item.title}
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-navy/60">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center">
          <div className="w-48 italian-flag rounded-full" aria-hidden="true" />
          <p className="mt-3 font-sans text-xs font-medium uppercase tracking-[0.3em] text-gold-dark">
            {dict.footer.madeInItaly}
          </p>
        </div>
      </div>
    </section>
  );
}
