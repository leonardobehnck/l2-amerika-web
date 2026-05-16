"use client"

import { motion } from "framer-motion"
import { Video, Play, ExternalLink } from "lucide-react"
import Image from "next/image"

const videos = [
  { id: "ES2cd-85zC0", type: "youtube" },
  { id: "l1Z1rqK0O2Y", type: "youtube" },
  { id: "2KSScxPkcRw", type: "youtube" },
  { id: "pBvQcApoXoU", type: "youtube" },
  { id: "R8ggBUS4t94", type: "youtube" },
  { id: "C9iR-ZfX9qI", type: "youtube" },
  { id: "E1byHP0FgQo", type: "youtube" },
]

export default function CommunitySection() {
  return (
    <section id="community" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.78_0.14_85/0.04),transparent_60%)]" />

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
            Community
          </span>
          <h2 className="font-[var(--font-cinzel)] text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Videos da Comunidade
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Assista os melhores momentos do Amerika criados pelos nossos jogadores!
          </p>
        </motion.div>

        {/* Video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {videos.map((video, i) => (
            <motion.a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative block rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-[var(--glow-gold)]"
            >
              <div className="aspect-video relative bg-secondary">
                <Image
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={`Video da comunidade ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-[var(--glow-gold-strong)] scale-0 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
                  </div>
                </div>
                {/* External link indicator */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4 text-foreground/80" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium uppercase tracking-widest text-foreground border border-primary/30 rounded-lg bg-transparent hover:bg-primary/10 transition-all"
          >
            <Video className="w-4 h-4" />
            Ver todos os videos
          </a>
        </motion.div>
      </div>
    </section>
  )
}
