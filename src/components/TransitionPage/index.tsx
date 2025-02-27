"use client"
import { transitionVariantsPage } from "@/utils/motion-transitions"
import { AnimatePresence, motion } from "motion/react"

function TransitionPage(): React.JSX.Element {

  return (
    <AnimatePresence mode="wait">
      <div>
        <motion.div
          className="fixed bottom-full left-0 right-0 w-screen h-screen z-50 bg-[#aeca46]"
          variants={transitionVariantsPage}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
        />
      </div>
    </AnimatePresence>
  )
}

export default TransitionPage