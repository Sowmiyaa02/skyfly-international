import { motion } from 'framer-motion'

const services = [
  { icon: '🛂', title: 'Europe Visitor Visa Guidance', desc: 'Expert guidance for Schengen and non-Schengen European visitor visa documentation and processes.' },
  { icon: '📋', title: 'Documentation Support', desc: 'Complete assistance with organizing and preparing all required documents for your visa application.' },
  { icon: '🏛️', title: 'Immigration Consultation', desc: 'Professional immigration consultation tailored to your specific goals and destination requirements.' },
  { icon: '✍️', title: 'Application Assistance', desc: 'Step-by-step guidance through the visa application process from start to finish.' },
  { icon: '✈️', title: 'Travel Consultation', desc: 'Comprehensive travel planning and consultation to ensure a smooth international journey.' },
  { icon: '🤝', title: 'Client Support', desc: 'Dedicated support team available to assist you throughout your entire visa journey.' },
  { icon: '🌐', title: 'International Guidance', desc: 'Expert guidance for international destinations including Europe, Asia Pacific, and the Americas.' },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#030b1a] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-cyan-400 text-xs font-medium tracking-widest uppercase">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3">
            Professional Documentation
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">& Guidance</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6, boxShadow: '0 0 30px rgba(56,189,248,0.12)' }}
              className="group bg-white/[0.04] backdrop-blur border border-white/10 hover:border-cyan-400/30 rounded-2xl p-6 transition-all duration-300 cursor-default"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.4 }}
                className="text-4xl mb-4"
              >{s.icon}</motion.div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-cyan-400 transition-colors">{s.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
              <div className="mt-4 h-px bg-gradient-to-r from-cyan-400/0 via-cyan-400/30 to-cyan-400/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
