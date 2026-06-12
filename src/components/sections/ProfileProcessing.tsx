import { motion } from 'framer-motion'

const documents = [
  { icon: '📄', title: 'Income Tax Return (ITR)', description: 'Last 2 years of ITR for financial verification' },
  { icon: '💳', title: 'Bank Statements', description: 'Bank statements for last 6 months' },
  { icon: '🏢', title: 'Company ID', description: 'Employment verification and company details' },
  { icon: '📋', title: 'No Objection Certificate (NOC)', description: 'NOC from current employer' },
  { icon: '🎓', title: 'Experience Certificate', description: 'Work experience letter from employers' },
]

export default function ProfileProcessing() {
  return (
    <section id="profile-processing" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#020912] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Profile <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Processing</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Our expert team reviews and evaluates your complete profile
          </p>
        </motion.div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {documents.map((doc, index) => (
            <motion.div
              key={doc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all"
            >
              <div className="text-4xl mb-3">{doc.icon}</div>
              <h3 className="text-sm font-bold text-white mb-2">{doc.title}</h3>
              <p className="text-xs text-white/60">{doc.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Evaluation Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-[#050e1f] to-[#020912] border border-purple-500/20 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Our Evaluation Process</h3>
          <p className="text-white/70 leading-relaxed">
            Our dedicated team of visa experts thoroughly reviews your profile, evaluates your eligibility for various visa categories, identifies the best opportunities for you, and provides personalized recommendations. We assess your qualifications, work experience, education background, and financial status to create a comprehensive visa strategy tailored to your goals.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
