import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, Star, Search, FileText, BarChart2, Calculator, FileSpreadsheet, CreditCard, Play, ArrowRight, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f5faf8] to-[#f0fffa] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#135142]/10 to-[#10b875]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '15s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-tr from-[#10b875]/8 to-[#135142]/8 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '20s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-gradient-to-r from-[#135142]/5 via-[#10b875]/5 to-[#135142]/5 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '25s' }}></div>
      <div className="absolute bottom-0 right-0 w-full h-[300px] bg-gradient-to-t from-[#ebfff5]/30 to-transparent"></div>
      {/* Navigation */}
      <header className="relative z-50 border-b border-gray-100/50 bg-white/90 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Image src="/chatfin-logo.jpeg" alt="ChatFin Logo" width={150} height={40} className="h-8 w-auto" />
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-[#135142] transition-colors text-sm font-medium">
                Customers
              </a>
              <a href="#" className="text-gray-600 hover:text-[#135142] transition-colors text-sm font-medium">
                Changelog
              </a>
              <a href="#" className="text-gray-600 hover:text-[#135142] transition-colors text-sm font-medium">
                About
              </a>
              <a href="#" className="text-gray-600 hover:text-[#135142] transition-colors text-sm font-medium">
                Careers
              </a>
              <a href="#" className="text-gray-600 hover:text-[#135142] transition-colors text-sm font-medium">
                Docs
              </a>
              <a href="#" className="text-gray-600 hover:text-[#135142] transition-colors text-sm font-medium">
                Login
              </a>
            </nav>

            {/* CTA Button */}
            <Button className="hidden md:flex bg-gradient-to-r from-[#135142] to-[#10b875] hover:from-[#0d3b30] hover:to-[#0e9963] text-white border-0 px-6 py-3 rounded-xl text-sm font-semibold shadow-lg shadow-[#135142]/25 hover:shadow-xl hover:shadow-[#135142]/30 transform hover:scale-105 transition-all duration-200 group">
              <span className="flex items-center gap-2">
                Book a demo 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rating Badge */}
        <div className="pt-6">
          <div className="flex items-center space-x-2 text-sm">
            <div className="flex items-center space-x-1 text-red-600 bg-red-50 px-3 py-1 rounded-full">
              <Star className="w-4 h-4 fill-current" />
              <span className="font-medium">G2.com 4.8/5 stars</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center mt-16 mb-12 relative">
          <div className="absolute inset-0 bg-gradient-radial from-[#f0fff7]/80 via-transparent to-transparent rounded-3xl -z-10"></div>
          <div className="inline-block mb-4 relative">
            <span className="text-xs font-medium text-[#135142] tracking-wider uppercase bg-gradient-to-r from-[#135142]/15 to-[#10b875]/15 px-4 py-2 rounded-full border border-[#135142]/10">
              AI FOR FINANCE & ACCOUNTING TEAMS
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#135142] mb-6 leading-tight">
            Analyze every financial
            <br />
            decision in seconds
          </h1>

          <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
            Bring your financial data to life through real-time AI-powered analysis, reporting, and forecasting to drive
            better business decisions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button className="bg-gradient-to-r from-[#135142] to-[#10b875] hover:from-[#0d3b30] hover:to-[#0e9963] text-white px-10 py-6 rounded-2xl text-lg font-semibold w-full sm:w-auto shadow-2xl shadow-[#135142]/30 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 border-0 group relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                <Sparkles className="w-5 h-5" />
                Book a demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Button>
            <Button
              variant="outline"
              className="border-2 border-[#135142]/20 text-[#135142] hover:bg-[#135142] hover:text-white px-10 py-6 rounded-2xl text-lg font-semibold flex items-center justify-center space-x-3 bg-white/80 backdrop-blur-sm w-full sm:w-auto shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 group"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>See it in action</span>
            </Button>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="max-w-[1100px] mx-auto mb-16">
          <div className="relative">
            {/* Gradient background for depth */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#135142]/30 via-[#10b875]/20 to-[#135142]/25 rounded-2xl blur-xl opacity-70"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#135142]/5 to-[#10b875]/5 rounded-xl"></div>
            <div className="relative bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl border border-gray-200/50 overflow-hidden">
              <Image
                src="/chatfin-dashboard.png"
                alt="ChatFin Analytics Dashboard"
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>

        {/* Capabilities Section */}
        <div className="max-w-7xl mx-auto mb-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f0fff7]/70 to-transparent -z-10 rounded-3xl"></div>
          <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-radial from-[#10b875]/5 to-transparent opacity-70 -z-10"></div>
          <div className="text-center mb-16 relative">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-[#135142] tracking-wider uppercase bg-gradient-to-r from-[#135142]/10 to-[#10b875]/10 px-6 py-3 rounded-full border border-[#135142]/20 shadow-sm">
                🚀 Powerful AI Features
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#135142] mb-6 leading-tight">
              Everything you need to
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#135142] to-[#10b875]">transform finance</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              ChatFin makes AI work like a finance pro, automating reconciliation, reporting, and document analysis with
              purpose-built precision that saves hours every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Data Query */}
            <div className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#135142]/5 via-transparent to-[#10b875]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#135142] to-[#10b875] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-[#135142] mb-4 text-2xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#135142] group-hover:to-[#10b875] transition-all duration-300">
                  Data Query
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  Ask questions about your financial data in plain English and get instant, accurate answers with detailed insights and recommendations.
                </p>
                <div className="flex items-center text-[#135142] font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm">Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* AI Reconciliation */}
            <div className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#135142]/5 via-transparent to-[#10b875]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#135142] to-[#10b875] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Calculator className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-[#135142] mb-4 text-2xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#135142] group-hover:to-[#10b875] transition-all duration-300">
                  AI Reconciliation
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  Automate account reconciliation with intelligent matching algorithms that eliminate manual work and reduce errors by 95%.
                </p>
                <div className="flex items-center text-[#135142] font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm">Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Analytics */}
            <div className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#135142]/5 via-transparent to-[#10b875]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#135142] to-[#10b875] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BarChart2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-[#135142] mb-4 text-2xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#135142] group-hover:to-[#10b875] transition-all duration-300">
                  Advanced Analytics
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  Get instant insights from your financial data with AI-powered analysis that reveals trends, patterns, and opportunities.
                </p>
                <div className="flex items-center text-[#135142] font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm">Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Document Processing */}
            <div className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#135142]/5 via-transparent to-[#10b875]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#135142] to-[#10b875] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-[#135142] mb-4 text-2xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#135142] group-hover:to-[#10b875] transition-all duration-300">
                  Smart Document Processing
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  Extract and process data from invoices and financial documents automatically with 99.9% accuracy and lightning speed.
                </p>
                <div className="flex items-center text-[#135142] font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm">Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Invoice Automation */}
            <div className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#135142]/5 via-transparent to-[#10b875]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#135142] to-[#10b875] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FileSpreadsheet className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-[#135142] mb-4 text-2xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#135142] group-hover:to-[#10b875] transition-all duration-300">
                  Invoice Automation
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  Streamline invoice processing and approval workflows with AI assistance that cuts processing time by 80%.
                </p>
                <div className="flex items-center text-[#135142] font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm">Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Payment Automation */}
            <div className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#135142]/5 via-transparent to-[#10b875]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#135142] to-[#10b875] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-[#135142] mb-4 text-2xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#135142] group-hover:to-[#10b875] transition-all duration-300">
                  Payment Automation
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  Automate payment processes and reconcile transactions in real-time with intelligent routing and fraud detection.
                </p>
                <div className="flex items-center text-[#135142] font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm">Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Section */}
        <div className="max-w-6xl mx-auto mb-24 text-center relative py-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ebfff5]/50 to-transparent -z-10 rounded-3xl"></div>
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#135142]/10 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#135142]/10 to-transparent"></div>
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#135142] mb-4">
              Seamless integrations with your favorite tools
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Connect ChatFin with your existing financial systems in minutes, not months
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
            <div className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-[#135142] font-bold text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#135142] group-hover:to-[#10b875] transition-all">
                Sage
              </div>
            </div>
            <div className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-[#135142] font-bold text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#135142] group-hover:to-[#10b875] transition-all">
                Oracle
              </div>
            </div>
            <div className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-[#135142] font-bold text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#135142] group-hover:to-[#10b875] transition-all">
                SAP
              </div>
            </div>
            <div className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-[#135142] font-bold text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#135142] group-hover:to-[#10b875] transition-all">
                NetSuite
              </div>
            </div>
            <div className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-[#135142] font-bold text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#135142] group-hover:to-[#10b875] transition-all">
                Snowflake
              </div>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-sm text-gray-500">
              + 50 more integrations available
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
