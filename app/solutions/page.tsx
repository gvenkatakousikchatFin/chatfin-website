import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Users, TrendingUp, Shield, Globe, CheckCircle, BarChart3, FileText, Clock, Zap, Bot } from "lucide-react"

export const metadata: Metadata = {
    title: "AI Finance Solutions - ChatFin | Finance AI Tools & Automation",
    description: "AI solutions that target specific pain points in financial operations. Streamline workflows, reduce manual tasks, and increase productivity with purpose-built AI agents for finance teams.",
    keywords: "AI finance solutions, finance AI tools, AI for finance, finance automation, AI agents finance, controllership AI, FP&A AI, accounts payable AI, CFO AI tools, finance process automation",
    alternates: {
        canonical: "https://chatfin.ai/solutions"
    },
    openGraph: {
        title: "AI Finance Solutions - ChatFin",
        description: "AI solutions that target specific pain points in financial operations. Streamline workflows, reduce manual tasks, and increase productivity.",
        url: "https://chatfin.ai/solutions",
        type: "website"
    }
}

export default function Solutions() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-block mb-6">
                        <span className="text-sm font-semibold text-[#135142] dark:text-green-400 tracking-wider uppercase bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-full border border-green-200 dark:border-green-800">
                            Finance AI Solutions
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                        Solving Your Most Pressing{" "}
                        <span className="bg-gradient-to-r from-[#135142] to-[#10b875] bg-clip-text text-transparent">
                            Finance Challenges
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                        Our AI solutions target specific pain points in financial operations. Streamline workflows, reduce manual tasks, and increase productivity with purpose-built AI agents for finance teams.
                    </p>
                    <Button className="bg-gradient-to-r from-[#135142] to-[#10b875] text-white px-8 py-4 rounded-xl text-lg font-semibold">
                        Request Demo
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                </div>
            </section>

            {/* Finance Challenges Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Time-Consuming Close Process */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                            <div className="w-16 h-16 bg-gradient-to-r from-[#135142] to-[#10b875] rounded-2xl flex items-center justify-center mb-6">
                                <Clock className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Time-Consuming Close Process</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                End-of-month tasks taking too long? Our AI reconciles accounts, matches transactions, and identifies discrepancies in seconds.
                            </p>
                            <Link href="/ai-reconciliation" className="inline-flex items-center text-[#135142] dark:text-green-400 font-semibold hover:text-[#10b875] transition-colors">
                                Solution: Auto-Reconciliation Agent
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>

                        {/* Scattered Financial Data */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                            <div className="w-16 h-16 bg-gradient-to-r from-[#135142] to-[#10b875] rounded-2xl flex items-center justify-center mb-6">
                                <BarChart3 className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Scattered Financial Data</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Information trapped in multiple systems? Our AI connects to all your platforms to provide unified answers to complex questions.
                            </p>
                            <Link href="/ai-data-query" className="inline-flex items-center text-[#135142] dark:text-green-400 font-semibold hover:text-[#10b875] transition-colors">
                                Solution: Data Integration Agent
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>

                        {/* Manual Reporting Processes */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                            <div className="w-16 h-16 bg-gradient-to-r from-[#135142] to-[#10b875] rounded-2xl flex items-center justify-center mb-6">
                                <FileText className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Manual Reporting Processes</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Tired of building the same reports every month? Let our AI generate reports automatically with real-time data and insights.
                            </p>
                            <Link href="/analytics" className="inline-flex items-center text-[#135142] dark:text-green-400 font-semibold hover:text-[#10b875] transition-colors">
                                Solution: Reporting Agent
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>

                        {/* Compliance & Audit Readiness */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                            <div className="w-16 h-16 bg-gradient-to-r from-[#135142] to-[#10b875] rounded-2xl flex items-center justify-center mb-6">
                                <Shield className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Compliance & Audit Readiness</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Worried about regulatory changes? Our AI stays updated on compliance requirements and helps maintain audit-ready documentation.
                            </p>
                            <Link href="/ai-compliance" className="inline-flex items-center text-[#135142] dark:text-green-400 font-semibold hover:text-[#10b875] transition-colors">
                                Solution: Compliance Assistant
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Solutions by Function */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            AI Solutions for Every Finance Function
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Intelligent automation that understands your finance workflows and systems
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Controller",
                                desc: "Month-end close, reconciliations, compliance",
                                link: "/ai-agents-for-controllers",
                                icon: Building2
                            },
                            {
                                title: "FP&A",
                                desc: "Forecasting, variance analysis, budgeting",
                                link: "/ai-agents-for-fpa",
                                icon: TrendingUp
                            },
                            {
                                title: "AP/AR",
                                desc: "Invoice processing, collections, cash management",
                                link: "/best-ai-agents-for-accounts-payable",
                                icon: FileText
                            },
                            {
                                title: "CFO",
                                desc: "Strategic insights, board reporting, KPIs",
                                link: "/ai-agents-for-cfo",
                                icon: Users
                            },
                            {
                                title: "Reconciliation",
                                desc: "Automated matching, discrepancy detection, intercompany recon",
                                link: "/ai-reconciliation",
                                icon: CheckCircle
                            },
                            {
                                title: "Audit & Compliance",
                                desc: "Document verification, regulatory checks, control monitoring",
                                link: "/ai-compliance",
                                icon: Shield
                            }
                        ].map((solution, index) => (
                            <Link href={solution.link} key={index} className="group">
                                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-[#135142] dark:hover:border-green-400 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
                                    <div className="w-16 h-16 bg-gradient-to-r from-[#135142] to-[#10b875] rounded-2xl flex items-center justify-center mb-6">
                                        <solution.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-[#135142] dark:group-hover:text-green-400 transition-colors">
                                        {solution.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {solution.desc}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Solutions */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            Featured Solutions
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            AI Finance Solutions
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "AI Tools for Accounting & Finance",
                                desc: "AI-powered tools to automate accounting processes, enhance financial accuracy, and streamline bookkeeping for businesses.",
                                features: ["Automated invoice processing", "Real-time financial reporting", "Expense management automation"],
                                link: "/ai-tools-for-accounting-and-finance",
                                badge: "ESSENTIAL TOOLS"
                            },
                            {
                                title: "AI Agents Use Cases for CFOs",
                                desc: "Strategic AI implementations for Chief Financial Officers to transform executive decision-making and financial leadership.",
                                features: ["Strategic financial planning", "Risk assessment automation", "Executive dashboard insights"],
                                link: "/ai-agents-for-cfo",
                                badge: "EXECUTIVE FOCUS"
                            },
                            {
                                title: "Enterprise AI Finance Tools",
                                desc: "Enterprise-grade AI solutions for large organizations with scalable automation, advanced analytics, and seamless integration.",
                                features: ["Large-scale automation", "Advanced compliance features", "Multi-department integration"],
                                link: "/enterprise-ai-tools",
                                badge: "ENTERPRISE GRADE"
                            }
                        ].map((solution, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                                <div className="mb-4">
                                    <span className="text-xs font-bold text-[#135142] dark:text-green-400 tracking-wider uppercase">
                                        {solution.badge}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                    {solution.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6">
                                    {solution.desc}
                                </p>
                                <div className="space-y-3 mb-6">
                                    {solution.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-[#135142] dark:text-green-400" />
                                            <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <Link href={solution.link} className="inline-flex items-center text-[#135142] dark:text-green-400 font-semibold hover:text-[#10b875] transition-colors">
                                    {index === 0 ? "EXPLORE AI TOOLS" : index === 1 ? "DISCOVER CFO SOLUTIONS" : "VIEW ENTERPRISE SOLUTIONS"}
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-[#135142] to-[#10b875]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Experience the Future
                    </h2>
                    <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                        Let us know what you are looking for
                    </p>
                    <Button variant="outline" className="bg-white text-[#135142] border-white hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold">
                        Contact Sales
                    </Button>
                </div>
            </section>
        </div>
    )
}