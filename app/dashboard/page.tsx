'use client'

import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { useRouter } from "next/navigation"

export default function Dashboard() {
    const router = useRouter()

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">

            {/* Dashboard Content */}
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-full mx-auto">
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src="/dashboard.png"
                            alt="ChatFin Dashboard"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </main>
        </div>
    )
}
