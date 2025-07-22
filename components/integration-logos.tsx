"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const logos = [
  { name: "Sage", width: 120, height: 40 },
  { name: "Oracle", width: 120, height: 40 },
  { name: "SAP", width: 100, height: 40 },
  { name: "NetSuite", width: 140, height: 40 },
  { name: "Snowflake", width: 140, height: 40 },
]

export default function IntegrationLogos() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
      {logos.map((logo, index) => (
        <motion.div
          key={index}
          className="bg-[#12121e] border border-gray-800 rounded-lg px-6 py-4 flex items-center justify-center"
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.1)" }}
          transition={{ duration: 0.2 }}
        >
          <Image
            src={`/placeholder.svg?height=${logo.height}&width=${logo.width}&query=${logo.name}%20logo%20grayscale`}
            alt={`${logo.name} logo`}
            width={logo.width}
            height={logo.height}
            className="opacity-70 hover:opacity-100 transition-opacity"
          />
        </motion.div>
      ))}
    </div>
  )
}
