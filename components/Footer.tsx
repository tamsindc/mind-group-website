const quickLinks = ["About", "Services", "Industries", "Insights", "Careers"];
const industryLinks = ["Financial Services", "Healthcare", "Education"];

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
              Technology &amp; Digital Transformation Consultancy
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
                  href="mailto:info@mindgroupllc.com"
                  className="font-sans text-sm text-brand-gray-dark hover:text-white transition-colors duration-200"
                >
                  info@mindgroupllc.com
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-label="Mind Group on LinkedIn"
                  className="inline-flex items-center gap-2 font-sans text-sm text-brand-gray-dark hover:text-white transition-colors duration-200"
                >
                  {/* LinkedIn icon — simple SVG */}
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                    <path d="M5 3a2 2 0 100 4 2 2 0 000-4zM3 8h4v9H3V8zm6 0h3.8v1.3C13.3 8.5 14.3 8 16 8c2.8 0 4 1.7 4 5v4h-4v-3.5c0-1.3-.5-2-1.5-2s-2 .7-2 2V17H9V8z"/>
                  </svg>
                  LinkedIn
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
