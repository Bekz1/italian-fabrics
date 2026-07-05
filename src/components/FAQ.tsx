import type { Dictionary } from "@/i18n/get-dictionary";

type Props = { dict: Dictionary };

export function FAQ({ dict }: Props) {
  return (
    <section id="faq" className="section-padding bg-champagne/20">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="section-label mb-3">{dict.faq.label}</p>
          <h2 className="section-title">{dict.faq.title}</h2>
          <div className="mx-auto mt-6 h-px w-16 bg-gold" />
        </div>

        <div className="mt-12 space-y-3">
          {dict.faq.items.map((item) => (
            <details
              key={item.question}
              className="group rounded-lg border border-gold/20 bg-cream open:border-gold/40"
            >
              <summary className="cursor-pointer list-none px-6 py-5 font-serif text-base font-semibold text-navy marker:content-none [&::-webkit-details-marker]:hidden">
                <div className="flex items-center justify-between gap-4">
                  <span>{item.question}</span>
                  <span className="shrink-0 text-gold transition-transform group-open:rotate-45">
                    +
                  </span>
                </div>
              </summary>
              <p className="border-t border-gold/10 px-6 py-4 font-sans text-sm leading-relaxed text-navy/65">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
