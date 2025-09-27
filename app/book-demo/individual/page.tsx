'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, User, Calendar, Clock, Star, CheckCircle, DollarSign, PieChart, Bot, Smartphone, Target, TrendingUp, ArrowLeft } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function IndividualDemo() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        currentSituation: '',
        goals: '',
        timeSlot: ''
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // Validate required fields
        if (!formData.name.trim()) {
            alert('Please enter your full name')
            return
        }

        if (!formData.email.trim()) {
            alert('Please enter your email address')
            return
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address')
            return
        }

        // Store form data and redirect to schedule page
        localStorage.setItem('demoFormData', JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: 'Individual', // Set as individual since this is individual demo
            currentSituation: formData.currentSituation,
            goals: formData.goals,
            timeSlot: formData.timeSlot,
            demoType: 'individual'
        }))
        router.push('/book-demo/schedule')
    }

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Navigation */}
            <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <h1 className="text-2xl font-bold text-[#135142] dark:text-white">ChatFin</h1>
                        </div>

                        {/* Back Button */}
                        <div className="flex items-center gap-4">
                            <Button
                                onClick={() => router.back()}
                                variant="outline"
                                className="flex items-center gap-2 text-sm"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Back
                            </Button>
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Left Side - Information */}
                        <div className="space-y-8">
                            {/* Header */}
                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                                    <User className="w-4 h-4 text-green-600 dark:text-green-400" />
                                    <span className="text-sm font-semibold text-green-700 dark:text-green-300">Personal Finance Demo</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                                    See how ChatFin can{" "}
                                    <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                                        transform your finances
                                    </span>
                                </h1>
                                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Book a personalized 15-minute demo to discover how our AI-powered platform can help you take control of your money.
                                </p>
                            </div>

                            {/* What you'll see */}
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">What you'll discover:</h3>
                                <div className="space-y-4">
                                    {[
                                        {
                                            icon: Bot,
                                            title: "AI Financial Assistant",
                                            description: "See how our AI analyzes your spending and provides personalized insights"
                                        },
                                        {
                                            icon: PieChart,
                                            title: "Smart Budget Planning",
                                            description: "Learn how to create budgets that actually work with AI recommendations"
                                        },
                                        {
                                            icon: TrendingUp,
                                            title: "Investment Guidance",
                                            description: "Discover investment opportunities tailored to your risk profile and goals"
                                        },
                                        {
                                            icon: Target,
                                            title: "Goal Achievement",
                                            description: "Set and track financial goals with automated progress monitoring"
                                        }
                                    ].map((feature, index) => (
                                        <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                            <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <feature.icon className="w-5 h-5 text-green-600 dark:text-green-400" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{feature.title}</h4>
                                                <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Benefits */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Why choose ChatFin for personal finance?</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        "100% Free to start",
                                        "No credit card required",
                                        "Bank-level security",
                                        "Available on all devices",
                                        "AI-powered insights",
                                        "24/7 support"
                                    ].map((benefit, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                                            <span className="text-gray-700 dark:text-gray-300 text-sm">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Social Proof */}
                            <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl border border-green-200 dark:border-green-800">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">4.9/5 rating</span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 text-sm italic">
                                    "ChatFin helped me save $500 in the first month just by showing me where my money was going. The AI insights are incredible!"
                                </p>
                                <p className="text-gray-500 dark:text-gray-400 text-xs mt-2">- Sarah M., Marketing Manager</p>
                            </div>
                        </div>

                        {/* Right Side - Form */}
                        <div className="lg:sticky lg:top-24">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl p-8">
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                        Book Your Personal Demo
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        15 minutes to discover your financial future
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name */}
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                            placeholder="Enter your full name"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                            placeholder="(555) 123-4567"
                                        />
                                    </div>

                                    {/* Current Situation */}
                                    <div>
                                        <label htmlFor="currentSituation" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Current Financial Situation
                                        </label>
                                        <select
                                            id="currentSituation"
                                            name="currentSituation"
                                            value={formData.currentSituation}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                        >
                                            <option value="">Select your situation</option>
                                            <option value="just-starting">Just starting my financial journey</option>
                                            <option value="some-savings">Have some savings, want to optimize</option>
                                            <option value="investing">Already investing, need better tools</option>
                                            <option value="debt-management">Need help with debt management</option>
                                            <option value="retirement-planning">Planning for retirement</option>
                                        </select>
                                    </div>

                                    {/* Goals */}
                                    <div>
                                        <label htmlFor="goals" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Primary Financial Goals
                                        </label>
                                        <textarea
                                            id="goals"
                                            name="goals"
                                            rows={3}
                                            value={formData.goals}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                                            placeholder="e.g., Save for a house, pay off student loans, build emergency fund..."
                                        />
                                    </div>

                                    {/* Time Slot */}
                                    <div>
                                        <label htmlFor="timeSlot" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Preferred Time
                                        </label>
                                        <select
                                            id="timeSlot"
                                            name="timeSlot"
                                            value={formData.timeSlot}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                        >
                                            <option value="">Select preferred time</option>
                                            <option value="morning">Morning (9 AM - 12 PM)</option>
                                            <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                                            <option value="evening">Evening (5 PM - 8 PM)</option>
                                            <option value="flexible">I'm flexible</option>
                                        </select>
                                    </div>

                                    {/* Submit Button */}
                                    <Button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        <Calendar className="w-5 h-5 mr-2" />
                                        Book My Personal Demo
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>

                                    <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                                        Free consultation • No obligation • 15 minutes
                                    </p>
                                </form>

                                {/* Additional Info */}
                                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                                    <div className="flex items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4" />
                                            <span>15 min call</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <DollarSign className="w-4 h-4" />
                                            <span>100% Free</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Smartphone className="w-4 h-4" />
                                            <span>Phone or Video</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}