'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Calendar, Clock, Users, Shield, Globe, TrendingUp, CheckCircle, BarChart3, Database, Workflow, Zap, ArrowLeft, Phone, Video, Award } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function EnterpriseDemo() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        jobTitle: '',
        phone: '',
        companySize: '',
        industry: '',
        currentTools: '',
        challenges: '',
        timeline: '',
        demoType: 'video',
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
        // Handle form submission here
        console.log('Enterprise demo request submitted:', formData)
        alert('Enterprise demo request submitted! Our sales team will contact you within 4 hours.')
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
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Left Side - Information */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Header */}
                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                                    <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                    <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Enterprise Solutions Demo</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                                    Scale your finance operations with{" "}
                                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                        enterprise-grade ChatFin
                                    </span>
                                </h1>
                                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Schedule a comprehensive 30-minute demo to see how ChatFin Enterprise can transform your organization's financial processes, improve efficiency, and drive better business decisions.
                                </p>
                            </div>

                            {/* What you'll see */}
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">What you'll discover in this demo:</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        {
                                            icon: BarChart3,
                                            title: "Advanced Analytics Dashboard",
                                            description: "Real-time financial reporting with predictive analytics and custom KPIs"
                                        },
                                        {
                                            icon: Users,
                                            title: "Multi-User Collaboration",
                                            description: "Role-based access, approval workflows, and team collaboration features"
                                        },
                                        {
                                            icon: Database,
                                            title: "Enterprise Integrations",
                                            description: "Seamless connection with ERPs, accounting software, and banking systems"
                                        },
                                        {
                                            icon: Shield,
                                            title: "Security & Compliance",
                                            description: "SOC2, GDPR compliance, advanced audit trails, and data governance"
                                        },
                                        {
                                            icon: Workflow,
                                            title: "Custom Workflows",
                                            description: "Automated processes, approval chains, and configurable business rules"
                                        },
                                        {
                                            icon: Globe,
                                            title: "Global Operations",
                                            description: "Multi-currency support, international tax compliance, and global reporting"
                                        }
                                    ].map((feature, index) => (
                                        <div key={index} className="p-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-xl border border-gray-200 dark:border-gray-700">
                                            <div className="flex items-start gap-3">
                                                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <feature.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">{feature.title}</h4>
                                                    <p className="text-gray-600 dark:text-gray-300 text-xs">{feature.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Enterprise Benefits */}
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                                    </div>
                                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">40% Faster</h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">Financial close processes</p>
                                </div>
                                <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">60% Reduction</h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">In manual data entry</p>
                                </div>
                                <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">99.99%</h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">Uptime guarantee</p>
                                </div>
                            </div>

                            {/* Social Proof */}
                            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Award className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">Trusted by Fortune 500 Companies</h4>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                                            "ChatFin Enterprise reduced our financial reporting time by 50% and improved accuracy by 95%. The ROI was evident within the first quarter."
                                        </p>
                                        <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold">
                                            - Sarah Johnson, CFO at TechCorp International
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Form */}
                        <div className="lg:sticky lg:top-24">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl p-6">
                                <div className="text-center mb-6">
                                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                        Schedule Enterprise Demo
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        30-minute personalized demonstration
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Name Row */}
                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                First Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                required
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                                                placeholder="John"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                Last Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                required
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                                                placeholder="Doe"
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Business Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                                            placeholder="john.doe@company.com"
                                        />
                                    </div>

                                    {/* Company & Title */}
                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                Company *
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                required
                                                value={formData.company}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                                                placeholder="Company Name"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                Job Title *
                                            </label>
                                            <input
                                                type="text"
                                                id="jobTitle"
                                                name="jobTitle"
                                                required
                                                value={formData.jobTitle}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                                                placeholder="CFO"
                                            />
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                                            placeholder="(555) 123-4567"
                                        />
                                    </div>

                                    {/* Company Size & Industry */}
                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                Company Size
                                            </label>
                                            <select
                                                id="companySize"
                                                name="companySize"
                                                value={formData.companySize}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                                            >
                                                <option value="">Select size</option>
                                                <option value="50-200">50-200 employees</option>
                                                <option value="200-1000">200-1,000 employees</option>
                                                <option value="1000-5000">1,000-5,000 employees</option>
                                                <option value="5000+">5,000+ employees</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="industry" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                Industry
                                            </label>
                                            <select
                                                id="industry"
                                                name="industry"
                                                value={formData.industry}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                                            >
                                                <option value="">Select industry</option>
                                                <option value="technology">Technology</option>
                                                <option value="financial-services">Financial Services</option>
                                                <option value="healthcare">Healthcare</option>
                                                <option value="manufacturing">Manufacturing</option>
                                                <option value="retail">Retail</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Current Tools */}
                                    <div>
                                        <label htmlFor="currentTools" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Current Financial Tools
                                        </label>
                                        <input
                                            type="text"
                                            id="currentTools"
                                            name="currentTools"
                                            value={formData.currentTools}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                                            placeholder="e.g., SAP, QuickBooks, Excel"
                                        />
                                    </div>

                                    {/* Key Challenges */}
                                    <div>
                                        <label htmlFor="challenges" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Key Challenges
                                        </label>
                                        <textarea
                                            id="challenges"
                                            name="challenges"
                                            rows={2}
                                            value={formData.challenges}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm resize-none"
                                            placeholder="What financial challenges are you looking to solve?"
                                        />
                                    </div>

                                    {/* Timeline & Demo Type */}
                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                Timeline
                                            </label>
                                            <select
                                                id="timeline"
                                                name="timeline"
                                                value={formData.timeline}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                                            >
                                                <option value="">Implementation timeline</option>
                                                <option value="immediate">Immediate (0-30 days)</option>
                                                <option value="near-term">Near-term (1-3 months)</option>
                                                <option value="planning">Planning (3-6 months)</option>
                                                <option value="future">Future consideration</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="demoType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                Demo Type
                                            </label>
                                            <select
                                                id="demoType"
                                                name="demoType"
                                                value={formData.demoType}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                                            >
                                                <option value="video">Video Call</option>
                                                <option value="phone">Phone Call</option>
                                                <option value="in-person">In-Person</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Time Slot */}
                                    <div>
                                        <label htmlFor="timeSlot" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Preferred Time
                                        </label>
                                        <select
                                            id="timeSlot"
                                            name="timeSlot"
                                            value={formData.timeSlot}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
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
                                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        <Calendar className="w-4 h-4 mr-2" />
                                        Schedule Enterprise Demo
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>

                                    <p className="text-center text-xs text-gray-500 dark:text-gray-400">
                                        Our sales team will contact you within 4 hours • 30 min consultation
                                    </p>
                                </form>

                                {/* Additional Info */}
                                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                                    <div className="flex items-center justify-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            <span>30 min</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Video className="w-3 h-3" />
                                            <span>Video/Phone</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Users className="w-3 h-3" />
                                            <span>Dedicated Rep</span>
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