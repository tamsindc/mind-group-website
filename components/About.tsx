import AnimateOnScroll from "./AnimateOnScroll";
import SectionLabel from "./SectionLabel";
import SectionHeadline from "./SectionHeadline";

const stats = [
  { number: "150+", label: "Engagements Delivered" },
  { number: "40+", label: "Enterprise Clients" },
  { number: "8+", label: "Years of Advisory" },
  { number: "3", label: "Core Industry Verticals" },
];

export default function About() {
  return (
    <section id="about" className="bg-brand-cream py-28 lg:py-40">
      <div className="content-container">
        <div className="lg:grid lg:grid-cols-5 lg:gap-20">
          {/* Left: text (3 cols / 60%) */}
          <div className="lg:col-span-3 mb-16 lg:mb-0">
            <AnimateOnScroll>
              <SectionLabel>About Mind Group</SectionLabel>
              <SectionHeadline dark={false}>
                Strategic Advisors. Technical Builders.
              </SectionHeadline>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <div className="border-t border-black/8 pt-8 space-y-6">
                <p className="font-sans text-brand-gray-light leading-relaxed">
                  Mind Group LLC is a management and technology consultancy headquartered
                  in New York City. We help organizations navigate complex digital
                  transformations — from legacy modernization and cloud migration to AI
                  integration and enterprise architecture redesign.
                </p>
                <p className="font-sans text-brand-gray-light leading-relaxed">
                  Founded on the principle that technology strategy must be inseparable
                  from business strategy, we bring deep domain expertise to every
                  engagement. Our teams combine strategic rigor with hands-on delivery,
                  ensuring our clients don&apos;t just plan for change — they execute it.
                </p>
                <p className="font-sans text-brand-gray-light leading-relaxed">
                  We serve clients across financial services, healthcare, education, and
                  the broader enterprise landscape, with a particular depth of experience
                  in highly regulated environments where the stakes of transformation are
                  highest.
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right: stats (2 cols / 40%) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {stats.map((stat, i) => (
              <AnimateOnScroll key={stat.label} delay={i * 0.1}>
                <div className="border-l-2 border-brand-blue pl-6 py-2">
                  <p
                    className="font-serif text-brand-black leading-none mb-1"
                    style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)" }}
                  >
                    {stat.number}
                  </p>
                  <p className="font-sans text-sm text-brand-gray-light tracking-wide uppercase">
                    {stat.label}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
