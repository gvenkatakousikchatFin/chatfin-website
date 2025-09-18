'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight, Building2, User, Star, Zap, Shield, Globe, TrendingUp, Clock, CheckCircle, Bot, BarChart3, PieChart, CreditCard, FileText, Users, Target, Calendar, Smartphone, Database, Workflow, Layers, Activity } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useRouter } from "next/navigation"

export default function Home2() {
    const router = useRouter()

    const handleGetStarted = () => {
        router.push('/get-started')
    }

    const handleBookDemo = () => {
        router.push('/book-demo/home2')
    }

    const handleIndividualDemo = () => {
        router.push('/book-demo/individual')
    }

    const handleEnterpriseDemo = () => {
        router.push('/book-demo/enterprise')
    }

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 font-['Poppins',sans-serif]">
            {/* Navigation */}
            <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
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
                            <a href="/home2" className="text-[#135142] dark:text-white hover:text-[#10b875] transition-colors text-sm font-medium border-b-2 border-[#135142] dark:border-white pb-1">
                                Home2
                            </a>
                            <a href="/home3" className="text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-white transition-colors text-sm font-medium">
                                Home3
                            </a>
                        </nav>

                        {/* Theme Toggle */}
                        <div className="flex items-center gap-4">
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>

                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
                    <div className="text-center max-w-4xl mx-auto">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-green-200 dark:border-green-700 mb-8">
                            <Zap className="w-4 h-4 text-green-600 dark:text-green-400" />
                            <span className="text-sm font-semibold text-green-700 dark:text-green-300">Now with Free Tier</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                            Financial intelligence{" "}
                            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                                for everyone
                            </span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
                            One platform to manage, analyze, and optimize your finances.
                            <br />From personal budgeting to enterprise financial operations.
                        </p>

                        {/* Dual CTA Section */}
                        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                            {/* Individual CTA */}
                            <div className="group p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 transition-all duration-300 hover:shadow-lg">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                                        <User className="w-5 h-5 text-green-600 dark:text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white">For Individuals</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Personal finance made simple</p>
                                    </div>
                                </div>
                                <Button
                                    onClick={handleGetStarted}
                                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-xl"
                                >
                                    Start Free
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">No credit card required</p>
                            </div>

                            {/* Enterprise CTA */}
                            <div className="group p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                                        <Building2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white">For Teams</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Enterprise financial platform</p>
                                    </div>
                                </div>
                                <Button
                                    onClick={handleBookDemo}
                                    variant="outline"
                                    className="w-full border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl"
                                >
                                    Book Demo
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">Custom pricing available</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof */}
            <section className="py-12 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
                            Trusted by financial teams at 500+ companies worldwide
                        </p>
                        <div className="flex justify-center items-center space-x-8 opacity-60">
                            <div className="text-2xl font-bold text-gray-400">Company A</div>
                            <div className="text-2xl font-bold text-gray-400">Company B</div>
                            <div className="text-2xl font-bold text-gray-400">Company C</div>
                            <div className="text-2xl font-bold text-gray-400">Company D</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Demo */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            See ChatFin in action
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Experience the power of AI-driven financial management with our intuitive dashboard
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden">
                            <div className="bg-gray-100 dark:bg-gray-800 px-6 py-4 flex items-center gap-3">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">chatfin.com/dashboard</span>
                            </div>
                            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                                <img
                                    src="https://i.postimg.cc/cJGbtHG1/Navy-Geometric-Business-Webinar-Instagram-Post-8.png"
                                    alt="ChatFin Dashboard"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Everything you need to manage money
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            From personal expense tracking to enterprise financial operations, ChatFin scales with your needs
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Feature Cards */}
                        {[
                            {
                                icon: Bot,
                                title: "AI Assistant",
                                description: "Chat with your personal financial AI for instant insights and advice",
                                color: "green"
                            },
                            {
                                icon: BarChart3,
                                title: "Real-time Analytics",
                                description: "Track spending patterns and financial trends with advanced analytics",
                                color: "green"
                            },
                            {
                                icon: Shield,
                                title: "Bank-grade Security",
                                description: "Your data is protected with enterprise-level security and encryption",
                                color: "green"
                            },
                            {
                                icon: Smartphone,
                                title: "Mobile Ready",
                                description: "Access your finances anywhere with our responsive mobile experience",
                                color: "green"
                            },
                            {
                                icon: Workflow,
                                title: "Smart Automation",
                                description: "Automate expense categorization and budget tracking with AI",
                                color: "green"
                            },
                            {
                                icon: Globe,
                                title: "Global Support",
                                description: "Multi-currency support with real-time exchange rates",
                                color: "green"
                            }
                        ].map((feature, index) => (
                            <div key={index} className="group p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg">
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-4">
                                    <feature.icon className="w-6 h-6 text-[#135142] dark:text-green-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Individuals Section */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Content Left */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="inline-block">
                                    <span className="text-sm font-semibold text-[#135142] dark:text-green-400 tracking-wider uppercase bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-full border border-green-200 dark:border-green-800 flex items-center gap-2 w-fit">
                                        <User className="w-4 h-4" />
                                        For Individuals
                                    </span>
                                </div>
                                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                                    Smart{" "}
                                    <span className="bg-gradient-to-r from-[#135142] to-[#10b875] bg-clip-text text-transparent">
                                        Personal Finance
                                    </span>
                                </h2>
                                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Intelligent financial management that learns from your habits and optimizes your money automatically.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Bot className="w-5 h-5 text-[#135142] dark:text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">AI-Powered Insights</h3>
                                        <p className="text-gray-600 dark:text-gray-300">Get personalized financial advice and spending insights powered by advanced AI.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <BarChart3 className="w-5 h-5 text-[#135142] dark:text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Smart Analytics</h3>
                                        <p className="text-gray-600 dark:text-gray-300">Real-time financial analytics that help you understand and optimize your spending patterns.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Target className="w-5 h-5 text-[#135142] dark:text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Goal Achievement</h3>
                                        <p className="text-gray-600 dark:text-gray-300">Set and track financial goals with intelligent progress monitoring and recommendations.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Demo Right */}
                        <div className="relative">
                            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl overflow-hidden">
                                <img
                                    src="https://i.postimg.cc/cJGbtHG1/Navy-Geometric-Business-Webinar-Instagram-Post-8.png"
                                    alt="ChatFin Smart Personal Finance"
                                    className="w-full h-[300px] object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enterprises Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Demo Left */}
                        <div className="relative">
                            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl overflow-hidden">
                                <img
                                    src="https://i.postimg.cc/cJGbtHG1/Navy-Geometric-Business-Webinar-Instagram-Post-8.png"
                                    alt="ChatFin Enterprise Intelligence"
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
                                    Advanced{" "}
                                    <span className="bg-gradient-to-r from-[#135142] to-[#10b875] bg-clip-text text-transparent">
                                        Financial Intelligence
                                    </span>
                                </h2>
                                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Enterprise-grade financial management with predictive analytics and team collaboration tools.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <TrendingUp className="w-5 h-5 text-[#135142] dark:text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Predictive Analytics</h3>
                                        <p className="text-gray-600 dark:text-gray-300">Advanced forecasting and financial modeling with machine learning algorithms.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Users className="w-5 h-5 text-[#135142] dark:text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Team Collaboration</h3>
                                        <p className="text-gray-600 dark:text-gray-300">Multi-user access with granular permissions and workflow automation.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Globe className="w-5 h-5 text-[#135142] dark:text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Global Integration</h3>
                                        <p className="text-gray-600 dark:text-gray-300">Seamless integration with existing enterprise systems and multi-currency support.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Trusted by thousands worldwide
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        {[
                            { number: "500+", label: "Companies" },
                            { number: "50K+", label: "Active Users" },
                            { number: "99.9%", label: "Uptime" },
                            { number: "24/7", label: "Support" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-[#135142] dark:text-green-400 mb-2">{stat.number}</div>
                                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-[#135142] to-[#10b875]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to transform your financial management?
                    </h2>
                    <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                        Join thousands of users who have already simplified their finances with ChatFin
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            onClick={handleGetStarted}
                            className="bg-white text-[#135142] hover:bg-gray-50 rounded-xl px-8 py-3"
                        >
                            Get Started Free
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Button
                            onClick={handleBookDemo}
                            variant="outline"
                            className="border-white text-white hover:bg-white/10 rounded-xl px-8 py-3"
                        >
                            Book a Demo
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Logo and Description */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-[#135142] dark:text-white">ChatFin</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Financial intelligence for everyone. AI-powered financial management that scales.
                            </p>
                        </div>

                        {/* Product Links */}
                        <div className="space-y-4">
                            <h4 className="font-semibold text-gray-900 dark:text-white">Product</h4>
                            <div className="space-y-2">
                                <a href="#" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">Features</a>
                                <a href="#" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">Pricing</a>
                                <a href="#" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">API</a>
                                <a href="#" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">Integrations</a>
                            </div>
                        </div>

                        {/* Company Links */}
                        <div className="space-y-4">
                            <h4 className="font-semibold text-gray-900 dark:text-white">Company</h4>
                            <div className="space-y-2">
                                <a href="#" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">About</a>
                                <a href="#" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">Blog</a>
                                <a href="#" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">Careers</a>
                                <a href="#" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">Contact</a>
                            </div>
                        </div>

                        {/* Support Links */}
                        <div className="space-y-4">
                            <h4 className="font-semibold text-gray-900 dark:text-white">Support</h4>
                            <div className="space-y-2">
                                <a href="#" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">Help Center</a>
                                <a href="#" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">Documentation</a>
                                <a href="#" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">Privacy Policy</a>
                                <a href="#" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">Terms of Service</a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                            © 2024 ChatFin. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}