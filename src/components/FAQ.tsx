"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const FAQS = [
  {
    question: "Is Wave free?",
    answer:
      "Yes, Wave is free to download and use. All core features — discovering people, waving, matching, and exchanging socials — are completely free.",
  },
  {
    question: "How does Wave find people nearby?",
    answer:
      "Wave uses Bluetooth to detect other Wave users nearby. Your phone sends out an anonymous signal that automatically changes every 15 minutes — so you're always untraceable. No GPS or location data is used for discovery.",
  },
  {
    question: "Can someone see my identity before we match?",
    answer:
      "No. Your name, photo, and social handles are completely hidden until both of you wave at each other. Before a mutual wave, all anyone sees is an anonymous dot on their radar — and optionally, a short note you've set like \"Alex, red hoodie\".",
  },
  {
    question: "What if nobody is nearby?",
    answer:
      "Wave works best in social settings — bars, cafes, campuses, concerts, and events. If the radar is empty, try using Wave when you're in a busy area. You can also enable Nearby Alerts to get notified when Wave users are around you.",
  },
  {
    question: "Does Wave drain my battery?",
    answer:
      "Wave uses Bluetooth Low Energy, which is designed for minimal power consumption. It uses significantly less battery than GPS-based apps. Most users don't notice any difference in battery life.",
  },
  {
    question: "What happens after we match?",
    answer:
      "Once you match, you can see each other's Instagram and Snapchat handles. Tap to open their profile directly and start a conversation. Wave is the bridge — the conversation happens on platforms you already use.",
  },
  {
    question: "Can I block or report someone?",
    answer:
      "Absolutely. Tap any match to access block, report, or remove options. Blocking is instant and bidirectional — the blocked person can't see you on their radar or wave at you. Reports are reviewed by our team.",
  },
  {
    question: "Is my location tracked?",
    answer:
      "No. Wave uses Bluetooth only — we never track your GPS location. If you opt in to Nearby Alerts, your approximate location is checked once to see if others are nearby, but it's never stored or shared.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-wave-muted text-lg">
            Everything you need to know about Wave
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                className={`border rounded-2xl overflow-hidden transition-colors duration-200 ${
                  isOpen
                    ? "bg-wave-surface border-wave-primary/20"
                    : "bg-wave-surface/50 border-wave-muted/10 hover:border-wave-muted/20"
                }`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className={`text-sm font-semibold transition-colors ${isOpen ? "text-white" : "text-wave-text"}`}>
                    {faq.question}
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`text-wave-muted shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-4 text-sm text-wave-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
