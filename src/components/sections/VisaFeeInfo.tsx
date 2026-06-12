import { motion } from 'framer-motion'

export default function VisaFeeInfo() {
  return (
    <section id="visa-fees" className="relative py-16 px-4 sm:px-6 lg:px-8 bg-[#020912] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-orange-500/5" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-2 border-yellow-500/30 rounded-2xl p-8 text-center"
        >
          <div className="text-5xl mb-4">💰</div>
          <p className="text-lg text-white/80 font-semibold">
            Visa fees vary depending on the <span className="text-yellow-400">country</span> and <span className="text-yellow-400">visa category</span>
          </p>
          <p className="text-white/60 mt-3">
            Contact our team for detailed fee information specific to your visa category and destination
          </p>
        </motion.div>
      </div>
    </section>
  )
}
