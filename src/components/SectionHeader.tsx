type Props = {
  label: string;
  title: string;
  id?: string;
  dark?: boolean;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  label,
  title,
  id,
  dark,
  align = "center",
  className = "",
}: Props) {
  const alignClass = align === "left" ? "text-left" : "text-center";
  const dividerClass = align === "left" ? "mr-auto" : "mx-auto";

  return (
    <header className={`${alignClass} ${className}`}>
      <p className={`section-label mb-3 ${dark ? "text-gold-light" : ""}`}>{label}</p>
      <h2
        id={id}
        className={
          dark
            ? "font-serif text-3xl font-semibold text-cream md:text-4xl lg:text-5xl"
            : "section-title"
        }
      >
        {title}
      </h2>
      <div className={`mt-6 h-px w-16 bg-gold ${dividerClass}`} aria-hidden="true" />
    </header>
  );
}
