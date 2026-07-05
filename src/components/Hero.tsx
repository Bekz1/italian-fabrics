import Image from "next/image";
import type { Dictionary } from "@/i18n/get-dictionary";

type Props = { dict: Dictionary };

export function Hero({ dict }: Props) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-silk-gradient bg-fabric-texture" />
      <div className="absolute -right-32 -top-32 h-[600px] w-[600px] rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-champagne/60 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:px-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="section-label mb-4">{dict.hero.tagline}</p>
          <h1 className="font-serif text-4xl font-semibold leading-[1.1] text-navy md:text-5xl lg:text-6xl">
            ITALIAN
            <span className="block text-gold-dark">FABRICS</span>
            <span className="block text-2xl font-normal tracking-[0.3em] text-navy/60 md:text-3xl">
              .UZ
            </span>
          </h1>
          <div className="my-8 h-px w-24 bg-gradient-to-r from-gold to-transparent" />
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
          <div className="relative">
            <div className="absolute -inset-4 rounded-full border border-gold/20" />
            <div className="absolute -inset-8 rounded-full border border-gold/10" />
            <Image
              src="/logo.png"
              alt="ItalianFabrics.uz Logo"
              width={380}
              height={380}
              className="relative rounded-full shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="h-6 w-6 text-gold/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
