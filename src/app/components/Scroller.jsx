'use client'
import { motion } from 'framer-motion'
export default function Scroller({ children }) {
  return (
    <motion.div
      className="lg:grid my-5 lg:gap-8 lg:grid-cols-3 lg:col-span-3 "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      {children}
    </motion.div>
  )
}
