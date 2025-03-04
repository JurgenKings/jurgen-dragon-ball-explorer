"use client"
import React, { useState } from "react"
import { motion } from "motion/react"
import { FaRocket } from "react-icons/fa"
import Image from "next/image"
import Subtitle from "@/components/Subtitle"

function BannerPlanet(): React.JSX.Element {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative min-h-screen overflow-hidden z-50">
      <div className="absolute inset-0 opacity-20" />

      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Subtitle>Explora los Reinos Cósmicos de Dragon Ball</Subtitle>

            <p className="text-gray-300 text-lg">
              Viaja a través de planetas misteriosos, cada uno de los cuales esconde secretos del universo de Dragon Ball. Descubre poderes ancestrales y guerreros legendarios en todo el cosmos.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#00BFFF] text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 hover:bg-[#0099CC] transition-all duration-300 shadow-lg hover:shadow-[#00BFFF]/50 relative z-50"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span>Explorar Planetas</span>
              <motion.span
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaRocket className="text-xl" />
              </motion.span>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative w-full h-[400px] lg:h-[499px] flex items-center justify-center">
              <Image
                src="/images/planet-1.png"
                alt="Mystical Planet"
                width={710}
                height={699}
              />
            </div>
          </motion.div>
        </div>
      </div>


    </div>
  )
}

export default BannerPlanet