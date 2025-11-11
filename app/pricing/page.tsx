import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Shield, Zap, Building2, Users, TrendingUp, Globe } from "lucide-react"

export const metadata: Metadata = {
    title: "Pricing Plans - ChatFin | AI Finance Solutions for Every Team Size",
    description: "Transparent pricing for ChatFin's AI finance solutions. Free for individuals, scalable plans for teams and enterprises. Transform your financial operations with AI automation for FP&A, controllership, AP/AR, and more.",
    keywords: [
        "ChatFin pricing",
        "finance AI pricing",
        "AI finance tools cost",
        "enterprise finance AI pricing",
        "free finance AI",
        "AI accounting software pricing",
        "finance automation pricing",
        "FP&A AI cost",
        "controllership AI pricing",
        "accounts payable automation pricing",
        "financial planning AI cost",
        "AI finance team pricing",
        "enterprise finance automation",
        "finance AI subscription",
        "accounting AI plans",
        "ChatFin cost",
        "AI CFO tools pricing",
        "finance workflow automation cost"
    ],
    alternates: {
        canonical: "https://chatfin.ai/pricing"
    },
    openGraph: {
        title: "Pricing Plans - ChatFin | AI Finance Solutions for Every Team Size",
        description: "Transparent pricing for ChatFin's AI finance solutions. Free for individuals, scalable plans for teams and enterprises.",
        url: "https://chatfin.ai/pricing",
        type: "website",
        images: [
            {
                url: "https://chatfin.ai/pricing-plans.png",
                width: 1200,
                height: 630,
                alt: "ChatFin Pricing Plans"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Pricing Plans - ChatFin | AI Finance Solutions for Every Team Size",
        description: "Transparent pricing for ChatFin's AI finance solutions. Free for individuals, scalable plans for teams and enterprises."
    }
}

export default function Pricing() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-block mb-6">
                        <span className="text-sm font-semibold text-[#135142] dark:text-green-400 tracking-wider uppercase bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-full border border-green-200 dark:border-green-800">
                            TRANSPARENT PRICING
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                        Simple Pricing for Your{" "}
                        <span className="bg-gradient-to-r from-[#135142] to-[#10b875] bg-clip-text text-transparent">
                            Financial Workflows
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
                        Choose the plan that best meets your finance team's needs, with all the features you need to transform your financial operations.
                    </p>
                    <Button className="bg-gradient-to-r from-[#135142] to-[#10b875] text-white px-8 py-4 rounded-xl text-lg font-semibold">
                        Contact Sales
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                        Free implementation support
                    </p>
                </div>
            </section>

            {/* Pricing Plans */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">

                        {/* Individual Plan */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Individual</h3>
                                <div className="mb-4">
                                    <span className="text-5xl font-bold text-gray-900 dark:text-white">Free</span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300">Perfect for personal finance management</p>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-[#135142] dark:text-green-400" />
                                    <span className="text-gray-600 dark:text-gray-300">Smart expense tracking</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-[#135142] dark:text-green-400" />
                                    <span className="text-gray-600 dark:text-gray-300">AI-powered receipt scanning</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-[#135142] dark:text-green-400" />
                                    <span className="text-gray-600 dark:text-gray-300">Budget insights and recommendations</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-[#135142] dark:text-green-400" />
                                    <span className="text-gray-600 dark:text-gray-300">Personal AI financial assistant</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-[#135142] dark:text-green-400" />
                                    <span className="text-gray-600 dark:text-gray-300">Basic reporting</span>
                                </div>
                            </div>

                            <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-xl">
                                Get Started Free
                            </Button>
                        </div>

                        {/* Team Plan */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 border-[#135142] dark:border-green-400 shadow-xl relative">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                <span className="bg-[#135142] dark:bg-green-400 text-white dark:text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
                                    Most Popular
                                </span>
                            </div>

                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Team</h3>
                                <div className="mb-4">
                                    <span className="text-5xl font-bold text-gray-900 dark:text-white">$49</span>
                                    <span className="text-gray-600 dark:text-gray-300">/user/month</span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300">For growing finance teams</p>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-[#135142] dark:text-green-400" />
                                    <span className="text-gray-600 dark:text-gray-300">Everything in Individual</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-[#135142] dark:text-green-400" />
                                    <span className="text-gray-600 dark:text-gray-300">Team collaboration features</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-[#135142] dark:text-green-400" />
                                    <span className="text-gray-600 dark:text-gray-300">Advanced AI reconciliation</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-[#135142] dark:text-green-400" />
                                    <span className="text-gray-600 dark:text-gray-300">Automated reporting</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-[#135142] dark:text-green-400" />
                                    <span className="text-gray-600 dark:text-gray-300">API integrations</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-[#135142] dark:text-green-400" />
                                    <span className="text-gray-600 dark:text-gray-300">Priority support</span>
                                </div>
                            </div>

                            <Button className="w-full bg-gradient-to-r from-[#135142] to-[#10b875] text-white py-3 rounded-xl">
                                Start Free Trial
                            </Button>
                        </div>

                        {/* Enterprise Plan */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Enterprise</h3>
                                <div className="mb-4">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">Custom</span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300">For large organizations</p>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-[#135142] dark:text-green-400" />
                                    <span className="text-gray-600 dark:text-gray-300">Everything in Team</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-[#135142] dark:text-green-400" />
                                    <span className="text-gray-600 dark:text-gray-300">Real-time financial monitoring</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-[#135142] dark:text-green-400" />
                                    <span className="text-gray-600 dark:text-gray-300">Advanced financial analytics</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-[#135142] dark:text-green-400" />
                                    <span className="text-gray-600 dark:text-gray-300">Enterprise security with SSO</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-[#135142] dark:text-green-400" />
                                    <span className="text-gray-600 dark:text-gray-300">Dedicated solutions architect</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-[#135142] dark:text-green-400" />
                                    <span className="text-gray-600 dark:text-gray-300">Tailored implementation</span>
                                </div>
                            </div>

                            <Button variant="outline" className="w-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-3 rounded-xl">
                                Contact Sales
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* How Enterprise Finance AI Works */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            How Enterprise Finance AI Works
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-r from-[#135142] to-[#10b875] rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Globe className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Financial Data Integration</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Our AI system seamlessly connects with your existing financial data sources, ERPs, and accounting systems to provide real-time insights without disrupting your workflows.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-r from-[#135142] to-[#10b875] rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Zap className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">AI Processing Power</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Enterprise plans provide dedicated AI processing capacity based on your transaction volume, document processing needs, and automation requirements, scaling as your financial operations grow.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-r from-[#135142] to-[#10b875] rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Users className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">AI Training & Support</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Enterprise clients receive specialized AI model fine-tuning for your specific financial workflows, plus dedicated AI specialists to ensure optimal performance and continuous improvement.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Finance AI Enterprise */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            Why Choose Finance AI Enterprise?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-r from-[#135142] to-[#10b875] rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Shield className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Financial-Grade AI Security</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Enterprise security for your sensitive financial data with advanced encryption, secure AI processing environments, and compliance with industry standards like SOC 2, GDPR, and CCPA.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-r from-[#135142] to-[#10b875] rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <TrendingUp className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Advanced Financial AI</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Access to our most sophisticated financial AI models that can handle complex reconciliations, detect anomalies in high-volume transactions, and provide predictive financial analytics.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-r from-[#135142] to-[#10b875] rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Building2 className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">AI Model Customization</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Tailor our AI's capabilities to your specific financial operations with custom model training, industry-specific financial templates, and integration with your proprietary financial processes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                Is ChatFin really free for individuals?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Yes, ChatFin is completely free for individual users. You get access to all core features including smart expense tracking, AI-powered receipt scanning, budget insights, and personal AI financial assistant with no hidden fees or time limits.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                How does the Enterprise pricing work?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Enterprise pricing is tailored based on your organization's specific financial requirements, including the number of users, transaction volume, integration complexity, and custom features needed. Contact our sales team for a personalized quote.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                What integrations are available?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                ChatFin integrates with popular accounting software, ERP systems, banks, and financial data sources. Enterprise plans include custom integrations and API access for seamless workflow integration.
                            </p>
                        </div>
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
                        Start your free trial today and experience the power of AI-driven finance automation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="bg-white text-[#135142] hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold">
                            Start Free Trial
                        </Button>
                        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#135142] px-8 py-4 rounded-xl text-lg font-semibold">
                            Contact Sales
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}