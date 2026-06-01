import { motion } from 'framer-motion'

const clientProvides = [
  { icon: '🛂', item: 'Valid Passport' },
  { icon: '📄', item: 'Required Travel Documents' },
  { icon: '🪪', item: 'Identity Proof' },
  { icon: '📁', item: 'Supporting Documents' },
  { icon: '📷', item: 'Passport-size Photos' },
  { icon: '🏦', item: 'Bank Statements' },
]

const skyflyProvides = [
  { icon: '📋', item: 'Documentation Guidance' },
  { icon: '🏛️', item: 'Visa Consultation' },
  { icon: '✈️', item: 'Travel Support' },
  { icon: '🧭', item: 'Immigration Guidance' },
  { icon: '🤝', item: 'Client Assistance' },
  { icon: '✍️', item: 'Application Support' },
]

export default function Documents() {
  return (
    <section className="py-24 bg-[#020912] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage:'linear-gradient(rgba(56,189,248,1) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,1) 1px,transparent 1px)',backgroundSize:'50px 50px'}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-cyan-400 text-xs font-medium tracking-widest uppercase">How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            What You Provide &
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">What We Provide</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Client provides */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.04] border border-orange-400/20 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-400/30 flex items-center justify-center text-orange-400 text-lg">👤</div>
              <h3 className="text-white font-bold text-lg">What Clients Provide</h3>
            </div>
            <div className="flex flex-col gap-3">
              {clientProvides.map((item, i) => (
                <motion.div
                  key={item.item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 bg-orange-500/5 border border-orange-400/10 rounded-xl px-4 py-3"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-white/80 text-sm font-medium">{item.item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* SkyFly provides */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.04] border border-cyan-400/20 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-xl">✈️</div>
              <h3 className="text-white font-bold text-lg">What SkyFly Provides</h3>
            </div>
            <div className="flex flex-col gap-3">
              {skyflyProvides.map((item, i) => (
                <motion.div
                  key={item.item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 bg-cyan-500/5 border border-cyan-400/10 rounded-xl px-4 py-3"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-white/80 text-sm font-medium">{item.item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
