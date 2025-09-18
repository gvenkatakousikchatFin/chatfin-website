'use client'

import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, Users, Building2, Sparkles, Zap, Rocket } from "lucide-react"
import { useRouter } from "next/navigation"

export default function BookDemoHome3() {
    const router = useRouter()

    const handleBack = () => {
        router.push('/home3')
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
                            Back to Home3
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
                            <Rocket className="w-4 h-4 text-[#135142] dark:text-green-400" />
                            <span className="text-sm font-semibold text-[#135142] dark:text-green-400">Next-Generation Finance</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Experience the Future
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                            Discover revolutionary financial technology that transforms how you think about money management and business finance.
                        </p>
                    </div>

                    {/* Demo Options */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {/* Innovation Demo */}
                        <div className="bg-gradient-to-br from-green-50 to-gray-50 dark:from-green-900/20 dark:to-gray-800 rounded-2xl p-8 border border-green-200 dark:border-green-800">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center">
                                    <Sparkles className="w-6 h-6 text-[#135142] dark:text-green-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Innovation Showcase</h3>
                            </div>

                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Experience cutting-edge financial innovation with next-generation AI and revolutionary user interfaces.
                            </p>

                            <div className="space-y-3 mb-8">
                                <div className="flex items-center gap-3">
                                    <Clock className="w-4 h-4 text-[#135142] dark:text-green-400" />
                                    <span className="text-sm text-gray-600 dark:text-gray-300">25-minute innovation tour</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Calendar className="w-4 h-4 text-[#135142] dark:text-green-400" />
                                    <span className="text-sm text-gray-600 dark:text-gray-300">Future-ready features</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Sparkles className="w-4 h-4 text-[#135142] dark:text-green-400" />
                                    <span className="text-sm text-gray-600 dark:text-gray-300">Revolutionary UI/UX</span>
                                </div>
                            </div>

                            <Button
                                onClick={() => router.push('/book-demo/individual')}
                                className="w-full bg-gradient-to-r from-[#135142] to-[#10b875] hover:from-[#0d3b30] hover:to-[#0e9963] text-white py-3 rounded-xl font-semibold"
                            >
                                Experience Innovation
                            </Button>
                        </div>

                        {/* Future Enterprise Demo */}
                        <div className="bg-gradient-to-br from-green-50 to-gray-50 dark:from-green-900/20 dark:to-gray-800 rounded-2xl p-8 border border-green-200 dark:border-green-800">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center">
                                    <Rocket className="w-6 h-6 text-[#135142] dark:text-green-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Future Enterprise</h3>
                            </div>

                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Explore tomorrow's enterprise financial platform with quantum-scale processing and predictive intelligence.
                            </p>

                            <div className="space-y-3 mb-8">
                                <div className="flex items-center gap-3">
                                    <Clock className="w-4 h-4 text-[#135142] dark:text-green-400" />
                                    <span className="text-sm text-gray-600 dark:text-gray-300">60-minute future vision</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Calendar className="w-4 h-4 text-[#135142] dark:text-green-400" />
                                    <span className="text-sm text-gray-600 dark:text-gray-300">Quantum-ready architecture</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Building2 className="w-4 h-4 text-[#135142] dark:text-green-400" />
                                    <span className="text-sm text-gray-600 dark:text-gray-300">Enterprise transformation</span>
                                </div>
                            </div>

                            <Button
                                onClick={() => router.push('/book-demo/enterprise')}
                                className="w-full bg-gradient-to-r from-[#135142] to-[#10b875] hover:from-[#0d3b30] hover:to-[#0e9963] text-white py-3 rounded-xl font-semibold"
                            >
                                Explore Future Enterprise
                            </Button>
                        </div>
                    </div>

                    {/* Vision Statement */}
                    <div className="bg-gradient-to-r from-green-50 to-gray-50 dark:from-green-900/20 dark:to-gray-800 rounded-2xl p-8 border border-green-200 dark:border-green-800 mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                            The Future is Here
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mx-auto mb-3">
                                    <Sparkles className="w-6 h-6 text-[#135142] dark:text-green-400" />
                                </div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Revolutionary Design</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300">Interfaces that anticipate your needs</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mx-auto mb-3">
                                    <Zap className="w-6 h-6 text-[#135142] dark:text-green-400" />
                                </div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Quantum Processing</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300">Lightning-fast financial computations</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mx-auto mb-3">
                                    <Rocket className="w-6 h-6 text-[#135142] dark:text-green-400" />
                                </div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Next-Gen Features</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300">Technology that defines tomorrow</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="text-center bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                            Ready for the Future?
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Join us in shaping the next generation of financial technology and business transformation.
                        </p>
                        <Button
                            variant="outline"
                            className="border-[#135142] text-[#135142] hover:bg-[#135142] hover:text-white dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-gray-900"
                        >
                            Schedule Future Demo
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    )
}