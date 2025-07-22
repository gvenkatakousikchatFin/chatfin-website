"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function DashboardPreview() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Shadow base for 3D effect */}
      <div className="absolute inset-0 bg-emerald-500/10 rounded-xl blur-xl transform translate-y-4 scale-[0.97]"></div>

      {/* Main dashboard container with layered depth */}
      <motion.div
        className="relative bg-[#0d0d1a] border border-gray-800 rounded-xl overflow-hidden shadow-2xl"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Dashboard header */}
        <div className="bg-[#0f0f1d] border-b border-gray-800 p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <span className="text-emerald-400 text-sm font-medium">CF</span>
            </div>
            <span className="text-white font-medium">Financial Analysis Dashboard</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-gray-600"></div>
            <div className="h-3 w-3 rounded-full bg-gray-600"></div>
            <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
          </div>
        </div>

        {/* Dashboard content with Z-space layering */}
        <div className="p-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            animate={{ scale: isHovered ? 1.02 : 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Left sidebar */}
            <div className="bg-[#12121e] rounded-lg p-4 border border-gray-800">
              <h3 className="text-white font-medium mb-4">Analysis Options</h3>
              <div className="space-y-3">
                {["Revenue Analysis", "Expense Breakdown", "Cash Flow", "Profitability", "Budget vs Actual"].map(
                  (item, i) => (
                    <div
                      key={i}
                      className={cn(
                        "p-3 rounded-md flex items-center space-x-3 transition-colors",
                        i === 0 ? "bg-emerald-500/10 border border-emerald-500/20" : "hover:bg-gray-800/50",
                      )}
                    >
                      <div className={cn("h-3 w-3 rounded-full", i === 0 ? "bg-emerald-500" : "bg-gray-600")}></div>
                      <span className={i === 0 ? "text-emerald-400" : "text-gray-400"}>{item}</span>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Main content area */}
            <div className="md:col-span-2 space-y-6">
              {/* Chart section */}
              <div className="bg-[#12121e] rounded-lg p-4 border border-gray-800">
                <h3 className="text-white font-medium mb-4">Revenue Trends</h3>
                <div className="h-[200px] relative">
                  <div className="absolute bottom-0 left-0 right-0 h-[180px]">
                    {/* Stylized chart */}
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-700"></div>
                    <div className="absolute bottom-[60px] left-0 right-0 h-[1px] bg-gray-800/50"></div>
                    <div className="absolute bottom-[120px] left-0 right-0 h-[1px] bg-gray-800/50"></div>

                    {/* Chart line */}
                    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="rgb(16, 185, 129)" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="rgb(16, 185, 129)" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,150 C50,120 100,160 150,100 C200,40 250,80 300,60 C350,40 400,20 450,40 C500,60 550,30 600,10"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="2"
                      />
                      <path
                        d="M0,150 C50,120 100,160 150,100 C200,40 250,80 300,60 C350,40 400,20 450,40 C500,60 550,30 600,10 L600,180 L0,180 Z"
                        fill="url(#chartGradient)"
                      />
                    </svg>

                    {/* Data points */}
                    <div className="absolute bottom-[150px] left-[50px] h-4 w-4 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/30"></div>
                    <div className="absolute bottom-[100px] left-[150px] h-4 w-4 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/30"></div>
                    <div className="absolute bottom-[60px] left-[300px] h-4 w-4 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/30"></div>
                    <div className="absolute bottom-[40px] left-[450px] h-4 w-4 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/30"></div>
                    <div className="absolute bottom-[10px] left-[600px] h-4 w-4 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/30"></div>
                  </div>
                </div>
              </div>

              {/* Metrics section */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "Total Revenue", value: "$1.28M", change: "+12.5%" },
                  { label: "Avg. Transaction", value: "$840", change: "+3.2%" },
                  { label: "Conversion Rate", value: "24.3%", change: "+5.7%" },
                ].map((metric, i) => (
                  <div key={i} className="bg-[#12121e] rounded-lg p-4 border border-gray-800">
                    <p className="text-gray-400 text-sm mb-1">{metric.label}</p>
                    <div className="flex items-end justify-between">
                      <p className="text-white text-2xl font-semibold">{metric.value}</p>
                      <span className="text-emerald-400 text-sm">{metric.change}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating elements for depth */}
      <motion.div
        className="absolute -top-6 -right-6 h-16 w-16 bg-emerald-500/10 rounded-full blur-md"
        animate={{
          scale: isHovered ? [1, 1.2, 1] : 1,
          opacity: isHovered ? [0.5, 0.8, 0.5] : 0.5,
        }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute -bottom-8 -left-8 h-24 w-24 bg-cyan-500/10 rounded-full blur-md"
        animate={{
          scale: isHovered ? [1, 1.3, 1] : 1,
          opacity: isHovered ? [0.4, 0.7, 0.4] : 0.4,
        }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.5 }}
      />
    </div>
  )
}
