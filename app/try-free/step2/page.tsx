'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, ArrowLeft, User, Building } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function TryFreeStep2() {
    const router = useRouter()
    const [name, setName] = useState("")
    const [company, setCompany] = useState("")
    const [email, setEmail] = useState("")

    useEffect(() => {
        // Get email from localStorage
        const storedEmail = localStorage.getItem('userEmail')
        if (!storedEmail) {
            router.push('/try-free')
            return
        }
        setEmail(storedEmail)
    }, [router])

    const handleContinue = () => {
        if (name && company) {
            // Store additional info
            localStorage.setItem('userName', name)
            localStorage.setItem('userCompany', company)
            router.push('/try-free/step3')
        }
    }

    const handleBack = () => {
        router.push('/try-free')
    }

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 font-['Poppins',sans-serif]">
            {/* Navigation */}
            <header className="relative z-50 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center cursor-pointer" onClick={() => router.push('/')}>
                            <h1 className="text-2xl font-bold text-[#135142] dark:text-white">ChatFin</h1>
                        </div>

                        {/* Theme Toggle */}
                        <div className="flex items-center gap-4">
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </header>

            {/* Back to Home Link */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                <button
                    onClick={() => router.push('/')}
                    className="text-[#135142] dark:text-green-400 hover:underline text-sm flex items-center gap-1"
                >
                    ← Back to home
                </button>
            </div>

            {/* Main Content */}
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-md mx-auto">
                    {/* Progress Indicator */}
                    <div className="flex items-center justify-center mb-12">
                        <div className="flex items-center space-x-4">
                            <div className="w-8 h-8 bg-[#135142] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                                ✓
                            </div>
                            <div className="w-16 h-1 bg-[#135142]"></div>
                            <div className="w-8 h-8 bg-[#135142] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                                2
                            </div>
                            <div className="w-16 h-1 bg-gray-200 dark:bg-gray-700"></div>
                            <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 text-gray-400 rounded-full flex items-center justify-center text-sm font-semibold">
                                3
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-6">
                            <User className="w-8 h-8 text-[#135142] dark:text-green-400" />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Tell us about yourself
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                            Help us personalize your ChatFin experience
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                                type="text"
                                placeholder="Your full name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="pl-10 py-4 text-lg border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-[#135142] dark:focus:border-green-400"
                            />
                        </div>

                        <div className="relative">
                            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                                type="text"
                                placeholder="Company name (optional)"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                className="pl-10 py-4 text-lg border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-[#135142] dark:focus:border-green-400"
                            />
                        </div>

                        {/* Show email for confirmation */}
                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl">
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                Email: <span className="font-medium text-gray-900 dark:text-white">{email}</span>
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <Button
                                onClick={handleBack}
                                variant="outline"
                                className="flex-1 py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-2 border-2"
                            >
                                <ArrowLeft className="w-5 h-5" />
                                Back
                            </Button>

                            <Button
                                onClick={handleContinue}
                                disabled={!name}
                                className="flex-1 bg-gradient-to-r from-[#135142] to-[#10b875] hover:from-[#0d3b30] hover:to-[#0e9963] text-white py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Continue
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}