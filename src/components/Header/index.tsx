"use client"
import React, { useState } from "react"
import { motion } from "motion/react"
import { useTheme } from "@/context/ThemeContext"
import MotionTransition from "../MotionTransition"
import Image from "next/image"
import MagneticEffect from "../MagneticEffect"
import { HiHome, HiUserGroup } from "react-icons/hi"
import { INavLink } from "@/interfaces/INavLink"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { IoMdPlanet } from "react-icons/io"
import NavMobile from "@/components/NavMobile"

export const navLinks: INavLink[] = [
  { name: "Inicio", href: "/", icon: HiHome },
  { name: "Personajes", href: "/personajes", icon: HiUserGroup },
  { name: "Planetas", href: "/planetas", icon: IoMdPlanet },
]

function Header(): React.JSX.Element {

  const url = usePathname()
  const router = useRouter()
  const { isDarkMode, toggleIsDarkMode } = useTheme()

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const toggleIsOpenMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleNavigationHome = () => {
    if (url === "/") {
      return
    } else {
      router.push("/")
    }
  }

  return (
    <MotionTransition position="bottom" className="w-full">
      <header className={`w-full bg-bg-primary dark:bg-dark-bg-primary relative z-50 ${isMenuOpen ? "sticky top-0 left-0 right-0" : ""}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button onClick={handleNavigationHome}>
              <Image
                src="/images/logo.png"
                alt="Logo"
                className="h-12 w-auto relative z-10 transform hover:scale-110 transition-transform duration-300"
                width={800}
                height={384}
              />
            </button>
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <MagneticEffect className="flex items-center space-x-2 relative z-10" key={link.name}>
                  <Link
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
                </MagneticEffect>
              ))}
            </nav>
            <MagneticEffect className="hidden md:flex items-center space-x-2 rounded-full relative z-10">
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
            </MagneticEffect>

            <button
              className="md:hidden text-text-primary dark:text-dark-text-primary transition-colors duration-300 p-2 relative z-10"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              onClick={toggleIsOpenMenu}
            >
              <motion.div
                className="flex flex-col justify-center items-center w-full h-full"
                animate={isMenuOpen ? "open" : "closed"}
              >
                <motion.span
                  className="w-[22px] h-0.5 bg-text-primary dark:bg-db-yellow mb-[5px]"
                  variants={{
                    closed: { rotate: 0 },
                    open: { rotate: 45, translateY: 6 }
                  }}
                />
                <motion.span
                  className="w-[22px] h-0.5 bg-text-primary dark:bg-db-yellow mb-[5px]"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                />
                <motion.span
                  className="w-[22px] h-0.5 bg-text-primary dark:bg-db-yellow"
                  variants={{
                    closed: { rotate: 0 },
                    open: { rotate: -45, translateY: -6 }
                  }}
                />
              </motion.div>
            </button>
          </div>
        </div>
      </header>

      <NavMobile
        isMenuOpen={isMenuOpen}
        toggleIsOpenMenu={toggleIsOpenMenu}
        navLinks={navLinks}
      />
    </MotionTransition>
  )
}

export default Header