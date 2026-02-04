import React from 'react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import useCasesData from '@/use-cases.json'
import { Button } from '@/components/ui/button'
import {
    ArrowRight, CheckCircle2, Clock, CreditCard, Users, BarChart3,
    FileText, TrendingUp, CheckSquare, Zap, Shield, Wallet, AlertCircle,
    Activity, Target, Calendar, Globe, Bell
} from 'lucide-react'
import { ChatFinDiagram } from '@/components/chatfin-diagram'

// Icon mapping for different use case categories and types
const getIconForSubUseCase = (title: string, mainCategory: string): React.ReactNode => {
    const iconProps = { className: "h-12 w-12" }

    const iconMap: Record<string, React.ReactNode> = {
        'Bank Reconciliation': <Clock {...iconProps} />,
        'Credit Card Reconciliation': <CreditCard {...iconProps} />,
        'Intercompany Reconciliation': <Users {...iconProps} />,
        'Account Reconciliation': <BarChart3 {...iconProps} />,
        'Predictive Accruals': <TrendingUp {...iconProps} />,
        'Purchase Order Accruals': <FileText {...iconProps} />,
        'Revenue Accruals': <Wallet {...iconProps} />,
        'Multi-Entity Accruals': <Globe {...iconProps} />,
        'Budget vs Actual Analysis': <Target {...iconProps} />,
        'Period-over-Period Analysis': <Calendar {...iconProps} />,
        'Trend Analysis': <Activity {...iconProps} />,
        'Consolidated Close Checklists': <CheckSquare {...iconProps} />,
        'AI-Driven Close': <Zap {...iconProps} />,
        'Data Consistency Checks': <Shield {...iconProps} />,
        'Scenario Planning': <BarChart3 {...iconProps} />,
        'Rolling Forecasts': <TrendingUp {...iconProps} />,
        'Supplier Statement Matching': <FileText {...iconProps} />,
        'Duplicate Invoice Detection': <AlertCircle {...iconProps} />,
        'Three-Way Match': <CheckCircle2 {...iconProps} />,
        'Receipt Matching': <FileText {...iconProps} />,
        'Under/Overpayment Detection': <AlertCircle {...iconProps} />,
        'Automated Reminders': <Bell {...iconProps} />,
        'Bank Setup & Validation': <Shield {...iconProps} />,
        'Batch Payment Automation': <Zap {...iconProps} />,
        'Compliance & Fraud Detection': <AlertCircle {...iconProps} />,
    }

    return iconMap[title] || <CheckCircle2 {...iconProps} />
}

// Helper function to generate slugs from titles
const slugify = (text: string) => {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '') // Remove non-word chars
        .replace(/\s+/g, '-')     // Replace spaces with -
        .replace(/--+/g, '-')     // Replace multiple - with single -
        .trim()
}

// Generate static params if you want SSG, but dynamic is fine for now
export function generateStaticParams() {
    return useCasesData.useCases.map((useCase) => ({
        slug: slugify(useCase.title),
    }))
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const useCase = useCasesData.useCases.find((u) => slugify(u.title) === slug)

    if (!useCase) {
        return notFound()
    }

    return (
        <div className="min-h-screen bg-[#0a0a14] pt-20 overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f1123] to-[#0a0a14] overflow-hidden">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[#00E599]/30 bg-[#00E599]/10 text-[#00E599] text-sm font-medium">
                        {useCase.category.toUpperCase()}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        {useCase.title}
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
                        {useCase.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="bg-gradient-to-r from-[#135142] to-[#10b875] hover:from-[#0d3b30] hover:to-[#0e9963] text-white rounded-full px-8 h-12 text-lg">
                            Get Started
                        </Button>
                        <Button variant="outline" className="border-gray-700 text-gray-300 hover:text-white hover:bg-white/5 rounded-full px-8 h-12 text-lg">
                            View Demo
                        </Button>
                    </div>
                </div>
            </section>

            {/* Alternating Sub-Use Cases */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto space-y-32">
                    {useCase.subUseCases.map((subCase, index) => {
                        const isEven = index % 2 === 0
                        const isFirstReconciliation = slug === 'reconciliations' && index === 0

                        // For the diagram, use full width layout
                        if (isFirstReconciliation) {
                            return (
                                <div key={index} className="w-full">
                                    <ChatFinDiagram />
                                </div>
                            )
                        }

                        return (
                            <div
                                key={index}
                                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
                            >
                                {/* Infographic Side */}
                                <div className="w-full lg:w-1/2">
                                    <div className="relative aspect-video rounded-2xl overflow-hidden border border-gray-800 bg-[#0f1123] shadow-2xl shadow-emerald-500/10 group hover:shadow-emerald-500/20 transition-all duration-300 max-h-[400px]">
                                        <Image
                                            src="https://i.postimg.cc/mrbLjKHh/Screenshot-2026-01-08-193412.png"
                                            alt={`Infographic for ${subCase.title}`}
                                            fill
                                            className="object-cover"
                                            priority={index === 0}
                                        />

                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl mix-blend-overlay"></div>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="w-full lg:w-1/2">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="text-[#00E599] bg-[#00E599]/10 p-4 rounded-xl border border-[#00E599]/20">
                                            {getIconForSubUseCase(subCase.title, useCase.category)}
                                        </div>
                                    </div>
                                    <h3 className="text-[#00E599] font-semibold mb-3 text-lg">
                                        {subCase.preview}
                                    </h3>
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                        {subCase.title}
                                    </h2>
                                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                        {subCase.description}
                                    </p>

                                    <ul className="space-y-4">
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-6 w-6 text-[#00E599] mr-3 flex-shrink-0 mt-1" />
                                            <span className="text-gray-300">Automated processing and verification</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-6 w-6 text-[#00E599] mr-3 flex-shrink-0 mt-1" />
                                            <span className="text-gray-300">Real-time status updates and tracking</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-6 w-6 text-[#00E599] mr-3 flex-shrink-0 mt-1" />
                                            <span className="text-gray-300">Seamless integration with existing tools</span>
                                        </li>
                                    </ul>

                                    <Button variant="link" className="text-[#00E599] hover:text-[#00c985] p-0 h-auto mt-8 text-lg font-medium group">
                                        Learn more <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-[#0a0a14] border-t border-gray-800">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to transform your {useCase.title.toLowerCase()}?</h2>
                    <p className="text-gray-400 text-xl mb-10">Join forward-thinking finance teams using ChatFin to automate operations.</p>
                    <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 h-12 text-lg font-semibold">
                        Start Free Trial
                    </Button>
                </div>
            </section>
        </div>
    )
}
