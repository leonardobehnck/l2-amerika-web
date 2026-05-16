import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import CommunitySection from "@/components/community-section"
import ContentCreatorSection from "@/components/content-creator-section"
import WikiSection from "@/components/wiki-section"
import DiscordCTA from "@/components/discord-cta"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <CommunitySection />
      <ContentCreatorSection />
      <WikiSection />
      <DiscordCTA />
      <Footer />
    </main>
  )
}
