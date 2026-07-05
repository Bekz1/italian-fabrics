import Image from "next/image";
import type { Dictionary } from "@/i18n/get-dictionary";

type Props = { dict: Dictionary };

export function Footer({ dict }: Props) {
  return (
    <footer className="border-t border-gold/20 bg-navy py-12 text-cream/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 md:px-12">
        <Image
          src="/logo.png"
          alt="ItalianFabrics.uz"
          width={64}
          height={64}
          className="rounded-full opacity-80"
        />
        <p className="font-serif text-lg tracking-wide text-gold-light">
          ITALIANFABRICS.UZ
        </p>
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-cream/40">
          {dict.footer.tagline}
        </p>
        <div className="w-32 italian-flag rounded-full" />
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold/60">
          {dict.footer.madeInItaly}
        </p>
        <p className="font-sans text-xs text-cream/30">
          &copy; {new Date().getFullYear()} ItalianFabrics.uz — {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
}
