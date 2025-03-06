"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"
import { FaChevronLeft, FaChevronRight, FaPause, FaPlay } from "react-icons/fa6"

const quotes = [
  {
    id: 1,
    quote: "El poder viene en respuesta a una necesidad, no a un deseo. Tienes que crear esa necesidad",
    character: "Goku",
    image: "/images/goku.jpg"
  },
  {
    id: 2,
    quote: "Un insecto sin emociones como tú nunca entenderá el amor, jamás comprenderás lo que significa proteger algo que amas.",
    character: "Vegeta",
    image: "/images/vegeta.jpg"
  },
  {
    id: 3,
    quote: "Preferiría ser un mono sin cerebro que un monstruo sin corazón",
    character: "Goku",
    image: "/images/goku-2.jpg"
  },
  {
    id: 4, 
    quote: "Yo no moriré, no importa que mi cuerpo sea destruido por completo. Mis deseos de pelear me levantarán porque son muy grandes",
    character: "Gohan",
    image: "/images/gohan.jpg"
  },
  {
    id: 5,
    quote: "Goku ha compartido con muchos y para ambos es algo invaluable. Al mismo tiempo eso es lo que le otorga fuerza. Se perfectamente que él jamás ha pensado que ha llegado hasta aquí gracias a su mérito personal.",
    character: "Maestro Roshi",
    image: "/images/roshi.jpg"
  },
  {
    id: 6, 
    quote: "Padre, eres tan fuerte y orgulloso, duro y frío como una roca. Pero en el fondo, tu corazón late como el mío. Sé cómo te sientes, soy tu hijo y siempre te querré.",
    character: "Trunks",
    image: "/images/trunks.jpg"
  },
  {
    id: 7, 
    quote: "Necesitas encontrar la motivación adecuada, eso es todo. Para mí es sencillo, solo tengo que pensar como los androides mataron a Piccolo y a Krillin, me siento horrible y ese dolor se convierte en ira.",
    character: "Gohan",
    image: "/images/gohan-2.jpg"
  },
  {
    id: 8,
    quote: "Si quieres odiarme debes empezar por odiar tu destino, asi como lo hago yo.",
    character: "Piccolo",
    image: "/images/piccolo.jpg"
  }
]

function IconicPhrases (): React.JSX.Element {

  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(true)

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined

    const startInterval = () => {
      clearInterval(interval)
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length)
      }, 8000)
    }

    if (isPlaying) {
      startInterval()
    }

    return () => clearInterval(interval)
  }, [isPlaying, currentIndex])

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length)
  }

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <section className="p-4 flex items-center justify-center" aria-labelledby="iconic-phrases-title">
      <h2 id="iconic-phrases-title" className="sr-only">Frases icónicas de Dragon Ball</h2>
      <div className="max-w-6xl w-full relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="relative rounded-xl overflow-hidden shadow-2xl bg-bg-hover dark:bg-dark-bg-hover pb-4 md:pb-0"
          >
            <div className="flex flex-col md:flex-row items-center p-8 gap-8">
              <Image
                src={quotes[currentIndex].image}
                alt={quotes[currentIndex].character}
                className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-lg transform hover:scale-105 hover:rotate-2 transition-transform duration-300"
                width={512}
                height={512}
              />
              <div className="flex-1 text-center md:text-left">
                <motion.h2
                  className="text-db-orange dark:text-db-yellow text-4xl md:text-6xl font-bold mb-4 font-comic leading-tight"
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                >
                  {quotes[currentIndex].character}
                </motion.h2>
                <motion.p
                  className="text-xl md:text-2xl italic shadow-text text-text-primary dark:text-dark-text-primary pb-4"
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
          className="absolute left-0 xl:-left-8 top-1/2 transform -translate-y-1/2 bg-bg-darker/50 hover:bg-bg-darker/70 dark:bg-white/20 dark:hover:bg-white/30 p-4 rounded-full text-white transition-all"
          aria-label="Cita anterior"
          onClick={handlePrev}
        >
          <FaChevronLeft size={24} />
        </button>

        <button
          className="absolute right-0 xl:-right-8 top-1/2 transform -translate-y-1/2 bg-bg-darker/50 hover:bg-bg-darker/70 dark:bg-white/20 dark:hover:bg-white/30 p-4 rounded-full text-white transition-all"
          aria-label="Cita siguiente"
          onClick={handleNext}
        >
          <FaChevronRight size={24} />
        </button>

        <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
          <button
            onClick={togglePlay}
            className="bg-bg-darker/50 hover:bg-bg-darker/70 dark:bg-white/20 dark:hover:bg-white/30 p-3 rounded-full text-white transition-all"
            aria-label={isPlaying ? "Pausar reproducción" : "Comenzar reproducción"}
          >
            {isPlaying ? <FaPause size={16} /> : <FaPlay size={16} />}
          </button>
          <div className="flex gap-2">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? "bg-db-orange dark:bg-db-yellow" : "bg-white/50 hover:bg-white/70"}`}
                aria-label={`Ir a cita ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default IconicPhrases