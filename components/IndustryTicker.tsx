const ITEMS = [
  "Financial Services",
  "Healthcare",
  "Education",
  "Insurance",
  "Government",
  "Retail",
  "Energy",
  "Logistics",
];

export default function IndustryTicker() {
  const repeated = [...ITEMS, ...ITEMS]; // duplicate for seamless loop

  return (
    <div className="w-full overflow-hidden border-t border-white/10 py-5">
      <div className="ticker-track">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="flex items-center font-sans text-xs tracking-[0.15em] uppercase text-white/30 whitespace-nowrap"
          >
            {item}
            <span className="mx-6 w-1 h-1 rounded-full bg-brand-blue/40 inline-block" />
          </span>
        ))}
      </div>
    </div>
  );
}
