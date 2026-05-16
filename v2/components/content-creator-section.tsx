"use client"

import { motion } from "framer-motion"
import { Send, Trophy, Youtube, TvMinimalPlay } from "lucide-react"
import Image from "next/image"

export default function ContentCreatorSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-secondary/50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <span className="inline-block mb-4 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium text-primary border border-primary/30 rounded-full bg-primary/5">
              Content Creators
            </span>
            <h2 className="font-[var(--font-cinzel)] text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
              Crie conteudo e seja recompensado!
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 text-pretty">
              No Amerika Server, valorizamos a criacao de conteudo para plataformas populares como YouTube, TikTok e Twitch.
              Acreditamos que o conteudo gerado pelos jogadores fortalece nossa comunidade, trazendo inovacao e diversao ao servidor.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-pretty">
              Quando voce cria conteudo para o Amerika, nao apenas ajuda a construir e expandir nossa comunidade,
              mas tambem recebe recompensas por isso! Queremos incentivar sua criatividade e esforco oferecendo beneficios tangiveis.
            </p>

            {/* Stats */}
            <div className="flex gap-6 mb-8">
              {[
                { icon: Youtube, label: "YouTube", value: "150+" },
                { icon: TvMinimalPlay, label: "TikTok", value: "300+" },
                { icon: Trophy, label: "Premios", value: "50+" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-lg font-bold text-foreground">{stat.value}</span>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-widest text-primary-foreground bg-primary rounded-lg hover:brightness-110 transition-all shadow-[var(--glow-gold)]"
            >
              <Send className="w-4 h-4" />
              Enviar Videos
            </a>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden border border-primary/20 shadow-[var(--glow-gold)]">
              <Image
                src="/images/features-bg.jpg"
                alt="Amerika Gameplay"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                    <TvMinimalPlay className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">Amerika Gameplay</p>
                    <p className="text-[10px] text-muted-foreground">Criado pela comunidade</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
