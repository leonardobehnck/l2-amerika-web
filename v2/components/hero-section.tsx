"use client"

import { motion } from "framer-motion"
import { Shield, Ban, Users, Download, Gamepad2 } from "lucide-react"
import Image from "next/image"

function ServerOrb({
  rate,
  subtitle,
  status,
  players,
  isPrimary = false,
}: {
  rate: string
  subtitle: string
  status: "online" | "offline"
  players?: number
  isPrimary?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: isPrimary ? 0.3 : 0.5 }}
      className="relative w-44 h-44 flex items-center justify-center shrink-0"
    >
      {/* Outer spinning ring */}
      {isPrimary && (
        <>
          <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin-slow_12s_linear_infinite]" />
          <div className="absolute inset-2 rounded-full border border-dashed border-primary/30 animate-[spin-slow-reverse_18s_linear_infinite]" />
        </>
      )}
      {!isPrimary && (
        <>
          <div className="absolute inset-0 rounded-full border border-foreground/10" />
          <div className="absolute inset-4 rounded-full border border-foreground/5" />
        </>
      )}

      {/* Inner glass card */}
      <div
        className={`relative w-32 h-32 rounded-full flex flex-col items-center justify-center text-center p-4 backdrop-blur-xl border ${
          isPrimary
            ? "bg-[var(--surface-glass-strong)] border-primary/30"
            : "bg-[var(--surface-glass)] border-border opacity-75"
        }`}
      >
        {isPrimary && (
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_0%,oklch(0.78_0.14_85/0.15),transparent_60%)]" />
        )}
        <h4
          className={`font-[var(--font-cinzel)] text-2xl font-bold leading-none mb-1 relative z-10 ${
            isPrimary
              ? "text-transparent bg-clip-text bg-gradient-to-b from-[oklch(0.85_0.14_85)] to-[oklch(0.6_0.14_85)]"
              : "text-foreground/70"
          }`}
        >
          {rate}
        </h4>
        <p className="text-[9px] uppercase tracking-[0.18em] text-foreground/60 mb-2 relative z-10">
          {subtitle}
        </p>
        <div
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] uppercase tracking-wider border relative z-10 ${
            status === "online"
              ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
              : "bg-red-500/20 text-red-400 border-red-500/30"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              status === "online"
                ? "bg-emerald-400 shadow-[0_0_8px_oklch(0.7_0.18_155/0.6)] animate-[pulse-dot_2s_ease-in-out_infinite]"
                : "bg-red-400"
            }`}
          />
          {status === "online" ? `Online: ${players}` : "Offline"}
        </div>
      </div>
    </motion.div>
  )
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        className="object-cover object-center"
        priority
        quality={90}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent z-[1]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block mb-4 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium text-primary border border-primary/30 rounded-full bg-primary/5 backdrop-blur-sm">
                17 Anos Online
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-[var(--font-cinzel)] text-5xl sm:text-6xl lg:text-7xl font-black text-foreground leading-[0.95] mb-2"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[oklch(0.85_0.14_85)] to-primary animate-[shimmer_3s_linear_infinite] bg-[length:200%_100%]">
                AMERIKA
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl font-bold text-foreground/90 mb-6"
            >
              <span className="inline-block w-12 h-0.5 bg-gradient-to-r from-primary to-transparent align-middle mr-3" />
              HIGH FIVE PVP SERVER
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base text-muted-foreground max-w-lg mb-8 leading-relaxed text-pretty"
            >
              A verdadeira essencia do L2 PvP: 17 anos online, sem wipes, eventos automaticos, sieges e Territory Wars.
              Cace bosses colossais, garanta drops especiais e torne-se a lenda que sempre quis ser.
            </motion.p>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-2.5 mb-8 justify-center lg:justify-start"
            >
              {[
                { icon: Shield, text: "17 Anos Online" },
                { icon: Ban, text: "Sem Wipes" },
                { icon: Users, text: "1813 Players Agora" },
              ].map((badge) => (
                <span
                  key={badge.text}
                  className="inline-flex items-center gap-2 px-3 py-1.5 text-[10px] uppercase tracking-wider font-medium text-foreground/90 bg-[var(--surface-glass)] border border-primary/20 rounded-full backdrop-blur-lg"
                >
                  <badge.icon className="w-3.5 h-3.5 text-primary" />
                  {badge.text}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-primary-foreground bg-primary rounded-lg hover:brightness-110 transition-all shadow-[var(--glow-gold)] hover:shadow-[var(--glow-gold-strong)]"
              >
                <Gamepad2 className="w-4 h-4" />
                Registrar Agora
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium uppercase tracking-widest text-foreground border border-primary/30 rounded-lg bg-transparent hover:bg-primary/10 hover:border-primary/50 transition-all"
              >
                <Download className="w-4 h-4" />
                Download Client
              </a>
            </motion.div>
          </div>

          {/* Right side - Server Orbs */}
          <div className="flex items-center justify-center gap-8 flex-wrap lg:flex-nowrap">
            <ServerOrb
              rate="200x"
              subtitle="High Five"
              status="online"
              players={1813}
              isPrimary
            />
            <ServerOrb
              rate="BETA"
              subtitle="High Five"
              status="offline"
            />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[2]" />
    </section>
  )
}
