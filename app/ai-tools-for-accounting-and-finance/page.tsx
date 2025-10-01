import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, FileText, TrendingUp, CheckCircle, Zap, Bot, Shield, Globe, Building2 } from "lucide-react"

export const metadata: Metadata = {
    title: "AI Tools for Accounting & Finance - ChatFin | Best Finance AI Solutions 2025",
    description: "AI-powered tools to automate accounting processes, enhance financial accuracy, and streamline bookkeeping for businesses. Discover the best AI tools for finance teams in 2025.",
    keywords: "AI tools for accounting, AI finance tools, accounting AI software, finance automation tools, AI bookkeeping, financial AI solutions, accounting process automation, AI for CFOs, AI for controllers, AI for FP&A",
    alternates: {
        canonical: "https://chatfin.ai/ai-tools-for-accounting-and-finance"
    },
    openGraph: {
        title: "AI Tools for Accounting & Finance - ChatFin",
        description: "AI-powered tools to automate accounting processes, enhance financial accuracy, and streamline bookkeeping for businesses.",
        url: "https://chatfin.ai/ai-tools-for-accounting-and-finance",
        type: "website"
    }
}

export default function AIToolsForAccounting() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-block mb-6">
                        <span className="text-sm font-semibold text-[#135142] dark:text-green-400 tracking-wider uppercase bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-full border border-green-200 dark:border-green-800">
                            ESSENTIAL TOOLS
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-[#135142] to-[#10b875] bg-clip-text text-transparent">
                            AI Tools
                        </span>{" "}
                        for Accounting & Finance
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
                        AI-powered tools to automate accounting processes, enhance financial accuracy, and streamline bookkeeping for businesses. Discover the comprehensive suite of AI solutions designed specifically for finance teams.
                    </p>
                    <Button className="bg-gradient-to-r from-[#135142] to-[#10b875] text-white px-8 py-4 rounded-xl text-lg font-semibold">
                        Explore AI Tools
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-r from-[#135142] to-[#10b875] rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <FileText className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Automated Invoice Processing</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Streamline your accounts payable with AI-powered invoice processing that extracts data, validates information, and routes for approval automatically.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-r from-[#135142] to-[#10b875] rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <TrendingUp className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Real-time Financial Reporting</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Generate comprehensive financial reports instantly with AI that analyzes your data across multiple systems and presents actionable insights.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-r from-[#135142] to-[#10b875] rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Bot className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Expense Management Automation</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Automate expense tracking, categorization, and reimbursement processes with intelligent receipt scanning and policy compliance checking.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Tools Categories */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            Comprehensive AI Finance Solutions
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Discover specialized AI tools for every aspect of your finance operations
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "AI Data Query",
                                desc: "Query your financial data using natural language and get instant insights from across all your systems.",
                                features: ["Natural language queries", "Multi-system integration", "Real-time insights"],
                                link: "/ai-data-query",
                                icon: BarChart3
                            },
                            {
                                title: "AI Reconciliation",
                                desc: "Automated account reconciliation with anomaly detection and variance analysis for faster month-end close.",
                                features: ["Automated matching", "Anomaly detection", "Variance analysis"],
                                link: "/ai-reconciliation",
                                icon: CheckCircle
                            },
                            {
                                title: "AI Analytics",
                                desc: "Advanced financial analytics with predictive modeling and forecasting capabilities.",
                                features: ["Predictive analytics", "Custom dashboards", "Forecasting models"],
                                link: "/analytics",
                                icon: TrendingUp
                            },
                            {
                                title: "Document Processing",
                                desc: "AI-powered document processing with OCR and intelligent data extraction for all financial documents.",
                                features: ["OCR technology", "Data extraction", "Document classification"],
                                link: "/document-processing",
                                icon: FileText
                            },
                            {
                                title: "Invoice Automation",
                                desc: "End-to-end invoice processing automation from receipt to payment with approval workflows.",
                                features: ["Auto data capture", "Approval workflows", "Payment automation"],
                                link: "/invoice-automation",
                                icon: Zap
                            },
                            {
                                title: "Compliance Monitoring",
                                desc: "Continuous compliance monitoring with regulatory updates and audit trail management.",
                                features: ["Regulatory updates", "Audit trails", "Risk assessment"],
                                link: "/ai-compliance",
                                icon: Shield
                            }
                        ].map((tool, index) => (
                            <Link href={tool.link} key={index} className="group">
                                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-[#135142] dark:hover:border-green-400 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
                                    <div className="w-16 h-16 bg-gradient-to-r from-[#135142] to-[#10b875] rounded-2xl flex items-center justify-center mb-6">
                                        <tool.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-[#135142] dark:group-hover:text-green-400 transition-colors">
                                        {tool.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                        {tool.desc}
                                    </p>
                                    <div className="space-y-2 mb-6">
                                        {tool.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <CheckCircle className="w-4 h-4 text-[#135142] dark:text-green-400" />
                                                <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex items-center text-[#135142] dark:text-green-400 font-medium">
                                        Learn more
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* By Role Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            AI Tools by Finance Role
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Specialized AI solutions tailored for different finance functions and roles
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "AI for Controllers",
                                desc: "Month-end close automation, reconciliation tools, and compliance monitoring",
                                link: "/best-ai-agents-for-controllers",
                                icon: Building2
                            },
                            {
                                title: "AI for FP&A",
                                desc: "Financial planning, budgeting, and variance analysis automation",
                                link: "/10-best-ai-agents-for-fpa-teams",
                                icon: TrendingUp
                            },
                            {
                                title: "AI for CFOs",
                                desc: "Executive dashboards, strategic insights, and board reporting tools",
                                link: "/top-ai-tools-for-cfos",
                                icon: BarChart3
                            },
                            {
                                title: "AI for AP/AR",
                                desc: "Invoice processing, payment automation, and collections management",
                                link: "/best-ai-agents-for-accounts-payable",
                                icon: FileText
                            }
                        ].map((role, index) => (
                            <Link href={role.link} key={index} className="group">
                                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700 hover:border-[#135142] dark:hover:border-green-400 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2">
                                    <div className="w-16 h-16 bg-gradient-to-r from-[#135142] to-[#10b875] rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <role.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#135142] dark:group-hover:text-green-400 transition-colors">
                                        {role.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                        {role.desc}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            Why Choose AI for Your Finance Operations?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-gray-900 rounded-xl p-8 text-center shadow-lg">
                            <div className="w-16 h-16 bg-gradient-to-r from-[#135142] to-[#10b875] rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Zap className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">80% Time Savings</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Reduce manual processing time by up to 80% with intelligent automation of routine finance tasks.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-900 rounded-xl p-8 text-center shadow-lg">
                            <div className="w-16 h-16 bg-gradient-to-r from-[#135142] to-[#10b875] rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <CheckCircle className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">99% Accuracy</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Achieve near-perfect accuracy in data processing and financial calculations with AI validation.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-900 rounded-xl p-8 text-center shadow-lg">
                            <div className="w-16 h-16 bg-gradient-to-r from-[#135142] to-[#10b875] rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <TrendingUp className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Real-time Insights</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Get instant insights and analytics from your financial data with AI-powered reporting tools.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Resources */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            Explore More AI Finance Resources
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { title: "Best AI Tools for Finance Teams", link: "/best-ai-tools-for-finance-teams" },
                            { title: "Top 10 AI Tools 2025", link: "/top-10-ai-tools-for-finance-accounting-in-2025" },
                            { title: "AI Agents for Finance", link: "/ai-agents-for-finance-automation" },
                            { title: "Enterprise AI Tools", link: "/enterprise-ai-tools" },
                            { title: "AI for NetSuite", link: "/ai-for-netsuite" },
                            { title: "SAP AI Agents", link: "/sap-business-one-ai-agents" },
                            { title: "Finance AI Playbook", link: "/finance-ai-playbook" },
                            { title: "Use Cases", link: "/use-cases" }
                        ].map((resource, index) => (
                            <Link key={index} href={resource.link} className="group">
                                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:border-[#135142] dark:hover:border-green-400 transition-all duration-300 hover:shadow-md">
                                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-[#135142] dark:group-hover:text-green-400 transition-colors">
                                        {resource.title}
                                    </h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-[#135142] to-[#10b875]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Transform Your Finance Operations?
                    </h2>
                    <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                        Start with our free AI tools for individuals or explore enterprise solutions for your team.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="bg-white text-[#135142] hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold">
                            Get Started Free
                        </Button>
                        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#135142] px-8 py-4 rounded-xl text-lg font-semibold">
                            Book a Demo
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}