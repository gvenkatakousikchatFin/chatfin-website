'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Calendar, User, Building, Mail, MessageSquare } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function BookDemo() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        message: ''
    })
    const [emailError, setEmailError] = useState("")

    const isWorkEmail = (email: string) => {
        const personalDomains = [
            'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com',
            'aol.com', 'icloud.com', 'live.com', 'msn.com',
            'rediffmail.com', 'ymail.com', 'rocketmail.com'
        ]
        const domain = email.split('@')[1]?.toLowerCase()
        return domain && !personalDomains.includes(domain)
    }

    useEffect(() => {
        // Check if user came from try-free flow
        const storedEmail = localStorage.getItem('userEmail')
        const storedName = localStorage.getItem('userName')
        const storedCompany = localStorage.getItem('userCompany')

        if (storedEmail && storedName) {
            setFormData(prev => ({
                ...prev,
                email: storedEmail,
                name: storedName,
                company: storedCompany || ''
            }))
        }
    }, [])

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }))
        if (field === 'email') {
            setEmailError("")
        }
    }

    const handleSubmit = () => {
        if (formData.name && formData.company && formData.email) {
            if (!isWorkEmail(formData.email)) {
                setEmailError("Please use a work email address. Personal email domains like Gmail, Yahoo, etc. are not allowed.")
                return
            }
            setEmailError("")
            // Store form data
            localStorage.setItem('demoFormData', JSON.stringify(formData))
            router.push('/book-demo/schedule')
        }
    }

    const isFormValid = formData.name && formData.company && formData.email

    return (
        <div className="min-h-screen bg-[#0a0a14] pt-20">
            {/* Main Content */}
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-lg mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00E599]/10 border border-[#00E599]/30 rounded-full mb-6">
                            <Calendar className="w-8 h-8 text-[#00E599]" />
                        </div>
                        <h1 className="text-4xl font-bold text-white mb-4">
                            Book a Demo
                        </h1>
                        <p className="text-xl text-gray-400 mb-2">
                            See ChatFin in action with a personalized demo
                        </p>
                        <p className="text-sm text-gray-500">
                            • 15-30 minute session • Custom pricing available • No commitment required
                        </p>
                    </div>

                    {/* Form */}
                    <div className="space-y-6">
                        {/* Name */}
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 z-10" />
                            <Input
                                type="text"
                                placeholder="Your full name *"
                                value={formData.name}
                                onChange={(e) => handleInputChange('name', e.target.value)}
                                className="pl-10 py-4 text-lg bg-[#0f1123] border-2 border-gray-700 rounded-xl focus:border-[#00E599] text-white placeholder:text-gray-500"
                            />
                        </div>

                        {/* Company */}
                        <div className="relative">
                            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 z-10" />
                            <Input
                                type="text"
                                placeholder="Company name *"
                                value={formData.company}
                                onChange={(e) => handleInputChange('company', e.target.value)}
                                className="pl-10 py-4 text-lg bg-[#0f1123] border-2 border-gray-700 rounded-xl focus:border-[#00E599] text-white placeholder:text-gray-500"
                            />
                        </div>

                        {/* Email */}
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 z-10" />
                            <Input
                                type="email"
                                placeholder="Work email address *"
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                className={`pl-10 py-4 text-lg bg-[#0f1123] border-2 rounded-xl focus:border-[#00E599] text-white placeholder:text-gray-500 ${emailError
                                    ? 'border-red-500'
                                    : 'border-gray-700'
                                    }`}
                            />
                            {emailError && (
                                <p className="text-red-500 text-sm mt-2">{emailError}</p>
                            )}
                        </div>

                        {/* Message */}
                        <div className="relative">
                            <MessageSquare className="absolute left-3 top-4 text-gray-500 w-5 h-5 z-10" />
                            <Textarea
                                placeholder="Tell us about your current financial processes and what you'd like to see in the demo (optional)"
                                value={formData.message}
                                onChange={(e) => handleInputChange('message', e.target.value)}
                                className="pl-10 pt-4 pb-4 text-lg bg-[#0f1123] border-2 border-gray-700 rounded-xl focus:border-[#00E599] text-white placeholder:text-gray-500 min-h-[120px] resize-none"
                            />
                        </div>

                        {/* What to Expect */}
                        <div className="bg-[#0f1123] border border-gray-800 rounded-xl p-6">
                            <h3 className="font-semibold text-white mb-3">
                                What to expect in your demo:
                            </h3>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-[#00E599] rounded-full mt-2 flex-shrink-0"></div>
                                    <span>Live walkthrough of ChatFin's AI finance features</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-[#00E599] rounded-full mt-2 flex-shrink-0"></div>
                                    <span>Discussion of your specific use cases and requirements</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-[#00E599] rounded-full mt-2 flex-shrink-0"></div>
                                    <span>Custom pricing and enterprise feature overview</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-[#00E599] rounded-full mt-2 flex-shrink-0"></div>
                                    <span>Q&A session with our finance automation experts</span>
                                </li>
                            </ul>
                        </div>

                        {/* Submit Button */}
                        <Button
                            onClick={handleSubmit}
                            disabled={!isFormValid}
                            className="w-full bg-gradient-to-r from-[#135142] to-[#10b875] hover:from-[#0d3b30] hover:to-[#0e9963] text-white py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Continue to Schedule
                            <ArrowRight className="w-5 h-5" />
                        </Button>

                        <p className="text-xs text-gray-500 text-center">
                            By booking a demo, you agree to receive communications about ChatFin.
                            You can unsubscribe at any time.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}