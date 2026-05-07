"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionLabel from "./SectionLabel";
import SectionHeadline from "./SectionHeadline";
import AnimateOnScroll from "./AnimateOnScroll";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We immerse ourselves in your business, technology landscape, and strategic objectives to build a complete picture.",
  },
  {
    number: "02",
    title: "Architect",
    description:
      "We design the target-state architecture, transformation roadmap, and governance model tailored to your constraints.",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "We execute with embedded teams, agile delivery, and rigorous program management to turn plans into production systems.",
  },
  {
    number: "04",
    title: "Sustain",
    description:
      "We establish operational models, knowledge transfer, and continuous improvement frameworks for lasting impact.",
  },
];

function StepItem({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center lg:flex-1"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.9, delay: index * 0.18, ease: [0.25, 0, 0, 1] }}
    >
      {/* Step number circle */}
      <div className="w-12 h-12 rounded-full border border-brand-blue flex items-center justify-center mb-5 relative z-10 bg-brand-black">
        <span className="font-sans text-xs text-brand-blue tracking-widest">{step.number}</span>
      </div>
      <h3 className="font-serif text-white text-xl mb-3">{step.title}</h3>
      <p className="font-sans text-brand-gray-dark text-sm leading-relaxed max-w-[200px] lg:max-w-none">
        {step.description}
      </p>
    </motion.div>
  );
}

export default function Approach() {
  return (
    <section id="approach" className="bg-brand-black noise-overlay py-36 lg:py-52">
      <div className="relative z-10 content-container">
        <AnimateOnScroll>
          <SectionLabel>Our Approach</SectionLabel>
          <SectionHeadline dark>Disciplined Methodology. Measurable Outcomes.</SectionHeadline>
        </AnimateOnScroll>

        <div className="border-t border-white/8 pt-16">
          {/* Desktop: horizontal timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connecting blue line */}
              <div
                className="absolute top-6 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-px bg-brand-blue/30"
                aria-hidden="true"
              />
              <div className="grid grid-cols-4 gap-8">
                {steps.map((step, i) => (
                  <StepItem key={step.number} step={step} index={i} />
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="lg:hidden space-y-12">
            {steps.map((step, i) => (
              <div key={step.number} className="relative pl-16">
                {/* Vertical connector */}
                {i < steps.length - 1 && (
                  <div
                    className="absolute left-6 top-12 bottom-[-3rem] w-px bg-brand-blue/30"
                    aria-hidden="true"
                  />
                )}
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full border border-brand-blue flex items-center justify-center bg-brand-black">
                  <span className="font-sans text-xs text-brand-blue tracking-widest">{step.number}</span>
                </div>
                <AnimateOnScroll delay={i * 0.1}>
                  <h3 className="font-serif text-white text-xl mb-2 pt-2">{step.title}</h3>
                  <p className="font-sans text-brand-gray-dark text-sm leading-relaxed">{step.description}</p>
                </AnimateOnScroll>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
