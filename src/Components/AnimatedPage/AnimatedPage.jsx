import { motion } from 'framer-motion'
import React from 'react'

const animations = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 100, opacity: 0 }
}

function AnimatedPage({children}) {
  return (
    <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5 }}
    >
        {children}
    </motion.div>
  )
}

export default AnimatedPage