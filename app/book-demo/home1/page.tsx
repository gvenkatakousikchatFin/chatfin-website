'use client'

import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, Users, Building2 } from "lucide-react"
import { useRouter } from "next/navigation"

export default function BookDemoHome1() {
    const router = useRouter()

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
                        <div className="flex items-center">
                            <h1 className="text-2xl font-bold text-[#135142] dark:text-white">ChatFin</h1>
                        </div>

                        {/* Back Button */}
                        <Button
                            onClick={handleBack}
                            variant="outline"
                            className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Home1
                        </Button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Book a Demo
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                            See how ChatFin can transform your finance operations. Choose the demo that best fits your needs.
                        </p>
                    </div>

                    {/* Demo Options */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {/* Individual Demo */}
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                                    <Users className="w-6 h-6 text-[#135142] dark:text-green-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Personal Finance Demo</h3>
                            </div>

                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Perfect for individuals who want to take control of their personal finances with AI-powered insights.
                            </p>

                            <div className="space-y-3 mb-8">
                                <div className="flex items-center gap-3">
                                    <Clock className="w-4 h-4 text-[#135142] dark:text-green-400" />
                                    <span className="text-sm text-gray-600 dark:text-gray-300">15-minute demo</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Calendar className="w-4 h-4 text-[#135142] dark:text-green-400" />
                                    <span className="text-sm text-gray-600 dark:text-gray-300">Available immediately</span>
                                </div>
                            </div>

                            <Button
                                onClick={() => router.push('/book-demo/individual')}
                                className="w-full bg-gradient-to-r from-[#135142] to-[#10b875] hover:from-[#0d3b30] hover:to-[#0e9963] text-white py-3 rounded-xl font-semibold"
                            >
                                Book Personal Demo
                            </Button>
                        </div>

                        {/* Enterprise Demo */}
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                                    <Building2 className="w-6 h-6 text-[#135142] dark:text-green-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Enterprise Demo</h3>
                            </div>

                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Ideal for organizations looking to scale their finance operations with advanced features and team collaboration.
                            </p>

                            <div className="space-y-3 mb-8">
                                <div className="flex items-center gap-3">
                                    <Clock className="w-4 h-4 text-[#135142] dark:text-green-400" />
                                    <span className="text-sm text-gray-600 dark:text-gray-300">30-minute demo</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Calendar className="w-4 h-4 text-[#135142] dark:text-green-400" />
                                    <span className="text-sm text-gray-600 dark:text-gray-300">Custom scheduling</span>
                                </div>
                            </div>

                            <Button
                                onClick={() => router.push('/book-demo/enterprise')}
                                className="w-full bg-gradient-to-r from-[#135142] to-[#10b875] hover:from-[#0d3b30] hover:to-[#0e9963] text-white py-3 rounded-xl font-semibold"
                            >
                                Book Enterprise Demo
                            </Button>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="text-center bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                            Have Questions?
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Our team is here to help you choose the right solution for your needs.
                        </p>
                        <Button
                            variant="outline"
                            className="border-[#135142] text-[#135142] hover:bg-[#135142] hover:text-white dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-gray-900"
                        >
                            Contact Sales
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    )
}