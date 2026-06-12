import { motion } from 'framer-motion'

const steps = [
  { number: 1, title: 'Consultation', description: 'Initial assessment of your profile and goals' },
  { number: 2, title: 'Document Verification', description: 'Review and verify all required documents' },
  { number: 3, title: 'Application Submission', description: 'Submit application to relevant authorities' },
  { number: 4, title: 'Processing', description: 'Track application and provide updates' },
  { number: 5, title: 'Visa Approval', description: 'Receive approved visa and guidance' },
]

export default function ProcessTimeline() {
  return (
    <section id="process" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#020912] via-[#050e1f] to-[#020912] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px]" />
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
            Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Visa Process</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Simple, transparent steps to get your visa approved
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent -translate-x-1/2 hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Left/Right content */}
                <div className="flex-1 hidden lg:flex" />

                {/* Center circle */}
                <div className="flex justify-center relative">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-cyan-500/50 relative z-20 flex-shrink-0"
                  >
                    {step.number}
                  </motion.div>
                </div>

                {/* Right/Left content */}
                <div className="flex-1">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/5 border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all"
                  >
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-white/60">{step.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
