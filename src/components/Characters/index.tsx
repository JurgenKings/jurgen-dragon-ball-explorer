"use client"
import React, { useEffect, useState } from "react"
import { motion } from "motion/react"
import CharacterCard from "@/components/CharacterCard"
import { getDragonBallGTCharacters, getDragonBallSuperCharacters, getDragonBallZCharacters, getDragons } from "@/services/characters/character"
import { ICharacter } from "@/interfaces/ICharacter"
import SearchBar from "@/components/SearchBarWithActions"

interface CharactersProps {
  initialCharacters: ICharacter[]
}

function Characters({ initialCharacters }: CharactersProps): React.JSX.Element {

  const [searchQuery, setSearchQuery] = useState<string>("")

  const [characters, setCharacters] = useState<ICharacter[]>(initialCharacters)
  const [filteredCharacters, setFilteredCharacters] = useState<ICharacter[]>(initialCharacters)
  const [loading, setLoading] = useState<boolean>(false)
  const [currentSagaIndex, setCurrentSagaIndex] = useState<number>(0)
  const sagas = [
    getDragonBallZCharacters,
    getDragonBallGTCharacters,
    getDragonBallSuperCharacters,
    getDragons
  ]

  const loadMoreCharacters = async () => {

    if (loading || currentSagaIndex >= sagas.length) return

    try {
      setLoading(true)

      const newCharacters = await sagas[currentSagaIndex]()
      setCharacters((prev) => [...prev, ...newCharacters])
      setFilteredCharacters((prev) => [...prev, ...newCharacters])

      setCurrentSagaIndex((prev) => prev + 1)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (searchQuery.length >= 2) {
      const filtered = characters.filter(character =>
        character.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setFilteredCharacters(filtered)
    } else {
      setFilteredCharacters(characters)
    }
  }, [searchQuery, characters])

  return (
    <div className="min-h-screen bg-[#1A202C]">
      <div className="h-auto w-full bg-bg-primary dark:bg-dark-bg-primary p-4">
        <div className="max-w-[1440px] mx-auto">
          <div className="w-full max-w-[1440px] mx-auto px-4 py-6 rounded-lg lg:rounded-b-none">
            <div className="flex flex-col space-y-4 md:space-y-6">

              <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                placeholder="Buscar personajes..."
              />

              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mx-auto"
              >
                {filteredCharacters?.map((character) => (
                  <CharacterCard key={character.id} character={character} />
                ))}
              </motion.div>

              {loading && <div className="text-center text-text-primary dark:text-dark-text-primary">Cargando...</div>}

              {currentSagaIndex < sagas.length && (
                <button
                  className="mt-4 bg-orange-700 dark:bg-blue-700 text-white dark:text-dark-text-primary py-2 px-4 rounded relative z-10 hover:shadow-lg transition-shadow hover:shadow-orange-500/50 dark:hover:shadow-blue-500/50"
                  disabled={loading}
                  onClick={loadMoreCharacters}
                >
                  Cargar más personajes
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Characters