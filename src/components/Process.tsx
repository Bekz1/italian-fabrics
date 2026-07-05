import type { Dictionary } from "@/i18n/get-dictionary";
import { SectionHeader } from "./SectionHeader";

type Props = { dict: Dictionary };

export function Process({ dict }: Props) {
  return (
    <section id="process" aria-labelledby="process-heading" className="section-padding bg-cream">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label={dict.process.label}
          title={dict.process.title}
          id="process-heading"
          className="mb-4"
        />
        <p className="mx-auto mt-4 max-w-2xl text-center font-sans text-base leading-relaxed text-navy/60">
          {dict.process.subtitle}
        </p>

        <ol className="mt-16 grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.process.steps.map((step, i) => (
            <li key={step.title}>
              <article
                aria-labelledby={`process-${i}-heading`}
                className="h-full rounded-lg border border-gold/20 bg-white p-6"
              >
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-gold/5 font-serif text-sm font-semibold text-gold-dark"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 id={`process-${i}-heading`} className="mt-4 font-serif text-lg font-semibold text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-navy/60">
                  {step.description}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
