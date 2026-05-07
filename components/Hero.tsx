"use client";

import { motion } from "framer-motion";
import IndustryTicker from "./IndustryTicker";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.0, delay, ease: [0.25, 0, 0, 1] as const },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-brand-black noise-overlay flex flex-col overflow-hidden"
    >
      {/* Decorative topographic / grid pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,169,97,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,169,97,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(201,169,97,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Abstract architectural composition (right side hero artwork) */}
      <motion.svg
        aria-hidden="true"
        viewBox="0 0 600 800"
        preserveAspectRatio="xMaxYMid slice"
        className="hidden lg:block absolute right-0 top-0 h-full w-[55%] xl:w-[50%] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.4, delay: 0.6, ease: "easeOut" }}
      >
        {/* Concentric arcs sweeping from top-right corner */}
        <g stroke="#C9A961" fill="none">
          <circle cx="600" cy="0" r="200" strokeOpacity="0.32" strokeWidth="1" />
          <circle cx="600" cy="0" r="320" strokeOpacity="0.22" strokeWidth="1" />
          <circle cx="600" cy="0" r="450" strokeOpacity="0.14" strokeWidth="1" />
          <circle cx="600" cy="0" r="600" strokeOpacity="0.09" strokeWidth="1" />
          <circle cx="600" cy="0" r="780" strokeOpacity="0.05" strokeWidth="1" />
        </g>

        {/* Vertical accent line on far right */}
        <line x1="595" y1="120" x2="595" y2="680" stroke="#C9A961" strokeOpacity="0.35" strokeWidth="1" />

        {/* Constellation of nodes */}
        <g fill="#ffffff">
          <circle cx="350" cy="280" r="2" opacity="0.5" />
          <circle cx="430" cy="200" r="1.5" opacity="0.4" />
          <circle cx="500" cy="380" r="1.5" opacity="0.35" />
          <circle cx="280" cy="430" r="1.5" opacity="0.35" />
          <circle cx="380" cy="520" r="1" opacity="0.3" />
          <circle cx="450" cy="610" r="1.5" opacity="0.3" />
          <circle cx="220" cy="560" r="1" opacity="0.25" />
          <circle cx="540" cy="260" r="1" opacity="0.25" />
          <circle cx="190" cy="320" r="1" opacity="0.2" />
        </g>

        {/* Delicate connecting lines */}
        <g stroke="#ffffff" strokeOpacity="0.10" strokeWidth="0.5" fill="none">
          <line x1="350" y1="280" x2="430" y2="200" />
          <line x1="350" y1="280" x2="430" y2="350" />
          <line x1="430" y1="350" x2="500" y2="380" />
          <line x1="430" y1="350" x2="380" y2="520" />
          <line x1="280" y1="430" x2="380" y2="520" />
          <line x1="380" y1="520" x2="450" y2="610" />
        </g>

        {/* Focal accent node with slow pulse */}
        <g>
          <circle cx="430" cy="350" r="4" fill="#C9A961" />
          <circle cx="430" cy="350" r="10" fill="none" stroke="#C9A961" strokeWidth="0.6" strokeOpacity="0.7">
            <animate attributeName="r" values="10;32;10" dur="4.5s" repeatCount="indefinite" />
            <animate attributeName="strokeOpacity" values="0.7;0;0.7" dur="4.5s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Tiny rotated typographic mark (top-right) */}
        <g transform="translate(560, 60)">
          <line x1="0" y1="0" x2="0" y2="36" stroke="#C9A961" strokeOpacity="0.5" strokeWidth="1" />
        </g>
      </motion.svg>

      {/* Editorial location mark (top right corner) */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute top-28 right-8 z-10 text-right"
      >
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-white/40">
          New York &middot; 40.71&deg; N
        </p>
      </div>

      {/* Main content */}
      <div className="relative z-10 content-container flex-1 flex flex-col justify-center pt-32 pb-16">
        <div className="max-w-4xl">
          {/* Eyebrow label */}
          <motion.p
            className="font-sans text-xs tracking-[0.2em] uppercase text-brand-gray-dark mb-8 flex items-center gap-3"
            {...fadeUp(0.1)}
          >
            <span className="w-8 h-px bg-brand-blue inline-block" />
            Formed in New York &middot; Global Strategic Advisory
          </motion.p>

          {/* Headline */}
          <h1 className="font-serif text-white leading-[1.05] mb-8">
            <motion.span
              className="block"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
              {...fadeUp(0.25)}
            >
              Strategy, Governance
            </motion.span>
            <motion.span
              className="block text-white/80"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
              {...fadeUp(0.42)}
            >
              and Innovation.
            </motion.span>
          </h1>

          {/* Supporting paragraph */}
          <motion.p
            className="font-sans text-brand-gray-dark text-lg leading-relaxed mb-12 max-w-2xl"
            {...fadeUp(0.58)}
          >
            Mind Group is a New York&ndash;based consultancy advising leaders in
            government, financial services, healthcare, and education on the strategy,
            governance, and innovation choices that shape lasting digital transformation.
          </motion.p>

          {/* CTAs */}
          <motion.div className="flex flex-wrap gap-4 mb-16" {...fadeUp(0.72)}>
            <a
              href="#services"
              className="font-sans text-sm px-7 py-3.5 bg-brand-blue text-white rounded hover:bg-[#A88B4D] transition-all duration-300 tracking-wide focus-visible:rounded"
            >
              Explore Our Services
            </a>
            <a
              href="#contact"
              className="font-sans text-sm px-7 py-3.5 border border-white/40 text-white rounded hover:border-white hover:bg-white/5 transition-all duration-300 tracking-wide focus-visible:rounded"
            >
              Contact Us
            </a>
          </motion.div>

          {/* Three-pillar values strip */}
          <motion.div
            className="grid grid-cols-3 gap-px bg-white/10 max-w-3xl border-y border-white/10"
            {...fadeUp(0.88)}
          >
            {[
              { label: "Strategy", sub: "Clarity at the top" },
              { label: "Governance", sub: "Trust by design" },
              { label: "Innovation", sub: "Built to deliver" },
            ].map((pillar) => (
              <div key={pillar.label} className="bg-brand-black px-5 py-5">
                <p className="font-serif text-white text-lg leading-tight">
                  {pillar.label}
                </p>
                <p className="font-sans text-[11px] tracking-[0.15em] uppercase text-brand-gray-dark mt-2">
                  {pillar.sub}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Ticker at bottom */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.0 }}
      >
        <IndustryTicker />
      </motion.div>
    </section>
  );
}
