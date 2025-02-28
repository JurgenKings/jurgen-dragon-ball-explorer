"use client"
import React, { useState } from "react"
import { motion } from "motion/react"
import { FaLongArrowAltRight } from "react-icons/fa"
import Header from "@/components/Header"
import MotionTransition from "@/components/MotionTransition"
import { useTheme } from "@/context/ThemeContext"

function Hero(): React.JSX.Element {

  const { isDarkMode } = useTheme()
  const [isLoaded, setIsLoaded] = useState(false)

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } }
  }

  return (

    <div className="min-h-screen transition-colors duration-300 bg-bg-primary dark:bg-dark-bg-primary">
      <Header />

      <main className="relative pt-32 pb-16">
        <div className="container mx-auto px-4">
          <MotionTransition position="right" className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-text-primary dark:text-dark-text-primary">
              Jurgen Dragon Ball Explorer
            </h1>

            <motion.p
              className="text-xl md:text-2xl mb-12 opacity-90 text-text-primary dark:text-dark-text-primary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Embárcate en un viaje épico por el universo de Dragon Ball. Descubre personajes legendarios, explora planetas místicos y libera al guerrero que llevas dentro.
            </motion.p>

            <motion.button
              className={`px-8 py-4 text-lg font-bold rounded-full ${isDarkMode ? "bg-[#00BFFF]" : "bg-[#FF6600]"} text-white shadow-lg flex items-center justify-center mx-auto space-x-2 hover:shadow-2xl transition-shadow`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explorar el Universo</span>

              <FaLongArrowAltRight />
            </motion.button>
          </MotionTransition>
        </div>
      </main>
    </div>
  )
}

export default Hero