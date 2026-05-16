import Link from "next/link"

const footerLinks = [
  {
    title: "Servidor",
    links: [
      { label: "Home", href: "#" },
      { label: "News", href: "#" },
      { label: "Downloads", href: "#" },
      { label: "Rankings", href: "#" },
    ],
  },
  {
    title: "Comunidade",
    links: [
      { label: "Discord", href: "https://discord.com/invite/vAWtEFt2hx" },
      { label: "Facebook", href: "https://facebook.com/Lineage2Amerika" },
      { label: "Instagram", href: "#" },
      { label: "YouTube", href: "#" },
    ],
  },
  {
    title: "Suporte",
    links: [
      { label: "Server Wiki", href: "#" },
      { label: "Bug Policy", href: "#" },
      { label: "Boss Status", href: "#" },
      { label: "Castle Siege", href: "#" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                <span className="font-[var(--font-cinzel)] text-primary font-bold text-lg">A</span>
              </div>
              <span className="font-[var(--font-cinzel)] text-foreground font-bold text-xl tracking-wider">
                AMERIKA
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              O servidor PvP High Five mais respeitado. 17 anos online, sem wipes, com a melhor experiencia de L2 PvP.
            </p>
            <div className="flex gap-2">
              {/* Social icons */}
              {[
                { label: "Discord", href: "https://discord.com/invite/vAWtEFt2hx" },
                { label: "Facebook", href: "https://facebook.com/Lineage2Amerika" },
                { label: "YouTube", href: "#" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all text-xs font-bold"
                  aria-label={social.label}
                >
                  {social.label[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-foreground mb-4">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; 2008 - 2025 Amerika Server. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Lineage 2 e todas as marcas associadas sao propriedade da NCSoft Corporation.
          </p>
        </div>
      </div>
    </footer>
  )
}
