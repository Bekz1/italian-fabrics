import type { Dictionary } from "@/i18n/get-dictionary";
import { SectionHeader } from "./SectionHeader";

type Props = { dict: Dictionary };

export function WhyItaly({ dict }: Props) {
  return (
    <section id="why-italy" aria-labelledby="why-italy-heading" className="section-padding bg-champagne/30">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeader
              label={dict.whyItaly.label}
              title={dict.whyItaly.title}
              id="why-italy-heading"
              align="left"
              className="mb-6"
            />
            <div className="space-y-4 font-sans text-base leading-relaxed text-navy/70">
              <p>{dict.whyItaly.p1}</p>
              <p>{dict.whyItaly.p2}</p>
            </div>
          </div>

          <div>
            <h3 className="sr-only">{dict.whyItaly.pointsHeading}</h3>
            <ul className="space-y-4">
              {dict.whyItaly.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-4 rounded-lg border border-gold/20 bg-cream p-5 transition-all duration-300 hover:border-gold/40 hover:shadow-md hover:shadow-gold/5"
                >
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/20"
                    aria-hidden="true"
                  >
                    <svg className="h-3 w-3 text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="font-sans text-sm font-medium text-navy/80">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
