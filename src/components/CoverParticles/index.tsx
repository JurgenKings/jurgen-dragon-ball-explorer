"use client"
import { useEffect, useState } from "react"
import { loadSlim } from "@tsparticles/slim"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { useTheme } from "@/context/ThemeContext"

function CoverParticles() {

  const { isDarkMode } = useTheme()

  const [init, setInit] = useState<boolean>(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  return (
    init && (
      <div className="w-[0px]">
        <Particles
          id="tsparticles"
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                push: {
                  quantity: 3, 
                },
                repulse: {
                  distance: 150, 
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: `${isDarkMode ? "#00FFFF" : "#00008B"}`,
              },
              links: {
                color: `${isDarkMode ? "#00FFFF" : "#00008B"}`,
                distance: 120, 
                enable: true,
                opacity: 0.3, 
                width: 0.75, 
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 0.7, 
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                },
                value: 90, 
              },
              opacity: {
                value: 0.3, 
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 }, 
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    )
  )
}

export default CoverParticles
