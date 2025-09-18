'use client'

import { ThemeToggle } from "@/components/theme-toggle"
import { useRouter } from "next/navigation"

export default function ComingSoon() {
    const router = useRouter()

    const handleBackHome = () => {
        router.push('/')
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden font-['Poppins',sans-serif]">
            {/* Top Brand */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
                <h1 className="text-2xl font-bold text-white">ChatFin</h1>
            </div>

            {/* Main Content */}
            <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
                {/* Main Heading */}
                <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black leading-[0.8] mb-8">
                    <div className="text-white">SOMETHING</div>
                    <div className="text-white">BIG IS</div>
                    <div className="text-white">COMING</div>
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl font-semibold tracking-widest uppercase text-gray-300 mb-4">
                    FINANCE AI IS GOING TO CHANGE FOREVER
                </p>

                {/* Date */}
                <p className="text-lg md:text-xl font-semibold tracking-widest text-gray-400">
                    SEPT 2025
                </p>
            </div>
        </div>
    )
}