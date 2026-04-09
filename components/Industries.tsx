import AnimateOnScroll from "./AnimateOnScroll";
import SectionLabel from "./SectionLabel";
import SectionHeadline from "./SectionHeadline";

const industries = [
  {
    name: "Financial Services",
    description:
      "From core banking modernization to regulatory technology, we help financial institutions transform their technology infrastructure while navigating complex compliance landscapes. Our teams have delivered transformation programs for banks, insurance carriers, asset managers, and fintech platforms.",
    capabilities: [
      "Core banking transformation",
      "Regulatory compliance (SOX, Basel, AML/KYC)",
      "Payment system modernization",
      "Risk analytics platforms",
    ],
  },
  {
    name: "Healthcare",
    description:
      "We enable healthcare organizations to improve patient outcomes through technology — from EHR integration and interoperability to telehealth platforms and clinical data analytics. We understand HIPAA, HL7/FHIR, and the regulatory environment deeply.",
    capabilities: [
      "EHR/EMR integration",
      "Telehealth platforms",
      "Clinical analytics",
      "HIPAA-compliant infrastructure",
    ],
  },
  {
    name: "Education",
    description:
      "We partner with educational institutions and EdTech organizations to modernize learning platforms, improve operational efficiency, and create data-driven student experiences at scale.",
    capabilities: [
      "LMS modernization",
      "Student information systems",
      "Data analytics for outcomes",
      "Digital campus infrastructure",
    ],
  },
];

export default function Industries() {
  return (
    <section id="industries" className="bg-white py-28 lg:py-40">
      <div className="content-container">
        <AnimateOnScroll>
          <SectionLabel>Industries We Serve</SectionLabel>
          <SectionHeadline dark={false}>
            Deep Domain Expertise Where It Matters Most
          </SectionHeadline>
        </AnimateOnScroll>

        <div className="border-t border-black/8 pt-12 space-y-16 lg:space-y-20">
          {industries.map((industry, i) => (
            <AnimateOnScroll key={industry.name} delay={0.1}>
              <div className="lg:grid lg:grid-cols-5 lg:gap-16 items-start">
                {/* Industry name */}
                <div className="lg:col-span-2 mb-6 lg:mb-0">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-6 h-px bg-brand-blue inline-block" />
                    <span className="font-sans text-xs text-brand-blue tracking-[0.15em] uppercase">
                      0{i + 1}
                    </span>
                  </div>
                  <h3
                    className="font-serif text-brand-black leading-tight"
                    style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
                  >
                    {industry.name}
                  </h3>
                </div>

                {/* Description + capabilities */}
                <div className="lg:col-span-3">
                  <p className="font-sans text-brand-gray-light leading-relaxed mb-6">
                    {industry.description}
                  </p>
                  <ul className="space-y-2">
                    {industry.capabilities.map((cap) => (
                      <li key={cap} className="flex items-center gap-3 font-sans text-sm text-brand-gray-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.1}>
          <p className="mt-16 font-sans text-sm text-brand-gray-light border-t border-black/8 pt-8">
            We also serve clients in government, retail, energy, logistics, and other sectors.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
