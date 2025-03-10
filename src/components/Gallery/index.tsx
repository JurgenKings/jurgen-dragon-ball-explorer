"use client"
import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { FiX } from "react-icons/fi"
import Image from "next/image"

const images = [
  {
    id: 1,
    src: "/images/gallery-1.png",
    alt: "El inicio de una leyenda",
    description: "El inicio de una leyenda: Goku, el niño guerrero, enfrenta su primer gran desafío.",
  },
  {
    id: 2,
    src: "/images/gallery-2.png",
    alt: "Un estallido de poder",
    description: "Un estallido de poder: Goku desata el Kaio-Ken, marcando el comienzo de una feroz rivalidad.",
  },
  {
    id: 3,
    src: "/images/gallery-3.png",
    alt: "El despertar del guerrero",
    description: "El despertar del guerrero: Goku se transforma en Super Saiyan, desatando su furia contra Freezer.",
  },
  {
    id: 4,
    src: "/images/gallery-4.jpg",
    alt: "El legado de un guerrero",
    description: "El legado de un guerrero: Gohan desata su furia, un golpe que resuena con la fuerza de su padre.",
  },
  {
    id: 5,
    src: "/images/gallery-5.jpg",
    alt: "Dos titanes colisionan",
    description: "Dos titanes colisionan: Goku y Majin Vegeta, un enfrentamiento épico de voluntad y poder.",
  },
  {
    id: 6,
    src: "/images/gallery-6.jpg",
    alt: "Un golpe de justicia",
    description: "Un golpe de justicia: Gohan utiliza su máximo potencial para hacer frente a la amenaza de Super Buu.",
  },
  {
    id: 7,
    src: "/images/gallery-7.jpg",
    alt: "La fusión de leyendas",
    description: "La fusión de leyendas: Vegetto desata su fuerza contra Buu, un espectáculo de poder absoluto.",
  },
  {
    id: 8,
    src: "/images/gallery-8.jpg",
    alt: "Máximo esplendor en la batalla",
    description: "Máximo esplendor en la batalla: Goku alcanza el Ultra Instinto Perfecto, un momento que redefine el combate.",
  },
  {
    id: 9,
    src: "/images/gallery-9.jpg",
    alt: "La unión inesperada",
    description: "La unión inesperada: Freezer y Goku, héroes y villanos, luchan juntos por la supervivencia.",
  },
]

function Gallery(): React.JSX.Element {

  const initialStateImage = {
    id: 0,
    src: "",
    alt: "",
    description: "",
  }

  const [selectedImage, setSelectedImage] = useState(initialStateImage)

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(initialStateImage)
      }
    }

    window.addEventListener("keydown", handleEscKey)

    return () => {
      window.removeEventListener("keydown", handleEscKey)
    }
  }, [])

  return (
    <section className="container mx-auto px-4 py-8 bg-bg-primary dark:bg-dark-bg-primary mt-16" aria-labelledby="gallery-title">
      <h2 id="gallery-title" className="sr-only">Galería de imágenes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <motion.figure
            key={image.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer aspect-w-16 aspect-h-9"
            aria-labelledby={`category-title-${image.id}`}
            aria-describedby={`category-description-${image.id}`}
            onClick={() => setSelectedImage(image)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setSelectedImage(image)
              }
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-full"
              width={1600}
              height={900}
              loading="lazy"
            />
          </motion.figure>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage.src && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog" 
            aria-modal="true"
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-40 p-4"
            onClick={() => setSelectedImage(initialStateImage)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
                aria-label="Cerrar imagen"
                onClick={() => setSelectedImage(initialStateImage)}
              >
                <FiX size={24} />
              </button>
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-lg shadow-2xl"
                width={1600}
                height={900}
              />
              <div className="absolute bottom-0 left-0 p-3 w-auto">
                <div className="backdrop-blur-sm bg-black/50 p-2 rounded-xl">
                  <h3 className="text-white font-serif text-1xl lg:text-2xl mb-2">
                    {selectedImage.description}
                  </h3>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery