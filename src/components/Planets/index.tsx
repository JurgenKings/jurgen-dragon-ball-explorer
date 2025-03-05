"use client"
import React, { useEffect, useState } from "react"
import { motion } from "motion/react"
import SearchBar from "@/components/SearchBarWithActions"
import { IPlanet } from "@/interfaces/IPlanet"
import PlanetCard from "@/components/PlanetCard"

interface PlanetsProps {
  initialPlanets: IPlanet[]
}

function Planets({ initialPlanets }: PlanetsProps): React.JSX.Element {

  const [searchQuery, setSearchQuery] = useState<string>("")

  const [planets, setPlanets] = useState<IPlanet[]>(initialPlanets)
  const [filteredPlanets, setFilteredPlanets] = useState<IPlanet[]>(initialPlanets)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    if (searchQuery.length >= 2) {
      const filtered = planets.filter(planet =>
        planet.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setFilteredPlanets(filtered)

    } else {
      setFilteredPlanets(planets)
    }
  }, [searchQuery, planets])

  return (
    <div className="min-h-screen bg-[#1A202C]">
      <div className="h-auto w-full bg-bg-primary dark:bg-dark-bg-primary p-4">
        <div className="max-w-[1440px] mx-auto">
          <div className="w-full max-w-[1440px] mx-auto px-4 py-6 rounded-lg lg:rounded-b-none">
            <div className="flex flex-col space-y-4 md:space-y-6">

              <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                placeholder="Buscar planetas..."
              />

              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mx-auto"
              >
                {filteredPlanets?.map((planet) => (
                  <PlanetCard key={planet.id} planet={planet} />
                ))}
              </motion.div>

              {loading && <div className="text-center text-text-primary dark:text-dark-text-primary">Cargando...</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Planets