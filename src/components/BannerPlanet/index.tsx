"use client"
import React, { useState, useEffect } from "react"
import { motion } from "motion/react"
import { FaRocket } from "react-icons/fa"

function BannerPlanet(): React.JSX.Element {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1539721972319-f0e80a00d424')] bg-cover bg-center" />

      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              className="text-4xl lg:text-6xl font-bold text-[#FF6600] leading-tight"
              whileHover={{ scale: 1.02 }}
            >
              Explore the Cosmic Realms of Dragon Ball
            </motion.h1>

            <p className="text-gray-300 text-lg">
              Journey through mysterious planets, each holding secrets of the Dragon Ball universe. Discover ancient powers and legendary warriors across the cosmos.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#00BFFF] text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 hover:bg-[#0099CC] transition-all duration-300 shadow-lg hover:shadow-[#00BFFF]/50"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span>Explore Planets</span>
              <motion.span
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaRocket className="text-xl" />
              </motion.span>
            </motion.button>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="relative w-full h-[400px] lg:h-[600px]"
            >
              <img
                src="https://images.unsplash.com/photo-1614728263952-84ea256f9679"
                alt="Mystical Planet"
                className="absolute inset-0 w-full h-full object-cover rounded-full shadow-2xl shadow-[#8A2BE2]/30"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6600]/20 to-[#8A2BE2]/20 rounded-full" />
            </motion.div>

            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-4 border-[#8A2BE2]/30 rounded-full"
            />
          </motion.div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: ["-100%", "100%"],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default BannerPlanet