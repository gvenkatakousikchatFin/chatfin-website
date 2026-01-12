"use client"

import { Button } from "@/components/ui/button"
import { Monitor, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

export function OptimizationCard() {
    return (
        <div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-2xl shadow-2xl bg-[#0B0F19]/80 border border-white/10 backdrop-blur-sm">
            {/* Background Image - The user provided a URL, but for the component we'll use it in the parent or absolute here. 
          Actually, the snapshot shows the card IS the overlay on top of a background.
          The user asked to "use thsi iamge" -> https://images.unsplash.com/photo-1464822759023-fed622ff2c3b 
          This image looks like the mountains in the background of the snapshot. 
      */}

            {/* We will simulate the "Card on top of background" look. 
          The component itself might just be the card, and the page puts it over the background.
          However, looking at the request "similar to the snapshot", the snapshot IS the whole composition.
      */}

            <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop')",
                    }}
                >
                    {/* Dark Overlay to make text readable/match theme */}
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                {/* The Card Overlay */}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="w-full max-w-[500px] bg-[#1A1F2B]/95 border border-white/10 rounded-xl p-6 shadow-2xl backdrop-blur-md text-white">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
                                    <Monitor className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-white">Optimization Opportunity</h3>
                                    <p className="text-xs text-slate-400">Detected 2m ago</p>
                                </div>
                            </div>
                            <span className="rounded-md bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-500 border border-emerald-500/20">
                                High Impact
                            </span>
                        </div>

                        {/* Issue Box */}
                        <div className="mb-4 rounded-lg bg-black/20 p-4 border border-white/5">
                            <p className="text-xs font-medium text-slate-400 mb-1">ISSUE</p>
                            <p className="text-sm text-slate-200">Missing structured data on 42 product pages</p>
                        </div>

                        {/* Metrics */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="rounded-lg bg-black/20 p-4 border border-white/5">
                                <p className="text-xs font-medium text-slate-400 mb-1 uppercase">Current Visibility</p>
                                <p className="text-2xl font-bold text-white">45%</p>
                            </div>
                            <div className="rounded-lg bg-[#153e30]/30 p-4 border border-emerald-500/20">
                                <p className="text-xs font-medium text-emerald-500 mb-1 uppercase">Projected</p>
                                <div className="flex items-center gap-2">
                                    <p className="text-2xl font-bold text-emerald-400">92%</p>
                                    <ArrowUpRight className="h-5 w-5 text-emerald-400" />
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-3">
                            <Button className="flex-1 bg-white text-black hover:bg-slate-200 font-semibold h-10">
                                Auto-Fix Schema
                            </Button>
                            <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 hover:text-white h-10 px-6">
                                Details
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
