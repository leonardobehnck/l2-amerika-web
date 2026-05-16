"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Swords, Sparkles, Monitor, Wheat } from "lucide-react"

const wikiCards = [
  {
    title: "Sobre o Servidor",
    subtitle: "Como comecar?",
    icon: Swords,
    image: "https://www.l2amerika.com/images/image_bt1.jpg",
  },
  {
    title: "Enchants",
    subtitle: "Upgrade de equipamentos",
    icon: Sparkles,
    image: "https://www.l2amerika.com/images/image_bt2.jpg",
  },
  {
    title: "Nova Interface",
    subtitle: "Veja como funciona!",
    icon: Monitor,
    image: "https://www.l2amerika.com/images/image_interface.png",
  },
  {
    title: "Farming",
    subtitle: "Explore as Zonas",
    icon: Wheat,
    image: "https://www.l2amerika.com/images/farming.jpg",
  },
]

export default function WikiSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,oklch(0.78_0.14_85/0.03),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium text-primary border border-primary/30 rounded-full bg-primary/5">
            Wiki
          </span>
          <h2 className="font-[var(--font-cinzel)] text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Saiba Mais Sobre o Servidor
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            Uma biblioteca completa sobre o universo do Amerika Server. Cada quest, item e funcionalidade esta documentada na nossa Wiki,
            dando a voce a confianca necessaria para avancar na sua aventura.
          </p>
        </motion.div>

        {/* Wiki Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {wikiCards.map((card, i) => (
            <motion.a
              key={card.title}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative block rounded-xl overflow-hidden aspect-[3/4] border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-[var(--glow-gold)] hover:-translate-y-1"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="w-9 h-9 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center mb-3 group-hover:bg-primary/30 transition-colors">
                  <card.icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-lg uppercase tracking-wide mb-1">{card.title}</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{card.subtitle}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
