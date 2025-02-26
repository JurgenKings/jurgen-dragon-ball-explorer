"use client"
import React, { useEffect, useState } from "react"
import { motion } from "motion/react"
import { FiMoon, FiSun } from "react-icons/fi"

function Header(): React.JSX.Element {

  const [darkMode, setDarkMode] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") setDarkMode(true)
    setIsLoaded(true)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    localStorage.setItem("theme", !darkMode ? "dark" : "light")
  }

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } }
  }

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className="fixed w-full top-0 z-50 bg-opacity-20 backdrop-blur-lg"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.img
            src="https://images.unsplash.com/photo-1601574968106-b312ac309953"
            alt="Logo"
            className="h-12 w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
          <nav className="hidden md:flex space-x-8">
            {["Home", "Characters", "Planets", "About"].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="text-lg font-semibold hover:text-[#FF6600] transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>
          <motion.button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-opacity-20 backdrop-blur-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
          </motion.button>
        </div>
      </div>
    </motion.header>
  )
}

export default Header