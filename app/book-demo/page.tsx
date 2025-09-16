import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Users, Building, CheckCircle, Play } from "lucide-react"
import Link from "next/link"

export default function BookDemo() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 font-poppins">
            {/* Navigation */}
            <header className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-[#135142] dark:hover:text-white transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                            <span>Back to Home</span>
                        </Link>
                        <h1 className="text-2xl font-bold text-[#135142] dark:text-white">ChatFin</h1>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Content */}
                        <div>
                            <div className="inline-block mb-6">
                                <span className="text-xs font-medium text-[#135142] dark:text-green-400 tracking-wider uppercase bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-full border border-green-200 dark:border-green-800">
                                    🚀 Enterprise Demo
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                                See ChatFin in action
                            </h1>

                            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                                Schedule a personalized demo with our team and discover how ChatFin can transform your finance operations.
                            </p>

                            {/* What you'll learn */}
                            <div className="space-y-4 mb-8">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">What you'll see in the demo:</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-[#135142] dark:text-green-400 flex-shrink-0" />
                                        <span className="text-gray-600 dark:text-gray-300">AI-powered financial document processing</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-[#135142] dark:text-green-400 flex-shrink-0" />
                                        <span className="text-gray-600 dark:text-gray-300">Automated reconciliation workflows</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-[#135142] dark:text-green-400 flex-shrink-0" />
                                        <span className="text-gray-600 dark:text-gray-300">Real-time analytics and reporting</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-[#135142] dark:text-green-400 flex-shrink-0" />
                                        <span className="text-gray-600 dark:text-gray-300">Integration with your existing systems</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-[#135142] dark:text-green-400 flex-shrink-0" />
                                        <span className="text-gray-600 dark:text-gray-300">Custom enterprise features and pricing</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Demo Options */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
                                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4">
                                        <Play className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Live Demo</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                        30-minute personalized session with our product experts
                                    </p>
                                    <Button className="w-full bg-gradient-to-r from-[#135142] to-[#10b875] hover:from-[#0d3b30] hover:to-[#0e9963] text-white rounded-xl font-medium">
                                        Schedule Live Demo
                                    </Button>
                                </div>

                                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
                                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-4">
                                        <Calendar className="w-5 h-5 text-[#135142] dark:text-green-400" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Self-Guided Tour</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                        Explore ChatFin at your own pace with our interactive demo
                                    </p>
                                    <Button variant="outline" className="w-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl font-medium">
                                        Start Self Tour
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Form */}
                        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl">
                            <div className="text-center mb-6">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Book your demo</h2>
                                <p className="text-gray-600 dark:text-gray-300">Fill out the form and we'll be in touch within 24 hours</p>
                            </div>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#135142] focus:border-transparent"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#135142] focus:border-transparent"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Work Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#135142] focus:border-transparent"
                                        placeholder="john@company.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#135142] focus:border-transparent"
                                        placeholder="Acme Corp"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="teamSize" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Team Size
                                    </label>
                                    <select
                                        id="teamSize"
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#135142] focus:border-transparent"
                                    >
                                        <option value="">Select team size</option>
                                        <option value="1-10">1-10 people</option>
                                        <option value="11-50">11-50 people</option>
                                        <option value="51-200">51-200 people</option>
                                        <option value="200+">200+ people</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Tell us about your needs (optional)
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#135142] focus:border-transparent"
                                        placeholder="What specific finance challenges are you looking to solve?"
                                    ></textarea>
                                </div>

                                <Button className="w-full bg-gradient-to-r from-[#135142] to-[#10b875] hover:from-[#0d3b30] hover:to-[#0e9963] text-white py-4 rounded-xl text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300">
                                    Book Demo Call
                                </Button>

                                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                                    By submitting this form, you agree to our privacy policy and terms of service.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
