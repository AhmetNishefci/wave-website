"use client";

import { motion } from "framer-motion";
import { useState } from "react";

/* ─── Stylized screen mockups (clean, not pixel-perfect replicas) ─── */

function RadarScreen() {
  const peers = [
    { x: 25, y: 20, emoji: "🐯" },
    { x: 70, y: 28, emoji: "☕" },
    { x: 45, y: 45, emoji: "🎵" },
    { x: 15, y: 65, emoji: "✨" },
    { x: 75, y: 60, emoji: "🦩" },
    { x: 50, y: 78, emoji: "🎧" },
  ];
  return (
    <div className="flex flex-col h-full">
      <div className="px-5 pt-6 pb-2">
        <h3 className="text-white text-sm font-bold">Wave</h3>
        <p className="text-wave-accent text-[8px] mt-0.5">6 people nearby</p>
      </div>
      <div className="relative flex-1 mx-3">
        {[1, 2, 3].map((r) => (
          <div key={r} className="absolute inset-0 rounded-xl border border-wave-primary/8" style={{ margin: `${r * 14}%` }} />
        ))}
        {peers.map((p, i) => (
          <div key={i} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${p.x}%`, top: `${p.y}%` }}>
            <div className="absolute inset-0 rounded-full bg-wave-primary/20 blur-md" style={{ margin: "-3px" }} />
            <div className="relative w-8 h-8 rounded-full bg-wave-surface border border-wave-primary/30 flex items-center justify-center text-xs">{p.emoji}</div>
          </div>
        ))}
      </div>
      <div className="px-4 pb-5 pt-2">
        <div className="bg-wave-primary rounded-xl py-2 text-center">
          <span className="text-white text-[10px] font-semibold">Wave 👋</span>
        </div>
      </div>
    </div>
  );
}

function MatchScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-5">
      <div className="w-14 h-14 rounded-full bg-wave-match/20 flex items-center justify-center mb-3">
        <span className="text-2xl">🎉</span>
      </div>
      <p className="text-white text-base font-bold mb-1">It&apos;s a Match!</p>
      <p className="text-wave-muted text-[8px] mb-4">You both waved at each other</p>
      <div className="flex items-center gap-1.5 mb-1.5">
        <div className="w-3.5 h-3.5 rounded-full bg-wave-primary/30" />
        <span className="text-wave-accent text-[10px] font-semibold">@sarah.nearby</span>
      </div>
      <div className="flex items-center gap-1.5 mb-5">
        <div className="w-3.5 h-3.5 rounded-full bg-yellow-400/30" />
        <span className="text-wave-accent text-[10px] font-semibold">sarah_snap</span>
      </div>
      <div className="w-full bg-wave-surface/80 rounded-xl p-3 mb-5">
        <p className="text-wave-muted text-[6px] uppercase tracking-wider mb-1">Start your DM with</p>
        <p className="text-white text-[8px] leading-relaxed">&quot;So... who waved first? 👋&quot;</p>
      </div>
      <div className="w-full bg-wave-match rounded-xl py-2 text-center mb-2">
        <span className="text-white text-[10px] font-semibold">Open Instagram</span>
      </div>
      <div className="w-full border border-yellow-400/30 rounded-xl py-2 text-center">
        <span className="text-yellow-400 text-[10px] font-semibold">Open Snapchat</span>
      </div>
    </div>
  );
}

function HistoryScreen() {
  const matches = [
    { emoji: "🐳", name: "@sarah.wave", nearby: true },
    { emoji: "🦢", name: "@alex.smith", nearby: true },
    { emoji: "🐱", name: "mia_vibes", nearby: false },
    { emoji: "🦩", name: "@emma.w", nearby: true },
    { emoji: "🐬", name: "@jake_adv...", nearby: false },
  ];
  return (
    <div className="flex flex-col h-full">
      <div className="px-5 pt-6 pb-2">
        <h3 className="text-white text-sm font-bold">Matches</h3>
        <p className="text-wave-muted text-[8px] mt-0.5">10 matches total</p>
      </div>
      <div className="mx-4 bg-wave-surface rounded-lg px-3 py-1.5 flex items-center gap-2 mb-3">
        <span className="text-wave-muted text-[8px]">🔍</span>
        <span className="text-wave-muted text-[8px]">Search by username...</span>
      </div>
      <div className="px-4 mb-1.5">
        <span className="text-wave-muted text-[7px] uppercase tracking-wider">Today</span>
      </div>
      <div className="px-3 flex flex-col gap-2 flex-1">
        {matches.map((m, i) => (
          <div key={i} className="bg-wave-surface rounded-xl px-3 py-2.5 flex items-center gap-2.5">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${m.nearby ? "bg-wave-accent/10 border-2 border-wave-accent/30" : "bg-wave-primary/10 border-2 border-wave-primary/20"}`}>
              {m.emoji}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1.5">
                <span className="text-white text-[9px] font-semibold">{m.name}</span>
                {m.nearby && (
                  <span className="text-[6px] text-wave-accent bg-wave-accent/10 border border-wave-accent/30 px-1.5 py-[1px] rounded-full font-semibold">Nearby</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SettingsScreen() {
  return (
    <div className="flex flex-col h-full">
      <div className="px-5 pt-6 pb-3">
        <h3 className="text-white text-sm font-bold">Settings</h3>
      </div>
      <div className="px-3 flex flex-col gap-2 flex-1 overflow-hidden">
        {/* Socials */}
        <div className="bg-wave-surface rounded-xl px-3 py-2">
          <p className="text-wave-muted text-[6px] uppercase tracking-wider mb-1.5">Socials</p>
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1.5">
              <span className="text-[8px]">📷</span>
              <span className="text-wave-muted text-[8px]">Instagram</span>
            </div>
            <span className="text-white text-[8px]">@alex.nearby</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="text-[8px]">👻</span>
              <span className="text-wave-muted text-[8px]">Snapchat</span>
            </div>
            <span className="text-white text-[8px]">alex_snap</span>
          </div>
        </div>

        {/* Note */}
        <div className="bg-wave-surface rounded-xl px-3 py-2">
          <p className="text-wave-muted text-[6px] uppercase tracking-wider mb-1">Note</p>
          <div className="flex items-center justify-between">
            <span className="text-white text-[8px]">Alex, red hoodie</span>
            <span className="text-wave-muted text-[8px]">›</span>
          </div>
        </div>

        {/* Discovery */}
        <div className="bg-wave-surface rounded-xl px-3 py-2">
          <p className="text-wave-muted text-[6px] uppercase tracking-wider mb-1">Discovery</p>
          <div className="flex items-center justify-between mb-1">
            <span className="text-wave-muted text-[8px]">Show me</span>
            <span className="text-white text-[8px]">Everyone</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-wave-muted text-[8px]">Age Range</span>
            <span className="text-white text-[8px]">18 – 30</span>
          </div>
        </div>

        {/* Linked Accounts */}
        <div className="bg-wave-surface rounded-xl px-3 py-2">
          <p className="text-wave-muted text-[6px] uppercase tracking-wider mb-1.5">Linked Accounts</p>
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1.5">
              <span className="text-[8px]"></span>
              <span className="text-white text-[8px]">Apple</span>
            </div>
            <span className="text-wave-accent text-[8px]">✓</span>
          </div>
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1.5">
              <span className="text-[8px]">G</span>
              <span className="text-white text-[8px]">Google</span>
            </div>
            <span className="text-wave-muted text-[8px]">Link</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="text-[8px]">📱</span>
              <span className="text-white text-[8px]">Phone</span>
            </div>
            <span className="text-wave-muted text-[8px]">Link</span>
          </div>
        </div>

        {/* Language */}
        <div className="bg-wave-surface rounded-xl px-3 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px]">🇬🇧</span>
              <span className="text-white text-[8px]">Language</span>
            </div>
            <span className="text-wave-muted text-[8px]">English ›</span>
          </div>
        </div>

        {/* Support & Legal */}
        <div className="bg-wave-surface rounded-xl px-3 py-2">
          <p className="text-wave-muted text-[6px] uppercase tracking-wider mb-1.5">Support</p>
          <div className="flex items-center justify-between mb-1">
            <span className="text-white text-[8px]">Contact Support</span>
            <span className="text-wave-muted text-[8px]">›</span>
          </div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-white text-[8px]">Privacy Policy</span>
            <span className="text-wave-muted text-[8px]">↗</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-white text-[8px]">Terms of Service</span>
            <span className="text-wave-muted text-[8px]">↗</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main ─── */

const SCREENS = [
  { id: "radar", title: "Radar", description: "See who's nearby in real-time. Discover people around you via Bluetooth and wave to connect.", content: <RadarScreen /> },
  { id: "match", title: "Match", description: "When you both wave, it's a match! See their socials, copy an ice-breaker, and connect directly.", content: <MatchScreen /> },
  { id: "history", title: "Matches", description: "All your matches saved. Search by username, see who's still nearby with live indicators.", content: <HistoryScreen /> },
  { id: "settings", title: "Settings", description: "Choose who you see, manage your socials, switch languages, and control your safety preferences.", content: <SettingsScreen /> },
];

export function AppScreens() {
  const [active, setActive] = useState(0);
  const screen = SCREENS[active];

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">See It In Action</h2>
          <p className="text-wave-muted text-lg max-w-2xl mx-auto">From discovering people nearby to exchanging socials. Here&apos;s what Wave looks like</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-[280px] h-[580px] sm:w-[300px] sm:h-[620px]">
              <div className="absolute inset-0 bg-wave-surface rounded-[3rem] border-2 border-wave-muted/20 shadow-2xl shadow-wave-primary/10 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-wave-bg rounded-b-2xl z-10" />
                <div className="absolute inset-[6px] top-2 bg-wave-bg rounded-[2.5rem] overflow-hidden">
                  {screen.content}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex-1 w-full">
            <div className="flex flex-col gap-3">
              {SCREENS.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setActive(i)}
                  className={`text-left p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${active === i ? "bg-wave-surface border-wave-primary/30" : "bg-transparent border-wave-surface hover:border-wave-muted/20 hover:bg-wave-surface/30"}`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-2 h-2 rounded-full transition-colors ${active === i ? "bg-wave-primary" : "bg-wave-muted/30"}`} />
                    <h3 className={`text-base font-semibold transition-colors ${active === i ? "text-white" : "text-wave-muted"}`}>{s.title}</h3>
                  </div>
                  <p className={`text-sm leading-relaxed pl-5 transition-colors ${active === i ? "text-wave-muted" : "text-wave-muted/50"}`}>{s.description}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
