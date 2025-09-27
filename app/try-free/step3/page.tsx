'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, Database, CheckCircle, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function TryFreeStep3() {
    const router = useRouter()
    const [hasERP, setHasERP] = useState<boolean | null>(null)
    const [userInfo, setUserInfo] = useState({ email: '', name: '', company: '' })

    useEffect(() => {
        // Get user info from localStorage
        const email = localStorage.getItem('userEmail')
        const name = localStorage.getItem('userName')
        const company = localStorage.getItem('userCompany')

        if (!email || !name) {
            router.push('/try-free')
            return
        }

        setUserInfo({ email, name, company: company || '' })
    }, [router])

    const handleContinue = () => {
        if (hasERP !== null) {
            // Store ERP choice
            localStorage.setItem('hasERP', hasERP.toString())

            if (hasERP) {
                // Case A: Yes - Validate details and additional validation needed
                router.push('/try-free/success-erp')
            } else {
                // Case B: No - Redirect to Demo Flow with message
                router.push('/try-free/redirect-demo')
            }
        }
    }

    const handleBack = () => {
        router.push('/try-free/step2')
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
                                ✓
                            </div>
                            <div className="w-16 h-1 bg-[#135142]"></div>
                            <div className="w-8 h-8 bg-[#135142] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                                3
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-6">
                            <Database className="w-8 h-8 text-[#135142] dark:text-green-400" />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            ERP Setup
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                            Do you have NetSuite access or another ERP system?
                        </p>
                    </div>

                    <div className="space-y-4">
                        {/* Yes Option */}
                        <button
                            onClick={() => setHasERP(true)}
                            className={`w-full p-6 border-2 rounded-xl transition-all duration-200 ${hasERP === true
                                ? 'border-[#135142] bg-green-50 dark:bg-green-900/20'
                                : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${hasERP === true
                                    ? 'border-[#135142] bg-[#135142]'
                                    : 'border-gray-300 dark:border-gray-600'
                                    }`}>
                                    {hasERP === true && <CheckCircle className="w-4 h-4 text-white" />}
                                </div>
                                <div className="text-left">
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Yes, I have ERP access</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">NetSuite, SAP, or other ERP system</p>
                                </div>
                            </div>
                        </button>

                        {/* No Option */}
                        <button
                            onClick={() => setHasERP(false)}
                            className={`w-full p-6 border-2 rounded-xl transition-all duration-200 ${hasERP === false
                                ? 'border-[#135142] bg-green-50 dark:bg-green-900/20'
                                : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${hasERP === false
                                    ? 'border-[#135142] bg-[#135142]'
                                    : 'border-gray-300 dark:border-gray-600'
                                    }`}>
                                    {hasERP === false && <X className="w-4 h-4 text-white" />}
                                </div>
                                <div className="text-left">
                                    <h3 className="font-semibold text-gray-900 dark:text-white">No ERP system</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">I don't have access to an ERP system</p>
                                </div>
                            </div>
                        </button>
                    </div>

                    <div className="flex gap-4 mt-8">
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
                            disabled={hasERP === null}
                            className="flex-1 bg-gradient-to-r from-[#135142] to-[#10b875] hover:from-[#0d3b30] hover:to-[#0e9963] text-white py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Continue
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    )
}