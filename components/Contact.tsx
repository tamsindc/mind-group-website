"use client";

import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import SectionLabel from "./SectionLabel";

const CONTACT_EMAIL = "tamsin@tamsin.ai";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnjwbpvp";

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [state, setState] = useState<SubmitState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setState("submitting");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setState("success");
        form.reset();
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

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
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-sans text-brand-blue text-sm hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <AnimateOnScroll delay={0.15}>
              <form
                onSubmit={handleSubmit}
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
                      name="full-name"
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
                      name="email"
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
                    name="company"
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
                    name="message"
                    rows={5}
                    required
                    className="w-full bg-transparent border border-black/15 rounded px-4 py-3 font-sans text-sm text-brand-black placeholder-brand-gray-light/60 focus:outline-none focus:border-brand-blue transition-colors duration-200 resize-none"
                    placeholder="Tell us about your transformation initiative..."
                  />
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    disabled={state === "submitting"}
                    className="font-sans text-sm px-8 py-3.5 bg-brand-blue text-white rounded hover:bg-[#A88B4D] transition-all duration-300 tracking-wide focus-visible:rounded disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {state === "submitting" ? "Sending…" : "Send Message"}
                  </button>
                  {state === "success" && (
                    <p className="font-sans text-sm text-brand-black">
                      Thank you &mdash; your message has been sent.
                    </p>
                  )}
                  {state === "error" && (
                    <p className="font-sans text-sm text-brand-gray-light">
                      Something went wrong. Please email{" "}
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="text-brand-blue hover:underline"
                      >
                        {CONTACT_EMAIL}
                      </a>{" "}
                      directly.
                    </p>
                  )}
                </div>
              </form>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
