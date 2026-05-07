"use client";

import { motion } from "framer-motion";

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="bg-brand-black noise-overlay py-32 lg:py-48 relative overflow-hidden"
    >
      {/* subtle gold accent line, top center */}
      <div
        aria-hidden="true"
        className="absolute top-24 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-brand-blue to-transparent"
      />

      {/* faint serif ampersand watermark */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute -bottom-32 -left-12 font-serif italic text-white/[0.025] leading-none select-none pointer-events-none"
        style={{ fontSize: "44rem" }}
      >
        &amp;
      </div>

      <div className="relative z-10 content-container">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="font-sans text-xs tracking-[0.3em] uppercase text-brand-blue text-center mb-12 lg:mb-16 flex items-center justify-center gap-4"
        >
          <span className="w-8 h-px bg-brand-blue inline-block" />
          Our Position
          <span className="w-8 h-px bg-brand-blue inline-block" />
        </motion.p>

        {/* Big italic question */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.25, 0, 0, 1] }}
          className="font-serif text-white italic text-center leading-[0.95] mb-20 lg:mb-28"
          style={{ fontSize: "clamp(3.4rem, 9vw, 8rem)" }}
        >
          What do we want
          <br />
          more of?
        </motion.h2>

        {/* Asymmetric body — pull quote left, paragraphs right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 1.0, delay: 0.3, ease: "easeOut" }}
          className="lg:grid lg:grid-cols-12 lg:gap-16 max-w-6xl mx-auto"
        >
          {/* Pull quote */}
          <div className="lg:col-span-5">
            <p
              className="font-serif italic text-brand-blue leading-[1.15]"
              style={{ fontSize: "clamp(1.5rem, 2.4vw, 2rem)" }}
            >
              It is the question every leader is trying to answer in the age of
              AI &mdash; usually without realising it.
            </p>
          </div>

          {/* Body paragraphs */}
          <div className="lg:col-span-7 mt-10 lg:mt-2 space-y-6 font-sans text-brand-gray-dark text-base lg:text-lg leading-relaxed">
            <p>
              Every decision about what to deploy, what to govern, and what to
              restrain is, beneath the technical language, a question about what
              we value &mdash; and what we are prepared to trade.
            </p>
            <p>
              The pace of AI adoption is now outrunning the institutions meant
              to govern it. The widest gap is in the public sector and in the
              smaller jurisdictions &mdash; places where capacity is thin, the
              stakes are real, and the consequences of getting it wrong are felt
              first.
            </p>
            <p className="text-white">
              Mind Group works in that gap. We advise governments and
              enterprises facing decisions where the speed of change has
              outpaced the systems meant to manage it &mdash; bringing the
              perspective of small jurisdictions to global problems, the rigour
              of governance to fast-moving technology, and a quiet conviction
              that the purpose of AI is not to replace human judgement, but to
              make it count for more.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
