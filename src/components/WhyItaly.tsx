import type { Dictionary } from "@/i18n/get-dictionary";

type Props = { dict: Dictionary };

export function WhyItaly({ dict }: Props) {
  return (
    <section className="section-padding bg-champagne/30">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="section-label mb-3">{dict.whyItaly.label}</p>
            <h2 className="section-title">{dict.whyItaly.title}</h2>
            <div className="my-6 h-px w-16 bg-gold" />
            <div className="space-y-4 font-sans text-base leading-relaxed text-navy/70">
              <p>{dict.whyItaly.p1}</p>
              <p>{dict.whyItaly.p2}</p>
            </div>
          </div>

          <ul className="space-y-4">
            {dict.whyItaly.points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-4 rounded-lg border border-gold/20 bg-cream p-5"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/20">
                  <svg className="h-3 w-3 text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="font-sans text-sm text-navy/80">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
