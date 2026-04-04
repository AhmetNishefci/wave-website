"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    icon: "📡",
    title: "Discover",
    description:
      "Open Wave and your phone starts discovering other Wave users nearby via Bluetooth. No GPS, no location tracking — only nearby detection.",
  },
  {
    icon: "👋",
    title: "Wave",
    description:
      "See someone on your radar? Send them a wave. It's anonymous — they'll know someone nearby waved, but not who until they wave back.",
  },
  {
    icon: "🤝",
    title: "Match",
    description:
      "When you both wave at each other, you match! Your Instagram and Snapchat handles are revealed so you can connect for real.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-wave-muted text-lg max-w-2xl mx-auto">
            Three simple steps to connect with people around you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              className="relative group"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
            >
              <div className="bg-wave-surface border border-wave-muted/10 rounded-3xl p-8 h-full hover:border-wave-primary/30 transition-all duration-300">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-wave-primary/10 flex items-center justify-center text-2xl mb-5">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-wave-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line (desktop only) */}
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 border-t border-dashed border-wave-muted/20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
