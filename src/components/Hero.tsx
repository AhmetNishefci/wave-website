"use client";

import { motion } from "framer-motion";
import { PhoneMockup } from "./PhoneMockup";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-wave-primary/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-wave-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-wave-surface border border-wave-primary/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-wave-accent animate-pulse" />
              <span className="text-xs font-medium text-wave-muted">
                Available on iOS &middot; Android coming soon
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Wave at people{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-wave-primary to-wave-accent">
              nearby
            </span>
          </motion.h1>

          <motion.p
            className="text-lg text-wave-muted max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Wave uses Bluetooth to discover people nearby. Send a wave. If they
            wave back, you match and see each other&apos;s socials. No profiles,
            no swiping, just real connections.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="/#download"
              className="inline-flex items-center justify-center gap-2 bg-wave-primary hover:bg-wave-primary/90 text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-wave-primary/25"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              Download for iOS
            </a>
            <span
              className="inline-flex items-center justify-center gap-2 bg-wave-surface/50 text-wave-muted font-medium px-8 py-3.5 rounded-full border border-wave-muted/10 cursor-not-allowed"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="opacity-50">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
              </svg>
              Android coming soon
            </span>
          </motion.div>
        </div>

        {/* Phone mockup */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  );
}
