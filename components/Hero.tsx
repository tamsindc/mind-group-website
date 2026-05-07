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
            linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)
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
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(37,99,235,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Editorial side-mark (right edge, vertical) */}
      <div
        aria-hidden="true"
        className="hidden lg:flex absolute top-1/2 right-8 -translate-y-1/2 z-10 items-center gap-3"
        style={{ writingMode: "vertical-rl" }}
      >
        <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-white/30">
          Mind Group &middot; New York
        </span>
        <span className="w-px h-16 bg-white/15 inline-block" />
      </div>

      {/* Main content */}
      <div className="relative z-10 content-container flex-1 flex flex-col justify-center pt-32 pb-16">
        <div className="max-w-4xl">
          {/* Eyebrow label */}
          <motion.p
            className="font-sans text-xs tracking-[0.2em] uppercase text-brand-gray-dark mb-8"
            {...fadeUp(0.1)}
          >
            New York &middot; Strategic Advisory
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
              className="font-sans text-sm px-7 py-3.5 bg-brand-blue text-white rounded hover:bg-blue-700 transition-all duration-300 tracking-wide focus-visible:rounded"
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
