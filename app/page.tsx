'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Building2, BarChart3, Zap, FileText, Receipt, CreditCard, Shield, Rocket, CheckCircle, Clock, Users, TrendingUp, DollarSign, Globe, Lock, Target, Bot, PieChart, Calendar } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  const handleGetStarted = () => {
    router.push('/get-started')
  }

  const handleBookDemo = () => {
    router.push('/book-demo')
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-poppins">
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
              <a href="/" className="text-[#135142] dark:text-white hover:text-[#10b875] transition-colors text-sm font-medium border-b-2 border-[#135142] dark:border-white pb-1 relative group">
                Home
              </a>
              <a href="/home2" className="text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-white transition-colors text-sm font-medium relative group">
                Home2
              </a>
              <a href="/home3" className="text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-white transition-colors text-sm font-medium relative group">
                Home3
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
            <span className="text-xs font-medium text-[#135142] dark:text-green-400 tracking-wider uppercase bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-full border border-green-200 dark:border-green-800 flex items-center gap-2 w-fit mx-auto">
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

        {/* Demo Grid - Updated with Real Image */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl overflow-hidden">
                <img
                  src="https://i.postimg.cc/cJGbtHG1/Navy-Geometric-Business-Webinar-Instagram-Post-8.png"
                  alt="ChatFin Dashboard Preview"
                  className="w-full object-cover"
                  style={{ height: '90vh' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Individual Benefits Section */}
        <div className="max-w-7xl mx-auto mb-20">
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
                  Personal Finance{" "}
                  <span className="bg-gradient-to-r from-[#135142] to-[#10b875] bg-clip-text text-transparent">
                    Made Simple
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Take control of your personal finances with AI-powered insights and automated expense tracking.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-[#135142] dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Smart Expense Tracking</h3>
                    <p className="text-gray-600 dark:text-gray-300">Automatically categorize and track your expenses with AI-powered receipt scanning.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <PieChart className="w-5 h-5 text-[#135142] dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Budget Insights</h3>
                    <p className="text-gray-600 dark:text-gray-300">Get personalized budget recommendations and spending insights tailored to your lifestyle.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-[#135142] dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">AI Financial Assistant</h3>
                    <p className="text-gray-600 dark:text-gray-300">Chat with your personal AI assistant for instant financial advice and answers.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-[#135142] dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Free </h3>
                    <p className="text-gray-600 dark:text-gray-300">Complete personal finance management with no hidden fees or subscription costs.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Demo Right */}
            <div className="relative">
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 border border-gray-200 dark:border-gray-700 shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-4 text-sm text-gray-500 dark:text-gray-400 font-mono">Personal Dashboard</span>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl overflow-hidden">
                  <img
                    src="https://i.postimg.cc/cJGbtHG1/Navy-Geometric-Business-Webinar-Instagram-Post-8.png"
                    alt="ChatFin Personal Dashboard"
                    className="w-full h-[300px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Organization Benefits Section */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Demo Left */}
            <div className="relative">
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 border border-gray-200 dark:border-gray-700 shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-4 text-sm text-gray-500 dark:text-gray-400 font-mono">Enterprise Dashboard</span>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl overflow-hidden">
                  <img
                    src="https://i.postimg.cc/cJGbtHG1/Navy-Geometric-Business-Webinar-Instagram-Post-8.png"
                    alt="ChatFin Enterprise Dashboard"
                    className="w-full h-[300px] object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content Right */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="text-sm font-semibold text-[#135142] dark:text-green-400 tracking-wider uppercase bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-full border border-green-200 dark:border-green-800 flex items-center gap-2 w-fit">
                    <Building2 className="w-4 h-4" />
                    For Organizations
                  </span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                  Enterprise{" "}
                  <span className="bg-gradient-to-r from-[#135142] to-[#10b875] bg-clip-text text-transparent">
                    Finance Platform
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Scale your finance operations with enterprise-grade features, team collaboration, and advanced security.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-[#135142] dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Advanced Analytics</h3>
                    <p className="text-gray-600 dark:text-gray-300">Real-time financial reporting with predictive analytics and custom dashboards.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-[#135142] dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Team Collaboration</h3>
                    <p className="text-gray-600 dark:text-gray-300">Multi-user access with role-based permissions and approval workflows.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-[#135142] dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Enterprise Security</h3>
                    <p className="text-gray-600 dark:text-gray-300">SOC2 compliance, bank-grade encryption, and advanced audit trails.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-[#135142] dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">API Integrations</h3>
                    <p className="text-gray-600 dark:text-gray-300">Connect with your existing tools: accounting software, banks, and ERPs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#135142] dark:text-white">ChatFin</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Where finance work happens. AI-powered financial management for individuals and teams.
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
