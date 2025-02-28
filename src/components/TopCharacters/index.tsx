"use client"
import React, { useState, useEffect } from "react"
import { AnimatePresence } from "motion/react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import CharacterCard from "@/components/CharacterCard"

const characters = [
  {
    id: 1,
    name: "Goku",
    baseKi: 9000,
    affiliation: "Z Fighters",
    race: "Saiyan",
    gender: "Male",
    imageUrl: "https://images.unsplash.com/photo-1635805737707-575885ab0820"
  },
  {
    id: 2,
    name: "Vegeta",
    baseKi: 8500,
    affiliation: "Z Fighters",
    race: "Saiyan",
    gender: "Male",
    imageUrl: "https://images.unsplash.com/photo-1635805737707-575885ab0821"
  },
  {
    id: 3,
    name: "Gohan",
    baseKi: 7500,
    affiliation: "Z Fighters",
    race: "Half-Saiyan",
    gender: "Male",
    imageUrl: "https://images.unsplash.com/photo-1635805737707-575885ab0822"
  },
  {
    id: 4,
    name: "Piccolo",
    baseKi: 6500,
    affiliation: "Z Fighters",
    race: "Namekian",
    gender: "Male",
    imageUrl: "https://images.unsplash.com/photo-1635805737707-575885ab0823"
  }
]

const TopCharacters = () => {
  
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
    <div className="min-h-screen bg-[#1A202C] p-8 flex flex-col items-center justify-center">
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
                const isVisible = position >= 0 && position < 3

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

        <div className="flex justify-center mt-6 gap-2">
          {characters.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-[#FFD700]" : "bg-[#4A5568]"}`}
            />
          ))}
        </div>
      </div>

      <button
        onClick={() => setAutoPlay(!autoPlay)}
        className="mt-6 px-4 py-2 bg-[#2D3748] text-[#FFD700] rounded-lg hover:bg-[#4A5568]"
      >
        {autoPlay ? "Pause" : "Auto Play"}
      </button>
    </div>
  )
}

export default TopCharacters