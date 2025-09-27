'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, Calendar, Clock, CheckCircle } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

interface TimeSlot {
    id: string
    time: string
    available: boolean
}

const timeSlots: TimeSlot[] = [
    { id: '1', time: '9:00 AM', available: true },
    { id: '2', time: '10:00 AM', available: true },
    { id: '3', time: '11:00 AM', available: false },
    { id: '4', time: '12:00 PM', available: true },
    { id: '5', time: '1:00 PM', available: true },
    { id: '6', time: '2:00 PM', available: true },
    { id: '7', time: '3:00 PM', available: false },
    { id: '8', time: '4:00 PM', available: true },
    { id: '9', time: '5:00 PM', available: true },
]

export default function BookDemoSchedule() {
    const router = useRouter()
    const [selectedDate, setSelectedDate] = useState('')
    const [selectedTime, setSelectedTime] = useState('')
    const [formData, setFormData] = useState<any>(null)

    useEffect(() => {
        // Get form data from localStorage
        const storedFormData = localStorage.getItem('demoFormData')
        if (!storedFormData) {
            router.push('/book-demo')
            return
        }

        setFormData(JSON.parse(storedFormData))

        // Set default date to tomorrow
        const tomorrow = new Date()
        tomorrow.setDate(tomorrow.getDate() + 1)
        setSelectedDate(tomorrow.toISOString().split('T')[0])
    }, [router])

    const handleSubmit = () => {
        if (selectedDate && selectedTime) {
            // Store scheduling data
            localStorage.setItem('demoSchedule', JSON.stringify({
                date: selectedDate,
                time: selectedTime
            }))
            // Navigate to confirmation page
            router.push('/book-demo/confirmation')
        }
    }

    const handleBack = () => {
        router.push('/book-demo/individual')
    }

    // Generate next 14 days for date selection
    const getAvailableDates = () => {
        const dates = []
        const today = new Date()

        for (let i = 1; i <= 14; i++) {
            const date = new Date(today)
            date.setDate(today.getDate() + i)

            // Skip weekends for demo scheduling
            if (date.getDay() !== 0 && date.getDay() !== 6) {
                dates.push({
                    value: date.toISOString().split('T')[0],
                    label: date.toLocaleDateString('en-US', {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric'
                    })
                })
            }
        }
        return dates.slice(0, 10) // Show next 10 business days
    }

    const availableDates = getAvailableDates()
    const isFormValid = selectedDate && selectedTime

    if (!formData) {
        return <div>Loading...</div>
    }

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 font-['Poppins',sans-serif]">
            {/* Navigation */}
            <header className="relative z-50 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center cursor-pointer" onClick={() => router.push('/')}>
                            <h1 className="text-2xl font-bold text-[#135142] dark:text-white">ChatFin</h1>
                        </div>

                        {/* Theme Toggle */}
                        <div className="flex items-center gap-4">
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </header>

            {/* Back to Home Link */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                <button
                    onClick={() => router.push('/')}
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm flex items-center gap-1"
                >
                    ← Back to home
                </button>
            </div>

            {/* Main Content */}
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-2xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
                            <Clock className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Choose Your Time
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            Select a convenient date and time for your ChatFin demo
                        </p>
                    </div>

                    {/* Contact Info Summary */}
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Demo Details:</h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <span className="text-gray-500 dark:text-gray-400">Contact:</span>
                                <p className="font-medium text-gray-900 dark:text-white">{formData.name}</p>
                            </div>
                            <div>
                                <span className="text-gray-500 dark:text-gray-400">Company:</span>
                                <p className="font-medium text-gray-900 dark:text-white">{formData.company}</p>
                            </div>
                            <div className="col-span-2">
                                <span className="text-gray-500 dark:text-gray-400">Email:</span>
                                <p className="font-medium text-gray-900 dark:text-white">{formData.email}</p>
                            </div>
                        </div>
                    </div>

                    {/* Date Selection */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            Select Date
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {availableDates.map((date) => (
                                <button
                                    key={date.value}
                                    onClick={() => setSelectedDate(date.value)}
                                    className={`p-3 rounded-xl border-2 transition-all duration-200 text-sm font-medium ${selectedDate === date.value
                                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                                        : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300'
                                        }`}
                                >
                                    {date.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Time Selection */}
                    {selectedDate && (
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                <Clock className="w-5 h-5" />
                                Select Time (EST)
                            </h3>
                            <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                                {timeSlots.map((slot) => (
                                    <button
                                        key={slot.id}
                                        onClick={() => slot.available && setSelectedTime(slot.time)}
                                        disabled={!slot.available}
                                        className={`p-3 rounded-xl border-2 transition-all duration-200 text-sm font-medium ${selectedTime === slot.time
                                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                                            : slot.available
                                                ? 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300'
                                                : 'border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
                                            }`}
                                    >
                                        {slot.time}
                                        {!slot.available && (
                                            <div className="text-xs text-red-500 mt-1">Unavailable</div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Meeting Info */}
                    {selectedDate && selectedTime && (
                        <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 mb-8">
                            <h3 className="font-semibold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5" />
                                Selected Time Slot
                            </h3>
                            <div className="text-green-700 dark:text-green-400">
                                <p className="font-medium">{availableDates.find(d => d.value === selectedDate)?.label} at {selectedTime} EST</p>
                                <p className="text-sm mt-2">Duration: 15-30 minutes • Meeting link will be sent via email</p>
                            </div>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                        <Button
                            onClick={handleBack}
                            variant="outline"
                            className="flex-1 py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-2 border-2"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Back
                        </Button>

                        <Button
                            onClick={handleSubmit}
                            disabled={!isFormValid}
                            className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Book Demo
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    )
}