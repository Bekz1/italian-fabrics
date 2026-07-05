import type { Dictionary } from "@/i18n/get-dictionary";

type Props = { dict: Dictionary };

export function Audience({ dict }: Props) {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-label mb-3">{dict.audience.label}</p>
          <h2 className="section-title">{dict.audience.title}</h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-navy/60">
            {dict.audience.subtitle}
          </p>
          <div className="mx-auto mt-6 h-px w-16 bg-gold" />
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {dict.audience.items.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-gold/15 bg-cream/50 p-8 transition-colors hover:border-gold/30"
            >
              <h3 className="font-serif text-xl font-semibold text-navy">{item.title}</h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-navy/60">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
