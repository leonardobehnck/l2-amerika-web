"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Home, Newspaper, BookOpen, Download, UserPlus, Trophy, User, Monitor } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#", icon: Home },
  { label: "News", href: "#news", icon: Newspaper },
  { label: "Info", href: "#features", icon: BookOpen },
  { label: "Downloads", href: "#download", icon: Download },
  { label: "Register", href: "#register", icon: UserPlus },
  { label: "Rankings", href: "#rankings", icon: Trophy },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-primary/20 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2 shrink-0">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 border border-primary/30">
              <span className="font-[var(--font-cinzel)] text-primary font-bold text-lg">A</span>
            </div>
            <span className="hidden sm:block font-[var(--font-cinzel)] text-foreground font-bold text-xl tracking-wider">
              AMERIKA
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group relative px-3 py-2 text-xs font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="flex items-center gap-1.5">
                  <link.icon className="w-3.5 h-3.5" />
                  {link.label}
                </span>
                <span className="absolute bottom-0 left-3 right-3 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="#"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-[10px] font-medium uppercase tracking-widest text-foreground border border-primary/30 rounded-md bg-primary/5 hover:bg-primary/10 hover:border-primary/50 transition-all"
            >
              <User className="w-3.5 h-3.5" />
              Login
            </Link>
            <Link
              href="#"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-primary-foreground bg-primary rounded-md hover:brightness-110 transition-all animate-[pulse-glow_3s_ease-in-out_infinite]"
            >
              <Monitor className="w-3.5 h-3.5" />
              Instalar
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md border border-border text-foreground"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-3 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                <link.icon className="w-4 h-4 text-primary" />
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 mt-3 pt-3 border-t border-border">
              <Link
                href="#"
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-medium uppercase tracking-widest text-foreground border border-primary/30 rounded-md"
              >
                <User className="w-3.5 h-3.5" />
                Login
              </Link>
              <Link
                href="#"
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold uppercase tracking-widest text-primary-foreground bg-primary rounded-md"
              >
                <Monitor className="w-3.5 h-3.5" />
                Instalar
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
