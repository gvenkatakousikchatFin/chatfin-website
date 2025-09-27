'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Mail, Zap } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function TryFree() {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")

    const isWorkEmail = (email: string) => {
        const personalDomains = [
            'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com',
            'aol.com', 'icloud.com', 'live.com', 'msn.com',
            'rediffmail.com', 'ymail.com', 'rocketmail.com'
        ]
        const domain = email.split('@')[1]?.toLowerCase()
        return domain && !personalDomains.includes(domain)
    }

    const handleContinue = () => {
        if (email) {
            if (!isWorkEmail(email)) {
                setEmailError("Please use a work email address. Personal email domains like Gmail, Yahoo, etc. are not allowed.")
                return
            }
            setEmailError("")
            // Store email in localStorage for next step
            localStorage.setItem('userEmail', email)
            router.push('/try-free/step2')
        }
    }

    const handleBack = () => {
        router.push('/')
    }

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 font-['Poppins',sans-serif]">
            {/* Navigation */}
            <header className="relative z-50 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center cursor-pointer" onClick={handleBack}>
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
                    onClick={handleBack}
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
                                1
                            </div>
                            <div className="w-16 h-1 bg-gray-200 dark:bg-gray-700"></div>
                            <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 text-gray-400 rounded-full flex items-center justify-center text-sm font-semibold">
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
                            <Zap className="w-8 h-8 text-[#135142] dark:text-green-400" />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Get Started - Free
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                            Enter your email to start your free ChatFin account
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="relative">
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
                                <Input
                                    type="email"
                                    placeholder="Enter your work email address"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                        setEmailError("")
                                    }}
                                    className={`pl-10 py-4 text-lg border-2 rounded-xl focus:border-[#135142] dark:focus:border-green-400 ${emailError
                                        ? 'border-red-500 dark:border-red-400'
                                        : 'border-gray-200 dark:border-gray-600'
                                        }`}
                                />
                            </div>
                            {emailError && (
                                <p className="text-red-500 text-sm mt-2 flex items-start gap-2">
                                    <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                    {emailError}
                                </p>
                            )}
                        </div>                        <Button
                            onClick={handleContinue}
                            disabled={!email}
                            className="w-full bg-gradient-to-r from-[#135142] to-[#10b875] hover:from-[#0d3b30] hover:to-[#0e9963] text-white py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Continue
                            <ArrowRight className="w-5 h-5" />
                        </Button>

                        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                            No credit card required • Free forever for individuals
                        </p>
                    </div>


                </div>
            </main>
        </div>
    )
}