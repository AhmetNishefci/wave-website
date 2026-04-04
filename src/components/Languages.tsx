"use client";

import { motion } from "framer-motion";

const LANGUAGES = [
  { flag: "🇬🇧", name: "English" },
  { flag: "🇩🇪", name: "German" },
  { flag: "🇫🇷", name: "French" },
  { flag: "🇪🇸", name: "Spanish" },
  { flag: "🇮🇹", name: "Italian" },
  { flag: "🇵🇹", name: "Portuguese" },
  { flag: "🇹🇷", name: "Turkish" },
];

export function Languages() {
  return (
    <section className="py-16 border-y border-wave-surface">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-wave-muted text-sm">
            Available in <span className="text-white font-semibold">7 languages</span> across Europe and beyond
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {LANGUAGES.map((lang, i) => (
            <motion.div
              key={lang.name}
              className="flex items-center gap-2 bg-wave-surface/50 border border-wave-muted/10 rounded-full px-4 py-2"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: i * 0.03 }}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="text-sm text-wave-text">{lang.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
