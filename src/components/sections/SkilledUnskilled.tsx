import { motion } from 'framer-motion'

export default function SkilledUnskilled() {
  return (
    <section id="services-type" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#050e1f] to-[#020912] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Our <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-white/60 text-lg">Tailored solutions for both skilled and unskilled visa categories</p>
        </motion.div>

        {/* Services Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Skilled Category */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-indigo-500/10 to-blue-500/10 border-2 border-indigo-500/30 rounded-2xl p-8 hover:border-indigo-500/50 transition-all"
          >
            <div className="text-4xl mb-4">👨‍💼</div>
            <h3 className="text-2xl font-bold text-white mb-6">Skilled Category</h3>
            
            <ul className="space-y-3">
              {[
                'Visa sponsorship from top companies',
                'Work visa guidance for developed nations',
                'Professional credential evaluation',
                'Interview preparation and coaching',
                'Relocation assistance and settlement support',
                'Career progression opportunities',
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-start gap-3 text-white/70"
                >
                  <span className="text-indigo-400 font-bold mt-1">✓</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Unskilled Category */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-cyan-500/10 to-green-500/10 border-2 border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-500/50 transition-all"
          >
            <div className="text-4xl mb-4">👷</div>
            <h3 className="text-2xl font-bold text-white mb-6">Unskilled Category</h3>
            
            <ul className="space-y-3">
              {[
                'Employment opportunities in GCC countries',
                'Work permit and visa processing',
                'Medical fitness evaluation support',
                'Labor contract clarification',
                'Affordable processing fees',
                'Quick visa approval timeline',
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-start gap-3 text-white/70"
                >
                  <span className="text-cyan-400 font-bold mt-1">✓</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
