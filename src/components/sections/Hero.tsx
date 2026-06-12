import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const typingWords = ['Immigration Guidance', 'Visitor Visa Support', 'Documentation Assistance', 'Travel Consultation', 'Global Visa Guidance']

function FloatingAirplane({ delay = 0, duration = 15, top = '20%', reverse = false }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ top }}
      initial={{ x: reverse ? '110vw' : '-10vw', opacity: 0 }}
      animate={{ x: reverse ? '-10vw' : '110vw', opacity: [0, 0.7, 0.7, 0] }}
      transition={{ duration, delay, repeat: Infinity, repeatDelay: Math.random() * 5 + 3, ease: 'linear' }}
    >
      <div className="flex items-center gap-1">
        <svg className="w-8 h-8 text-cyan-400/60" style={{ transform: reverse ? 'scaleX(-1)' : 'none' }} fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
        </svg>
        <div className="h-px w-16 bg-gradient-to-r from-cyan-400/40 to-transparent" />
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const word = typingWords[wordIndex]
    let i = typing ? 0 : word.length
    const interval = setInterval(() => {
      if (typing) {
        if (i <= word.length) { setDisplayed(word.slice(0, i)); i++ }
        else { clearInterval(interval); setTimeout(() => setTyping(false), 1800) }
      } else {
        if (i >= 0) { setDisplayed(word.slice(0, i)); i-- }
        else { clearInterval(interval); setWordIndex(p => (p + 1) % typingWords.length); setTyping(true) }
      }
    }, typing ? 60 : 35)
    return () => clearInterval(interval)
  }, [wordIndex, typing])

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#020912]">
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#020912] via-[#041428] to-[#020912]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/4 rounded-full blur-[150px]" />
        
        {/* Animated globe background */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle at 30% 30%, rgba(56,189,248,0.3), transparent 70%)',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute inset-1/4 rounded-full border-2 border-cyan-500/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </div>

      {/* World map SVG background */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg viewBox="0 0 1200 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <path d="M 150 150 Q 200 100 300 120 Q 400 80 500 140 Q 550 110 600 130 Q 700 90 800 150 Q 900 120 1000 160 Q 1050 140 1100 170" stroke="#38bdf8" strokeWidth="1" fill="none"/>
          {Array.from({length: 30}, (_, i) => (
            <circle key={i} cx={Math.random() * 1200} cy={Math.random() * 600} r="2" fill="#38bdf8" opacity="0.5"/>
          ))}
          {Array.from({length: 8}, (_, i) => (
            <circle key={i} cx={150 + i * 140} cy={200 + Math.sin(i) * 50} r="4" fill="none" stroke="#38bdf8" strokeWidth="0.5" opacity="0.6"/>
          ))}
        </svg>
      </div>

      {/* Radar pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {[1,2,3].map(i => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-cyan-400/10"
            style={{ width: i * 200, height: i * 200, top: -(i*100), left: -(i*100) }}
            animate={{ opacity: [0.3, 0, 0.3], scale: [1, 1.05, 1] }}
            transition={{ duration: 3, delay: i * 0.8, repeat: Infinity }}
          />
        ))}
      </div>

      {/* Airplanes */}
      <FloatingAirplane delay={0} duration={20} top="15%" />
      <FloatingAirplane delay={6} duration={16} top="35%" reverse />
      <FloatingAirplane delay={12} duration={22} top="65%" />
      <FloatingAirplane delay={3} duration={18} top="78%" reverse />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:'linear-gradient(rgba(56,189,248,1) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,1) 1px,transparent 1px)',backgroundSize:'60px 60px'}} />

      {/* Floating particles */}
      {Array.from({length: 20}, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-cyan-400/40"
          style={{ left: `${Math.random()*100}%`, top: `${Math.random()*100}%` }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 3 + Math.random()*4, delay: Math.random()*5, repeat: Infinity }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-cyan-400 text-sm font-medium">Licensed Visa Consultancy — Trichy, India</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4"
            >
              Your Global Journey
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Starts With SkyFly
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/60 text-lg mb-4"
            >
              Professional Global Visa Documentation & Immigration Guidance
            </motion.p>

            {/* Typing animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 mb-8 text-orange-400 font-semibold text-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
              <span className="min-w-[280px]">{displayed}<span className="animate-pulse">|</span></span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(56,189,248,0.4)' }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('contact')}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-lg shadow-cyan-500/25 cursor-pointer flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                Book Free Consultation
              </motion.button>
              <motion.a
                href="https://wa.me/918098118198"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(34,197,94,0.4)' }}
                whileTap={{ scale: 0.97 }}
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-lg shadow-green-500/25 cursor-pointer flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                WhatsApp Now
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('countries')}
                className="bg-white/5 border border-white/20 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-white/10 transition-all cursor-pointer flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/></svg>
                Explore Countries
              </motion.button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-6"
            >
              {[
                { value: '5000+', label: 'Happy Clients' },
                { value: '29+', label: 'Countries' },
                { value: '8+', label: 'Years Exp.' },
              ].map(s => (
                <div key={s.label} className="flex flex-col">
                  <span className="text-cyan-400 font-black text-2xl">{s.value}</span>
                  <span className="text-white/50 text-xs">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right side - Popular Global Destinations panel */}
          <div className="hidden lg:flex flex-col items-end gap-5 relative">
            {/* Trusted by badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="self-end flex items-center gap-3 bg-[#050e1f]/80 border border-green-500/30 rounded-2xl px-4 py-3 shadow-lg"
            >
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.4)]">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg>
              </div>
              <div>
                <div className="text-white/50 text-[10px] tracking-widest uppercase">Trusted By</div>
                <div className="text-white font-black text-lg leading-none">5000+ Clients</div>
              </div>
            </motion.div>

            {/* Destinations panel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-[#050e1f]/80 backdrop-blur border border-cyan-500/20 rounded-2xl p-6 w-full max-w-sm shadow-2xl"
            >
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/></svg>
                </div>
                <h3 className="text-white font-bold text-base">Popular Global Destinations</h3>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-5">
                {[
                  { name: 'Germany', flag: '🇩🇪' },
                  { name: 'France', flag: '🇫🇷' },
                  { name: 'Spain', flag: '🇪🇸' },
                  { name: 'Italy', flag: '🇮🇹' },
                  { name: 'Netherlands', flag: '🇳🇱' },
                  { name: 'Switzerland', flag: '🇨🇭' },
                ].map((country, i) => (
                  <motion.div
                    key={country.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.08 }}
                    className="flex items-center gap-2 py-2 px-3 rounded-lg bg-white/5 hover:bg-cyan-500/10 border border-white/5 hover:border-cyan-500/20 transition-all"
                  >
                    <span className="text-lg">{country.flag}</span>
                    <span className="text-white/80 text-sm font-medium">{country.name}</span>
                  </motion.div>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo('contact')}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/20"
              >
                Book Free Consultation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </motion.button>
            </motion.div>

            {/* Global Coverage badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-3 bg-[#050e1f]/80 border border-cyan-500/20 rounded-2xl px-4 py-3"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.4)]">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>
              </div>
              <div>
                <div className="text-white/50 text-[10px] tracking-widest uppercase">Countries</div>
                <div className="text-white font-bold text-sm">Global Coverage</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-12"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            onClick={() => scrollTo('about')}
            className="flex flex-col items-center gap-2 cursor-pointer group"
          >
            <span className="text-white/40 text-xs tracking-widest uppercase group-hover:text-white/60 transition-colors">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center pt-1 group-hover:border-cyan-400/40 transition-colors">
              <motion.div className="w-1.5 h-3 bg-white/40 rounded-full" animate={{ y: [0, 14, 0] }} transition={{ duration: 1.5, repeat: Infinity }}/>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
