"use client"
import React, { MouseEvent, useRef, useState } from "react"
import { motion } from "motion/react"

interface MagneticEffectProps {
  children: React.ReactNode;
  className?: string;
}

function MagneticEffect({ children, className }: MagneticEffectProps): React.JSX.Element {

  const ref = useRef<HTMLDivElement | null>(null)

  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (ref.current) {
      const { clientX, clientY } = e
      const { width, height, left, top } = ref.current.getBoundingClientRect()
      const x = clientX - (left + width / 2)
      const y = clientY - (top + height / 2)
      setPosition({ x, y })
    }
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const { x, y } = position

  return (
    <motion.div
      animate={{ x, y }}
      transition={{type: "spring", stiffness: 150, damping: 15, mass: 0.1}}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default MagneticEffect