"use client"
import React, { useState } from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { FaDna } from "react-icons/fa"
import { ICharacter } from "@/interfaces/ICharacter"
import { IoMdPlanet } from "react-icons/io"

interface CharacterDetailProps {
  character: ICharacter
}

function CharacterDetail({ character }: CharacterDetailProps): React.JSX.Element {

  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  const [isBiographyExpanded, setIsBiographyExpanded] = useState<boolean>(false)

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 }
    }
  }

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-bg-primary dark:bg-dark-bg-primary text-text-primary dark:text-dark-text-primary p-4 md:p-8 mb-16"
      aria-labelledby="character-detail-title"
    >
      <h2 className="sr-only" id="character-detail-title">Detalle de {character.name}</h2>
      <motion.div className="container mx-auto relative z-10">
        <motion.div className="relative mb-8 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-60 h-60 md:w-80 md:h-80 mx-auto relative"
          >
            <Image
              src={character.image}
              alt={character.name}
              className="w-full h-full rounded-full object-cover border-4 border-db-orange dark:border-db-blue shadow-lg shadow-db-orange/50 dark:shadow-db-blue/50"
              width={512}
              height={512}
            />
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-db-orange/20 dark:bg-db-blue/20 -z-10"
            />
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold mt-6 text-db-orange dark:text-db-yellow"
            variants={containerVariants}
          >
            {character.name}
          </motion.h2>

          <motion.div className="flex justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <FaDna className="text-db-orange dark:text-db-blue" />
              <span>{character.race ? character.race : "Desconocido"}</span>
            </div>
            <div className="flex items-center gap-2">
              <IoMdPlanet className="text-db-orange dark:text-db-blue" />
              <span>{character.planet ? character.planet : "Desconocido"}</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="bg-bg-hover dark:bg-dark-bg-hover rounded-lg p-6 mb-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Descripción</h2>
          <motion.p className="text-text-primary dark:text-dark-text-primary">
            {isExpanded
              ? character.description
              : `${character.description.slice(0, 600)}...`}
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 px-4 py-2 bg-orange-700 dark:bg-blue-700 rounded-full text-white dark:text-dark-text-primary hover:bg-[#E94560]/80 transition-colors relative z-10"
          >
            {isExpanded ? "Leer Menos" : "Leer Más"}
          </motion.button>
        </motion.div>

        {character.transformations[0].image && (
          <motion.div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Transformaciones
            </h2>
            <div className="flex overflow-x-auto gap-4 pb-4">
              {character.transformations.map((transform, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-72 bg-bg-hover dark:bg-dark-bg-hover rounded-lg overflow-hidden"
                >
                  <Image
                    src={transform.image ? transform.image : "/images/not-found.jpg"}
                    alt={transform.title}
                    className="w-full h-60 object-cover trasform hover:scale-110 transition-transform duration-300"
                    width={512}
                    height={512}
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-db-orange dark:text-db-yellow">
                      {transform.title}
                    </h3>
                    <p className="text-sm mt-2 text-text-primary dark:text-dark-text-primary">
                      {transform.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div className="bg-bg-hover dark:bg-dark-bg-hover rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Biografía</h2>
          <div className="overflow-y-auto">
            <p className="text-text-primary dark:text-dark-text-primary">
              {isBiographyExpanded
                ? character.biography
                : `${character.biography.slice(0, 600)}...`}
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsBiographyExpanded(!isBiographyExpanded)}
            className="mt-4 px-4 py-2 bg-orange-700 dark:bg-blue-700 rounded-full text-white dark:text-dark-text-primary hover:bg-[#E94560]/80 transition-colors relative z-10"
          >
            {isBiographyExpanded ? "Leer Menos" : "Leer Más"}
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default CharacterDetail