"use client"

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion-transitions";

export type MotionTransitionProps = {
  children: React.ReactNode;
  className?: string;
  position: 'right' | 'bottom'
};

function MotionTransition({ children, className, position }: MotionTransitionProps) {

  return (
    <motion.div
      variants={fadeIn(position)}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default MotionTransition