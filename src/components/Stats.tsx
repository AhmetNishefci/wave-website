"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const STATS = [
  { value: 0, suffix: "", label: "Personal Data Shared over Bluetooth", icon: "🔒" },
  { value: 15, suffix: "min", label: "Anonymous Identity Refresh", icon: "🔄" },
  { value: 18, suffix: "+", label: "Age Verified Users Only", icon: "🔞" },
  { value: 7, suffix: "", label: "Languages Supported", icon: "🌍" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const steps = 40;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="py-20 sm:py-24 border-y border-wave-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="text-2xl mb-3">{stat.icon}</div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-wave-muted">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
