"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      className="bg-[#12121e] border border-gray-800 rounded-xl p-6 relative overflow-hidden group"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      {/* Diagonal accent line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent transform -rotate-[5deg] origin-left"></div>

      {/* Icon with subtle glow */}
      <div className="mb-4 relative">
        <div className="absolute -inset-1 bg-emerald-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="relative">{icon}</div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>

      {/* Hover effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
    </motion.div>
  )
}
