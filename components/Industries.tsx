import AnimateOnScroll from "./AnimateOnScroll";
import SectionLabel from "./SectionLabel";
import SectionHeadline from "./SectionHeadline";

const industries = [
  {
    name: "Government & Public Sector",
    description:
      "We advise governments and public institutions on AI strategy, digital transformation, and the governance frameworks that build public trust. Our work spans national strategy development, regulatory design, and the operating models that turn policy ambition into delivery.",
    capabilities: [
      "National AI & digital strategy",
      "Governance & regulatory frameworks",
      "Public-sector innovation programs",
      "Cross-jurisdictional advisory",
    ],
  },
  {
    name: "Financial Services",
    description:
      "We help financial institutions navigate the strategic and regulatory shifts reshaping the industry — from AI adoption and risk governance to operating-model redesign. Our teams advise banks, insurers, asset managers, and fintech platforms on the choices that matter most.",
    capabilities: [
      "AI & data governance",
      "Regulatory strategy (SOX, Basel, AML/KYC)",
      "Operating-model transformation",
      "Innovation & growth advisory",
    ],
  },
  {
    name: "Healthcare",
    description:
      "We partner with healthcare leaders on the strategy and governance choices behind better outcomes — from AI adoption and data ethics to digital service design. Our focus is on what gets decided in the boardroom, not what gets built in the basement.",
    capabilities: [
      "Digital health strategy",
      "AI ethics & data governance",
      "Patient-experience transformation",
      "Innovation portfolio advisory",
    ],
  },
  {
    name: "Education",
    description:
      "We work with educational institutions and EdTech leaders on the strategy, policy, and innovation agendas that prepare learners for an AI-shaped economy — from curriculum and workforce design to institutional transformation.",
    capabilities: [
      "AI in education strategy",
      "Workforce & curriculum design",
      "Institutional transformation",
      "Policy & innovation advisory",
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
            We also advise clients across insurance, energy, retail, and other sectors where strategy, governance, and innovation intersect.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
