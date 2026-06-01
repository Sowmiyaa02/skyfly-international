import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    // Simulate sending
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
    setTimeout(() => {
      window.open('https://wa.me/918098118198', '_blank')
    }, 2000)
  }

  return (
    <section id="contact" className="py-24 bg-[#030b1a] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-cyan-400 text-xs font-medium tracking-widest uppercase">Contact Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Start Your
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> Global Journey</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.04] border border-white/10 rounded-2xl p-6"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.5 }}
                    className="text-6xl mb-4"
                  >✅</motion.div>
                  <h3 className="text-white font-bold text-xl mb-2">Inquiry Sent!</h3>
                  <p className="text-white/60 text-sm">Thank you for reaching out. Redirecting you to WhatsApp for immediate assistance...</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                >
                  <h3 className="text-white font-bold text-lg mb-1">Send Us an Inquiry</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/50 text-xs mb-1.5 block">Full Name *</label>
                      <input required name="name" placeholder="Your full name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-cyan-400/50 transition-colors"/>
                    </div>
                    <div>
                      <label className="text-white/50 text-xs mb-1.5 block">Phone Number *</label>
                      <input required name="phone" placeholder="+91 XXXXXXXXXX" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-cyan-400/50 transition-colors"/>
                    </div>
                  </div>
                  <div>
                    <label className="text-white/50 text-xs mb-1.5 block">Email Address</label>
                    <input name="email" type="email" placeholder="your@email.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-cyan-400/50 transition-colors"/>
                  </div>
                  <div>
                    <label className="text-white/50 text-xs mb-1.5 block">Country Interested *</label>
                    <select required name="country" className="w-full bg-[#030b1a] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-400/50 transition-colors">
                      <option value="">Select a country...</option>
                      {['Germany','France','Spain','Portugal','Italy','Netherlands','Belgium','Switzerland','Austria','Poland','UK','Australia','Canada','Singapore','Japan','South Korea','Malaysia','Turkey','Georgia','Azerbaijan','Armenia','China','Russia','Other'].map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-white/50 text-xs mb-1.5 block">Message</label>
                    <textarea name="message" rows={4} placeholder="Tell us about your travel plans and any specific requirements..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-cyan-400/50 transition-colors resize-none"/>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(56,189,248,0.3)' }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3.5 rounded-xl font-bold text-sm cursor-pointer flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {loading ? (
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }} className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"/>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
                        Send Inquiry
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            {[
              {
                icon: '📞',
                label: 'Phone',
                value: '8098118198',
                link: 'tel:8098118198',
                linkLabel: 'Call Now',
              },
              {
                icon: '📧',
                label: 'Email',
                value: 'adminskyfly2026@gmail.com',
                link: 'mailto:adminskyfly2026@gmail.com',
                linkLabel: 'Send Email',
              },
              {
                icon: '📍',
                label: 'Address',
                value: 'NO:54 (1st Floor), Vanapattarai Street, Trichy, Tamil Nadu – 620002, India',
                link: 'https://maps.google.com/?q=Vanapattarai+Street+Trichy+Tamil+Nadu+620002',
                linkLabel: 'View on Map',
              },
              {
                icon: '🕐',
                label: 'Office Hours',
                value: 'Mon – Sat: 10:00 AM – 5:30 PM\nSunday: Closed',
                link: null,
                linkLabel: null,
              },
            ].map(info => (
              <div key={info.label} className="bg-white/[0.03] border border-white/8 hover:border-cyan-400/20 rounded-xl p-4 flex items-start gap-4 transition-all group">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-xl flex-shrink-0">{info.icon}</div>
                <div>
                  <div className="text-white/40 text-xs mb-0.5">{info.label}</div>
                  <div className="text-white/80 text-sm whitespace-pre-line">{info.value}</div>
                  {info.link && (
                    <a href={info.link} target={info.link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-cyan-400 text-xs hover:text-cyan-300 transition-colors mt-1 inline-block">
                      {info.linkLabel} →
                    </a>
                  )}
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="bg-white/[0.03] border border-white/8 rounded-xl p-4">
              <div className="text-white/40 text-xs mb-3">Connect With Us</div>
              <div className="flex gap-3">
                <a href="https://wa.me/918098118198" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-500/10 border border-green-400/20 rounded-xl px-3 py-2 text-green-400 text-xs hover:bg-green-500/20 transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  WhatsApp
                </a>
                <a href="https://instagram.com/skyfly__international" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-pink-500/10 border border-pink-400/20 rounded-xl px-3 py-2 text-pink-400 text-xs hover:bg-pink-500/20 transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  Instagram
                </a>
                <a href="https://facebook.com/Skyfly-Overseas" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 rounded-xl px-3 py-2 text-blue-400 text-xs hover:bg-blue-500/20 transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  Facebook
                </a>
              </div>
            </div>

            {/* Map embed placeholder */}
            <div className="bg-white/[0.03] border border-white/8 rounded-xl overflow-hidden h-48 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1234567890!2d78.6868!3d10.8054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVanapattarai+Street%2C+Trichy%2C+Tamil+Nadu+620002!5e0!3m2!1sen!2sin!4v1234567890"
                className="w-full h-full"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SkyFly International Office Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
