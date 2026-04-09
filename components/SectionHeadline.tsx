interface SectionHeadlineProps {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}

export default function SectionHeadline({
  children,
  dark = false,
  className = "",
}: SectionHeadlineProps) {
  return (
    <h2
      className={`font-serif leading-tight mb-8 ${
        dark ? "text-white" : "text-brand-black"
      } ${className}`}
      style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
    >
      {children}
    </h2>
  );
}
