import type { Dictionary } from "@/i18n/get-dictionary";

type Props = { dict: Dictionary };

export function Values({ dict }: Props) {
  return (
    <section className="section-padding bg-cream">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-label mb-3">{dict.values.label}</p>
          <h2 className="section-title">{dict.values.title}</h2>
          <div className="mx-auto mt-6 h-px w-16 bg-gold" />
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {dict.values.items.map((item, i) => (
            <div key={item.title} className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold/30 bg-gold/5">
                <span className="font-serif text-2xl font-semibold text-gold-dark">
                  {["L", "Q", "H"][i]}
                </span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-navy">{item.title}</h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-navy/60">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center">
          <div className="w-48 italian-flag rounded-full" />
          <p className="mt-3 font-sans text-xs font-medium uppercase tracking-[0.3em] text-gold-dark">
            {dict.footer.madeInItaly}
          </p>
        </div>
      </div>
    </section>
  );
}
