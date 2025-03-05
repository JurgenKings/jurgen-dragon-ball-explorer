"use client"
import React from "react"
import { motion } from "motion/react"
import { GiExplodingPlanet } from "react-icons/gi"
import LimitLineText from "@/components/LimitLineText"

function PlanetCard({ planet }): React.JSX.Element {

  return (
    <motion.div className="relative w-[320px] h-[380px] bg-[#2D3748] rounded-xl overflow-hidden"
      whileHover={{ scale: 1.05, rotateY: 5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-[60%] overflow-hidden" >
        <motion.img
          src={planet.image}
          alt={planet.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D3748] to-transparent" />
      </div>

      <div className="p-6 space-y-4" >
        <h3 className="text-db-yellow text-2xl font-bold" >
          <LimitLineText text={planet.name} limit={1} />
        </h3>

        <div className="space-y-2" >
          <div className="flex items-center space-x-2" >
            <GiExplodingPlanet className="text-db-orange text-xl" />
            <LimitLineText
              className="text-gray-300"
              text={planet.isDestroyed ? "Destruido" : "Vivo"}
              limit={1}
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#48BB78] via-[#4299E1] to-[#E53E3E]" />
    </motion.div >
  )
}

export default PlanetCard