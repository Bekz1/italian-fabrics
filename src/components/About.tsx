import type { Dictionary } from "@/i18n/get-dictionary";
import { SectionHeader } from "./SectionHeader";

type Props = { dict: Dictionary };

export function About({ dict }: Props) {
  return (
    <section id="about" aria-labelledby="about-heading" className="section-padding bg-white">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          label={dict.about.label}
          title={dict.about.title}
          id="about-heading"
          className="mb-6"
        />
        <div className="space-y-5 font-sans text-base leading-relaxed text-navy/70 md:text-lg">
          <p>{dict.about.p1}</p>
          <p>{dict.about.p2}</p>
          <p>{dict.about.p3}</p>
        </div>
      </div>
    </section>
  );
}
