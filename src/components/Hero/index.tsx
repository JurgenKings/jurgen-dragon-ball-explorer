"use client"
import React, { useState } from "react"
import { motion } from "motion/react"
import Header from "@/components/Header"
import { FaLongArrowAltRight } from "react-icons/fa"

function Hero(): React.JSX.Element {

  const [darkMode, setDarkMode] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } }
  }

  return (

    <div className={`min-h-screen ${darkMode ? "bg-[#0F0F0F] text-white" : "bg-[#F5F5F5] text-[#0F0F0F]"} transition-colors duration-300`}>
      <Header />

      <main className="relative pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={contentVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Jurgen Dragon Ball Explorer
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl mb-12 opacity-90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Embark on an epic journey through the Dragon Ball universe. Discover legendary characters, explore mystical planets, and unleash your inner warrior.
            </motion.p>

            <motion.button
              className={`px-8 py-4 text-lg font-bold rounded-full ${darkMode ? "bg-[#00BFFF]" : "bg-[#FF6600]"} text-white shadow-lg flex items-center justify-center mx-auto space-x-2 hover:shadow-2xl transition-shadow`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore the Universe</span>

              <FaLongArrowAltRight />
            </motion.button>
          </motion.div>
        </div>

        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-4 h-4 rounded-full ${darkMode ? "bg-[#00BFFF]" : "bg-[#FF6600]"} opacity-20`}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, 30, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  )
}

export default Hero