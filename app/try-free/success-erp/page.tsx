'use client'

import { Button } from "@/components/ui/button"
import { CheckCircle, Mail, ArrowRight, Database } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function TryFreeSuccessERP() {
    const router = useRouter()
    const [userInfo, setUserInfo] = useState({ email: '', name: '', company: '' })

    useEffect(() => {
        // Get user info from localStorage
        const email = localStorage.getItem('userEmail')
        const name = localStorage.getItem('userName')
        const company = localStorage.getItem('userCompany')
        const hasERP = localStorage.getItem('hasERP')

        if (!email || !name || hasERP !== 'true') {
            router.push('/try-free')
            return
        }

        setUserInfo({ email, name, company: company || '' })
    }, [router])

    const handleContinue = () => {
        // Clear localStorage
        localStorage.removeItem('userEmail')
        localStorage.removeItem('userName')
        localStorage.removeItem('userCompany')
        localStorage.removeItem('hasERP')

        // Redirect to main app or dashboard
        router.push('/frontend')
    }

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 font-['Poppins',sans-serif]">
            {/* Navigation */}
            <header className="relative z-50 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center">
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
                <div className="max-w-lg mx-auto text-center">
                    {/* Success Icon */}
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full mb-8">
                        <CheckCircle className="w-12 h-12 text-[#135142] dark:text-green-400" />
                    </div>

                    {/* Success Message */}
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        Welcome to ChatFin!
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                        Your account has been created successfully. We've validated your details and additional validation is in progress.
                    </p>

                    {/* User Info Summary */}
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 mb-8 text-left">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <Database className="w-5 h-5" />
                            Account Details
                        </h3>
                        <div className="space-y-3">
                            <div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Name:</span>
                                <p className="font-medium text-gray-900 dark:text-white">{userInfo.name}</p>
                            </div>
                            <div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Email:</span>
                                <p className="font-medium text-gray-900 dark:text-white">{userInfo.email}</p>
                            </div>
                            {userInfo.company && (
                                <div>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">Company:</span>
                                    <p className="font-medium text-gray-900 dark:text-white">{userInfo.company}</p>
                                </div>
                            )}
                            <div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">ERP Access:</span>
                                <p className="font-medium text-green-600 dark:text-green-400">✓ Confirmed</p>
                            </div>
                        </div>
                    </div>

                    {/* Next Steps */}
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 mb-8 text-left">
                        <h3 className="font-semibold text-blue-900 dark:text-blue-400 mb-3 flex items-center gap-2">
                            <Mail className="w-5 h-5" />
                            What's Next?
                        </h3>
                        <ul className="space-y-2 text-blue-800 dark:text-blue-300">
                            <li>• Email confirmation sent to {userInfo.email}</li>
                            <li>• ERP integration setup in progress</li>
                            <li>• You'll receive setup instructions within 24 hours</li>
                            <li>• Our team will reach out for any additional validation needed</li>
                        </ul>
                    </div>

                    {/* CTA Button */}
                    <Button
                        onClick={handleContinue}
                        className="w-full bg-gradient-to-r from-[#135142] to-[#10b875] hover:from-[#0d3b30] hover:to-[#0e9963] text-white py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-2"
                    >
                        Access Dashboard
                        <ArrowRight className="w-5 h-5" />
                    </Button>

                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                        You can start using ChatFin immediately while we complete the ERP setup.
                    </p>
                </div>
            </main>
        </div>
    )
}