import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle, Zap, Users, Building, Shield } from "lucide-react"
import Link from "next/link"

export default function GetStarted() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 font-poppins">
            {/* Navigation */}
            <header className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-white transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                            <span>Back to Home</span>
                        </Link>
                        <h1 className="text-2xl font-bold text-[#135142] dark:text-white">ChatFin</h1>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-block mb-6">
                        <span className="text-xs font-medium text-[#135142] dark:text-green-400 tracking-wider uppercase bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-full border border-green-200 dark:border-green-800">
                            🎉 Free  Plan
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Get started with ChatFin
                        <span className="bg-gradient-to-r from-[#135142] to-[#10b875] bg-clip-text text-transparent"> for free</span>
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
                        Start automating your finance workflows today. No credit card required, no setup fees.
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-6 h-6 text-[#135142] dark:text-green-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Instant Setup</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Get up and running in under 5 minutes with our guided onboarding
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">AI-Powered</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Advanced AI that learns your finance patterns and automates tasks
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Bank-Grade Security</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Enterprise-level security with SOC2 compliance and encryption
                            </p>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-gradient-to-r from-[#135142] to-[#10b875] rounded-3xl p-8 text-white">
                        <h2 className="text-2xl font-bold mb-4">Ready to transform your finance workflow?</h2>
                        <p className="text-lg mb-6 opacity-90">Join thousands of finance professionals already using ChatFin.</p>

                        <Button className="bg-white text-[#135142] hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300">
                            Start Free Trial
                        </Button>

                        <p className="text-sm mt-4 opacity-75">No credit card required • Cancel anytime</p>
                    </div>
                </div>
            </main>
        </div>
    )
}
