"use client"
import React from "react"
import { motion } from "motion/react"
import { GiExplodingPlanet } from "react-icons/gi"
import LimitLineText from "@/components/LimitLineText"
import Image from "next/image"
import { IPlanet } from "@/interfaces/IPlanet"

interface PlanetCardProps {
  planet: IPlanet;
}

function PlanetCard({ planet }: PlanetCardProps): React.JSX.Element {

  return (
    <motion.div className="relative w-[320px] h-[600px] bg-bg-hover dark:bg-dark-bg-hover rounded-xl overflow-hidden"
      whileHover={{ scale: 1.05, rotateY: 5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-[50%] overflow-hidden">
        <Image
          src={planet.image}
          alt={planet.name}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
          loading="lazy"
          width={512}
          height={512}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent dark:from-dark-bg-hover to-transparent" />
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-db-orange dark:text-db-yellow text-2xl font-bold" >
          <LimitLineText text={planet.name} limit={1} />
        </h3>

        <div className="flex items-center space-x-2 absolute top-0 right-0 bg-bg-primary dark:bg-dark-bg-hover rounded-full px-4 py-2" >
          <GiExplodingPlanet className="text-db-orange text-xl" />
          <LimitLineText
            className="text-text-primary dark:text-dark-text-primary"
            text={planet.isDestroyed ? "Destruido" : "Vivo"}
            limit={1}
          />
        </div>

        <div>
          <p>
            <LimitLineText text={planet.description} limit={10} maxHeight={200} className="text-text-primary dark:text-dark-text-primary text-sm" />
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#48BB78] via-[#4299E1] to-[#E53E3E]" />
    </motion.div >
  )
}

export default PlanetCard