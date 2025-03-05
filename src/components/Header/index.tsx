"use client"
import React from "react"
import { motion } from "motion/react"
import { useTheme } from "@/context/ThemeContext"
import MotionTransition from "../MotionTransition"
import Image from "next/image"
import MagneticEffect from "../MagneticEffect"
import { HiHome, HiInformationCircle, HiUserGroup } from "react-icons/hi"
import { INavLink } from "@/interfaces/INavLink"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { IoMdPlanet } from "react-icons/io"

export const navLinks: INavLink[] = [
  { name: "Inicio", href: "/", icon: HiHome },
  { name: "Personajes", href: "/personajes", icon: HiUserGroup },
  { name: "Planetas", href: "/planetas", icon: IoMdPlanet },
]

function Header(): React.JSX.Element {

  const url = usePathname()
  const router = useRouter()
  const { isDarkMode, toggleIsDarkMode } = useTheme()

  const handleNavigationHome = () => {
    if (url === "/") {
      return
    } else {
      router.push("/")
    }
  }

  return (
    <MotionTransition position="bottom" className="w-full">
      <header className="w-full bg-bg-primary dark:bg-dark-bg-primary">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={handleNavigationHome}
            >
              <motion.img
                src="/images/logo.png"
                alt="Logo"
                className="h-12 w-auto relative z-50"
                whileHover={{ scale: 1.10 }}
                whileTap={{ scale: 0.95 }}
              />
            </button>
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((item) => (
                <MagneticEffect className="flex items-center space-x-2 relative z-50" key={item.name}>
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-2 text-lg font-semibold hover:text-db-orange dark:hover:text-db-blue transition-colors relative z-50 ${item.href === url ? "text-db-orange dark:text-db-blue" : "text-text-primary dark:text-dark-text-primary"}`}
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
            </nav>
            <MagneticEffect className="flex items-center space-x-2 rounded-full relative z-50">
              <motion.button
                onClick={toggleIsDarkMode}
                className="p-2 rounded-full text-text-primary dark:text-dark-text-primary relative z-50"
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
          </div>
        </div>
      </header>
    </MotionTransition>
  )
}

export default Header