import React from 'react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import useCasesData from '@/use-cases.json'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

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

export default function SolutionPage({ params }: { params: { slug: string } }) {
    const { slug } = params
    const useCase = useCasesData.useCases.find((u) => slugify(u.title) === slug)

    if (!useCase) {
        return notFound()
    }

    return (
        <div className="min-h-screen bg-[#0a0a14] pt-20">
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f1123] to-[#0a0a14]">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium">
                        {useCase.category.toUpperCase()}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        {useCase.title}
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
                        {useCase.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white rounded-full px-8 h-12 text-lg">
                            Get Started
                        </Button>
                        <Button variant="outline" className="border-gray-700 text-gray-300 hover:text-white hover:bg-white/5 rounded-full px-8 h-12 text-lg">
                            View Demo
                        </Button>
                    </div>
                </div>
            </section>

            {/* Alternating Sub-Use Cases */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto space-y-32">
                    {useCase.subUseCases.map((subCase, index) => {
                        const isEven = index % 2 === 0

                        return (
                            <div
                                key={index}
                                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
                            >
                                {/* Infographic Side (Placeholder) */}
                                <div className="w-full lg:w-1/2">
                                    <div className="relative aspect-video rounded-2xl overflow-hidden border border-gray-800 bg-[#0f1123] shadow-2xl shadow-emerald-500/10 group hover:shadow-emerald-500/20 transition-all duration-300">
                                        <Image
                                            src="https://i.postimg.cc/ZK1wzSbM/Screenshot-2026-01-08-192057.png"
                                            alt={`Infographic for ${subCase.title}`}
                                            fill
                                            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                        />
                                        {/* Overlay to ensure text readability if needed or just style */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a14]/60 to-transparent"></div>

                                        {/* Decorative elements */}
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-50"></div>
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="w-full lg:w-1/2">
                                    <h3 className="text-emerald-400 font-semibold mb-2 text-lg">
                                        {subCase.preview}
                                    </h3>
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                        {subCase.title}
                                    </h2>
                                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                        {subCase.description}
                                    </p>

                                    <ul className="space-y-4">
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-6 w-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-300">Automated processing and verification</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-6 w-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-300">Real-time status updates and tracking</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-6 w-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-300">Seamless integration with existing tools</span>
                                        </li>
                                    </ul>

                                    <Button variant="link" className="text-emerald-400 hover:text-emerald-300 p-0 h-auto mt-8 text-lg font-medium group">
                                        Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
