"use client"
import React, { useEffect } from "react"
import { useTheme } from "@/context/ThemeContext"
import { AnimatePresence, motion } from "motion/react"
import { INavLink } from "@/interfaces/INavLink"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

interface NavMobileProps {
  isMenuOpen: boolean;
  navLinks: INavLink[];
  toggleIsOpenMenu: () => void;
}

function NavMobile({ isMenuOpen, navLinks, toggleIsOpenMenu }: NavMobileProps): React.JSX.Element {

  const url = usePathname()
  const { isDarkMode, toggleIsDarkMode } = useTheme()

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }

    return () => {
      document.body.classList.remove("overflow-hidden")
    }
  }, [isMenuOpen])

  const menuVariants = {
    closed: { x: "100%", transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } },
    open: { x: 0, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }
  }

  return (
    <>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 bg-bg-primary dark:bg-dark-bg-primary flex flex-col items-center justify-center pb-20"
          >
            <nav className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-label={`${link} link`}
                  className={`text-3xl font-medium ${link.href === url ? "text-db-orange dark:text-db-blue" : "text-text-primary dark:text-dark-text-primary"} transition-colors`}
                  onClick={toggleIsOpenMenu}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-44 flex items-center space-x-6"
            >
              <motion.button
                onClick={toggleIsDarkMode}
                className="p-2 rounded-full text-text-primary dark:text-dark-text-primary relative z-10"
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default NavMobile