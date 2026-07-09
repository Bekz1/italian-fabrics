type LogoProps = {
  className?: string;
};

const baseClass = "brand-marquee-logo";

export function GucciLogo({ className }: LogoProps) {
  return (
  // eslint-disable-next-line @next/next/no-img-element
    <img src="/brands/gucci.svg" alt="Gucci" className={`${baseClass} h-12 md:h-16 ${className ?? ""}`} />
  );
}

export function ArmaniLogo({ className }: LogoProps) {
  return (
  // eslint-disable-next-line @next/next/no-img-element
    <img src="/brands/armani.svg" alt="Armani" className={`${baseClass} h-7 md:h-9 ${className ?? ""}`} />
  );
}

export function ChanelLogo({ className }: LogoProps) {
  return (
  // eslint-disable-next-line @next/next/no-img-element
    <img src="/brands/chanel.svg" alt="Chanel" className={`${baseClass} h-12 md:h-16 ${className ?? ""}`} />
  );
}

export function DiorLogo({ className }: LogoProps) {
  return (
  // eslint-disable-next-line @next/next/no-img-element
    <img src="/brands/dior.svg" alt="Dior" className={`${baseClass} h-9 md:h-11 ${className ?? ""}`} />
  );
}

export const BRAND_LOGOS = [
  { id: "gucci", Logo: GucciLogo, name: "Gucci" },
  { id: "armani", Logo: ArmaniLogo, name: "Armani" },
  { id: "chanel", Logo: ChanelLogo, name: "Chanel" },
  { id: "dior", Logo: DiorLogo, name: "Dior" },
] as const;
