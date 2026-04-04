"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function DownloadCTA() {
  const [showNotice, setShowNotice] = useState(false);

  const handleDownloadClick = (e: React.MouseEvent) => {
    // TODO: Replace with actual App Store / Google Play URLs when published
    e.preventDefault();
    setShowNotice(true);
    setTimeout(() => setShowNotice(false), 3000);
  };

  return (
    <section id="download" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-wave-bg via-wave-primary/5 to-wave-bg" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-wave-primary/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img src="/app-icon.png" alt="Wave" width={80} height={80} className="w-20 h-20 mb-6 mx-auto rounded-2xl" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to wave?
          </h2>
          <p className="text-wave-muted text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Download Wave and start connecting with people around you. Your next
            conversation is closer than you think.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              onClick={handleDownloadClick}
              className="inline-flex items-center justify-center gap-3 bg-white text-black font-semibold px-8 py-4 rounded-2xl hover:bg-white/90 transition-all hover:shadow-lg hover:shadow-white/10"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] font-normal opacity-60">Download on the</div>
                <div className="text-base leading-tight">App Store</div>
              </div>
            </a>
            <div
              className="inline-flex items-center justify-center gap-3 bg-wave-surface/50 text-wave-muted px-8 py-4 rounded-2xl border border-wave-muted/10 cursor-not-allowed"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="opacity-40">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] font-normal opacity-40">Coming soon</div>
                <div className="text-base leading-tight opacity-60">Google Play</div>
              </div>
            </div>
          </div>

          {showNotice && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-wave-accent mt-6 font-medium"
            >
              Coming soon — Wave is launching shortly!
            </motion.p>
          )}

          <p className="text-xs text-wave-muted mt-8">
            Available on iOS 16+. Android coming soon. Requires Bluetooth Low Energy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
