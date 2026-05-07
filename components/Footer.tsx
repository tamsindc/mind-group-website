const quickLinks = ["About", "Services", "Industries", "Insights", "Contact"];
const industryLinks = ["Government", "Financial Services", "Healthcare", "Education"];

export default function Footer() {
  return (
    <footer id="footer" className="bg-brand-black border-t-2 border-brand-blue">
      <div className="content-container py-16 lg:py-20">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Brand */}
          <div>
            <p className="font-serif text-white text-lg tracking-[0.1em] uppercase mb-3">
              Mind Group
            </p>
            <p className="font-sans text-brand-gray-dark text-xs leading-relaxed">
              Strategy, Governance &amp; Innovation
            </p>
          </div>

          {/* Col 2: Quick links */}
          <div>
            <p className="font-sans text-xs text-brand-gray-dark tracking-[0.12em] uppercase mb-5">
              Company
            </p>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="font-sans text-sm text-brand-gray-dark hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Industries */}
          <div>
            <p className="font-sans text-xs text-brand-gray-dark tracking-[0.12em] uppercase mb-5">
              Industries
            </p>
            <ul className="space-y-3">
              {industryLinks.map((ind) => (
                <li key={ind}>
                  <a
                    href="#industries"
                    className="font-sans text-sm text-brand-gray-dark hover:text-white transition-colors duration-200"
                  >
                    {ind}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <p className="font-sans text-xs text-brand-gray-dark tracking-[0.12em] uppercase mb-5">
              Contact
            </p>
            <ul className="space-y-3">
              <li className="font-sans text-sm text-brand-gray-dark">New York, NY</li>
              <li>
                <a
                  href="#contact"
                  className="font-sans text-sm text-brand-gray-dark hover:text-white transition-colors duration-200"
                >
                  Get in touch
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-sans text-xs text-brand-gray-dark">
            © 2026 Mind Group LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-sans text-xs text-brand-gray-dark hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="font-sans text-xs text-brand-gray-dark hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
