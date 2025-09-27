'use client'

import { Button } from "@/components/ui/button"
import { ArrowLeft, Home } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useRouter } from "next/navigation"

export default function Dashboard() {
    const router = useRouter()

    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: 'url(/dashboard.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Navigation */}
            <header className="sticky top-0 z-50 bg-white/10 dark:bg-gray-900/10 backdrop-blur-md border-b border-white/20 dark:border-gray-700/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <h1 className="text-2xl font-bold text-white drop-shadow-lg">ChatFin</h1>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex items-center gap-4">
                            <Button
                                onClick={() => router.push('/')}
                                variant="outline"
                                className="flex items-center gap-2 text-sm bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm"
                            >
                                <Home className="w-4 h-4" />
                                Home
                            </Button>
                            <Button
                                onClick={() => router.back()}
                                variant="outline"
                                className="flex items-center gap-2 text-sm bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Back
                            </Button>
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </header>

            {/* Dashboard Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center space-y-6">
                        <div className="bg-white/10 dark:bg-gray-900/10 backdrop-blur-md rounded-2xl border border-white/20 dark:border-gray-700/20 p-8 shadow-2xl">
                            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
                                Welcome to ChatFin Dashboard
                            </h1>
                            <p className="text-xl text-white/90 drop-shadow-md mb-6">
                                Your AI-powered financial management platform
                            </p>
                            <div className="space-y-4">
                                <p className="text-white/80 drop-shadow-sm">
                                    This is a preview of your ChatFin dashboard where you'll manage all your financial data,
                                    get AI-powered insights, and make informed financial decisions.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button
                                        onClick={() => router.push('/book-demo')}
                                        className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        Schedule a Demo
                                    </Button>
                                    <Button
                                        onClick={() => router.push('/')}
                                        variant="outline"
                                        className="bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm px-8 py-3 rounded-xl font-semibold"
                                    >
                                        Learn More
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}