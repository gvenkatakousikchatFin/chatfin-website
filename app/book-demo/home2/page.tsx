'use client'

import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, Users, Building2, Sparkles, Zap } from "lucide-react"
import { useRouter } from "next/navigation"

export default function BookDemoHome2() {
    const router = useRouter()

    const handleBack = () => {
        router.push('/home2')
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
                            Back to Home2
                        </Button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 mb-6">
                            <Sparkles className="w-4 h-4 text-[#135142] dark:text-green-400" />
                            <span className="text-sm font-semibold text-[#135142] dark:text-green-400">Advanced Financial Intelligence</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Experience Financial Intelligence
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                            Discover how our advanced AI transforms complex financial data into actionable insights for your business.
                        </p>
                    </div>

                    {/* Demo Options */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {/* Personal Intelligence Demo */}
                        <div className="bg-gradient-to-br from-green-50 to-gray-50 dark:from-green-900/20 dark:to-gray-800 rounded-2xl p-8 border border-green-200 dark:border-green-800">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center">
                                    <Zap className="w-6 h-6 text-[#135142] dark:text-green-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Smart Analytics Demo</h3>
                            </div>

                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Experience intelligent financial insights with predictive analytics and automated decision support.
                            </p>

                            <div className="space-y-3 mb-8">
                                <div className="flex items-center gap-3">
                                    <Clock className="w-4 h-4 text-[#135142] dark:text-green-400" />
                                    <span className="text-sm text-gray-600 dark:text-gray-300">20-minute interactive demo</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Calendar className="w-4 h-4 text-[#135142] dark:text-green-400" />
                                    <span className="text-sm text-gray-600 dark:text-gray-300">Real-time data analysis</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Sparkles className="w-4 h-4 text-[#135142] dark:text-green-400" />
                                    <span className="text-sm text-gray-600 dark:text-gray-300">AI-powered insights</span>
                                </div>
                            </div>

                            <Button
                                onClick={() => router.push('/book-demo/individual')}
                                className="w-full bg-gradient-to-r from-[#135142] to-[#10b875] hover:from-[#0d3b30] hover:to-[#0e9963] text-white py-3 rounded-xl font-semibold"
                            >
                                Experience Smart Analytics
                            </Button>
                        </div>

                        {/* Enterprise Intelligence Demo */}
                        <div className="bg-gradient-to-br from-green-50 to-gray-50 dark:from-green-900/20 dark:to-gray-800 rounded-2xl p-8 border border-green-200 dark:border-green-800">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center">
                                    <Building2 className="w-6 h-6 text-[#135142] dark:text-green-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Enterprise Intelligence</h3>
                            </div>

                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Advanced financial intelligence platform with multi-dimensional analytics and strategic forecasting.
                            </p>

                            <div className="space-y-3 mb-8">
                                <div className="flex items-center gap-3">
                                    <Clock className="w-4 h-4 text-[#135142] dark:text-green-400" />
                                    <span className="text-sm text-gray-600 dark:text-gray-300">45-minute deep dive</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Calendar className="w-4 h-4 text-[#135142] dark:text-green-400" />
                                    <span className="text-sm text-gray-600 dark:text-gray-300">Customized scenarios</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Users className="w-4 h-4 text-[#135142] dark:text-green-400" />
                                    <span className="text-sm text-gray-600 dark:text-gray-300">Multi-team collaboration</span>
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

                    {/* Features Preview */}
                    <div className="bg-gradient-to-r from-green-50 to-gray-50 dark:from-green-900/20 dark:to-gray-800 rounded-2xl p-8 border border-green-200 dark:border-green-800 mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                            What You'll Experience
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mx-auto mb-3">
                                    <Sparkles className="w-6 h-6 text-[#135142] dark:text-green-400" />
                                </div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">AI-Powered Insights</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300">Real-time financial analysis with predictive modeling</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mx-auto mb-3">
                                    <Zap className="w-6 h-6 text-[#135142] dark:text-green-400" />
                                </div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Instant Analytics</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300">Lightning-fast data processing and visualization</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mx-auto mb-3">
                                    <Building2 className="w-6 h-6 text-[#135142] dark:text-green-400" />
                                </div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Enterprise Scale</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300">Scalable solutions for growing businesses</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="text-center bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                            Need a Custom Demo?
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Let us tailor a demonstration specifically for your financial intelligence requirements.
                        </p>
                        <Button
                            variant="outline"
                            className="border-[#135142] text-[#135142] hover:bg-[#135142] hover:text-white dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-gray-900"
                        >
                            Schedule Custom Demo
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    )
}