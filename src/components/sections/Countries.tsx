import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Country = {
  name: string
  flag: string
  region: string
  image: string
  services: string[]
  special?: string
}

const countries: Country[] = [
  // Europe
  { name: 'Germany', flag: '🇩🇪', region: 'Europe', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&q=80', services: ['Visitor Visa Guidance', 'Documentation Support', 'Immigration Consultation', 'Application Assistance'] },
  { name: 'France', flag: '🇫🇷', region: 'Europe', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80', services: ['Visitor Visa Guidance', 'Documentation Support', 'Immigration Consultation', 'Travel Assistance'] },
  { name: 'Spain', flag: '🇪🇸', region: 'Europe', image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=400&q=80', services: ['Visitor Visa Guidance', 'Documentation Support', 'Immigration Consultation', 'Application Guidance'] },
  { name: 'Portugal', flag: '🇵🇹', region: 'Europe', image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=400&q=80', services: ['Visitor Visa Guidance', 'Documentation Support', 'Immigration Consultation', 'Travel Support'] },
  { name: 'Italy', flag: '🇮🇹', region: 'Europe', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&q=80', services: ['Visitor Visa Guidance', 'Documentation Support', 'Immigration Consultation', 'Application Support'] },
  { name: 'Netherlands', flag: '🇳🇱', region: 'Europe', image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=400&q=80', services: ['Visitor Visa Guidance', 'Documentation Support', 'Immigration Consultation', 'Travel Assistance'] },
  { name: 'Belgium', flag: '🇧🇪', region: 'Europe', image: 'https://images.unsplash.com/photo-1491557345352-5929e343eb89?w=400&q=80', services: ['Visitor Visa Guidance', 'Documentation Support', 'Immigration Consultation', 'Application Guidance'] },
  { name: 'Switzerland', flag: '🇨🇭', region: 'Europe', image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=400&q=80', services: ['Visitor Visa Guidance', 'Documentation Support', 'Immigration Consultation', 'Travel Support'] },
  { name: 'Austria', flag: '🇦🇹', region: 'Europe', image: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=400&q=80', services: ['Visitor Visa Guidance', 'Documentation Support', 'Immigration Consultation', 'Application Support'] },
  { name: 'Poland', flag: '🇵🇱', region: 'Europe', image: 'https://images.unsplash.com/photo-1597168425455-29d7879eb8d3?w=400&q=80', services: ['Visitor Visa Guidance', 'Documentation Support', 'Immigration Consultation', 'Travel Assistance'] },
  { name: 'Denmark', flag: '🇩🇰', region: 'Europe', image: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=400&q=80', services: ['Visitor Visa Guidance', 'Documentation Support', 'Immigration Consultation', 'Application Guidance'] },
  { name: 'Sweden', flag: '🇸🇪', region: 'Europe', image: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=400&q=80', services: ['Type C Visa', 'Visitor Visa Guidance', 'Documentation Assistance', 'Application Support'] },
  { name: 'Norway', flag: '🇳🇴', region: 'Europe', image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=400&q=80', services: ['E Visa', 'Visitor Visa Guidance', 'Documentation Support', 'Immigration Consultation'] },
  { name: 'Finland', flag: '🇫🇮', region: 'Europe', image: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?w=400&q=80', services: ['Visitor Visa Guidance', 'Documentation Support', 'Immigration Consultation', 'Travel Assistance'] },
  { name: 'Greece', flag: '🇬🇷', region: 'Europe', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=400&q=80', services: ['Visitor Visa Guidance', 'Documentation Support', 'Immigration Consultation', 'Application Guidance'] },
  { name: 'Malta', flag: '🇲🇹', region: 'Europe', image: 'https://images.unsplash.com/photo-1602088113235-229c19758e9f?w=400&q=80', services: ['Type C Tourist Visa', 'Work Visa', 'Business Visa', 'National D Visa'] },
  { name: 'Croatia', flag: '🇭🇷', region: 'Europe', image: 'https://images.unsplash.com/photo-1555990538-1637ca15734a?w=400&q=80', services: ['Visitor Visa Guidance', 'Documentation Support', 'Immigration Consultation', 'Travel Assistance'] },
  { name: 'Czech Republic', flag: '🇨🇿', region: 'Europe', image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=400&q=80', services: ['Visitor Visa Guidance', 'Documentation Support', 'Immigration Consultation', 'Application Support'] },
  { name: 'Slovakia', flag: '🇸🇰', region: 'Europe', image: 'https://images.unsplash.com/photo-1596736905867-49b1e1241bfb?w=400&q=80', services: ['Visitor Visa Guidance', 'Documentation Support', 'Immigration Consultation', 'Travel Support'] },
  { name: 'Lithuania', flag: '🇱🇹', region: 'Europe', image: 'https://images.unsplash.com/photo-1562979314-bee7453e911c?w=400&q=80', services: ['Visitor Visa Guidance', 'Documentation Support', 'Immigration Consultation', 'Application Guidance'] },
  { name: 'Latvia', flag: '🇱🇻', region: 'Europe', image: 'https://images.unsplash.com/photo-1577948000111-9c970dfe3743?w=400&q=80', services: ['Visitor Visa Guidance', 'Documentation Support', 'Immigration Consultation', 'Travel Assistance'] },
  { name: 'Estonia', flag: '🇪🇪', region: 'Europe', image: 'https://images.unsplash.com/photo-1565106552655-bbb3a0a37e37?w=400&q=80', services: ['Visitor Visa Guidance', 'Documentation Support', 'Immigration Consultation', 'Application Support'] },
  { name: 'Slovenia', flag: '🇸🇮', region: 'Europe', image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&q=80', services: ['Visitor Visa Guidance', 'Documentation Support', 'Immigration Consultation', 'Travel Support'] },
  { name: 'Romania', flag: '🇷🇴', region: 'Europe', image: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=400&q=80', services: ['Visitor Visa Guidance', 'Documentation Support', 'Immigration Consultation', 'Application Guidance'] },
  { name: 'Bulgaria', flag: '🇧🇬', region: 'Europe', image: 'https://images.unsplash.com/photo-1578922746465-3a80a228f223?w=400&q=80', services: ['Visitor Visa Guidance', 'Documentation Support', 'Immigration Consultation', 'Travel Assistance'] },
  { name: 'Luxembourg', flag: '🇱🇺', region: 'Europe', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', services: ['Visitor Visa Guidance', 'Documentation Support', 'Immigration Consultation', 'Application Support'] },
  { name: 'Ireland', flag: '🇮🇪', region: 'Europe', image: 'https://images.unsplash.com/photo-1564959130747-897fb406b9af?w=400&q=80', services: ['Visitor Visa Guidance', 'Documentation Support', 'Immigration Consultation', 'Travel Support'] },
  { name: 'Iceland', flag: '🇮🇸', region: 'Europe', image: 'https://images.unsplash.com/photo-1529963183134-61a90db47eaf?w=400&q=80', services: ['Visitor Visa Guidance', 'Documentation Support', 'Immigration Consultation', 'Application Guidance'] },
  { name: 'Cyprus', flag: '🇨🇾', region: 'Europe', image: 'https://images.unsplash.com/photo-1515859005217-8a1f08870f59?w=400&q=80', services: ['Student Visa', 'Education Guidance', 'Documentation Support', 'International Education Support'] },
  // UK & Others
  { name: 'United Kingdom', flag: '🇬🇧', region: 'Europe', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&q=80', services: ['Visitor Visa Guidance', 'Documentation Support', 'Immigration Consultation', 'Travel Assistance'] },
  // Asia Pacific
  { name: 'Australia', flag: '🇦🇺', region: 'Asia Pacific', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80', services: ['Visitor Visa Guidance', 'Documentation Support', 'Immigration Consultation', 'Travel Assistance'] },
  { name: 'New Zealand', flag: '🇳🇿', region: 'Asia Pacific', image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=400&q=80', services: ['Visitor Visa Guidance', 'Documentation Support', 'Immigration Consultation', 'Application Guidance'] },
  { name: 'Singapore', flag: '🇸🇬', region: 'Asia Pacific', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&q=80', services: ['E Pass', 'S Pass', 'Tourist Visa', 'Documentation Guidance'] },
  { name: 'Japan', flag: '🇯🇵', region: 'Asia Pacific', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&q=80', services: ['Tourist Visa', 'Work Visa', 'Documentation Guidance', 'Travel Support'] },
  { name: 'South Korea', flag: '🇰🇷', region: 'Asia Pacific', image: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=400&q=80', services: ['B1 Visa', 'B2 Visa', 'Documentation Support', 'Immigration Consultation'] },
  { name: 'Malaysia', flag: '🇲🇾', region: 'Asia Pacific', image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400&q=80', services: ['E Visa', 'Work Visa', 'Documentation Guidance', 'Immigration Consultation'] },
  // Canada & Americas
  { name: 'Canada', flag: '🇨🇦', region: 'Americas', image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&q=80', services: ['E Visa Guidance', 'TRV Application Support', 'Visitor Visa Consultation', 'Documentation Support'], special: 'TRV support available for stays more than 6 months' },
  // CIS & Middle East
  { name: 'Turkey', flag: '🇹🇷', region: 'Other', image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=400&q=80', services: ['Student Visa', 'Work Visa', 'E Visa', 'Documentation Guidance'] },
  { name: 'Georgia', flag: '🇬🇪', region: 'Other', image: 'https://images.unsplash.com/photo-1621371419543-c2a62b2d25e5?w=400&q=80', services: ['E Visa', 'Visitor Visa Guidance', 'Travel Consultation', 'Immigration Assistance'] },
  { name: 'Azerbaijan', flag: '🇦🇿', region: 'Other', image: 'https://images.unsplash.com/photo-1601392540863-9ff8cd5e8b6e?w=400&q=80', services: ['E Visa', 'Visitor Visa Guidance', 'Documentation Assistance', 'Immigration Consultation'] },
  { name: 'Armenia', flag: '🇦🇲', region: 'Other', image: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=400&q=80', services: ['E Visa Guidance', 'TRV Application Support', 'Education Guidance', 'Documentation Support'], special: 'Accommodation support available for education applicants' },
  { name: 'China', flag: '🇨🇳', region: 'Other', image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&q=80', services: ['E Visa Guidance', 'Family Visit Q Visa', 'Family Visit S Visa', 'Documentation Assistance'] },
  { name: 'Russia', flag: '🇷🇺', region: 'Other', image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=400&q=80', services: ['Work Visa', 'Student Visa', 'E Visa', 'Documentation Assistance'] },
]

const regions = ['All', 'Europe', 'Asia Pacific', 'Americas', 'Other']

function ApplyModal({ country, onClose }: { country: Country; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      window.open('https://wa.me/918098118198', '_blank')
      onClose()
    }, 1500)
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-[#030b1a] border border-cyan-500/30 rounded-2xl p-6 w-full max-w-md shadow-2xl shadow-cyan-500/10"
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-2xl">{country.flag}</div>
            <h3 className="text-white font-bold text-lg">{country.name} — Apply Now</h3>
          </div>
          <button onClick={onClose} className="text-white/40 hover:text-white text-2xl leading-none">×</button>
        </div>
        {submitted ? (
          <div className="text-center py-8">
            <div className="text-5xl mb-3">✅</div>
            <p className="text-white font-semibold">Inquiry Sent!</p>
            <p className="text-white/50 text-sm mt-1">Redirecting to WhatsApp...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input required name="name" placeholder="Full Name" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-cyan-400/50"/>
            <input required name="phone" placeholder="Phone Number" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-cyan-400/50"/>
            <input name="country" value={country.name} readOnly className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/60 text-sm"/>
            <textarea name="message" placeholder="Your message..." rows={3} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-cyan-400/50 resize-none"/>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-semibold text-sm mt-1 cursor-pointer"
            >
              Submit Inquiry
            </motion.button>
          </form>
        )}
      </motion.div>
    </motion.div>
  )
}

function CountryCard({ country, index }: { country: Country; index: number }) {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.4, delay: (index % 6) * 0.06 }}
        whileHover={{ y: -8, rotateX: 2, rotateY: 2 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="group bg-white/[0.04] backdrop-blur border border-white/10 hover:border-cyan-400/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(56,189,248,0.15)] cursor-default"
      >
        {/* Image */}
        <div className="relative h-40 overflow-hidden">
          <img
            src={country.image}
            alt={country.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030b1a] via-transparent to-transparent" />
          <div className="absolute top-3 right-3 text-2xl">{country.flag}</div>
          <div className="absolute bottom-3 left-3">
            <h3 className="text-white font-bold text-lg">{country.name}</h3>
            <span className="text-cyan-400 text-xs">{country.region}</span>
          </div>
        </div>

        {/* Services */}
        <div className="p-4">
          <div className="flex flex-col gap-1.5 mb-4">
            {country.services.slice(0, 3).map(s => (
              <div key={s} className="flex items-center gap-2 text-white/60 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60 flex-shrink-0" />
                {s}
              </div>
            ))}
            {country.services.length > 3 && <div className="text-cyan-400/50 text-xs">+{country.services.length - 3} more</div>}
          </div>
          {country.special && (
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-2 mb-3 text-orange-300 text-xs">{country.special}</div>
          )}
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setModalOpen(true)}
              className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/30 text-white/70 hover:text-white text-xs py-2 rounded-lg font-medium transition-all cursor-pointer"
            >
              Explore
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(56,189,248,0.3)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setModalOpen(true)}
              className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs py-2 rounded-lg font-semibold cursor-pointer"
            >
              Apply Now
            </motion.button>
          </div>
        </div>
      </motion.div>
      <AnimatePresence>
        {modalOpen && <ApplyModal country={country} onClose={() => setModalOpen(false)} />}
      </AnimatePresence>
    </>
  )
}

export default function Countries() {
  const [activeRegion, setActiveRegion] = useState('All')
  const [visibleCount, setVisibleCount] = useState(12)

  const filtered = countries.filter(c => activeRegion === 'All' || c.region === activeRegion)
  const visible = filtered.slice(0, visibleCount)

  return (
    <section id="countries" className="py-24 bg-[#020912] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/4 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-cyan-400 text-xs font-medium tracking-widest uppercase">Global Destinations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3">
            Global Destinations
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Supported</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">Expert visa documentation guidance and immigration consultation for worldwide destinations.</p>
        </motion.div>

        {/* Region filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {regions.map(r => (
            <motion.button
              key={r}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => { setActiveRegion(r); setVisibleCount(12) }}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                activeRegion === r
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                  : 'bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-cyan-400/30'
              }`}
            >
              {r}
            </motion.button>
          ))}
        </div>

        {/* Country grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {visible.map((c, i) => <CountryCard key={c.name} country={c} index={i} />)}
        </div>

        {/* Load more */}
        {visibleCount < filtered.length && (
          <div className="text-center mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setVisibleCount(p => p + 12)}
              className="bg-white/5 border border-cyan-500/30 text-cyan-400 px-8 py-3 rounded-xl font-semibold text-sm hover:bg-cyan-500/10 transition-all cursor-pointer"
            >
              Load More Countries ({filtered.length - visibleCount} remaining)
            </motion.button>
          </div>
        )}
      </div>
    </section>
  )
}
