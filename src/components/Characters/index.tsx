"use client"
import React, { useState } from "react"
import { motion } from "motion/react"
import CharacterCard from "@/components/CharacterCard"
import SearchBarWithActions from "@/components/SearchBarWithActions"


function Characters({ characters }): React.JSX.Element {

  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false)
  const [searchQuery, setSearchQuery] = useState<string>("")

  const handleFilterToggle = () => {
    setIsFilterOpen(!isFilterOpen)
  }

  return (
    <div className="min-h-screen bg-[#1A202C]">
      <div className="h-auto w-full bg-bg-primary dark:bg-dark-bg-primary p-4">
        <div className="max-w-[1440px] mx-auto">
          <div className="w-full max-w-[1440px] mx-auto px-4 py-6 rounded-lg lg:rounded-b-none">
            <div className="flex flex-col space-y-4 md:space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-6"
              >
                Lista de mis productos
              </motion.h1>

              <SearchBarWithActions
                handleFilterToggle={handleFilterToggle}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />

              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {characters?.map((character) => (
                  <CharacterCard key={character.id} character={character} />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Characters