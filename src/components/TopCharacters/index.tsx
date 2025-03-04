"use client"
import React, { useState, useEffect } from "react"
import { AnimatePresence } from "motion/react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import CharacterCard from "@/components/CharacterCard"

const TopCharacters = ({ characters }) => {

  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    let interval
    if (autoPlay) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % characters.length)
      }, 3000)
    }
    return () => clearInterval(interval)
  }, [autoPlay])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % characters.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + characters.length) % characters.length)
  }

  return (
    <div className="p-8 flex flex-col items-center justify-center">
      <div className="relative w-full max-w-7xl overflow-hidden">
        <div className="flex justify-center items-center">
          <button
            onClick={prevSlide}
            className="absolute left-4 z-10 p-2 rounded-full bg-[#2D3748] text-[#FFD700] hover:bg-[#4A5568] focus:outline-none"
          >
            <FiChevronLeft size={24} />
          </button>

          <div className="flex gap-6 justify-center items-center py-8 px-4">
            <AnimatePresence mode="wait">
              {characters.map((character, index) => {
                const position = (index - currentIndex + characters.length) % characters.length
                const isVisible = position >= 0 && position < 4

                return isVisible ? (
                  <CharacterCard key={character.id} character={character} index={index} />
                ) : null
              })}
            </AnimatePresence>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-4 z-10 p-2 rounded-full bg-[#2D3748] text-[#FFD700] hover:bg-[#4A5568] focus:outline-none"
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TopCharacters