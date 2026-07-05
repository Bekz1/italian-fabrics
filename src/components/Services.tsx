import type { Dictionary } from "@/i18n/get-dictionary";

type Props = { dict: Dictionary };

export function Services({ dict }: Props) {
  return (
    <section id="services" className="section-padding relative overflow-hidden bg-navy text-cream">
      <div className="absolute inset-0 bg-fabric-texture opacity-30" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-label mb-3 text-gold-light">{dict.services.label}</p>
          <h2 className="font-serif text-3xl font-semibold text-cream md:text-4xl lg:text-5xl">
            {dict.services.title}
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-cream/60">
            {dict.services.subtitle}
          </p>
          <div className="mx-auto mt-6 h-px w-16 bg-gold" />
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {dict.services.items.map((item, i) => (
            <div
              key={item.title}
              className="rounded-lg border border-gold/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 font-serif text-sm font-semibold text-gold-light">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-serif text-xl font-semibold text-gold-light">
                {item.title}
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-cream/60">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
