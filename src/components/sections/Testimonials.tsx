import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    name: 'Priya Sharma',
    country: 'Germany',
    flag: '🇩🇪',
    rating: 5,
    text: 'SkyFly International made my dream of visiting Europe a reality. Their team handled all the documentation professionally and transparently. I felt supported every step of the way.',
    avatar: 'PS',
  },
  {
    name: 'Raj Kumar',
    country: 'France',
    flag: '🇫🇷',
    rating: 5,
    text: 'Excellent service! The team was very knowledgeable and guided me through the entire visa process. The consultation was thorough and the support was outstanding.',
    avatar: 'RK',
  },
  {
    name: 'Anita Patel',
    country: 'Spain',
    flag: '🇪🇸',
    rating: 5,
    text: 'I was confused about the documentation requirements, but the SkyFly team explained everything clearly. Their professional approach gave me confidence in the process.',
    avatar: 'AP',
  },
  {
    name: 'Suresh Reddy',
    country: 'Netherlands',
    flag: '🇳🇱',
    rating: 5,
    text: 'The consultation was very helpful. The advisors were patient and answered all my questions. I would highly recommend SkyFly International to anyone planning international travel.',
    avatar: 'SR',
  },
  {
    name: 'Meera Nair',
    country: 'Portugal',
    flag: '🇵🇹',
    rating: 5,
    text: 'Professional and transparent service from start to finish. The team at SkyFly guided me through every step with expertise and care. Truly a premium experience.',
    avatar: 'MN',
  },
  {
    name: 'Vikram Singh',
    country: 'Canada',
    flag: '🇨🇦',
    rating: 5,
    text: 'I consulted SkyFly for my Canada TRV application and they provided exceptional guidance. Their knowledge of the documentation requirements was impressive.',
    avatar: 'VS',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % testimonials.length), 4000)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="testimonials" className="py-24 bg-[#030b1a] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/4 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-cyan-400 text-xs font-medium tracking-widest uppercase">Client Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Success
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> Stories</span>
          </h2>
        </motion.div>

        {/* Featured testimonial */}
        <div className="max-w-3xl mx-auto mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white/[0.05] border border-cyan-400/20 rounded-2xl p-8 text-center"
            >
              <div className="flex justify-center mb-4">
                <Stars count={testimonials[current].rating} />
              </div>
              <p className="text-white/80 text-lg leading-relaxed italic mb-6">
                "{testimonials[current].text}"
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold">
                  {testimonials[current].avatar}
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">{testimonials[current].name}</div>
                  <div className="text-cyan-400 text-sm">{testimonials[current].flag} Visited {testimonials[current].country}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${i === current ? 'bg-cyan-400 w-6' : 'bg-white/20'}`}
              />
            ))}
          </div>
        </div>

        {/* Smaller cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              onClick={() => setCurrent(i)}
              className={`bg-white/[0.03] border rounded-xl p-4 cursor-pointer transition-all ${i === current ? 'border-cyan-400/40' : 'border-white/8 hover:border-white/15'}`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white text-xs font-semibold">{t.name}</div>
                  <div className="text-cyan-400/70 text-[10px]">{t.flag} {t.country}</div>
                </div>
              </div>
              <p className="text-white/50 text-xs leading-relaxed line-clamp-2">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
