import { useState } from 'react'
import { motion } from 'framer-motion'

const destinations: Record<string, string[]> = {
  'Skilled Worker': ['Germany', 'Canada', 'Australia', 'Netherlands', 'Switzerland'],
  'Unskilled Worker': ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain'],
  'Work Visa': ['UK', 'Germany', 'Canada', 'Australia', 'USA'],
  'Visit Visa': ['Schengen Zone', 'UK', 'USA', 'Canada', 'Australia'],
  'Experience': ['Germany', 'Netherlands', 'Canada', 'Australia', 'Switzerland'],
  'Education': ['UK', 'Germany', 'Canada', 'Australia', 'Netherlands'],
  'Preferred Country': ['Germany', 'Canada', 'Australia', 'Netherlands', 'UK'],
}

export default function DestinationFinder() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Skilled Worker')
  const [recommended, setRecommended] = useState<string[]>(destinations['Skilled Worker'])

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setRecommended(destinations[category])
  }

  return (
    <section id="destination-finder" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#020912] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-600/5" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Find Your <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Perfect Destination</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Discover ideal countries based on your profile and requirements
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-12"
        >
          {Object.keys(destinations).map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategoryChange(category)}
              className={`py-3 px-4 rounded-xl font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-white/5 border border-white/20 text-white/70 hover:bg-white/10'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Recommended Destinations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-[#050e1f] to-[#020912] border border-cyan-500/20 rounded-2xl p-8 mb-8"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Recommended for: <span className="text-cyan-400">{selectedCategory}</span></h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {recommended.map((country, index) => (
              <motion.div
                key={country}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all"
              >
                <div className="text-4xl mb-3">🌍</div>
                <h4 className="text-white font-bold">{country}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(56,189,248,0.4)' }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg shadow-cyan-500/25 cursor-pointer"
          >
            Find My Destination
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
