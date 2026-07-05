import type { Dictionary } from "@/i18n/get-dictionary";

type Props = { dict: Dictionary };

export function Process({ dict }: Props) {
  return (
    <section className="section-padding bg-cream">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-label mb-3">{dict.process.label}</p>
          <h2 className="section-title">{dict.process.title}</h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-navy/60">
            {dict.process.subtitle}
          </p>
          <div className="mx-auto mt-6 h-px w-16 bg-gold" />
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.process.steps.map((step, i) => (
            <div key={step.title} className="relative rounded-lg border border-gold/20 bg-white p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-gold/5 font-serif text-sm font-semibold text-gold-dark">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-serif text-lg font-semibold text-navy">{step.title}</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-navy/60">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
