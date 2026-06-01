import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'What documents are required for European visa application?',
    a: 'Generally, you will need a valid passport, completed application form, passport-size photos, travel insurance, proof of accommodation, bank statements, and other supporting documents. SkyFly provides detailed guidance on specific requirements for each country.',
  },
  {
    q: 'What services does SkyFly International provide?',
    a: 'SkyFly International provides professional overseas documentation guidance, visa consultation, immigration advice, travel consultation, application assistance, and dedicated client support for worldwide destinations including Europe, Asia Pacific, Americas, and more.',
  },
  {
    q: 'How can SkyFly help with visa applications?',
    a: 'We guide you through the entire visa documentation process — from understanding requirements, organizing your documents, to preparing your application correctly. Our experienced team ensures you have the best possible documentation for your journey.',
  },
  {
    q: 'Which countries are supported?',
    a: 'We support 29+ countries worldwide including all major European Schengen countries (Germany, France, Spain, Italy, Portugal, Netherlands, etc.), UK, Australia, New Zealand, Singapore, Japan, South Korea, Canada, Malaysia, Turkey, Georgia, Azerbaijan, Armenia, China, and Russia.',
  },
  {
    q: 'What is the consultation process?',
    a: 'Start by booking a free consultation via our website, phone, or WhatsApp. Our consultant will assess your profile, explain the requirements for your desired destination, guide you on documentation, and support you through the application process.',
  },
  {
    q: 'What documents do I need to provide?',
    a: 'Clients typically need to provide a valid passport, identity proof, passport-size photos, bank statements, and other travel documents. SkyFly will provide a detailed checklist based on your specific destination and visa type.',
  },
  {
    q: 'Do you provide travel assistance?',
    a: 'Yes, we provide comprehensive travel consultation and assistance. This includes destination guidance, travel planning advice, and support throughout your international journey preparation.',
  },
]

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className={`border rounded-xl overflow-hidden transition-all duration-300 ${open ? 'border-cyan-400/40 bg-cyan-500/5' : 'border-white/8 bg-white/[0.02] hover:border-white/15'}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer group"
      >
        <span className={`font-medium text-sm pr-4 transition-colors ${open ? 'text-cyan-400' : 'text-white/80 group-hover:text-white'}`}>
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all ${open ? 'border-cyan-400 text-cyan-400' : 'border-white/20 text-white/40'}`}
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12M6 12h12"/>
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-5 pb-4 text-white/60 text-sm leading-relaxed border-t border-white/5 pt-3">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-[#020912] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/4 rounded-full blur-[100px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-cyan-400 text-xs font-medium tracking-widest uppercase">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Frequently Asked
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> Questions</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => <FAQItem key={i} faq={faq} index={i} />)}
        </div>
      </div>
    </section>
  )
}
