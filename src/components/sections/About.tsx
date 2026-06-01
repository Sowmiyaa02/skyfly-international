import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  { icon: '🏆', title: 'Licensed & Trusted', desc: 'Officially registered consultancy with transparent processes and ethical practices.' },
  { icon: '🌍', title: 'Global Reach', desc: 'Supporting clients for destinations across 29+ countries worldwide.' },
  { icon: '👥', title: 'Expert Team', desc: 'Experienced immigration consultants dedicated to your journey.' },
  { icon: '📊', title: 'Proven Track Record', desc: 'Thousands of satisfied clients who achieved their global travel goals.' },
  { icon: '🎯', title: 'Personalized Approach', desc: 'Tailored guidance based on your unique profile and requirements.' },
  { icon: '🔄', title: 'End-to-End Support', desc: 'Complete assistance from documentation to post-application support.' },
]

function GlassCard({ icon, title, desc, index }: { icon: string; title: string; desc: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, boxShadow: '0 0 30px rgba(56,189,248,0.15)' }}
      className="bg-white/[0.04] backdrop-blur border border-white/10 hover:border-cyan-400/30 rounded-2xl p-6 transition-all duration-300 group cursor-default"
    >
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-white font-bold text-base mb-2 group-hover:text-cyan-400 transition-colors">{title}</h3>
      <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#030b1a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-cyan-400 text-xs font-medium tracking-widest uppercase">About Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Professional Overseas Documentation
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">& Global Visa Guidance</span>
          </h2>
          <p className="text-white/60 max-w-3xl mx-auto text-base leading-relaxed">
            SkyFly International Pvt Ltd is a professional overseas documentation and global visa guidance consultancy based in Trichy, India. We specialize in helping clients with visa documentation, immigration guidance, and travel consultation for worldwide destinations.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((f, i) => <GlassCard key={f.title} {...f} index={i} />)}
        </div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-2xl p-8 text-center max-w-4xl mx-auto"
        >
          <div className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">Our Mission</div>
          <p className="text-white/80 text-lg leading-relaxed italic">
            "To empower individuals by providing reliable, transparent, and professional guidance for overseas travel and immigration through ethical practices and dedicated client support."
          </p>
        </motion.div>
      </div>
    </section>
  )
}
