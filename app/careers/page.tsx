'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, Briefcase, Clock, MapPin, DollarSign, Code, Users, Rocket, CheckCircle2 } from "lucide-react"
import Link from "next/link"

const openPositions = [
    {
        id: 1,
        title: "Software Engineer",
        type: "Internship",
        duration: "5 months",
        location: "Remote",
        description: "We are looking to hire Software Engineers with expertise in JavaScript and Node.js. This opportunity is also open for working professionals looking to transition or grow their careers.",
        requirements: [
            { category: "For Interns", details: "Bachelor's degree (Final Year Graduates) in Computer Science or a related field" },
            { category: "For Working Professionals", details: "Minimum 2+ years of professional development experience" },
        ],
        skills: [
            "Strong expertise in JavaScript, TypeScript, and Node.js backend technologies",
            "Familiarity with frontend frameworks such as Vue.js, React.js, or Angular",
            "Knowledge of SQL technologies (MySQL or PostgreSQL)",
            "Experience with ML, NLP, or LangChain (added advantage)",
        ],
        package: {
            interns: "Based on performance",
            professionals: "Negotiable based on experience"
        },
        applyLink: "https://docs.google.com/forms/d/e/1FAIpQLScfUML-NZBRnDSZimQSlPKWDghosSbSIM1Dh4F1jznJRE-KoQ/viewform?usp=send_form"
    }
]

export default function CareersPage() {
    return (
        <div className="min-h-screen bg-[#0a0a14] pt-20">
            {/* Hero Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f1123] to-[#0a0a14]">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-block mb-6">
                        <span className="text-sm font-semibold text-[#00E599] tracking-wider uppercase bg-[#00E599]/10 px-4 py-2 rounded-full border border-[#00E599]/30 flex items-center gap-2 w-fit mx-auto">
                            <Rocket className="w-4 h-4" />
                            We're Hiring!
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Join the{" "}
                        <span className="bg-gradient-to-r from-[#00E599] to-[#10b875] bg-clip-text text-transparent">
                            ChatFin Team
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                        Build the future of AI-powered finance automation. We're looking for passionate engineers to join our mission of transforming how businesses handle finance.
                    </p>
                </div>
            </section>

            {/* Why Join Us Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">
                        Why Join ChatFin?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-[#0f1123] rounded-2xl p-8 border border-gray-800">
                            <div className="w-14 h-14 bg-gradient-to-r from-[#135142] to-[#10b875] rounded-xl flex items-center justify-center mb-6">
                                <Rocket className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                Work on Cutting-Edge AI
                            </h3>
                            <p className="text-gray-400">
                                Build AI agents and ML models that are revolutionizing the finance industry with real-world impact.
                            </p>
                        </div>
                        <div className="bg-[#0f1123] rounded-2xl p-8 border border-gray-800">
                            <div className="w-14 h-14 bg-gradient-to-r from-[#135142] to-[#10b875] rounded-xl flex items-center justify-center mb-6">
                                <Users className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                Remote-First Culture
                            </h3>
                            <p className="text-gray-400">
                                Work from anywhere with a distributed team that values work-life balance and flexibility.
                            </p>
                        </div>
                        <div className="bg-[#0f1123] rounded-2xl p-8 border border-gray-800">
                            <div className="w-14 h-14 bg-gradient-to-r from-[#135142] to-[#10b875] rounded-xl flex items-center justify-center mb-6">
                                <Code className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                Growth & Learning
                            </h3>
                            <p className="text-gray-400">
                                Learn from experienced professionals and grow your skills in a fast-paced startup environment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Open Positions Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0f1123] border-y border-gray-800">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">
                        Open Positions
                    </h2>

                    {openPositions.map((position) => (
                        <div key={position.id} className="bg-[#0a0a14] rounded-2xl border border-gray-800 overflow-hidden mb-8">
                            {/* Position Header */}
                            <div className="bg-gradient-to-r from-[#135142] to-[#10b875] p-6 text-white">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2">{position.title}</h3>
                                        <div className="flex flex-wrap gap-4 text-sm opacity-90">
                                            <span className="flex items-center gap-1">
                                                <Briefcase className="w-4 h-4" />
                                                {position.type}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {position.duration}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                {position.location}
                                            </span>
                                        </div>
                                    </div>
                                    <Link href={position.applyLink} target="_blank" rel="noopener noreferrer">
                                        <Button className="bg-white text-[#135142] hover:bg-gray-100 font-semibold px-6 py-2 rounded-full">
                                            Apply Now
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            {/* Position Details */}
                            <div className="p-8">
                                <p className="text-gray-300 text-lg mb-8">
                                    {position.description}
                                </p>

                                {/* Package Info */}
                                <div className="bg-[#00E599]/10 rounded-xl p-6 mb-8 border border-[#00E599]/30">
                                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                        <DollarSign className="w-5 h-5 text-[#00E599]" />
                                        Package
                                    </h4>
                                    <div className="space-y-2 text-gray-300">
                                        <p><strong>Interns:</strong> {position.package.interns}</p>
                                        <p><strong>Professionals:</strong> {position.package.professionals}</p>
                                    </div>
                                </div>

                                {/* Requirements */}
                                <div className="mb-8">
                                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                        <Briefcase className="w-5 h-5 text-[#00E599]" />
                                        Required Qualifications
                                    </h4>
                                    <div className="space-y-4">
                                        {position.requirements.map((req, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-[#00E599] flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <span className="font-semibold text-white">{req.category}:</span>
                                                    <span className="text-gray-400 ml-1">{req.details}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Skills */}
                                <div className="mb-8">
                                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                        <Code className="w-5 h-5 text-[#00E599]" />
                                        Technical Skills
                                    </h4>
                                    <ul className="space-y-3">
                                        {position.skills.map((skill, index) => (
                                            <li key={index} className="flex items-start gap-3 text-gray-300">
                                                <CheckCircle2 className="w-5 h-5 text-[#00E599] flex-shrink-0 mt-0.5" />
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Apply CTA */}
                                <div className="text-center pt-6 border-t border-gray-800">
                                    <Link href={position.applyLink} target="_blank" rel="noopener noreferrer">
                                        <Button className="bg-gradient-to-r from-[#135142] to-[#10b875] hover:from-[#0d3b30] hover:to-[#0e9963] text-white px-12 py-4 rounded-xl text-lg font-semibold">
                                            Apply for this Position
                                            <ArrowRight className="w-5 h-5 ml-2" />
                                        </Button>
                                    </Link>
                                    <p className="text-sm text-gray-500 mt-4">
                                        You'll be redirected to our application form
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Don't see a role that fits?
                    </h2>
                    <p className="text-xl text-gray-400 mb-8">
                        We're always looking for talented individuals. Send us your resume and tell us how you'd like to contribute to ChatFin.
                    </p>
                    <Link href="mailto:careers@chatfin.ai">
                        <Button variant="outline" className="border-2 border-[#00E599] text-[#00E599] hover:bg-[#00E599] hover:text-[#0a0a14] px-8 py-4 rounded-xl text-lg font-semibold">
                            Contact Us
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#0f1123] border-t border-gray-800 py-8">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-gray-500 text-sm">
                        © 2024 ChatFin Inc. All Rights Reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}
