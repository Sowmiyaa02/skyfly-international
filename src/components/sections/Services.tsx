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
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3">Services</h2>
          <p className="text-white/70 max-w-3xl mx-auto">Comprehensive visa and immigration services designed for clear outcomes.</p>
        </motion.div>

        {/* Services subsections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div id="our-visa-process" className="bg-white/[0.02] border border-white/8 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-2">Our Visa Process</h3>
            <p className="text-white/70">Assessment → Documentation → Application Submission → Follow-up & Support.</p>
          </div>

          <div id="documentation" className="bg-white/[0.02] border border-white/8 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-2">Professional Documentation & Guidance</h3>
            <p className="text-white/70">We prepare, verify and format documents to meet destination-specific requirements.</p>
          </div>

          <div id="profile-processing" className="bg-white/[0.02] border border-white/8 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-2">Profile Processing</h3>
            <p className="text-white/70">Eligibility checks, credential verification and profile strengthening recommendations.</p>
          </div>

          <div id="how-it-works" className="bg-white/[0.02] border border-white/8 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-2">How It Works</h3>
            <p className="text-white/70">Start with a free consultation and we’ll guide you through the rest.</p>
          </div>
        </div>

        <div id="what-we-provide" className="mb-10 bg-white/[0.02] border border-white/8 rounded-xl p-6">
          <h3 className="text-lg font-bold text-white mb-2">What You Provide & What We Provide</h3>
          <p className="text-white/70">A clear split between client-supplied documents and our service deliverables to ensure transparency and speed.</p>
        </div>

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
