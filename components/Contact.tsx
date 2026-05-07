"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import SectionLabel from "./SectionLabel";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-28 lg:py-40">
      <div className="content-container">
        <div className="lg:grid lg:grid-cols-5 lg:gap-20">
          {/* Left: heading */}
          <div className="lg:col-span-2 mb-12 lg:mb-0">
            <AnimateOnScroll>
              <SectionLabel>Contact</SectionLabel>
              <h2
                className="font-serif text-brand-black leading-tight mb-6"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Ready to Transform?
              </h2>
              <p className="font-sans text-brand-gray-light leading-relaxed mb-10">
                Let&apos;s discuss how Mind Group can accelerate your technology
                transformation. Reach out to start a conversation.
              </p>
              <div className="space-y-3">
                <div className="border-t border-black/8 pt-6">
                  <p className="font-sans text-xs text-brand-gray-light tracking-[0.1em] uppercase mb-1">
                    Office
                  </p>
                  <p className="font-sans text-brand-gray-light text-sm">
                    Mind Group LLC · New York, NY
                  </p>
                </div>
                <div>
                  <p className="font-sans text-xs text-brand-gray-light tracking-[0.1em] uppercase mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:info@mindgroupllc.com"
                    className="font-sans text-brand-blue text-sm hover:underline"
                  >
                    info@mindgroupllc.com
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <AnimateOnScroll delay={0.15}>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-6"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="full-name"
                      className="block font-sans text-xs text-brand-gray-light tracking-[0.1em] uppercase mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      id="full-name"
                      type="text"
                      autoComplete="name"
                      required
                      className="w-full bg-transparent border border-black/15 rounded px-4 py-3 font-sans text-sm text-brand-black placeholder-brand-gray-light/60 focus:outline-none focus:border-brand-blue transition-colors duration-200"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-sans text-xs text-brand-gray-light tracking-[0.1em] uppercase mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="w-full bg-transparent border border-black/15 rounded px-4 py-3 font-sans text-sm text-brand-black placeholder-brand-gray-light/60 focus:outline-none focus:border-brand-blue transition-colors duration-200"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block font-sans text-xs text-brand-gray-light tracking-[0.1em] uppercase mb-2"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    autoComplete="organization"
                    className="w-full bg-transparent border border-black/15 rounded px-4 py-3 font-sans text-sm text-brand-black placeholder-brand-gray-light/60 focus:outline-none focus:border-brand-blue transition-colors duration-200"
                    placeholder="Organization name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block font-sans text-xs text-brand-gray-light tracking-[0.1em] uppercase mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className="w-full bg-transparent border border-black/15 rounded px-4 py-3 font-sans text-sm text-brand-black placeholder-brand-gray-light/60 focus:outline-none focus:border-brand-blue transition-colors duration-200 resize-none"
                    placeholder="Tell us about your transformation initiative..."
                  />
                </div>
                <button
                  type="submit"
                  className="font-sans text-sm px-8 py-3.5 bg-brand-blue text-white rounded hover:bg-[#A88B4D] transition-all duration-300 tracking-wide focus-visible:rounded"
                >
                  Send Message
                </button>
              </form>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
