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
            </section >

            {/* Feature Cosmos */}
            < section className="py-20 relative overflow-hidden" >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                Infinite Possibilities
                            </span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Every feature designed to push the boundaries of what's possible in financial technology
                        </p>
                    </div>

                    {/* Hexagonal Feature Grid */}
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                icon: Bot,
                                title: "Neural Finance AI",
                                description: "Advanced machine learning that predicts your financial future",
                                gradient: "from-green-500 to-emerald-500",
                                delay: "delay-0"
                            },
                            {
                                icon: Infinity,
                                title: "Quantum Analytics",
                                description: "Process infinite data points for unprecedented insights",
                                gradient: "from-blue-500 to-cyan-500",
                                delay: "delay-100"
                            },
                            {
                                icon: Shield,
                                title: "Fortress Security",
                                description: "Military-grade protection with zero-knowledge architecture",
                                gradient: "from-purple-500 to-violet-500",
                                delay: "delay-200"
                            },
                            {
                                icon: Globe,
                                title: "Universal Currency",
                                description: "Seamless transactions across all global currencies and crypto",
                                gradient: "from-orange-500 to-red-500",
                                delay: "delay-300"
                            },
                            {
                                icon: Eye,
                                title: "Predictive Vision",
                                description: "See market trends before they happen with AI foresight",
                                gradient: "from-pink-500 to-rose-500",
                                delay: "delay-400"
                            },
                            {
                                icon: Sparkles,
                                title: "Magic Automation",
                                description: "Your finances manage themselves with intelligent automation",
                                gradient: "from-indigo-500 to-blue-500",
                                delay: "delay-500"
                            }
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className={`group relative p-8 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-3xl border border-gray-800 hover:border-gray-600 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 backdrop-blur-sm ${feature.delay} animate-fade-in`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"
                                    style={{ backgroundImage: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))` }}></div>

                                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-300`}>
                                    <feature.icon className="w-8 h-8 text-white" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                    {feature.description}
                                </p>

                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ArrowUpRight className="w-5 h-5 text-gray-400" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Dual Path Section */}
            < section className="py-20 relative" >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                                Choose Your Journey
                            </span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Two distinct paths, one extraordinary destination
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* Individual Path */}
                        <div className="group relative p-8 bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-3xl border border-green-800/50 hover:border-green-600 transition-all duration-500 backdrop-blur-sm">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                                        <User className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">Personal</h3>
                                        <p className="text-green-300">For individuals</p>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-8">
                                    {[
                                        "AI-powered expense insights",
                                        "Predictive budget optimization",
                                        "Smart investment recommendations",
                                        "Automated savings goals"
                                    ].map((feature, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                            <span className="text-gray-300">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Button
                                    onClick={handleIndividualDemo}
                                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-2xl py-4 text-lg font-semibold transform group-hover:scale-105 transition-all duration-300"
                                >
                                    <Zap className="w-5 h-5 mr-2" />
                                    Begin Personal Journey
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>

                                <p className="text-center text-green-300 text-sm mt-4">Free forever • No credit card</p>
                            </div>
                        </div>

                        {/* Enterprise Path */}
                        <div className="group relative p-8 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-3xl border border-blue-800/50 hover:border-blue-600 transition-all duration-500 backdrop-blur-sm">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                                        <Building2 className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">Enterprise</h3>
                                        <p className="text-blue-300">For organizations</p>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-8">
                                    {[
                                        "Multi-dimensional analytics",
                                        "Enterprise-grade security",
                                        "Custom workflow automation",
                                        "Dedicated success manager"
                                    ].map((feature, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                            <span className="text-gray-300">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Button
                                    onClick={handleEnterpriseDemo}
                                    variant="outline"
                                    className="w-full border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 rounded-2xl py-4 text-lg font-semibold transform group-hover:scale-105 transition-all duration-300 bg-transparent"
                                >
                                    <Building2 className="w-5 h-5 mr-2" />
                                    Schedule Enterprise Demo
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>

                                <p className="text-center text-blue-300 text-sm mt-4">Custom pricing • White-glove setup</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Final CTA */}
            < section className="py-20 relative overflow-hidden" >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-blue-500/10"></div>
                <div className="absolute top-0 left-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-white via-green-200 to-blue-200 bg-clip-text text-transparent">
                            Ready for Tomorrow?
                        </span>
                    </h2>

                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        Join the financial revolution. Experience the future of money management today.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Button
                            onClick={handleGetStarted}
                            className="group bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 hover:from-green-600 hover:via-blue-600 hover:to-purple-600 text-white px-12 py-4 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-110"
                        >
                            <Sparkles className="w-6 h-6 mr-3 animate-pulse" />
                            Launch Into the Future
                            <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
                        </Button>
                    </div>

                    <div className="mt-12 flex justify-center items-center gap-6 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                            <Award className="w-4 h-4" />
                            <span>Industry Leader</span>
                        </div>
                        <div className="w-1 h-4 bg-gray-600"></div>
                        <div className="flex items-center gap-2">
                            <Lock className="w-4 h-4" />
                            <span>Bank-Grade Security</span>
                        </div>
                        <div className="w-1 h-4 bg-gray-600"></div>
                        <div className="flex items-center gap-2">
                            <Infinity className="w-4 h-4" />
                            <span>Limitless Potential</span>
                        </div>
                    </div>
                </div>
            </section >

            {/* Minimal Footer */}
            < footer className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800" >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center mb-4 md:mb-0">
                            <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-blue-400 rounded mr-3"></div>
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
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 8s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
        </div >
    )
}