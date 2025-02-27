"use client"
import React, { useEffect, useState } from "react"
import { motion } from "motion/react"
import { FiMoon, FiSun } from "react-icons/fi"
import { useTheme } from "@/context/ThemeContext"
import MotionTransition from "../MotionTransition"

const navLinks = ["Inicio", "Personajes", "Planetas", "Acerca de"]

function Header(): React.JSX.Element {

  const { isDarkMode, toggleIsDarkMode } = useTheme()
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <MotionTransition position="bottom" className="w-full">
      <header className="w-full bg-bg-primary dark:bg-dark-bg-primary">
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
              {navLinks.map((item) => (
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
              onClick={toggleIsDarkMode}
              className="p-2 rounded-full bg-opacity-20 backdrop-blur-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDarkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
            </motion.button>
          </div>
        </div>
      </header>
    </MotionTransition>
  )
}

export default Header