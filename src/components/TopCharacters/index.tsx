"use client"
import React, { useState, useEffect } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import CharacterCard from "@/components/CharacterCard"
import { ICharacter } from "@/interfaces/ICharacter"

interface TopCharactersProps {
  characters: ICharacter[]
}

function TopCharacters({ characters }: TopCharactersProps) {

  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [visibleImagesCount, setVisibleImagesCount] = useState<number>(4)

  useEffect(() => {
    const interval: NodeJS.Timeout | undefined = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % characters?.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [characters.length, currentIndex])

  useEffect(() => {
    const updateVisibleImagesCount = () => {
      if (window.innerWidth < 768) {
        setVisibleImagesCount(1)
      } else if (window.innerWidth < 1024) {
        setVisibleImagesCount(2)
      } else if (window.innerWidth < 1550) {
        setVisibleImagesCount(3)
      } else {
        setVisibleImagesCount(4)
      }
    }
    updateVisibleImagesCount() 
    window.addEventListener("resize", updateVisibleImagesCount)
    return () => window.removeEventListener("resize", updateVisibleImagesCount)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % characters?.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + characters?.length) % characters?.length)
  }

  const getVisibleItems = () => {
    const visibleItems: ICharacter[] = []
    const itemCount = Math.min(visibleImagesCount, characters.length)
    for (let i = 0; i < itemCount; i++) {
      const index = (currentIndex + i) % characters?.length
      visibleItems.push(characters[index])
    }
    return visibleItems
  }

  return (
    <section className="p-8 flex flex-col items-center justify-center">
      <div className="relative w-full overflow-hidden container mx-auto">
        <div className="flex justify-center items-center">
          <button
            className="absolute left-4 z-10 p-2 rounded-full bg-bg-hover dark:bg-dark-bg-hover text-db-orange dark:text-db-yellow hover:bg-bg-hover/80 dark:hover:bg-dark-bg-hover/80 focus:outline-none"
            aria-label="Anterior"
            onClick={prevSlide}
          >
            <FiChevronLeft size={24} />
          </button>

          <div className="flex gap-6 justify-center items-center py-8 px-4">
            {getVisibleItems().map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>

          <button
            className="absolute right-4 z-10 p-2 rounded-full bg-bg-hover dark:bg-dark-bg-hover text-db-orange dark:text-db-yellow hover:bg-bg-hover/80 dark:hover:bg-dark-bg-hover/80 focus:outline-none"
            aria-label="Siguiente"
            onClick={nextSlide}
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default TopCharacters