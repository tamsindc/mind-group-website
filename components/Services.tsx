import AnimateOnScroll from "./AnimateOnScroll";
import SectionLabel from "./SectionLabel";
import SectionHeadline from "./SectionHeadline";

const services = [
  {
    title: "Digital Strategy & Roadmapping",
    description:
      "We define the technology vision and build actionable transformation roadmaps aligned to business outcomes.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M4 36 L16 20 L24 28 L36 8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="36" cy="8" r="2.5" fill="currentColor" stroke="none"/>
        <circle cx="24" cy="28" r="2" fill="currentColor" stroke="none"/>
        <circle cx="16" cy="20" r="2" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    title: "Enterprise Architecture",
    description:
      "We design scalable, resilient architectures that modernize legacy systems and unlock operational agility.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <rect x="6" y="6" width="28" height="7" rx="1"/>
        <rect x="10" y="17" width="20" height="7" rx="1"/>
        <rect x="14" y="28" width="12" height="6" rx="1"/>
      </svg>
    ),
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "We migrate, optimize, and manage cloud environments across AWS, Azure, and GCP for peak performance.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M10 28 C6 28 4 24 6 21 C7 18 10 17 13 18 C14 14 18 11 23 12 C28 13 31 18 29 23" strokeLinecap="round"/>
        <path d="M29 23 C33 22 36 25 35 29 C34 32 31 33 28 33 L12 33 C8 33 6 30 8 27" strokeLinecap="round"/>
        <circle cx="20" cy="32" r="1.5" fill="currentColor" stroke="none"/>
        <circle cx="27" cy="32" r="1.5" fill="currentColor" stroke="none"/>
        <circle cx="13" cy="32" r="1.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    title: "Data & AI Solutions",
    description:
      "We build data platforms and deploy AI/ML capabilities that turn information into competitive advantage.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <polygon points="20,4 27,12 35,14 29,22 30,31 20,27 10,31 11,22 5,14 13,12"/>
        <circle cx="20" cy="19" r="4"/>
      </svg>
    ),
  },
  {
    title: "Cybersecurity & Risk",
    description:
      "We embed security-by-design across the enterprise, from zero-trust frameworks to regulatory compliance.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M20 5 L34 11 L34 22 C34 30 27 36 20 38 C13 36 6 30 6 22 L6 11 Z" strokeLinejoin="round"/>
        <path d="M14 20 L18 24 L26 16" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Program Delivery & PMO",
    description:
      "We lead large-scale transformation programs with disciplined governance, ensuring on-time, on-budget delivery.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <rect x="5" y="5" width="12" height="12" rx="1"/>
        <rect x="23" y="5" width="12" height="12" rx="1"/>
        <rect x="5" y="23" width="12" height="12" rx="1"/>
        <rect x="23" y="23" width="12" height="12" rx="1"/>
        <path d="M17 11 L23 11" strokeLinecap="round"/>
        <path d="M17 29 L23 29" strokeLinecap="round"/>
        <path d="M11 17 L11 23" strokeLinecap="round"/>
        <path d="M29 17 L29 23" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-brand-black noise-overlay py-28 lg:py-40">
      <div className="relative z-10 content-container">
        <AnimateOnScroll>
          <SectionLabel>What We Do</SectionLabel>
          <SectionHeadline dark>End-to-End Transformation Services</SectionHeadline>
        </AnimateOnScroll>

        <div className="border-t border-white/8 pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {services.map((service, i) => (
            <AnimateOnScroll key={service.title} delay={i * 0.08}>
              <div
                className="group bg-surface-dark p-8 border border-surface-dark-border hover:border-brand-blue transition-all duration-400 hover:shadow-[0_0_40px_rgba(37,99,235,0.08)] h-full"
                style={{ minHeight: "220px" }}
              >
                <div className="text-brand-blue mb-5 transition-transform duration-300 group-hover:scale-110 origin-left">
                  {service.icon}
                </div>
                <h3 className="font-sans font-semibold text-white text-base mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="font-sans text-brand-gray-dark text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
