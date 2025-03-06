"use client"
import { motion } from "motion/react"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "@/context/ThemeContext"
import { navLinks } from "@/components/Header"

function Footer(): React.JSX.Element {

  const url = usePathname()
  const router = useRouter()
  const { isDarkMode, toggleIsDarkMode } = useTheme()

  const handleClickAPIsLink = () => {
    setTimeout(() => {
      window.open("https://www.dragonballapi.com", "_blank")
    }, 100)

    setTimeout(() => {
      window.open("https://web.dragonball-api.com", "_blank")
    }, 200)
  }

  const handleNavigationHome = () => {
    if (url === "/") {
      return
    } else {
      router.push("/")
    }
  }

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
            <button onClick={handleNavigationHome}>
              <Image
                src="/images/logo.png"
                alt="Jurgen Dragon Ball Explorer Logo"
                className="h-12 w-auto relative z-10 transform hover:scale-110 transition-transform duration-300"
                width={800}
                height={384}
              />
            </button>
          </motion.div>

          <motion.nav variants={itemVariants}>
            <menu className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 relative z-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center space-x-2 text-lg font-semibold hover:text-db-orange dark:hover:text-db-blue transition-colors relative z-10 ${link.href === url ? "text-db-orange dark:text-db-blue" : "text-text-primary dark:text-dark-text-primary"}`}
                  aria-label={`Ir a la página ${link.name}`}
                  aria-current={link.href === url ? "page" : undefined}
                  aria-expanded={link.href === url ? "true" : undefined}
                  aria-controls={link.href === url ? "nav-list" : undefined}
                >
                  <link.icon className="h-5 w-5" />
                  <span>{link.name}</span>
                </Link>
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
                rel="noopener noreferrer"
                aria-label="Ir a la página de Jurgen Kings"
                className="text-link cursor-pointer hover:underline"
              >
                Página diseñada por Jurgen Kings
              </a>
            </p>
            <p className="text-sm text-text-primary dark:text-dark-text-primary relative z-10">
              <button
                onClick={handleClickAPIsLink}
                className="text-link cursor-pointer hover:underline"
                aria-label="Ir a las páginas de Dragon Ball API"
              >
                Powered by Dragon Ball API
              </button>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer