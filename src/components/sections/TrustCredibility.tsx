import { motion } from 'framer-motion'

const trustCards = [
  { icon: '✅', title: 'Registered Private Limited Company', description: 'Officially registered consultancy with certified credentials' },
  { icon: '✅', title: 'Professional Documentation Support', description: 'Expert guidance on all required visa documents' },
  { icon: '✅', title: 'Transparent Process', description: 'Clear communication at every step of your journey' },
  { icon: '✅', title: 'Dedicated Support Team', description: '24/7 assistance for all your visa-related queries' },
]

export default function TrustCredibility() {
  return (
    <section id="trust" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#020912] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-cyan-500/5" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Why Clients <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Trust Us</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            We believe in transparency, professionalism, and genuine visa guidance
          </p>
        </motion.div>

        {/* Trust Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {trustCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-[#050e1f] to-[#020912] border border-green-500/20 rounded-2xl p-8 hover:border-green-500/50 transition-all"
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
              <p className="text-white/60">{card.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/20 rounded-2xl p-8"
        >
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-black text-green-400">5000+</div>
              <div className="text-white/60 text-sm mt-2">Satisfied Clients</div>
            </div>
            <div>
              <div className="text-3xl font-black text-cyan-400">29+</div>
              <div className="text-white/60 text-sm mt-2">Countries Supported</div>
            </div>
            <div>
              <div className="text-3xl font-black text-blue-400">8+</div>
              <div className="text-white/60 text-sm mt-2">Years Experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
