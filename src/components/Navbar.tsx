import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Countries', href: '#countries' },
  { label: 'Services', href: '#services' },
  { label: 'Success Stories', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      // detect active section
      const sections = ['home','about','countries','services','testimonials','faq','contact']
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#030918]/90 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_4px_30px_rgba(0,200,255,0.1)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={e => { e.preventDefault(); scrollTo('#home') }}
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src="/skyfly-logo.png"
            alt="SkyFly International Logo"
            className="w-11 h-11 object-contain drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]"
          />
          <div>
            <div className="text-white font-black text-base leading-tight tracking-wide">
              SkyFly <span className="text-amber-400">International</span>
            </div>
            <div className="text-white/50 text-[9px] font-medium tracking-wider uppercase">Pvt. Ltd.</div>
          </div>
        </motion.a>

        {/* Desktop Nav with Mega Menus */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(link => {
            const key = link.href.replace('#','')
            const hasMega = link.label === 'About Us' || link.label === 'Services' || link.label === 'Success Stories' || link.label === 'FAQ'
            const showCaret = link.label === 'About Us' || link.label === 'Services'
            return (
              <div
                key={link.href}
                onMouseEnter={() => setOpenMenu(hasMega ? key : null)}
                onMouseLeave={() => setOpenMenu(null)}
                className="relative"
              >
                <motion.button
                  onClick={() => scrollTo(link.href)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 cursor-pointer ${
                    activeSection === key
                      ? 'text-cyan-400'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {link.label}
                    {showCaret && <span className="text-white/50">▼</span>}
                  </span>
                </motion.button>

                {/* Mega menu panel */}
                {openMenu === key && hasMega && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-0 top-full mt-3 w-[760px] bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-lg text-white z-40"
                  >
                    {/* About mega menu */}
                    {link.label === 'About Us' && (
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-white mb-2">Why Clients Trust Us</h4>
                          <ul className="text-white/70 space-y-2">
                            <li>Licensed & trusted consultancy with transparent processes.</li>
                            <li>Global reach across 29+ countries.</li>
                            <li>Expert team with proven track record.</li>
                            <li>End-to-end, personalized client support.</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-2">Quick Links</h4>
                          <div className="grid grid-cols-1 gap-2 text-sm">
                            <button onClick={() => scrollTo('#about')} className="text-white/70 hover:text-white text-left">About Overview</button>
                            <button onClick={() => scrollTo('#why-clients-trust-us')} className="text-white/70 hover:text-white text-left">Why Clients Trust Us</button>
                            <button onClick={() => scrollTo('#testimonials')} className="text-white/70 hover:text-white text-left">Success Stories</button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Services mega menu */}
                    {link.label === 'Services' && (
                      <div className="grid grid-cols-3 gap-6">
                        <div>
                          <h4 className="text-sm text-cyan-300 font-semibold mb-2">Our Visa Process</h4>
                          <p className="text-white/70 text-sm">Step-by-step guidance from initial assessment to visa submission and follow-up.</p>
                        </div>
                        <div>
                          <h4 className="text-sm text-cyan-300 font-semibold mb-2">Professional Documentation & Guidance</h4>
                          <p className="text-white/70 text-sm">Document checklist, verification, formatting and application-ready preparation.</p>
                        </div>
                        <div>
                          <h4 className="text-sm text-cyan-300 font-semibold mb-2">Profile Processing</h4>
                          <p className="text-white/70 text-sm">Profile evaluation, credential checks and eligibility advisory.</p>
                        </div>
                        <div>
                          <h4 className="text-sm text-cyan-300 font-semibold mb-2">How It Works</h4>
                          <p className="text-white/70 text-sm">Free consultation → profile review → documentation → submission → post-support.</p>
                        </div>
                        <div>
                          <h4 className="text-sm text-cyan-300 font-semibold mb-2">What You Provide & What We Provide</h4>
                          <p className="text-white/70 text-sm">Clear split of client responsibilities and our deliverables for smooth processing.</p>
                        </div>
                        <div className="flex items-center">
                          <a href="#contact" onClick={(e)=>{e.preventDefault(); scrollTo('#contact')}} className="ml-auto bg-cyan-500/20 border border-cyan-500/30 px-4 py-2 rounded-lg text-sm text-cyan-300">Get Consultation</a>
                        </div>
                      </div>
                    )}

                    {/* Placeholder panels for others */}
                    {link.label === 'Success Stories' && (
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">Success Stories</h4>
                        <p className="text-white/70">Client journeys and approvals showcasing our track record.</p>
                      </div>
                    )}

                    {link.label === 'FAQ' && (
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">Frequently Asked Questions</h4>
                        <p className="text-white/70">Quick answers to common visa, documentation and processing queries.</p>
                      </div>
                    )}
                  </motion.div>
                )}
              </div>
            )
          })}
        </div>

        {/* CTA Button */}
        <motion.a
          href="https://wa.me/918098118198"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(34,197,94,0.4)' }}
          whileTap={{ scale: 0.97 }}
          className="hidden md:flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg cursor-pointer"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          WhatsApp
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }} className="block h-0.5 bg-white rounded-full" />
            <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className="block h-0.5 bg-white rounded-full" />
            <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }} className="block h-0.5 bg-white rounded-full" />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#030918]/95 backdrop-blur-xl border-t border-cyan-500/20"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {navLinks.map(link => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeSection === link.href.replace('#','')
                      ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://wa.me/918098118198"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-3 rounded-xl text-sm font-semibold mt-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                WhatsApp Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
