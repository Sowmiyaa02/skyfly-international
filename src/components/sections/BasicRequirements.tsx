import { motion } from 'framer-motion'

const requirements = [
  { icon: '✈️', title: 'Flight Ticket', description: 'Valid travel itinerary or booking confirmation' },
  { icon: '🏨', title: 'Hotel Booking', description: 'Confirmed accommodation for your stay' },
  { icon: '🎫', title: 'VFS Appointment', description: 'Scheduled appointment for visa submission' },
]

export default function BasicRequirements() {
  return (
    <section id="basic-requirements" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#020912] to-[#050e1f] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px]" />
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
            Basic <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Requirements</span>
          </h2>
          <p className="text-white/60 text-lg">Essential documents for your visa application</p>
        </motion.div>

        {/* Requirements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {requirements.map((req, index) => (
            <motion.div
              key={req.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 border border-orange-500/20 rounded-xl p-8 text-center hover:border-orange-500/50 hover:bg-orange-500/5 transition-all"
            >
              <div className="text-5xl mb-4">{req.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{req.title}</h3>
              <p className="text-white/60">{req.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
