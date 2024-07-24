'use client'
import { motion } from 'framer-motion'

export default function template({ children }) {
  return (
    <motion.div
      initial={{ y: 75, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', delay: 0.25 }}
      className=""
    >
      {children}
    </motion.div>
  )
}
