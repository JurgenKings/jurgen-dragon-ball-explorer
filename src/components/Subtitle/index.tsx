"use client"
import React from "react"
import { motion } from "motion/react"
import MotionTransition from "@/components/MotionTransition"

interface SubtitleProps {
  children: React.ReactNode;
  className?: string;
}

function Subtitle({ children, className }: SubtitleProps): React.JSX.Element {

  return (
    <MotionTransition position="right">
      <motion.h2
        className={`text-4xl lg:text-6xl font-bold text-db-orange dark:text-db-blue leading-tight relative z-10 ${className}`}
        whileHover={{ scale: 1.02 }}
      >
        {children}
      </motion.h2>
    </MotionTransition>
  )
}

export default Subtitle