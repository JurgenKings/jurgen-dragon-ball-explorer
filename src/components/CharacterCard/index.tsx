"use client"
import React from "react"
import { motion } from "motion/react"
import { GiEnergyShield, GiPowerLightning } from "react-icons/gi"
import { IoMdPlanet } from "react-icons/io"

function CharacterCard({ character }): React.JSX.Element {

  return (
    <motion.div className="relative w-[300px] h-[450px] bg-[#2D3748] rounded-xl overflow-hidden"
      whileHover={{ scale: 1.05, rotateY: 5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-[60%] overflow-hidden" >
        <motion.img
          src={character.image}
          alt={character.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D3748] to-transparent" />
      </div>

      <div className="p-6 space-y-4" >
        <h2 className="text-[#FFD700] text-2xl font-bold" > {character.name} </h2>

        <div className="space-y-2" >
          <div className="flex items-center space-x-2" >
            <IoMdPlanet className="text-db-orange text-xl" />
            <span className="text-gray-300" > {character.planet ? character.planet : "Desconocido"} </span>
          </div>
          <p className="text-gray-400" > Raza: {character.race ? character.race : "Desconocido"} </p>
          <p className="text-gray-400" > Genero: {character.genre ? character.genre : "Desconocido"} </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#48BB78] via-[#4299E1] to-[#E53E3E]" />
    </motion.div>
  )
}

export default CharacterCard