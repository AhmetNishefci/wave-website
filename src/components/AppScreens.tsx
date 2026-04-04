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
        {/* Language */}
        <div className="bg-wave-surface rounded-xl px-3 py-2.5">
          <p className="text-wave-muted text-[6px] uppercase tracking-wider mb-1.5">Language</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px]">🇬🇧</span>
              <span className="text-white text-[9px]">English</span>
            </div>
            <span className="text-wave-muted text-[8px]">›</span>
          </div>
        </div>

        {/* Discovery */}
        <div className="bg-wave-surface rounded-xl px-3 py-2.5">
          <p className="text-wave-muted text-[6px] uppercase tracking-wider mb-1.5">Discovery</p>
          <p className="text-wave-muted text-[7px] mb-1">Show me</p>
          <div className="flex flex-col gap-1 mb-2">
            {["Men", "Women", "Everyone"].map((opt, i) => (
              <div key={opt} className={`rounded-lg px-2.5 py-1.5 flex items-center justify-between ${i === 2 ? "bg-wave-primary/15 border border-wave-primary/30" : "bg-wave-bg"}`}>
                <span className={`text-[8px] font-semibold ${i === 2 ? "text-white" : "text-wave-muted"}`}>{opt}</span>
                {i === 2 && <span className="text-wave-primary text-[8px]">✓</span>}
              </div>
            ))}
          </div>
          <p className="text-wave-muted text-[7px] mb-1">Age Range</p>
          <div className="relative h-4 flex items-center px-1">
            <div className="w-full h-[2px] bg-wave-bg rounded-full" />
            <div className="absolute h-[2px] bg-wave-primary rounded-full" style={{ left: "10%", right: "30%" }} />
            <div className="absolute w-3 h-3 bg-white rounded-full shadow-sm" style={{ left: "10%" }} />
            <div className="absolute w-3 h-3 bg-white rounded-full shadow-sm" style={{ right: "30%" }} />
          </div>
          <div className="flex justify-between px-1 mt-0.5">
            <span className="text-wave-muted text-[7px]">18</span>
            <span className="text-wave-muted text-[7px]">30</span>
          </div>
        </div>

        {/* Socials */}
        <div className="bg-wave-surface rounded-xl px-3 py-2.5">
          <p className="text-wave-muted text-[6px] uppercase tracking-wider mb-1.5">Socials</p>
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-1.5">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#E1306C" strokeWidth="2" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="18" cy="6" r="1.5" fill="#E1306C" stroke="none" /></svg>
              <span className="text-wave-muted text-[8px]">Instagram</span>
            </div>
            <span className="text-white text-[8px]">@alex.nearby</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="#FFFC00"><path d="M12.2 2c3.2 0 5.3 2.2 5.5 5.7 0 .3.1 1.2.2 1.5.2.4.7.6 1.1.7.3.1.6.3.6.6 0 .4-.5.6-1 .8-.2.1-.4.1-.6.2-.3.1-.5.3-.5.6 0 .2.1.4.2.6.8 1.4 1.9 2.5 3.3 2.8.3.1.5.2.5.5 0 .5-.8.9-2.2 1.2-.1 0-.2.3-.3.6 0 .3-.2.5-.5.5-.3 0-.6-.1-1-.1-.5 0-1 .1-1.6.5-.8.5-1.5 1.3-3.1 1.3s-2.2-.8-3.1-1.3c-.6-.4-1.1-.5-1.6-.5-.4 0-.7.1-1 .1-.3 0-.5-.2-.5-.5-.1-.3-.1-.5-.3-.6C4.8 16.9 4 16.5 4 16c0-.3.2-.4.5-.5 1.4-.3 2.5-1.4 3.3-2.8.1-.2.2-.4.2-.6 0-.3-.3-.5-.5-.6-.2-.1-.4-.1-.6-.2-.5-.2-1-.4-1-.8 0-.3.3-.5.6-.6.4-.1.9-.3 1.1-.7.1-.3.2-1.2.2-1.5C8 4.2 9.9 2 12.2 2z" /></svg>
              <span className="text-wave-muted text-[8px]">Snapchat</span>
            </div>
            <span className="text-white text-[8px]">alex_snap</span>
          </div>
        </div>

        {/* Note */}
        <div className="bg-wave-surface rounded-xl px-3 py-2.5">
          <p className="text-wave-muted text-[6px] uppercase tracking-wider mb-1">Note</p>
          <div className="flex items-center justify-between">
            <span className="text-white text-[8px]">&quot;Alex, red hoodie&quot;</span>
            <span className="text-wave-muted text-[8px]">›</span>
          </div>
        </div>

        {/* Safety */}
        <div className="bg-wave-surface rounded-xl px-3 py-2.5">
          <p className="text-wave-muted text-[6px] uppercase tracking-wider mb-1.5">Safety</p>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-white text-[8px]">Blocked Users</span>
            <span className="text-wave-muted text-[8px]">›</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-white text-[8px]">Contact Support</span>
            <span className="text-wave-muted text-[8px]">›</span>
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
