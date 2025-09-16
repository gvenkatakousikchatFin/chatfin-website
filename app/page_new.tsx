'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Building2, BarChart3, Zap, FileText, Receipt, CreditCard, Shield, Rocket, Users, Clock, CheckCircle, TrendingUp, Target, DollarSign, Lock, Globe, Sparkles } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function Home() {
    const router = useRouter()

    const handleGetStarted = () => {
        router.push('/get-started')
    }

    const handleBookDemo = () => {
        router.push('/book-demo')
    }

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 font-poppins relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Animated gradient blobs */}
                <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full blur-3xl" style={{ animation: 'gradient-pulse 4s ease-in-out infinite' }}></div>
                <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-bl from-green-300/15 to-teal-400/15 rounded-full blur-3xl" style={{ animation: 'gradient-pulse 4s ease-in-out infinite 1s' }}></div>
                <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-tr from-emerald-400/10 to-green-500/10 rounded-full blur-3xl" style={{ animation: 'gradient-pulse 4s ease-in-out infinite 2s' }}></div>

                {/* Additional floating elements */}
                <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-green-400/10 to-emerald-300/10 rounded-full blur-2xl" style={{ animation: 'gradient-float 6s ease-in-out infinite' }}></div>
                <div className="absolute bottom-1/3 right-10 w-40 h-40 bg-gradient-to-l from-teal-400/15 to-green-500/15 rounded-full blur-2xl" style={{ animation: 'gradient-float 6s ease-in-out infinite 3s' }}></div>

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                {/* Green glow effect */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-96 bg-gradient-to-b from-green-500/5 via-transparent to-transparent"></div>

                {/* Additional subtle glow effects */}
                <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-emerald-500/5 via-transparent to-transparent"></div>
                <div className="absolute top-1/2 left-0 w-1/4 h-1/4 bg-gradient-to-br from-green-400/5 via-transparent to-transparent"></div>
            </div>
            {/* Navigation */}
            <header className="relative z-50 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 sticky top-0">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <h1 className="text-2xl font-bold text-[#135142] dark:text-white">ChatFin</h1>
                        </div>

                        {/* Navigation Links */}
                        <nav className="hidden md:flex items-center space-x-8">
                            <a href="#" className="text-[#135142] dark:text-white hover:text-[#10b875] transition-colors text-sm font-medium border-b-2 border-[#135142] dark:border-white pb-1 relative group">
                                Home
                            </a>
                            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-white transition-colors text-sm font-medium relative group flex items-center">
                                Products
                                <span className="ml-1">▾</span>
                            </a>
                            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-white transition-colors text-sm font-medium relative group">
                                Solutions
                            </a>
                            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-white transition-colors text-sm font-medium relative group flex items-center">
                                Partners
                                <span className="ml-1">▾</span>
                            </a>
                            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-white transition-colors text-sm font-medium relative group">
                                Pricing
                            </a>
                            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-white transition-colors text-sm font-medium relative group">
                                Blog
                            </a>
                        </nav>

                        {/* Theme Toggle */}
                        <div className="flex items-center gap-4">
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center py-20 relative">
                    {/* Freemium Badge */}
                    <div className="inline-block mb-6">
                        <span className="text-xs font-medium text-[#135142] dark:text-green-400 tracking-wider uppercase bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-full border border-green-200 dark:border-green-800 flex items-center gap-2">
                            <Rocket className="w-4 h-4" />
                            Now launching with free  plan
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                        Where{" "}
                        <span className="bg-gradient-to-r from-[#135142] to-[#10b875] bg-clip-text text-transparent">
                            finance work
                        </span>{" "}
                        happens
                    </h1>

                    {/* Subheading */}
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-4xl mx-auto font-light">
                        One AI Super Agent for your whole finance team.
                    </p>
                    <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
                        <strong className="text-[#135142] dark:text-green-400">Free </strong> for individuals.
                        Advanced features and enterprise integrations for growing teams.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                        {/* Get Started Free Button */}
                        <div className="group relative">
                            <Button
                                onClick={handleGetStarted}
                                className="bg-gradient-to-r from-[#135142] to-[#10b875] hover:from-[#0d3b30] hover:to-[#0e9963] text-white px-12 py-6 rounded-2xl text-lg font-semibold w-full sm:w-auto shadow-lg transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 border-0 flex items-center gap-2"
                            >
                                <Zap className="w-5 h-5" />
                                Get started - Free
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">For individuals • No credit card</p>
                        </div>

                        {/* Book Demo Button */}
                        <div className="group relative">
                            <Button
                                onClick={handleBookDemo}
                                variant="outline"
                                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-12 py-6 rounded-2xl text-lg font-semibold flex items-center justify-center space-x-3 bg-white dark:bg-gray-900 w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                            >
                                <Building2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                <span>Book a demo</span>
                                <Play className="w-4 h-4" />
                            </Button>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">For teams • Custom pricing</p>
                        </div>
                    </div>

                    {/* Social Proof */}
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-16">
                        Trusted by finance teams at <strong>500+</strong> companies
                    </div>
                </div>

                {/* Benefits Section for Individuals */}
                <div className="max-w-7xl mx-auto mb-20 px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
                                    <Users className="w-4 h-4" />
                                    For Individuals
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                                    Free . <span className="text-[#135142] dark:text-green-400">No limits.</span>
                                </h2>
                                <p className="text-xl text-gray-600 dark:text-gray-300">
                                    Get started with ChatFin's powerful AI features at no cost. Perfect for freelancers, consultants, and individual professionals.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="w-5 h-5 text-[#135142] dark:text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">AI-Powered Insights</h3>
                                        <p className="text-gray-600 dark:text-gray-300">Get intelligent financial analysis and recommendations powered by advanced AI</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Save 10+ Hours Weekly</h3>
                                        <p className="text-gray-600 dark:text-gray-300">Automate repetitive tasks and focus on strategic financial decisions</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Smart Automation</h3>
                                        <p className="text-gray-600 dark:text-gray-300">Intelligent document processing and expense categorization</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Demo Image */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#135142]/20 to-[#10b875]/20 rounded-3xl blur-3xl"></div>
                            <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <span className="ml-4 text-sm text-gray-500 dark:text-gray-400 font-mono">Personal Dashboard</span>
                                </div>
                                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 min-h-[300px] flex items-center justify-center">
                                    <div className="text-center">
                                        <TrendingUp className="w-16 h-16 text-[#135142] dark:text-green-400 mx-auto mb-4" />
                                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Personal Finance Tracker</h3>
                                        <p className="text-gray-600 dark:text-gray-300">Track expenses, income, and financial goals</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Benefits Section for Organizations */}
                <div className="max-w-7xl mx-auto mb-20 px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Demo Image */}
                        <div className="relative lg:order-1">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
                            <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <span className="ml-4 text-sm text-gray-500 dark:text-gray-400 font-mono">Enterprise Dashboard</span>
                                </div>
                                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 min-h-[300px] flex items-center justify-center">
                                    <div className="text-center">
                                        <Building2 className="w-16 h-16 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
                                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Team Collaboration</h3>
                                        <p className="text-gray-600 dark:text-gray-300">Advanced workflows and team management</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-8 lg:order-2">
                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-2 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 px-4 py-2 rounded-full text-sm font-medium">
                                    <Building2 className="w-4 h-4" />
                                    For Organizations
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                                    Scale your <span className="text-purple-600 dark:text-purple-400">finance operations.</span>
                                </h2>
                                <p className="text-xl text-gray-600 dark:text-gray-300">
                                    Enterprise-grade features for growing teams. Advanced integrations, compliance, and security.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Target className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">99.9% Accuracy</h3>
                                        <p className="text-gray-600 dark:text-gray-300">Enterprise-grade AI with bank-level accuracy for financial processing</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <DollarSign className="w-5 h-5 text-[#135142] dark:text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Reduce Costs by 60%</h3>
                                        <p className="text-gray-600 dark:text-gray-300">Significant cost savings through automation and efficiency improvements</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">SOC2 & Bank-Grade Security</h3>
                                        <p className="text-gray-600 dark:text-gray-300">Enterprise security with compliance certifications and data protection</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Demo Grid - Notion Style */}
                <div className="max-w-6xl mx-auto mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Main Dashboard Preview */}
                        <div className="lg:col-span-2">
                            <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <span className="ml-4 text-sm text-gray-500 dark:text-gray-400 font-mono">ChatFin Analytics Dashboard</span>
                                </div>
                                <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                                    <Image
                                        src="/chatfin-dashboard.png"
                                        alt="ChatFin Dashboard Preview"
                                        width={800}
                                        height={500}
                                        className="w-full h-auto rounded-lg"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Feature Cards */}
                        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                                    <FileText className="w-5 h-5 text-[#135142] dark:text-green-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Document Processing</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Automatically extract and process financial documents with AI-powered accuracy
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                                    <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">AI Reconciliation</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Smart matching and reconciliation of transactions across multiple systems
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                                    <Receipt className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Invoice Automation</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Streamline invoice processing from receipt to payment with intelligent automation
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center">
                                    <CreditCard className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Payment Automation</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Automate payment workflows with intelligent approval routing and fraud detection
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
