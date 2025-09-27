'use client'

import { Button } from "@/components/ui/button"
import { Info, ArrowRight, Calendar, Building2 } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function TryFreeRedirectDemo() {
    const router = useRouter()
    const [userInfo, setUserInfo] = useState({ email: '', name: '', company: '' })

    useEffect(() => {
        // Get user info from localStorage
        const email = localStorage.getItem('userEmail')
        const name = localStorage.getItem('userName')
        const company = localStorage.getItem('userCompany')
        const hasERP = localStorage.getItem('hasERP')

        if (!email || !name || hasERP !== 'false') {
            router.push('/try-free')
            return
        }

        setUserInfo({ email, name, company: company || '' })
    }, [router])

    const handleBookDemo = () => {
        // Redirect to chatfin.ai/talk-to-us
        window.location.href = 'https://chatfin.ai/talk-to-us'
    }

    const handleBackHome = () => {
        // Clear localStorage and go home
        localStorage.removeItem('userEmail')
        localStorage.removeItem('userName')
        localStorage.removeItem('userCompany')
        localStorage.removeItem('hasERP')
        router.push('/')
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
                    {/* Info Icon */}
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-8">
                        <Info className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                    </div>

                    {/* Message */}
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        Don't worry...
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                        Since you don't have an ERP system set up yet, we recommend scheduling a demo to see how ChatFin can help you get started with financial management.
                    </p>

                    {/* Benefits */}
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 mb-8 text-left">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                            What you'll get in the demo:
                        </h3>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-[#135142] rounded-full mt-2 flex-shrink-0"></div>
                                <span>Personalized setup guidance for your financial needs</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-[#135142] rounded-full mt-2 flex-shrink-0"></div>
                                <span>Learn about ERP integration options and alternatives</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-[#135142] rounded-full mt-2 flex-shrink-0"></div>
                                <span>See how ChatFin can work without existing ERP systems</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-[#135142] rounded-full mt-2 flex-shrink-0"></div>
                                <span>Custom recommendations for your company size</span>
                            </li>
                        </ul>
                    </div>

                    {/* User Info */}
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-4 mb-8">
                        <p className="text-sm text-green-800 dark:text-green-300">
                            We've saved your information ({userInfo.email}) and will pre-fill the demo form for you.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-4">
                        <Button
                            onClick={handleBookDemo}
                            className="w-full bg-gradient-to-r from-[#135142] to-[#10b875] hover:from-[#0d3b30] hover:to-[#0e9963] text-white py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-2"
                        >
                            <Calendar className="w-5 h-5" />
                            Book a Demo
                            <ArrowRight className="w-5 h-5" />
                        </Button>

                        <Button
                            onClick={handleBackHome}
                            variant="outline"
                            className="w-full py-4 rounded-xl text-lg font-semibold border-2"
                        >
                            Back to Home
                        </Button>
                    </div>

                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                        The demo is free and takes about 15-30 minutes
                    </p>
                </div>
            </main>
        </div>
    )
}