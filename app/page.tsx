'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Building2, BarChart3, Zap, FileText, Receipt, CreditCard, Shield, Rocket, CheckCircle, Clock, Users, TrendingUp, DollarSign, Globe, Lock, Target, Bot, PieChart, Calendar } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function Home() {
  const router = useRouter()

  const handleGetStarted = () => {
    router.push('/try-free')
  }

  const handleBookDemo = () => {
    router.push('/book-demo')
  }

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-gray-900 font-['Poppins',sans-serif]">

        {/* Main Content */}
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
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
              AI Super Agent for{" "}
              <span className="bg-gradient-to-r from-[#135142] to-[#10b875] bg-clip-text text-transparent">
                Finance and Accounting
              </span>{" "}
              Teams
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-4xl mx-auto font-light">
              AI agents built to handle real work across Controllership, FP&A, AP, AR, Tax, Treasury and operations.
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
              <strong className="text-[#135142] dark:text-green-400">Get started free for individuals</strong> · Book a demo for teams
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

          {/* Organization Benefits Section */}
          <div className="max-w-7xl mx-auto mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Demo Left */}
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl overflow-hidden">
                  <img
                    src="https://i.postimg.cc/cJGbtHG1/Navy-Geometric-Business-Webinar-Instagram-Post-8.png"
                    alt="ChatFin Enterprise Dashboard"
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

          {/* Why ChatFin Section */}
          <div className="max-w-7xl mx-auto mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                Why ChatFin?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#135142] to-[#10b875] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Leader in Finance AI research</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  At the forefront of financial AI innovation, continuously advancing the capabilities of finance automation
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#135142] to-[#10b875] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Used by Fortune 500 finance teams</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Trusted by leading global companies to handle their most critical financial operations
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#135142] to-[#10b875] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Built with enterprise-grade security</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Bank-level encryption, SOC 2 compliance, and robust access controls to protect your financial data
                </p>
              </div>
            </div>
          </div>

          {/* Capabilities Section */}
          <div className="max-w-7xl mx-auto mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                Capabilities
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[
                { title: "Data Query", icon: BarChart3 },
                { title: "AI Reconciliation", icon: CheckCircle },
                { title: "Analytics", icon: TrendingUp },
                { title: "Contract Compliance", icon: Shield },
                { title: "Document Processing", icon: FileText },
                { title: "AI OCR", icon: FileText },
                { title: "Invoice Automation", icon: Receipt },
                { title: "Payment Automation", icon: CreditCard },
                { title: "Pattern Recognition", icon: Target },
                { title: "Process Automation", icon: Zap }
              ].map((capability, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-[#135142] dark:hover:border-green-400 transition-all duration-300 hover:shadow-lg text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#135142] to-[#10b875] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <capability.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                    {capability.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* AI Finance Solutions Section */}
          <div className="max-w-7xl mx-auto mb-20">
            <div className="text-center mb-16">
              <div className="inline-block mb-6">
                <span className="text-sm font-semibold text-[#135142] dark:text-green-400 tracking-wider uppercase bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-full border border-green-200 dark:border-green-800 flex items-center gap-2 w-fit mx-auto">
                  <Bot className="w-4 h-4" />
                  AI Finance Solutions
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                <span className="bg-gradient-to-r from-[#135142] to-[#10b875] bg-clip-text text-transparent">
                  AI Agents
                </span>{" "}
                for Every Finance Function
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Intelligent automation that understands your finance workflows and systems
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {[
                { title: "Controller", desc: "Month-end close, reconciliations, compliance", link: "/ai-agents-for-controllers" },
                { title: "FP&A", desc: "Forecasting, variance analysis, budgeting", link: "/ai-agents-for-fpa" },
                { title: "AP/AR", desc: "Invoice processing, collections, cash management", link: "/ai-agents-for-accounts-payable" },
                { title: "CFO", desc: "Strategic insights, board reporting, KPIs", link: "/ai-agents-for-cfo" },
                { title: "Reconciliation", desc: "Automated matching, discrepancy detection", link: "/ai-reconciliation" },
                { title: "Audit & Compliance", desc: "Document verification, regulatory checks", link: "/ai-compliance" }
              ].map((solution, index) => (
                <Link href={solution.link} key={index} className="group">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-[#135142] dark:hover:border-green-400 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#135142] to-[#10b875] rounded-lg flex items-center justify-center mb-4">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-[#135142] dark:group-hover:text-green-400 transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {solution.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Featured AI Tools Section */}
          <div className="max-w-7xl mx-auto mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                Featured{" "}
                <span className="bg-gradient-to-r from-[#135142] to-[#10b875] bg-clip-text text-transparent">
                  AI Tools
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Streamline workflows, reduce manual tasks, and increase productivity with AI-driven process automation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "AI Data Query",
                  desc: "Query your financial data using natural language and get instant insights",
                  link: "/ai-data-query",
                  icon: BarChart3
                },
                {
                  title: "AI Reconciliation",
                  desc: "Automated reconciliation with anomaly detection and variance analysis",
                  link: "/ai-reconciliation",
                  icon: CheckCircle
                },
                {
                  title: "AI Analytics",
                  desc: "Advanced financial analytics with predictive modeling and forecasting",
                  link: "/analytics",
                  icon: TrendingUp
                },
                {
                  title: "Document Processing",
                  desc: "AI-powered document processing with OCR and data extraction",
                  link: "/document-processing",
                  icon: FileText
                },
                {
                  title: "Invoice Automation",
                  desc: "Automated invoice processing and approval workflows",
                  link: "/invoice-automation",
                  icon: Receipt
                },
                {
                  title: "Expense Management",
                  desc: "Smart expense tracking and categorization with receipt scanning",
                  link: "/expense-management",
                  icon: CreditCard
                }
              ].map((tool, index) => (
                <Link href={tool.link} key={index} className="group">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:border-[#135142] dark:hover:border-green-400 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#135142] to-[#10b875] rounded-2xl flex items-center justify-center mb-6">
                      <tool.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-[#135142] dark:group-hover:text-green-400 transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {tool.desc}
                    </p>
                    <div className="mt-6 flex items-center text-[#135142] dark:text-green-400 font-medium">
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="max-w-7xl mx-auto mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                What Our Customers Are Saying
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  "Invoice processing went from hours to minutes. The AI accuracy is incredible."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#135142] to-[#10b875] rounded-full flex items-center justify-center text-white font-semibold">
                    AP
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">AP Manager</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Healthcare</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  "Real-time insights that actually matter. Our financial decisions are now data-driven."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#135142] to-[#10b875] rounded-full flex items-center justify-center text-white font-semibold">
                    C
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Controller</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">SaaS Startup</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  "Contract compliance monitoring is now automated. We catch issues before they become problems."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#135142] to-[#10b875] rounded-full flex items-center justify-center text-white font-semibold">
                    LO
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Legal Operations</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Fintech</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  "ChatFin cut our month-end time by 40%. It's like having an additional employee that never sleeps."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#135142] to-[#10b875] rounded-full flex items-center justify-center text-white font-semibold">
                    VP
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">VP Finance</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Tech Company</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  "The best part? Our team didn't need to learn a new system — ChatFin works where we work."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#135142] to-[#10b875] rounded-full flex items-center justify-center text-white font-semibold">
                    CF
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">CFO</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Retail Group</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  "Invoice processing went from hours to minutes. The AI accuracy is incredible."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#135142] to-[#10b875] rounded-full flex items-center justify-center text-white font-semibold">
                    AP
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">AP Manager</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Healthcare</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Internal Links Section for SEO */}
          <div className="max-w-7xl mx-auto mb-20">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Explore Our AI Finance Resources
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">AI Tools</h3>
                  <div className="space-y-2">
                    <Link href="/best-ai-tools-for-finance-teams" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">Best AI Tools for Finance</Link>
                    <Link href="/top-10-ai-tools-for-finance-accounting-in-2025" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">Top 10 AI Tools 2025</Link>
                    <Link href="/top-ai-tools-for-cfos" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">AI Tools for CFOs</Link>
                    <Link href="/new-ai-tools-for-fpa" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">AI Tools for FP&A</Link>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">AI Agents</h3>
                  <div className="space-y-2">
                    <Link href="/ai-agents-for-finance-automation" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">Finance Automation</Link>
                    <Link href="/best-ai-agents-for-controllers" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">AI for Controllers</Link>
                    <Link href="/10-best-ai-agents-for-fpa-teams" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">AI for FP&A Teams</Link>
                    <Link href="/new-ai-agents-for-cfos" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">AI for CFOs</Link>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Use Cases</h3>
                  <div className="space-y-2">
                    <Link href="/ai-agents-use-cases" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">AI Agents Use Cases</Link>
                    <Link href="/can-ai-replace-controllers" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">Can AI Replace Controllers</Link>
                    <Link href="/can-ai-replace-fpa-roles" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">Can AI Replace FP&A</Link>
                    <Link href="/can-ai-replace-accounts-payables" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">AI for Accounts Payable</Link>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Resources</h3>
                  <div className="space-y-2">
                    <Link href="/finance-ai-playbook" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">Finance AI Playbook</Link>
                    <Link href="/ai-agents-for-cfo-playbook" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">CFO AI Playbook</Link>
                    <Link href="/what-is-the-difference-chatfin-vs-chatgpt" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">ChatFin vs ChatGPT</Link>
                    <Link href="/best-erp-systems" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">Best ERP Systems</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {/* Logo and Description */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#135142] dark:text-white">ChatFin</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  AI assistant built specifically for finance functions such as controllers, FP&A, Treasury and tax.
                </p>
                <div className="flex space-x-4">
                  <Link href="https://www.linkedin.com/company/chatfin" className="text-gray-400 hover:text-[#135142] dark:hover:text-green-400 transition-colors" aria-label="LinkedIn">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
                    </svg>
                  </Link>
                  <Link href="https://twitter.com/ChatFinAI" className="text-gray-400 hover:text-[#135142] dark:hover:text-green-400 transition-colors" aria-label="Twitter">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* AI Tools Links */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 dark:text-white">AI Tools</h4>
                <div className="space-y-2">
                  <Link href="/ai-data-query" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">AI Data Query</Link>
                  <Link href="/ai-reconciliation" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">AI Reconciliation</Link>
                  <Link href="/analytics" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">AI Analytics</Link>
                  <Link href="/document-processing" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">Document Processing</Link>
                  <Link href="/ai-tools-for-accounting-and-finance" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">Finance AI Tools</Link>
                </div>
              </div>

              {/* Solutions Links */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 dark:text-white">Solutions</h4>
                <div className="space-y-2">
                  <Link href="/ai-agents-for-controllers" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">AI for Controllers</Link>
                  <Link href="/ai-agents-for-fpa" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">AI for FP&A</Link>
                  <Link href="/ai-agents-for-cfo" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">AI for CFOs</Link>
                  <Link href="/best-ai-agents-for-accounts-payable" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">AI for AP</Link>
                  <Link href="/enterprise-ai-tools" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">Enterprise AI</Link>
                </div>
              </div>

              {/* Company Links */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 dark:text-white">Company</h4>
                <div className="space-y-2">
                  <Link href="/blog" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">Blog</Link>
                  <Link href="/use-cases" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">Use Cases</Link>
                  <Link href="/become-a-tech-partner" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">Partners</Link>
                  <Link href="/talk-to-us" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">Contact</Link>
                </div>
              </div>

              {/* Resources Links */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 dark:text-white">Resources</h4>
                <div className="space-y-2">
                  <Link href="/finance-ai-playbook" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">Finance AI Playbook</Link>
                  <Link href="/pricing" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">Pricing</Link>
                  <Link href="/privacy-policy" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">Privacy Policy</Link>
                  <Link href="/terms-and-conditions" className="block text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-green-400 text-sm transition-colors">Terms & Conditions</Link>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                © 2024 ChatFin Inc. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
