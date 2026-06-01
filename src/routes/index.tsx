import { createFileRoute } from '@tanstack/react-router'
import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import About from '@/components/sections/About'
import Stats from '@/components/sections/Stats'
import Countries from '@/components/sections/Countries'
import Services from '@/components/sections/Services'
import Documents from '@/components/sections/Documents'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import ConsultationCTA from '@/components/sections/ConsultationCTA'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export const Route = createFileRoute('/')({
  component: SkyFlyHome,
})

function SkyFlyHome() {
  return (
    <div className="bg-[#020912] min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Stats />
      <Countries />
      <Services />
      <Documents />
      <Testimonials />
      <FAQ />
      <ConsultationCTA />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
