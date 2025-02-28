"use client"
import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { FiX } from "react-icons/fi"

function Gallery(): React.JSX.Element {

  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    {
      id: 1,
      src: "/images/10.jpg",
      alt: "Nature landscape",
    },
    {
      id: 2,
      src: "/images/11.jpg",
      alt: "Urban architecture",
    },
    {
      id: 3,
      src: "/images/4.jpg",
      alt: "Mountain view",
    },
    {
      id: 4,
      src: "/images/3.jpg",
      alt: "Ocean sunset",
    },
    {
      id: 5,
      src: "/images/5.jpg",
      alt: "Forest path",
    },
    {
      id: 6,
      src: "/images/6.jpg",
      alt: "Desert landscape",
    },
    {
      id: 7,
      src: "/images/7.jpg",
      alt: "Cityscape night",
    },
    {
      id: 8,
      src: "/images/8.jpg",
      alt: "Waterfall view",
    },
    {
      id: 9,
      src: "/images/9.jpg",
      alt: "Snow peaks",
    },
  ]

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null)
      }
    }

    window.addEventListener("keydown", handleEscKey)

    return () => {
      window.removeEventListener("keydown", handleEscKey)
    }
  }, [])

  return (
    <div className="container mx-auto px-4 py-8 bg-bg-primary dark:bg-dark-bg-primary">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <motion.div
            key={image.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer aspect-w-16 aspect-h-9"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
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
                onClick={() => setSelectedImage(null)}
              >
                <FiX size={24} />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-lg shadow-2xl"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1682687220566-5599dbbebf11"
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Gallery