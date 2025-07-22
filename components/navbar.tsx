"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Search } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-mobile"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a14]/80 backdrop-blur-md border-b border-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/placeholder.svg?height=40&width=150"
              alt="ChatFin Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-emerald-400 transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
              Products
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
              Solutions
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
              Partners
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
              Pricing
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
              Blog
            </a>
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
        <div className="md:hidden bg-[#0a0a14] border-b border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-white py-2 hover:text-emerald-400 transition-colors">
                Home
              </a>
              <a href="#" className="text-gray-400 py-2 hover:text-emerald-400 transition-colors">
                Products
              </a>
              <a href="#" className="text-gray-400 py-2 hover:text-emerald-400 transition-colors">
                Solutions
              </a>
              <a href="#" className="text-gray-400 py-2 hover:text-emerald-400 transition-colors">
                Partners
              </a>
              <a href="#" className="text-gray-400 py-2 hover:text-emerald-400 transition-colors">
                Pricing
              </a>
              <a href="#" className="text-gray-400 py-2 hover:text-emerald-400 transition-colors">
                Blog
              </a>
              <Button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white w-full rounded-full mt-2">
                Book a demo
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
