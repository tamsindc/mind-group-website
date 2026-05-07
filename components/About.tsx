import AnimateOnScroll from "./AnimateOnScroll";
import SectionLabel from "./SectionLabel";
import SectionHeadline from "./SectionHeadline";

const principles = [
  {
    label: "Considered",
    description:
      "Engagements led personally, scoped narrowly, and judged by the quality of the decisions they support.",
  },
  {
    label: "Translational",
    description:
      "We sit between engineers and executives, regulators and the regulated — with fluency in both.",
  },
  {
    label: "Governed",
    description:
      "We work in the gap between what institutions can do with AI and what they can govern. It is the widest, hardest gap.",
  },
  {
    label: "From the edge",
    description:
      "Our perspective comes from advising small jurisdictions, where the consequences of AI are felt first and the appetite for honest counsel is highest.",
  },
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
                An advisory firm with a point of view.
              </SectionHeadline>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <div className="border-t border-black/8 pt-8 space-y-6">
                <p className="font-sans text-brand-gray-light leading-relaxed">
                  Mind Group is a New York&ndash;based advisory firm working with
                  leaders in government and the enterprise on the strategy, governance,
                  and innovation choices that AI is now forcing them to make.
                </p>
                <p className="font-sans text-brand-gray-light leading-relaxed">
                  We are deliberately small. Engagements are led personally, kept
                  narrow in scope, and judged by the quality of the decisions they
                  support &mdash; not the size of the deck. Our perspective is informed
                  by hands-on experience advising small jurisdictions, where the
                  consequences of getting AI wrong are felt first and the appetite for
                  honest counsel is highest.
                </p>
                <p className="font-sans text-brand-gray-light leading-relaxed">
                  We work where strategic ambition collides with the systems meant to
                  govern it.
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right: principles (2 cols / 40%) */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {principles.map((p, i) => (
              <AnimateOnScroll key={p.label} delay={i * 0.1}>
                <div className="border-l-2 border-brand-blue pl-6 py-1">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-sans text-xs text-brand-blue tracking-[0.2em] uppercase">
                      0{i + 1}
                    </span>
                    <p
                      className="font-serif text-brand-black leading-tight"
                      style={{ fontSize: "clamp(1.4rem, 2vw, 1.75rem)" }}
                    >
                      {p.label}
                    </p>
                  </div>
                  <p className="font-sans text-sm text-brand-gray-light leading-relaxed">
                    {p.description}
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
