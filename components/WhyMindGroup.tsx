import AnimateOnScroll from "./AnimateOnScroll";
import SectionLabel from "./SectionLabel";
import SectionHeadline from "./SectionHeadline";

const differentiators = [
  {
    title: "Strategic Depth, Technical Precision",
    description:
      "We don't hand you a strategy deck and walk away. Our consultants architect AND build — bridging the gap between boardroom vision and production-grade systems.",
  },
  {
    title: "Sector-Specific Expertise",
    description:
      "We speak the language of regulated industries. Our teams understand the compliance, operational, and technology nuances of financial services, healthcare, and education.",
  },
  {
    title: "New York Roots, Enterprise Reach",
    description:
      "Headquartered in NYC, we're positioned at the center of global finance, healthcare innovation, and educational transformation. We bring local depth with enterprise-scale capability.",
  },
  {
    title: "Outcome-Obsessed Delivery",
    description:
      "Every engagement is measured by impact — cost reduction, revenue enablement, operational efficiency, and time-to-value. We are accountable to your outcomes, not our hours.",
  },
];

export default function WhyMindGroup() {
  return (
    <section id="why" className="bg-white py-28 lg:py-40">
      <div className="content-container">
        <AnimateOnScroll>
          <SectionLabel>Why Mind Group</SectionLabel>
          <SectionHeadline dark={false}>What Sets Us Apart</SectionHeadline>
        </AnimateOnScroll>

        <div className="border-t border-black/8 pt-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {differentiators.map((item, i) => (
            <AnimateOnScroll key={item.title} delay={i * 0.1}>
              <div>
                <div className="w-8 h-px bg-brand-blue mb-5" />
                <h3 className="font-sans font-semibold text-brand-black text-lg mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="font-sans text-brand-gray-light text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
