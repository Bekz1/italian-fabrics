import Image from "next/image";
import type { Dictionary } from "@/i18n/get-dictionary";

type Props = { dict: Dictionary };

export function Hero({ dict }: Props) {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-background.png')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/85 to-cream/35" aria-hidden="true" />
      <div className="absolute inset-0 bg-fabric-texture" aria-hidden="true" />
      <div className="absolute -right-32 -top-32 h-[600px] w-[600px] rounded-full bg-gold/10 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-champagne/60 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:px-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="section-label mb-4">{dict.hero.tagline}</p>
          <h1
            id="hero-heading"
            className="font-serif text-3xl font-semibold leading-tight text-navy md:text-4xl lg:text-5xl"
          >
            {dict.seo.h1}
          </h1>
          <p className="mt-4 font-serif text-xl tracking-[0.2em] text-gold-dark md:text-2xl">
            ITALIANFABRICS.UZ
          </p>
          <div className="my-8 h-px w-24 bg-gradient-to-r from-gold to-transparent" aria-hidden="true" />
          <p className="max-w-lg font-sans text-base leading-relaxed text-navy/70 md:text-lg">
            {dict.hero.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-sm bg-gold px-8 py-3.5 font-sans text-sm font-medium uppercase tracking-wider text-white shadow-md transition-all hover:bg-gold-dark hover:shadow-lg"
            >
              {dict.hero.cta}
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-sm border border-gold/40 px-8 py-3.5 font-sans text-sm font-medium uppercase tracking-wider text-navy transition-all hover:border-gold hover:bg-gold/5"
            >
              {dict.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2">
          <figure className="relative m-0">
            <div className="absolute -inset-4 rounded-full border border-gold/20" aria-hidden="true" />
            <div className="absolute -inset-8 rounded-full border border-gold/10" aria-hidden="true" />
            <Image
              src="/logo.png"
              alt={dict.seo.logoAlt}
              width={380}
              height={380}
              className="relative rounded-full shadow-2xl"
              priority
            />
          </figure>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <svg className="h-6 w-6 text-gold/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
