"use client"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { motion } from "motion/react"
import { FaRocket } from "react-icons/fa"
import Subtitle from "@/components/Subtitle"

function BannerPlanet(): React.JSX.Element {

  const router = useRouter()

  const [isHovered, setIsHovered] = useState<boolean>(false)

  const handleNavigationPlanets = () => {
    router.push("/planetas")
  }

  return (
    <section className="relative min-h-screen overflow-hidden z-10">
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

            <p className="text-text-primary dark:text-dark-text-primary text-lg" aria-label="Texto de descripción">
              Viaja a través de planetas misteriosos, cada uno de los cuales esconde secretos del universo. Descubre poderes ancestrales y guerreros legendarios en todo el cosmos.
            </p>

            <motion.button
              className="rounded-full bg-orange-700 dark:bg-blue-700 text-white dark:text-dark-text-primary px-8 py-4 font-semibold flex items-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-orange-500/50 dark:hover:shadow-blue-500/50 relative z-10"
              aria-label="Ir a planetas"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNavigationPlanets}
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
            <figure className="relative w-full h-[400px] lg:h-[499px] flex items-center justify-center">
              <Image
                src="/images/planet-1.png"
                alt="Mystical Planet"
                width={710}
                height={699}
              />
            </figure>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BannerPlanet