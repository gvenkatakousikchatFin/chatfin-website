'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Star, Sparkles, Zap, Shield, Globe, TrendingUp, Clock, CheckCircle, Bot, BarChart3, PieChart, CreditCard, FileText, Users, Target, Calendar, Smartphone, Database, Workflow, Layers, Activity, ArrowUpRight, Building2, User, ChevronDown, Infinity, DollarSign, Eye, Award, Lock, Rocket } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useRouter } from "next/navigation"

export default function Home3() {
    const router = useRouter()

    const handleGetStarted = () => {
        router.push('/get-started')
    }

    const handleBookDemo = () => {
        router.push('/book-demo/home3')
    }

    const handleIndividualDemo = () => {
        router.push('/book-demo/individual')
    }

    const handleEnterpriseDemo = () => {
        router.push('/book-demo/enterprise')
    }

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-x-hidden font-['Poppins',sans-serif]">
            {/* Navigation */}
            <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b border-gray-200 dark:border-gray-700">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <h1 className="text-2xl font-bold text-[#135142] dark:text-white">ChatFin</h1>
                        </div>

                        {/* Navigation Links */}
                        <nav className="hidden md:flex items-center space-x-8">
                            <a href="/" className="text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-white transition-colors text-sm font-medium">
                                Home1
                            </a>
                            <a href="/home2" className="text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-white transition-colors text-sm font-medium">
                                Home2
                            </a>
                            <a href="/home3" className="text-[#135142] dark:text-white font-medium text-sm border-b-2 border-[#135142] dark:border-white pb-1">
                                Home3
                            </a>
                            <a href="/coming-soon" className="text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-white transition-colors text-sm font-medium">
                                Soon
                            </a>
                        </nav>

                        {/* Theme Toggle & CTA */}
                        <div className="flex items-center gap-4">
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-900">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-green-50 dark:from-green-900/20 dark:via-gray-900 dark:to-green-900/20"></div>
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-100/30 dark:bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-200/20 dark:bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 mb-8 backdrop-blur-sm">
                        <Sparkles className="w-4 h-4 text-[#135142] dark:text-green-400 animate-pulse" />
                        <span className="text-sm font-semibold text-[#135142] dark:text-green-400">AI-Powered Financial Intelligence</span>
                        <Sparkles className="w-4 h-4 text-[#135142] dark:text-green-400 animate-pulse" />
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
                        <span className="bg-gradient-to-r from-gray-900 via-[#135142] to-gray-900 dark:from-white dark:via-green-200 dark:to-white bg-clip-text text-transparent">
                            Money
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-[#135142] to-[#10b875] bg-clip-text text-transparent">
                            Simplified
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                        The future of financial management is here. Experience AI-driven insights,
                        automated workflows, and intelligent decision-making.
                    </p>

                    {/* Interactive CTAs */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                        <Button
                            onClick={handleGetStarted}
                            className="group bg-gradient-to-r from-[#135142] to-[#10b875] hover:from-[#0d3b30] hover:to-[#0e9963] text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
                        >
                            <Zap className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                            Launch Experience
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>

                        <Button
                            onClick={handleBookDemo}
                            variant="outline"
                            className="group border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-[#135142] dark:hover:border-green-400 hover:text-[#135142] dark:hover:text-green-400 px-8 py-4 rounded-2xl text-lg font-semibold bg-white dark:bg-gray-900 backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                        >
                            <Play className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                            Watch Demo
                        </Button>
                    </div>

                    {/* Stats Row */}
                    <div className="flex justify-center items-center gap-8 text-center">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#135142] dark:bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-sm text-gray-600 dark:text-gray-400">500K+ Users</span>
                        </div>
                        <div className="w-1 h-4 bg-gray-300 dark:bg-gray-600"></div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#10b875] dark:bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-sm text-gray-600 dark:text-gray-400">99.9% Uptime</span>
                        </div>
                        <div className="w-1 h-4 bg-gray-300 dark:bg-gray-600"></div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#135142] dark:bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-sm text-gray-600 dark:text-gray-400">AI-First</span>
                        </div>
                    </div>
                </div>
            </section >

            {/* Product Showcase */}
            < section className="py-20 relative bg-gray-50 dark:bg-gray-800" >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-[#135142] to-[#10b875] bg-clip-text text-transparent">
                                Experience the Future
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            A glimpse into next-generation financial management
                        </p>
                    </div>

                    <div className="relative max-w-6xl mx-auto">
                        {/* Floating Dashboard */}
                        <div className="relative transform rotate-1 hover:rotate-0 transition-transform duration-700">
                            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden shadow-2xl border border-gray-800">
                                <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-4 flex items-center gap-3">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    </div>
                                    <span className="text-sm text-gray-400 font-mono">app.chatfin.com</span>
                                    <div className="ml-auto flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                        <span className="text-xs text-green-400">Live</span>
                                    </div>
                                </div>
                                <div className="aspect-video relative overflow-hidden">
                                    <img
                                        src="https://i.postimg.cc/cJGbtHG1/Navy-Geometric-Business-Webinar-Instagram-Post-8.png"
                                        alt="ChatFin Future Dashboard"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl overflow-hidden">
                            <img
                                src="https://i.postimg.cc/cJGbtHG1/Navy-Geometric-Business-Webinar-Instagram-Post-8.png"
                                alt="ChatFin Future Dashboard"
                                className="w-full h-[400px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section >

            {/* Individuals Section */}
            < section className="py-20 bg-white dark:bg-gray-900" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Content Left */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="inline-block">
                                    <span className="text-sm font-semibold text-[#135142] dark:text-green-400 tracking-wider uppercase bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-full border border-green-200 dark:border-green-800 flex items-center gap-2 w-fit">
                                        <Users className="w-4 h-4" />
                                        For Individuals
                                    </span>
                                </div>
                                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                                    Future{" "}
                                    <span className="bg-gradient-to-r from-[#135142] to-[#10b875] bg-clip-text text-transparent">
                                        Personal Finance
                                    </span>
                                </h2>
                                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Experience next-generation personal finance with AI that anticipates your needs and simplifies every transaction.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Sparkles className="w-5 h-5 text-[#135142] dark:text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Predictive Intelligence</h3>
                                        <p className="text-gray-600 dark:text-gray-300">AI that learns your patterns and predicts financial needs before they arise.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Zap className="w-5 h-5 text-[#135142] dark:text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Instant Optimization</h3>
                                        <p className="text-gray-600 dark:text-gray-300">Real-time financial optimization with quantum-speed processing and insights.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Rocket className="w-5 h-5 text-[#135142] dark:text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Future-Ready Features</h3>
                                        <p className="text-gray-600 dark:text-gray-300">Advanced capabilities that evolve with tomorrow's financial landscape.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Demo Right */}
                        <div className="relative">
                            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl overflow-hidden">
                                <img
                                    src="https://i.postimg.cc/cJGbtHG1/Navy-Geometric-Business-Webinar-Instagram-Post-8.png"
                                    alt="ChatFin Personal Finance Future"
                                    className="w-full h-[300px] object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Enterprises Section */}
            < section className="py-20 bg-gray-50 dark:bg-gray-800" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Demo Left */}
                        <div className="relative">
                            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl overflow-hidden">
                                <img
                                    src="https://i.postimg.cc/cJGbtHG1/Navy-Geometric-Business-Webinar-Instagram-Post-8.png"
                                    alt="ChatFin Enterprise Future"
                                    className="w-full h-[300px] object-cover"
                                />
                            </div>
                        </div>

                        {/* Content Right */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="inline-block">
                                    <span className="text-sm font-semibold text-[#135142] dark:text-green-400 tracking-wider uppercase bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-full border border-green-200 dark:border-green-800 flex items-center gap-2 w-fit">
                                        <Building2 className="w-4 h-4" />
                                        For Enterprises
                                    </span>
                                </div>
                                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                                    Revolutionary{" "}
                                    <span className="bg-gradient-to-r from-[#135142] to-[#10b875] bg-clip-text text-transparent">
                                        Enterprise Platform
                                    </span>
                                </h2>
                                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Transform your organization with quantum-ready financial technology and intelligent automation.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Infinity className="w-5 h-5 text-[#135142] dark:text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Quantum Processing</h3>
                                        <p className="text-gray-600 dark:text-gray-300">Process infinite data streams with quantum-scale computational power.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Globe className="w-5 h-5 text-[#135142] dark:text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Universal Integration</h3>
                                        <p className="text-gray-600 dark:text-gray-300">Seamlessly connect with any system, anywhere in the digital universe.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Shield className="w-5 h-5 text-[#135142] dark:text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Fortress Security</h3>
                                        <p className="text-gray-600 dark:text-gray-300">Military-grade protection with self-healing security architecture.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Terminal Demo Section */}
            <section className="py-10 bg-white dark:bg-gray-900 relative overflow-hidden min-h-screen flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                See ChatFin in Action
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-300">
                                Watch how simple financial operations become with natural language commands
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-300 dark:border-gray-700 shadow-2xl h-[90vh] flex flex-col">
                            {/* Terminal Header */}
                            {/* <div className="flex items-center px-6 py-4 bg-gray-100 dark:bg-gray-800 rounded-t-xl border-b border-gray-300 dark:border-gray-700 flex-shrink-0">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                                <div className="flex-1 text-center">
                                    <span className="text-gray-700 dark:text-gray-300 text-xl font-mono">ChatFin</span>
                                </div>
                            </div> */}

                            {/* Terminal Content */}
                            {/* <div className="flex-1 p-12 font-mono text-xl flex flex-col justify-start overflow-auto">
                                <div className="text-[#135142] dark:text-green-400 mb-2">
                                    <span className="terminal-cursor">|</span>
                                </div>

                                <div className="terminal-line opacity-0" style={{ animationDelay: '1s' }}>
                                    <span className="text-gray-900 dark:text-white">Run my prepaid reconciliation for March 2025</span>
                                </div>

                                <div className="mt-8 space-y-4">
                                    <div className="terminal-line opacity-0" style={{ animationDelay: '2s' }}>
                                        <span className="text-blue-600 dark:text-blue-400">[INFO]</span> <span className="text-gray-700 dark:text-gray-300">Pulling invoices...</span>
                                    </div>
                                    <div className="terminal-line opacity-0" style={{ animationDelay: '3s' }}>
                                        <span className="text-blue-600 dark:text-blue-400">[INFO]</span> <span className="text-gray-700 dark:text-gray-300">Pulling account balance (4678)...</span>
                                    </div>
                                    <div className="terminal-line opacity-0" style={{ animationDelay: '4s' }}>
                                        <span className="text-blue-600 dark:text-blue-400">[INFO]</span> <span className="text-gray-700 dark:text-gray-300">Running prepaid template...</span>
                                    </div>
                                    <div className="terminal-line opacity-0" style={{ animationDelay: '5s' }}>
                                        <span className="text-green-600 dark:text-green-400">[SUCCESS]</span> <span className="text-gray-700 dark:text-gray-300">Reconciliation complete.</span>
                                    </div>
                                    <div className="terminal-line opacity-0" style={{ animationDelay: '6s' }}>
                                        <span className="text-yellow-600 dark:text-yellow-400">[WARN]</span> <span className="text-gray-700 dark:text-gray-300">47 mismatches found.</span>
                                    </div>
                                </div>

                            </div> */}
                        </div>

                        <div className="text-center mt-8">
                            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">Ready to transform your financial operations?</p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Button
                                    onClick={handleGetStarted}
                                    className="bg-[#135142] hover:bg-[#0f3d33] text-white px-10 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-lg"
                                >
                                    Get Started Free <ArrowRight className="ml-2 h-6 w-6" />
                                </Button>
                                <Button
                                    variant="outline"
                                    onClick={handleBookDemo}
                                    className="border-2 border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white px-10 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                                >
                                    <Play className="mr-2 h-6 w-6" /> Watch Demo
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center mb-4 md:mb-0">
                            <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-400 rounded mr-3"></div>
                            <span className="text-white font-bold">ChatFin</span>
                            <span className="ml-4 text-gray-500 text-sm">The future of finance</span>
                        </div>

                        <div className="flex items-center gap-8 text-sm text-gray-400">
                            <a href="#" className="hover:text-white transition-colors">Privacy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms</a>
                            <a href="#" className="hover:text-white transition-colors">Contact</a>
                            <span>© 2024 ChatFin</span>
                        </div>
                    </div>
                </div>
            </footer >

            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes terminal-type {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes cursor-blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 8s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .terminal-line {
          animation: terminal-type 0.8s ease-out forwards;
        }
        .terminal-cursor {
          animation: cursor-blink 1s infinite;
        }
        .terminal-cursor-final {
          animation: cursor-blink 1s infinite;
          animation-delay: 7s;
        }
      `}</style>
        </div >
    )
}