import { motion } from 'framer-motion'

const badges = [
  { icon: '🛡️', label: 'Licensed Consultancy' },
  { icon: '⭐', label: 'Expert Guidance' },
  { icon: '🔍', label: 'Transparent Process' },
  { icon: '👨‍💼', label: 'Professional Support' },
  { icon: '🌍', label: 'Worldwide Assistance' },
]

export default function TrustBar() {
  return (
    <div className="bg-[#030b1a]/80 border-y border-cyan-500/15 py-4 overflow-hidden">
      <motion.div
        animate={{ x: [0, -1200] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="flex gap-12 whitespace-nowrap"
      >
        {[...badges, ...badges, ...badges].map((b, i) => (
          <div key={i} className="flex items-center gap-3 px-4">
            <span className="text-xl">{b.icon}</span>
            <span className="text-white/70 text-sm font-medium tracking-wide">{b.label}</span>
            <span className="text-cyan-500/30 ml-4">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
