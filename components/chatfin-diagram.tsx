"use client"

import {
    Clock,
    Users,
    FileText,
    TrendingUp,
    Network,
    Search,
    Lightbulb,
    ShieldCheck,
    Share2
} from "lucide-react"

export function ChatFinDiagram() {
    // Configuration for positions to ensure alignment between SVG and HTML
    // Using a 0-100 coordinate system for percentages
    const leftColX = 22; // 22% from left
    const rightColX = 78; // 78% from left

    // Y positions for the 4 rows (spread effectively)
    const row1Y = 20;
    const row2Y = 40;
    const row3Y = 60;
    const row4Y = 80;

    return (
        <div className="w-full py-6">
            <div className="relative w-full aspect-[16/6] md:aspect-[16/5] lg:aspect-[20/7] max-w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#0B0F19]">

                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
                        style={{
                            backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop')",
                        }}
                    />
                    {/* Strong Dark Overlay for contrast */}
                    <div className="absolute inset-0 bg-[#0B0F19]/80 backdrop-blur-[2px]" />
                    {/* Gradient Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-[#0B0F19]/50" />
                </div>

                <div className="absolute inset-0 z-10 p-4 md:p-8">

                    {/* SVG Connectors Layer */}
                    {/* We use a viewBox of 0 0 100 100 to map easily to percentages */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="line-gradient-left" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#FB923C" stopOpacity="0.1" />
                                <stop offset="100%" stopColor="#FB923C" stopOpacity="0.8" />
                            </linearGradient>
                            <linearGradient id="line-gradient-right" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#FB923C" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#FB923C" stopOpacity="0.1" />
                            </linearGradient>
                        </defs>

                        {/* Tech/Circuit Style Paths 
               Elbow connectors: Horizontal then vertical then horizontal
           */}

                        {/* Left Side Connectors */}
                        {/* We connect from (leftColX, Y) to (50, 50) roughly */}

                        {/* Manual path definitions for circuit board look */}
                        {/* Node 1 to Center */}
                        <path d={`M ${leftColX + 3} ${row1Y} L ${35} ${row1Y} L ${35} ${45} L ${44} ${45}`} fill="none" stroke="url(#line-gradient-left)" strokeWidth="0.3" markerEnd="url(#dot)" />
                        {/* Node 2 to Center */}
                        <path d={`M ${leftColX + 3} ${row2Y} L ${30} ${row2Y} L ${30} ${48} L ${44} ${48}`} fill="none" stroke="url(#line-gradient-left)" strokeWidth="0.3" />
                        {/* Node 3 to Center */}
                        <path d={`M ${leftColX + 3} ${row3Y} L ${30} ${row3Y} L ${30} ${52} L ${44} ${52}`} fill="none" stroke="url(#line-gradient-left)" strokeWidth="0.3" />
                        {/* Node 4 to Center */}
                        <path d={`M ${leftColX + 3} ${row4Y} L ${35} ${row4Y} L ${35} ${55} L ${44} ${55}`} fill="none" stroke="url(#line-gradient-left)" strokeWidth="0.3" />

                        {/* Right Side Connectors */}
                        {/* Node 5 to Center */}
                        <path d={`M ${rightColX - 3} ${row1Y} L ${65} ${row1Y} L ${65} ${45} L ${56} ${45}`} fill="none" stroke="url(#line-gradient-right)" strokeWidth="0.3" />
                        {/* Node 6 to Center */}
                        <path d={`M ${rightColX - 3} ${row2Y} L ${70} ${row2Y} L ${70} ${48} L ${56} ${48}`} fill="none" stroke="url(#line-gradient-right)" strokeWidth="0.3" />
                        {/* Node 7 to Center */}
                        <path d={`M ${rightColX - 3} ${row3Y} L ${70} ${row3Y} L ${70} ${52} L ${56} ${52}`} fill="none" stroke="url(#line-gradient-right)" strokeWidth="0.3" />
                        {/* Node 8 to Center */}
                        <path d={`M ${rightColX - 3} ${row4Y} L ${65} ${row4Y} L ${65} ${55} L ${56} ${55}`} fill="none" stroke="url(#line-gradient-right)" strokeWidth="0.3" />

                        {/* Small ornamental dots at junctions */}
                        <circle cx="35" cy={row1Y} r="0.5" fill="#FB923C" />
                        <circle cx="35" cy="45" r="0.5" fill="#FB923C" />

                        <circle cx="30" cy={row2Y} r="0.5" fill="#FB923C" />
                        <circle cx="30" cy="48" r="0.5" fill="#FB923C" />

                        <circle cx="65" cy={row1Y} r="0.5" fill="#FB923C" />
                        <circle cx="65" cy="45" r="0.5" fill="#FB923C" />

                    </svg>

                    {/* Central Hexagon */}
                    <div
                        className="absolute z-20 flex flex-col items-center justify-center w-28 h-32 md:w-36 md:h-40"
                        style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
                    >
                        {/* Hexagon Shape Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 clip-hexagon shadow-[0_0_30px_rgba(249,115,22,0.4)] flex items-center justify-center">
                            <div className="flex flex-col items-center text-white gap-2 z-10">
                                <Lightbulb className="h-8 w-8 md:h-10 md:w-10 text-white drop-shadow-md" />
                                <span className="font-bold text-lg md:text-xl drop-shadow-md tracking-wide">ChatFin</span>
                            </div>
                        </div>

                        {/* Pulse rings */}
                        <div className="absolute inset-0 bg-orange-500/20 clip-hexagon animate-ping opacity-20"></div>
                    </div>

                    {/* Nodes Wrapper */}
                    {/* Using styles for positioning based on our config constants */}

                    {/* --- LEFT COLUMN --- */}

                    {/* Node 1: Anomaly Detection */}
                    <div className="absolute flex items-center gap-3 md:gap-4 -translate-y-1/2" style={{ left: `${leftColX}%`, top: `${row1Y}%`, transform: 'translate(-100%, -50%)' }}>
                        <div className="text-right hidden sm:block">
                            <span className="block text-xs md:text-sm font-bold text-white leading-tight">Anomaly<br />Detection</span>
                        </div>
                        <div className="w-12 h-12 md:w-16 md:h-16 relative flex items-center justify-center bg-[#1A1F2B] border border-yellow-400/30 clip-hexagon shadow-[0_0_15px_rgba(250,204,21,0.1)] group hover:bg-[#2A3040] transition-colors">
                            <Clock className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
                        </div>
                        {/* Line connection point dot */}
                        <div className="absolute right-[-6px] top-1/2 w-1.5 h-1.5 rounded-full bg-yellow-400/50 -translate-y-1/2 block sm:hidden"></div>
                    </div>

                    {/* Node 2: Workflows */}
                    <div className="absolute flex items-center gap-3 md:gap-4 -translate-y-1/2" style={{ left: `${leftColX}%`, top: `${row2Y}%`, transform: 'translate(-100%, -50%)' }}>
                        <div className="text-right hidden sm:block">
                            <span className="block text-xs md:text-sm font-bold text-white leading-tight">Workflows</span>
                        </div>
                        <div className="w-12 h-12 md:w-16 md:h-16 relative flex items-center justify-center bg-[#1A1F2B] border border-orange-400/30 clip-hexagon shadow-[0_0_15px_rgba(251,146,60,0.1)] hover:bg-[#2A3040] transition-colors">
                            <Users className="w-5 h-5 md:w-6 md:h-6 text-orange-400" />
                        </div>
                    </div>

                    {/* Node 3: Document Processing */}
                    <div className="absolute flex items-center gap-3 md:gap-4 -translate-y-1/2" style={{ left: `${leftColX}%`, top: `${row3Y}%`, transform: 'translate(-100%, -50%)' }}>
                        <div className="text-right hidden sm:block">
                            <span className="block text-xs md:text-sm font-bold text-white leading-tight">Document<br />Processing</span>
                        </div>
                        <div className="w-12 h-12 md:w-16 md:h-16 relative flex items-center justify-center bg-[#1A1F2B] border border-blue-400/30 clip-hexagon shadow-[0_0_15px_rgba(96,165,250,0.1)] hover:bg-[#2A3040] transition-colors">
                            <FileText className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                        </div>
                    </div>

                    {/* Node 4: Shared Agents */}
                    <div className="absolute flex items-center gap-3 md:gap-4 -translate-y-1/2" style={{ left: `${leftColX}%`, top: `${row4Y}%`, transform: 'translate(-100%, -50%)' }}>
                        <div className="text-right hidden sm:block">
                            <span className="block text-xs md:text-sm font-bold text-white leading-tight">Shared<br />Agents</span>
                        </div>
                        <div className="w-12 h-12 md:w-16 md:h-16 relative flex items-center justify-center bg-[#1A1F2B] border border-purple-400/30 clip-hexagon shadow-[0_0_15px_rgba(192,132,252,0.1)] hover:bg-[#2A3040] transition-colors">
                            <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                        </div>
                    </div>


                    {/* --- RIGHT COLUMN --- */}

                    {/* Node 5: Reconciliation */}
                    <div className="absolute flex flex-row-reverse items-center gap-3 md:gap-4 -translate-y-1/2" style={{ left: `${rightColX}%`, top: `${row1Y}%`, transform: 'translate(0%, -50%)' }}>
                        <div className="text-left hidden sm:block max-w-[150px]">
                            <span className="block text-xs md:text-sm font-bold text-white leading-tight">Reconciliation</span>
                            <span className="block text-[10px] text-slate-400 leading-tight mt-0.5">accuracy & consistency</span>
                        </div>
                        <div className="w-12 h-12 md:w-16 md:h-16 relative flex items-center justify-center bg-[#1A1F2B] border border-blue-500/30 clip-hexagon shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:bg-[#2A3040] transition-colors">
                            <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />
                        </div>
                    </div>

                    {/* Node 6: Month-End Close */}
                    <div className="absolute flex flex-row-reverse items-center gap-3 md:gap-4 -translate-y-1/2" style={{ left: `${rightColX}%`, top: `${row2Y}%`, transform: 'translate(0%, -50%)' }}>
                        <div className="text-left hidden sm:block max-w-[150px]">
                            <span className="block text-xs md:text-sm font-bold text-white leading-tight">Month-End Close</span>
                            <span className="block text-[10px] text-slate-400 leading-tight mt-0.5">fast & reliable</span>
                        </div>
                        <div className="w-12 h-12 md:w-16 md:h-16 relative flex items-center justify-center bg-[#1A1F2B] border border-orange-500/30 clip-hexagon shadow-[0_0_15px_rgba(249,115,22,0.1)] hover:bg-[#2A3040] transition-colors">
                            <Share2 className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />
                        </div>
                    </div>

                    {/* Node 7: Analytics */}
                    <div className="absolute flex flex-row-reverse items-center gap-3 md:gap-4 -translate-y-1/2" style={{ left: `${rightColX}%`, top: `${row3Y}%`, transform: 'translate(0%, -50%)' }}>
                        <div className="text-left hidden sm:block">
                            <span className="block text-xs md:text-sm font-bold text-white leading-tight">Analytics</span>
                        </div>
                        <div className="w-12 h-12 md:w-16 md:h-16 relative flex items-center justify-center bg-[#1A1F2B] border border-yellow-500/30 clip-hexagon shadow-[0_0_15px_rgba(234,179,8,0.1)] hover:bg-[#2A3040] transition-colors">
                            <Network className="w-5 h-5 md:w-6 md:h-6 text-yellow-500" />
                        </div>
                    </div>

                    {/* Node 8: Forecasting */}
                    <div className="absolute flex flex-row-reverse items-center gap-3 md:gap-4 -translate-y-1/2" style={{ left: `${rightColX}%`, top: `${row4Y}%`, transform: 'translate(0%, -50%)' }}>
                        <div className="text-left hidden sm:block">
                            <span className="block text-xs md:text-sm font-bold text-white leading-tight">Forecasting</span>
                        </div>
                        <div className="w-12 h-12 md:w-16 md:h-16 relative flex items-center justify-center bg-[#1A1F2B] border border-purple-500/30 clip-hexagon shadow-[0_0_15px_rgba(168,85,247,0.1)] hover:bg-[#2A3040] transition-colors">
                            <Search className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
