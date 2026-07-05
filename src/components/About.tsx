import type { Dictionary } from "@/i18n/get-dictionary";

type Props = { dict: Dictionary };

export function About({ dict }: Props) {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="section-label mb-3">{dict.about.label}</p>
          <h2 className="section-title">{dict.about.title}</h2>
          <div className="mx-auto my-6 h-px w-16 bg-gold" />
        </div>
        <div className="space-y-5 font-sans text-base leading-relaxed text-navy/70 md:text-lg">
          <p>{dict.about.p1}</p>
          <p>{dict.about.p2}</p>
          <p>{dict.about.p3}</p>
        </div>
      </div>
    </section>
  );
}
