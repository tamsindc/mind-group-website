"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import IndustryTicker from "./IndustryTicker";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.0, delay, ease: [0.25, 0, 0, 1] as const },
});

const ROTATING_WORDS = [
  "Innovation",
  "Judgement",
  "Translation",
  "Equity",
] as const;

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % ROTATING_WORDS.length);
    }, 3200);
    return () => clearInterval(id);
  }, []);

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

      {/* Editorial typographic composition — sculptural ampersand */}
      <motion.div
        aria-hidden="true"
        className="hidden lg:flex absolute inset-y-0 right-0 w-[55%] xl:w-[50%] items-center justify-end pointer-events-none overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.4, delay: 0.4, ease: "easeOut" }}
      >
        <span
          className="font-serif text-white/[0.06] leading-[0.78] italic select-none -mr-20 xl:-mr-28"
          style={{ fontSize: "clamp(28rem, 50vw, 60rem)" }}
        >
          &amp;
        </span>
      </motion.div>

      {/* Single elegant gold accent — horizontal hairline with bullet (right edge) */}
      <motion.div
        aria-hidden="true"
        className="hidden lg:flex absolute top-1/2 right-0 -translate-y-1/2 z-10 items-center pointer-events-none"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.6, delay: 1.2, ease: "easeOut" }}
      >
        <span className="h-px w-40 bg-gradient-to-r from-transparent to-brand-blue" />
        <span className="h-1.5 w-1.5 rounded-full bg-brand-blue ml-3 mr-8" />
      </motion.div>

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
              and{" "}
              <span className="relative inline-block align-baseline">
                {/* invisible sentinel reserves the width of the longest word */}
                <span aria-hidden="true" className="invisible italic">
                  Translation
                </span>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={ROTATING_WORDS[wordIndex]}
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -28 }}
                    transition={{ duration: 0.55, ease: [0.25, 0, 0, 1] }}
                    className="absolute inset-0 italic text-brand-blue"
                  >
                    {ROTATING_WORDS[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              .
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
