"use client";

import { motion } from "framer-motion";

const PEERS = [
  { x: 30, y: 22, emoji: "🎧", note: "Alex, red hoodie" },
  { x: 72, y: 35, emoji: "☕", note: "Coffee lover" },
  { x: 18, y: 48, emoji: "🎵", note: "Sarah" },
  { x: 68, y: 58, emoji: "📱", note: null },
  { x: 40, y: 72, emoji: "🎨", note: "Just vibing" },
  { x: 78, y: 80, emoji: "🏃", note: null },
];

export function PhoneMockup() {
  return (
    <div className="relative w-[280px] h-[580px] sm:w-[300px] sm:h-[620px]">
      <div className="absolute inset-0 bg-wave-surface rounded-[3rem] border-2 border-wave-muted/20 shadow-2xl shadow-wave-primary/10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-wave-bg rounded-b-2xl z-10" />

        <div className="absolute inset-[6px] top-2 bg-wave-bg rounded-[2.5rem] overflow-hidden flex flex-col">
          {/* Status bar */}
          <div className="flex justify-between items-center px-7 pt-4 pb-1">
            <span className="text-[10px] text-wave-muted font-medium">9:41</span>
            <div className="w-3.5 h-2 border border-wave-muted/50 rounded-sm relative">
              <div className="absolute inset-[1px] right-[2px] bg-wave-accent rounded-[1px]" />
            </div>
          </div>

          {/* Header */}
          <div className="px-5 pt-1 pb-3 flex items-center justify-between">
            <div>
              <h3 className="text-white text-base font-bold">Wave</h3>
              <p className="text-wave-accent text-[8px] font-medium mt-0.5">6 people nearby</p>
            </div>
            <div className="w-6 h-6 rounded-full bg-wave-primary/20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-wave-primary animate-pulse" />
            </div>
          </div>

          {/* Radar area */}
          <div className="relative flex-1 mx-3">
            {/* Pulse rings */}
            {[1, 2, 3].map((ring) => (
              <motion.div
                key={ring}
                className="absolute inset-0 rounded-2xl border border-wave-primary/8"
                style={{ margin: `${ring * 12}%` }}
                animate={{ opacity: [0.4, 0.1, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, delay: ring * 0.5 }}
              />
            ))}

            {/* Peers */}
            {PEERS.map((peer, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{ left: `${peer.x}%`, top: `${peer.y}%` }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + i * 0.15 }}
              >
                <div className="relative -translate-x-1/2 -translate-y-1/2">
                  <div className="absolute inset-0 rounded-full bg-wave-primary/20 blur-md" style={{ margin: "-4px" }} />
                  <div className="relative w-9 h-9 rounded-full bg-wave-surface border border-wave-primary/30 flex items-center justify-center text-sm">
                    {peer.emoji}
                  </div>
                  {peer.note && (
                    <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 whitespace-nowrap bg-wave-surface/90 border border-wave-muted/10 px-2 py-0.5 rounded text-[7px] text-wave-muted">
                      {peer.note}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Wave button */}
          <div className="px-4 pb-5 pt-2">
            <motion.div
              className="bg-wave-primary rounded-2xl py-2.5 text-center"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-white text-[11px] font-semibold">Wave 👋</span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
