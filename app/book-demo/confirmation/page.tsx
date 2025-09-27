'use client'

import { Button } from "@/components/ui/button"
import { CheckCircle, Calendar, Mail, Clock, ArrowRight, Copy } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function BookDemoConfirmation() {
    const router = useRouter()
    const [formData, setFormData] = useState<any>(null)
    const [scheduleData, setScheduleData] = useState<any>(null)
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        // Get form and schedule data from localStorage
        const storedFormData = localStorage.getItem('demoFormData')
        const storedScheduleData = localStorage.getItem('demoSchedule')

        if (!storedFormData || !storedScheduleData) {
            router.push('/book-demo')
            return
        }

        setFormData(JSON.parse(storedFormData))
        setScheduleData(JSON.parse(storedScheduleData))
    }, [router])

    const handleDone = () => {
        // Clear localStorage
        localStorage.removeItem('demoFormData')
        localStorage.removeItem('demoSchedule')
        localStorage.removeItem('userEmail')
        localStorage.removeItem('userName')
        localStorage.removeItem('userCompany')
        localStorage.removeItem('hasERP')

        // Redirect to home
        router.push('/')
    }

    const copyMeetingDetails = () => {
        if (formData && scheduleData) {
            const meetingDetails = `ChatFin Demo
Date: ${new Date(scheduleData.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
Time: ${scheduleData.time} EST
Duration: 15-30 minutes
Attendee: ${formData.name} (${formData.email})
Company: ${formData.company}`

            navigator.clipboard.writeText(meetingDetails)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        }
    }

    if (!formData || !scheduleData) {
        return <div>Loading...</div>
    }

    const formatDate = (dateStr: string) => {
        return new Date(dateStr).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 font-['Poppins',sans-serif]">
            {/* Navigation */}
            <header className="relative z-50 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <h1 className="text-2xl font-bold text-[#135142] dark:text-white">ChatFin</h1>
                        </div>

                        {/* Theme Toggle */}
                        <div className="flex items-center gap-4">
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-2xl mx-auto text-center">
                    {/* Success Icon */}
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full mb-8">
                        <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
                    </div>

                    {/* Success Message */}
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        Demo Booked Successfully!
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
                        We're excited to show you how ChatFin can transform your financial operations.
                    </p>

                    {/* Meeting Details Card */}
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-8 text-left">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Meeting Details
                            </h3>
                            <Button
                                onClick={copyMeetingDetails}
                                variant="outline"
                                size="sm"
                                className="flex items-center gap-2"
                            >
                                <Copy className="w-4 h-4" />
                                {copied ? 'Copied!' : 'Copy'}
                            </Button>
                        </div>

                        <div className="space-y-4">
                            {/* Date & Time */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                                    <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900 dark:text-white">
                                        {formatDate(scheduleData.date)}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {scheduleData.time} EST • 15-30 minutes
                                    </p>
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                                    <Mail className="w-6 h-6 text-green-600 dark:text-green-400" />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900 dark:text-white">
                                        {formData.name} • {formData.company}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {formData.email}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* What's Next */}
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 mb-8 text-left">
                        <h3 className="font-semibold text-blue-900 dark:text-blue-400 mb-4 flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            What Happens Next?
                        </h3>
                        <ul className="space-y-3 text-blue-800 dark:text-blue-300">
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>You'll receive a calendar invite at <strong>{formData.email}</strong> within the next few minutes</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>A ChatFin expert will join the meeting to give you a personalized demo</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>We'll discuss your specific needs and show relevant features</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>You'll receive follow-up materials and pricing information after the demo</span>
                            </li>
                        </ul>
                    </div>

                    {/* Additional Message */}
                    {formData.message && (
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8 text-left">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                                Your Message:
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 italic">
                                "{formData.message}"
                            </p>
                        </div>
                    )}

                    {/* CTA Button */}
                    <Button
                        onClick={handleDone}
                        className="w-full bg-gradient-to-r from-[#135142] to-[#10b875] hover:from-[#0d3b30] hover:to-[#0e9963] text-white py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-2"
                    >
                        Back to Home
                        <ArrowRight className="w-5 h-5" />
                    </Button>

                    {/* Contact Info */}
                    <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
                        <p>Need to reschedule? Contact us at <a href="mailto:demos@chatfin.com" className="text-blue-600 dark:text-blue-400 hover:underline">demos@chatfin.com</a></p>
                    </div>
                </div>
            </main>
        </div>
    )
}