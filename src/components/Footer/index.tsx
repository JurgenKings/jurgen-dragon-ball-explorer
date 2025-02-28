"use client"
import { motion, AnimatePresence } from "motion/react"
import { FaSun, FaMoon } from "react-icons/fa"
import { FiHome, FiUsers, FiInfo } from "react-icons/fi"
import { useTheme } from "@/context/ThemeContext"
import Image from "next/image"
import { IoMdPlanet } from "react-icons/io"

function Footer (): React.JSX.Element {

  const { isDarkMode, toggleIsDarkMode } = useTheme()

  const navigation = [
    { name: "Home", icon: FiHome },
    { name: "Characters", icon: FiUsers },
    { name: "Planets", icon: IoMdPlanet },
    { name: "About", icon: FiInfo },
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <footer className="w-full py-8 bg-bg-hover dark:bg-dark-bg-hover" >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-4"
          >
            <Image
              src="/images/logo.png"
              alt="Dragon Ball Logo"
              className="h-12 w-auto"
              width={800}
              height={384}
            />
          </motion.div>

          <motion.nav variants={itemVariants}>
            <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              {navigation.map((item) => (
                <motion.li
                  key={item.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    className={`flex items-center space-x-2 ${
                      isDarkMode ? "text-white" : "text-gray-700"
                    } hover:text-[#1E90FF] transition-colors duration-300`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.nav>

          <motion.div variants={itemVariants} className="flex items-center space-x-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleIsDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
              aria-label="Toggle dark mode"
            >
              <AnimatePresence mode="wait">
                {isDarkMode ? (
                  <motion.div
                    key="moon"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaMoon className="h-6 w-6 text-[#FFD700]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaSun className="h-6 w-6 text-[#FF0000]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-text-primary dark:text-dark-text-primary">
              Page designed by Jurgen Kings
            </p>
            <p className="text-sm text-text-primary dark:text-dark-text-primary">
              Powered by Dragon Ball API
            </p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer