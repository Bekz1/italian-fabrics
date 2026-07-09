import type { Dictionary } from "@/i18n/get-dictionary";
import { BRAND_LOGOS } from "./brands/BrandLogos";
import { SectionHeader } from "./SectionHeader";

type Props = { dict: Dictionary };

export function Partners({ dict }: Props) {
  // One "half" repeated enough to exceed wide viewports, then duplicated so the
  // -50% translate loops seamlessly across the full screen width.
  const half = [...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS];
  const items = [...half, ...half];

  return (
    <section
      id="partners"
      aria-labelledby="partners-heading"
      className="overflow-hidden border-y border-gold/15 bg-navy py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        <SectionHeader
          label={dict.partners.label}
          title={dict.partners.title}
          id="partners-heading"
          dark
          className="mb-5"
        />
        <p className="mx-auto max-w-2xl text-center font-sans text-base leading-relaxed text-cream/70 md:text-lg">
          {dict.partners.subtitle}
        </p>
      </div>

      <div className="relative mt-12 w-full overflow-hidden">
        <p className="sr-only">{dict.partners.marqueeLabel}</p>
        <div className="partners-marquee flex w-max items-center gap-16 md:gap-24">
          {items.map(({ id, Logo, name }, index) => (
            <div
              key={`${id}-${index}`}
              className="flex shrink-0 items-center justify-center px-2"
              aria-hidden={index >= BRAND_LOGOS.length}
            >
              <Logo />
              <span className="sr-only">{name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        <p className="mx-auto mt-12 max-w-3xl text-center font-sans text-xs leading-relaxed text-cream/40">
          {dict.partners.disclaimer}
        </p>
      </div>
    </section>
  );
}
