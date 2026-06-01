import { motion } from 'framer-motion'

export default function ConsultationCTA() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#041428] via-[#062040] to-[#041428]" />
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:'radial-gradient(circle, rgba(56,189,248,1) 1px, transparent 1px)',backgroundSize:'30px 30px'}} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/8 rounded-full blur-[80px]" />

      {/* Floating airplane */}
      <motion.div
        animate={{ x: ['-10vw', '110vw'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="absolute top-8 pointer-events-none"
      >
        <svg className="w-10 h-10 text-cyan-400/20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
        </svg>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-cyan-400 text-xs font-medium tracking-widest uppercase">Free Consultation Available</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
            Ready to Start Your
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">Global Journey?</span>
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
            Connect with our expert immigration consultants today. Get professional guidance for your overseas documentation and visa consultation.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { icon: '🎯', label: 'Free Consultation' },
              { icon: '👨‍💼', label: 'Expert Guidance' },
              { icon: '🤝', label: 'Professional Support' },
            ].map(f => (
              <div key={f.label} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-white/70 text-sm">
                <span>{f.icon}</span> {f.label}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(56,189,248,0.4)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo('contact')}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-base shadow-lg shadow-cyan-500/25 cursor-pointer flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              Book Free Consultation
            </motion.button>
            <motion.a
              href="tel:8098118198"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-white/15 transition-all cursor-pointer flex items-center gap-2"
            >
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              Call: 8098118198
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
