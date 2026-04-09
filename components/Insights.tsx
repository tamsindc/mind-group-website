import AnimateOnScroll from "./AnimateOnScroll";
import SectionLabel from "./SectionLabel";
import SectionHeadline from "./SectionHeadline";

const articles = [
  {
    category: "Financial Services",
    title: "The CTO's Guide to Legacy Modernization in Financial Services",
    excerpt:
      "Core banking systems built decades ago are becoming existential risks. We examine the strategic and technical considerations that separate successful modernizations from costly failures.",
    readTime: "8 min read",
  },
  {
    category: "Healthcare",
    title: "Why Healthcare Organizations Are Failing at Interoperability — And How to Fix It",
    excerpt:
      "Despite significant investment, data remains siloed across most health systems. The barriers are less technical than they appear — and the solutions require both architectural rigor and organizational will.",
    readTime: "6 min read",
  },
  {
    category: "Education",
    title: "AI in Education: Beyond the Hype to Operational Reality",
    excerpt:
      "Educational institutions face a distinct challenge: deploying AI responsibly at scale while managing governance, equity, and the legitimate concerns of faculty and students.",
    readTime: "5 min read",
  },
];

export default function Insights() {
  return (
    <section id="insights" className="bg-brand-black noise-overlay py-28 lg:py-40">
      <div className="relative z-10 content-container">
        <AnimateOnScroll>
          <SectionLabel>Insights</SectionLabel>
          <SectionHeadline dark>Perspectives on Transformation</SectionHeadline>
        </AnimateOnScroll>

        <div className="border-t border-white/8 pt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <AnimateOnScroll key={article.title} delay={i * 0.1}>
              <article className="group flex flex-col h-full bg-surface-dark border border-surface-dark-border hover:border-brand-blue/40 transition-all duration-400 hover:shadow-[0_0_30px_rgba(37,99,235,0.06)] p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-sans text-xs text-brand-blue tracking-[0.12em] uppercase">
                    {article.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-white/20 inline-block" />
                  <span className="font-sans text-xs text-brand-gray-dark">{article.readTime}</span>
                </div>
                <h3 className="font-serif text-white text-xl leading-snug mb-4 flex-1">
                  {article.title}
                </h3>
                <p className="font-sans text-brand-gray-dark text-sm leading-relaxed mb-6">
                  {article.excerpt}
                </p>
                <a
                  href="#"
                  className="font-sans text-sm text-brand-blue hover:text-white transition-colors duration-200 tracking-wide inline-flex items-center gap-2"
                  aria-label={`Read more: ${article.title}`}
                >
                  Read More
                  <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
