"use client"

import { motion } from "framer-motion"
import { Swords, Flame, Castle, Sparkles, ScrollText, Skull } from "lucide-react"

const features = [
  {
    icon: Swords,
    title: "PvP Intenso",
    description: "Batalhas epicas com classes balanceadas, farm facilitado e drops especiais que tornam cada combate unico.",
  },
  {
    icon: Flame,
    title: "Eventos Automaticos",
    description: "Eventos acontecendo 24/7 com recompensas exclusivas. TVT, CTF, Death Match e muito mais.",
  },
  {
    icon: Castle,
    title: "Sieges & TW",
    description: "Sieges de castelo e Territory Wars semanais com premios exclusivos para os clans vencedores.",
  },
  {
    icon: Sparkles,
    title: "Enchant System",
    description: "Sistema de enchant balanceado com safe enchant, blessed scrolls e rates especiais para equipamentos.",
  },
  {
    icon: ScrollText,
    title: "Custom Features",
    description: "Interface personalizada, sistema de farm progressivo, NPCs exclusivos e muito mais.",
  },
  {
    icon: Skull,
    title: "Bosses Epicos",
    description: "Cace bosses colossais com drops exclusivos. Baium, Antharas, Valakas e muitos outros.",
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      {/* Subtle bg pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.78_0.14_85/0.03),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium text-primary border border-primary/30 rounded-full bg-primary/5">
            Server Features
          </span>
          <h2 className="font-[var(--font-cinzel)] text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Conheca o Servidor
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Uma biblioteca completa sobre o universo do Amerika Server. Aprofunde seu conhecimento sobre quests,
            itens e funcionalidades unicas do nosso servidor.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-6 rounded-xl bg-card/50 border border-border hover:border-primary/30 backdrop-blur-sm transition-all duration-300 hover:shadow-[var(--glow-gold)]"
            >
              <div className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_50%_0%,oklch(0.78_0.14_85/0.05),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-widest text-primary-foreground bg-primary rounded-lg hover:brightness-110 transition-all"
          >
            <ScrollText className="w-4 h-4" />
            Amerika Wiki
          </a>
        </motion.div>
      </div>
    </section>
  )
}
