"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Search, ChevronDown } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-mobile"
import useCasesData from "@/use-cases.json"

// Helper function to generate slugs from titles
const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove non-word chars
    .replace(/\s+/g, '-')     // Replace spaces with -
    .replace(/--+/g, '-')     // Replace multiple - with single -
    .trim()
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a14]/90 backdrop-blur-md border-b border-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/placeholder.svg?height=40&width=150"
                alt="ChatFin Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-emerald-400 transition-colors">
              Home
            </Link>

            {/* Solutions Dropdown */}
            <div className="group relative">
              <button className="flex items-center text-gray-400 group-hover:text-emerald-400 transition-colors focus:outline-none py-8">
                Solutions
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] hidden group-hover:block px-2 transform transition-all duration-200 ease-out origin-top-center">
                {/* Invisible bridge to prevent mouse leaving */}
                <div className="absolute -top-4 px-2 w-full h-4 bg-transparent"></div>

                <div className="bg-[#0f1123] border border-gray-800 rounded-xl shadow-2xl p-6 grid grid-cols-2 gap-x-8 gap-y-6 relative overflow-hidden mt-0">
                  {/* Background decoration */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-cyan-500"></div>

                  {/* List items */}
                  {useCasesData.useCases.map((useCase, index) => (
                    <Link
                      key={index}
                      href={`/solutions/${slugify(useCase.title)}`}
                      className="block p-3 -mx-3 rounded-lg hover:bg-white/5 transition-colors group/item"
                    >
                      <div className="text-white font-semibold group-hover/item:text-emerald-400 transition-colors mb-1">
                        {useCase.title}
                      </div>
                      <div className="text-sm text-gray-500 line-clamp-2">
                        {useCase.preview}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Desktop CTA and Search */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <Search className="h-5 w-5" />
            </Button>
            <Button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white rounded-full">
              Book a demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-400 hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="md:hidden bg-[#0a0a14] border-b border-gray-800 absolute w-full max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-white py-2 hover:text-emerald-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <div className="space-y-2">
                <div className="text-gray-400 font-medium py-2">Solutions</div>
                <div className="pl-4 space-y-2 border-l-2 border-gray-800 ml-1">
                  {useCasesData.useCases.map((useCase, index) => (
                    <Link
                      key={index}
                      href={`/solutions/${slugify(useCase.title)}`}
                      className="block text-gray-500 hover:text-emerald-400 py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {useCase.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white w-full rounded-full mt-4">
                Book a demo
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
