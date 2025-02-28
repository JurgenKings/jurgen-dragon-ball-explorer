"use client"
import { motion } from "motion/react"
import { FaDragon } from "react-icons/fa6"

function DragonSphere(): React.JSX.Element {
  
  return (
    <motion.div
      className="relative w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-orange-500 to-red-600 rounded-full shadow-2xl"
      whileHover={{ scale: 1.1 }}
      animate={{
        rotate: 360,
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <motion.div
        className="absolute inset-2 bg-gradient-to-tr from-yellow-400 to-orange-500 rounded-full"
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <div className="absolute inset-4 bg-orange-400 rounded-full flex items-center justify-center">
          <FaDragon className="text-red-700 text-3xl" />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default DragonSphere