"use client";

import { motion } from "framer-motion";

const ROWS = [
  { label: "Discovery", wave: "Bluetooth — who's actually here", others: "GPS / Swiping on photos" },
  { label: "Identity", wave: "Hidden until mutual match", others: "Public profile with photos" },
  { label: "Matching", wave: "Both must wave — consent first", others: "One-sided likes and messages" },
  { label: "Tracking", wave: "No GPS, no location history", others: "Continuous location tracking" },
  { label: "Connection", wave: "Exchange real socials (IG, Snap)", others: "Chat inside yet another app" },
];

export function Comparison() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Not Another Dating App
          </h2>
          <p className="text-wave-muted text-lg max-w-2xl mx-auto">
            Wave rethinks how people connect — starting with real-world presence, not profiles
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 mb-4 px-4">
            <div />
            <div className="text-center">
              <span className="text-sm font-semibold text-wave-primary">Wave</span>
            </div>
            <div className="text-center">
              <span className="text-sm font-semibold text-wave-muted">Others</span>
            </div>
          </div>

          {/* Rows */}
          <div className="flex flex-col gap-2">
            {ROWS.map((row, i) => (
              <motion.div
                key={row.label}
                className="grid grid-cols-3 gap-4 bg-wave-surface/50 border border-wave-muted/10 rounded-2xl px-4 py-4 items-center"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
              >
                <div>
                  <span className="text-xs font-semibold text-white">{row.label}</span>
                </div>
                <div className="text-center">
                  <span className="text-xs text-wave-accent">{row.wave}</span>
                </div>
                <div className="text-center">
                  <span className="text-xs text-wave-muted/60">{row.others}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
