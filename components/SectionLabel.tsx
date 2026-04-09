interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
}

export default function SectionLabel({ children, light = false }: SectionLabelProps) {
  return (
    <p
      className={`text-xs font-sans font-medium tracking-[0.15em] uppercase mb-4 ${
        light ? "text-brand-blue" : "text-brand-blue"
      }`}
    >
      {children}
    </p>
  );
}
