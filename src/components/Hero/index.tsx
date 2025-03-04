"use client"
import React, { useState } from "react"
import { motion } from "motion/react"
import { FaLongArrowAltRight } from "react-icons/fa"
import MotionTransition from "@/components/MotionTransition"
import { useRouter } from "next/navigation"
import { FaRocket } from "react-icons/fa6"
import { NextFont } from "next/dist/compiled/@next/font"

interface HeroProps {
  font: NextFont;
}

function Hero({ font }: HeroProps): React.JSX.Element {

  const router = useRouter()
  const [isHovered, setIsHovered] = useState<boolean>(false)

  const handleNavigationCharacters = () => {
    router.push("/personajes")
  }

  return (
    <div className="min-h-screen transition-colors duration-300 bg-bg-primary dark:bg-dark-bg-primary flex justify-center items-center">
      <div className="relative mb-20">
        <div className="container mx-auto px-4">
          <MotionTransition position="right" className="max-w-4xl mx-auto text-center">
            <h1 className={`text-5xl md:text-7xl font-bold leading-tight mb-8 text-db-orange dark:text-db-blue ${font.className}`}>
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
              className="px-8 py-4 text-lg font-bold rounded-full bg-db-orange dark:bg-db-blue text-white shadow-lg flex items-center justify-center mx-auto space-x-2 hover:shadow-2xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNavigationCharacters}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span>Explorar el Universo</span>

              <motion.span
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaRocket className="text-xl" />
              </motion.span>
            </motion.button>
          </MotionTransition>
        </div>
      </div>
    </div>
  )
}

export default Hero