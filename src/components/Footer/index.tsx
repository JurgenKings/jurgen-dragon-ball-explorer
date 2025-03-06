"use client"
import { motion, AnimatePresence } from "motion/react"
import { FaSun, FaMoon } from "react-icons/fa"
import { FiHome, FiUsers, FiInfo } from "react-icons/fi"
import { useTheme } from "@/context/ThemeContext"
import Image from "next/image"
import { IoMdPlanet } from "react-icons/io"
import { navLinks } from "../Header"
import Link from "next/link"
import MagneticEffect from "../MagneticEffect"
import { usePathname } from "next/navigation"

function Footer(): React.JSX.Element {

  const url = usePathname()
  const { isDarkMode, toggleIsDarkMode } = useTheme()

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
            <menu className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 relative z-10">
              {navLinks.map((item) => (
                <MagneticEffect className="flex items-center space-x-2 relative z-10" key={item.name}>
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-2 text-lg font-semibold hover:text-db-orange dark:hover:text-db-blue transition-colors relative z-10 ${item.href === url ? "text-db-orange dark:text-db-blue" : "text-text-primary dark:text-dark-text-primary"}`}
                    aria-label={`Ir a la página ${item.name}`}
                    aria-current={item.href === url ? "page" : undefined}
                    aria-expanded={item.href === url ? "true" : undefined}
                    aria-controls={item.href === url ? "nav-list" : undefined}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                </MagneticEffect>
              ))}
            </menu>
          </motion.nav>

          <motion.div variants={itemVariants} className="flex items-center space-x-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleIsDarkMode}
              className="p-2 rounded-full relative z-10"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ?
                (
                  <Image
                    src="/images/sun.png"
                    alt="Sun"
                    width={40}
                    height={40}
                  />
                ) : (
                  <Image
                    src="/images/moon.png"
                    alt="Moon"
                    width={40}
                    height={40}
                  />
                )
              }
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-text-primary dark:text-dark-text-primary relative z-10">
              <a
                href="https://jurgen-kings.vercel.app"
                target="_blank"
                rel="noreferrer"
                aria-label="Ir a la página de Jurgen Kings"
              >
                Página diseñada por Jurgen Kings
              </a>
            </p>
            <p className="text-sm text-text-primary dark:text-dark-text-primary relative z-10">
              <a
                href="https://www.dragonballapi.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Ir a la página de Dragon Ball API"
              >
                Powered by Dragon Ball API
              </a>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer