"use client";

import { motion } from "framer-motion";

const POINTS = [
  {
    icon: "🚫",
    title: "No GPS Tracking",
    description: "Wave uses Bluetooth only. We never access, store, or share your GPS location. We literally don't know where you are.",
  },
  {
    icon: "👻",
    title: "Invisible Until You Match",
    description: "No one can see your name, photo, or social handles until BOTH of you wave. Your identity is yours to reveal.",
  },
  {
    icon: "🔄",
    title: "Auto-Refreshing Identity",
    description: "Your anonymous Bluetooth signal changes every 15 minutes. No one can track your movements or build a profile of your presence.",
  },
  {
    icon: "🔞",
    title: "18+ Verified",
    description: "All users must be at least 18 years old. Date of birth is verified during signup and cannot be changed.",
  },
];

export function Privacy() {
  return (
    <section id="privacy" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: content */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Privacy is not a feature.{" "}
              <span className="text-wave-accent">It&apos;s the foundation.</span>
            </h2>
            <p className="text-wave-muted text-lg mb-8 leading-relaxed">
              Most social apps collect everything about you. Wave was built from
              the ground up to know as little about you as possible while still
              connecting you with people nearby.
            </p>

            <div className="flex flex-col gap-6">
              {POINTS.map((point, i) => (
                <motion.div
                  key={point.title}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -5 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: i * 0.05 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-wave-surface border border-wave-muted/10 flex items-center justify-center text-lg shrink-0">
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">
                      {point.title}
                    </h4>
                    <p className="text-sm text-wave-muted leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: visual */}
          <motion.div
            className="relative hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-80 h-80">
              {/* Shield */}
              <div className="absolute inset-0 bg-gradient-to-br from-wave-primary/10 to-wave-accent/10 rounded-full" />
              <div className="absolute inset-8 bg-wave-surface border border-wave-muted/10 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-3">🛡️</div>
                  <p className="text-xs text-wave-muted font-medium">
                    Privacy First
                  </p>
                </div>
              </div>
              {/* Orbiting elements */}
              {["🔒", "👤", "🔄", "✓"].map((emoji, i) => (
                <motion.div
                  key={i}
                  className="absolute w-10 h-10 bg-wave-surface border border-wave-muted/20 rounded-full flex items-center justify-center text-sm"
                  style={{
                    left: `${50 + 42 * Math.cos((i * Math.PI) / 2)}%`,
                    top: `${50 + 42 * Math.sin((i * Math.PI) / 2)}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                >
                  {emoji}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
