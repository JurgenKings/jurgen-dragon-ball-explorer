"use client"
import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { FaChevronLeft, FaChevronRight, FaPause, FaPlay } from "react-icons/fa"

const quotes = [
  {
    id: 1,
    quote: "I am the hope of the universe. I am the answer to all living things that cry out for peace.",
    character: "Goku",
    image: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64"
  },
  {
    id: 2,
    quote: "I do not fear this new challenge. Rather like a true warrior I will rise to meet it.",
    character: "Vegeta",
    image: "https://images.unsplash.com/photo-1608889825205-eebdb9fc5806"
  },
  {
    id: 3,
    quote: "Power comes in response to a need, not a desire.",
    character: "Goku",
    image: "https://images.unsplash.com/photo-1608889825271-9a8c98af35f5"
  },
  {
    id: 4,
    quote: "You're about to find out what it's like to fight a real Super Saiyan... and I'm not talking about Goku.",
    character: "Vegeta",
    image: "https://images.unsplash.com/photo-1608889825452-d41736ba85ca"
  },
  {
    id: 5,
    quote: "I will not let you destroy my world!",
    character: "Gohan",
    image: "https://images.unsplash.com/photo-1608889825505-d90687a37559"
  },
  {
    id: 6,
    quote: "You see when you take life, you live with the fear of revenge.",
    character: "Piccolo",
    image: "https://images.unsplash.com/photo-1608889825585-e8b1c75d97e4"
  },
  {
    id: 7,
    quote: "Your fate is the one you choose for yourself!",
    character: "Master Roshi",
    image: "https://images.unsplash.com/photo-1608889825668-4da760dce0c8"
  },
  {
    id: 8,
    quote: "Oh, you think you're being cute?",
    character: "Frieza",
    image: "https://images.unsplash.com/photo-1608889825745-9a3c526f5cf4"
  },
  {
    id: 9,
    quote: "I would rather be a brainless monkey than a heartless monster.",
    character: "Goku",
    image: "https://images.unsplash.com/photo-1608889825825-cd3ea32d1da3"
  },
  {
    id: 10,
    quote: "The more ridiculous the better.",
    character: "Master Roshi",
    image: "https://images.unsplash.com/photo-1608889825901-dc2f1c529d06"
  }
]

function IconicPhrases (): React.JSX.Element {

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    let interval
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length)
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [isPlaying])

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length)
  }

  const handleDotClick = (index) => {
    setCurrentIndex(index)
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0077BE] to-[#FF0000] p-4 flex items-center justify-center">
      <div className="max-w-6xl w-full relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="relative bg-black/50 rounded-xl overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col md:flex-row items-center p-8 gap-8">
              <motion.img
                src={quotes[currentIndex].image}
                alt={quotes[currentIndex].character}
                className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-lg"
                whileHover={{ scale: 1.05, rotate: 2 }}
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64"
                }}
              />
              <div className="flex-1 text-center md:text-left">
                <motion.h2
                  className="text-[#FFD700] text-4xl md:text-6xl font-bold mb-4 font-comic leading-tight"
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                >
                  {quotes[currentIndex].character}
                </motion.h2>
                <motion.p
                  className="text-white text-xl md:text-2xl italic shadow-text"
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                >
                  "{quotes[currentIndex].quote}"
                </motion.p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-4 rounded-full text-white transition-all"
          aria-label="Previous quote"
        >
          <FaChevronLeft size={24} />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-4 rounded-full text-white transition-all"
          aria-label="Next quote"
        >
          <FaChevronRight size={24} />
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
          <button
            onClick={togglePlay}
            className="bg-white/20 hover:bg-white/30 p-3 rounded-full text-white transition-all"
            aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
          >
            {isPlaying ? <FaPause size={16} /> : <FaPlay size={16} />}
          </button>
          <div className="flex gap-2">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? "bg-[#FFD700]" : "bg-white/50 hover:bg-white/70"}`}
                aria-label={`Go to quote ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default IconicPhrases