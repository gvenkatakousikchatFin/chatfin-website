import React from 'react';
import FadeIn from '../components/FadeIn';
import {
    Clock, Users, FileText, Share2,
    Scale, Calendar, PieChart, Search,
    Lightbulb
} from 'lucide-react';

const SmartEcosystemBackground: React.FC = () => {
    // Diagram Data with improved descriptions
    const featuresLeft = [
        {
            id: 1,
            title: "Anomaly Detection",
            description: "Automatically identify and flag irregularities in real-time.",
            icon: Clock,
            color: "text-amber-400",
            border: "border-amber-400/20",
            bg: "bg-amber-400/10"
        },
        {
            id: 2,
            title: "Workflows",
            description: "Streamline complex operations with automated sequence actions.",
            icon: Users,
            color: "text-orange-400",
            border: "border-orange-400/20",
            bg: "bg-orange-400/10"
        },
        {
            id: 3,
            title: "Document Processing",
            description: "Extract and organize critical data from unstructured files.",
            icon: FileText,
            color: "text-blue-400",
            border: "border-blue-400/20",
            bg: "bg-blue-400/10"
        },
        {
            id: 4,
            title: "Shared Agents",
            description: "Enable seamless collaboration between AI and human agents.",
            icon: Share2,
            color: "text-purple-400",
            border: "border-purple-400/20",
            bg: "bg-purple-400/10"
        },
    ];

    const featuresRight = [
        {
            id: 5,
            title: "Reconciliation",
            description: "Ensure accuracy and consistency across all financial records.",
            icon: Scale,
            color: "text-blue-400",
            border: "border-blue-400/20",
            bg: "bg-blue-400/10"
        },
        {
            id: 6,
            title: "Month-End Close",
            description: "Accelerate closing cycles with automated data consolidation.",
            icon: Calendar,
            color: "text-orange-400",
            border: "border-orange-400/20",
            bg: "bg-orange-400/10"
        },
        {
            id: 7,
            title: "Analytics",
            description: "Gain deep, actionable insights from your operational data.",
            icon: PieChart,
            color: "text-amber-400",
            border: "border-amber-400/20",
            bg: "bg-amber-400/10"
        },
        {
            id: 8,
            title: "Forecasting",
            description: "Predict future trends with advanced machine learning models.",
            icon: Search,
            color: "text-purple-400",
            border: "border-purple-400/20",
            bg: "bg-purple-400/10"
        },
    ];

    return (
        <section className="relative bg-indexa-dark-bg py-24 md:py-32 overflow-hidden">
            <div className="relative z-10 w-full px-3 md:px-4">
                <div className="text-center mb-16 md:mb-24">
                    <FadeIn>
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20">
                            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                            <span className="text-xs font-bold tracking-widest text-orange-400 uppercase">Ecosystem</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 tracking-tight">
                            Orchestrated <br className="hidden md:block" /> Intelligence
                        </h2>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            A unified environment where every process connects to a central intelligence core.
                        </p>
                    </FadeIn>
                </div>

                <FadeIn delay={200}>
                    <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0F0F0F] group w-full">
                        {/* Background Image & Overlay */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
                                alt="Digital Network Background"
                                className="w-full h-full object-cover opacity-70 group-hover:opacity-80 transition-opacity duration-1000 group-hover:scale-105 transform"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F]/90 via-[#0F0F0F]/65 to-[#0F0F0F]" />
                        </div>

                        {/* Diagram Container */}
                        <div className="relative z-10 w-full py-20 px-2 md:px-6">

                            {/* Desktop Diagram Structure */}
                            <div className="hidden lg:block relative w-full h-[800px]">
                                {/* Connection Lines SVG */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                                    <defs>
                                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.05)" />
                                            <stop offset="50%" stopColor="rgba(255, 255, 255, 0.3)" />
                                            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.05)" />
                                        </linearGradient>
                                    </defs>

                                    {/* Lines to Left Nodes */}
                                    <line x1="50%" y1="50%" x2="32%" y2="15%" stroke="url(#lineGradient)" strokeWidth="1.5" />
                                    <line x1="50%" y1="50%" x2="32%" y2="38%" stroke="url(#lineGradient)" strokeWidth="1.5" />
                                    <line x1="50%" y1="50%" x2="32%" y2="62%" stroke="url(#lineGradient)" strokeWidth="1.5" />
                                    <line x1="50%" y1="50%" x2="32%" y2="85%" stroke="url(#lineGradient)" strokeWidth="1.5" />

                                    {/* Lines to Right Nodes */}
                                    <line x1="50%" y1="50%" x2="68%" y2="15%" stroke="url(#lineGradient)" strokeWidth="1.5" />
                                    <line x1="50%" y1="50%" x2="68%" y2="38%" stroke="url(#lineGradient)" strokeWidth="1.5" />
                                    <line x1="50%" y1="50%" x2="68%" y2="62%" stroke="url(#lineGradient)" strokeWidth="1.5" />
                                    <line x1="50%" y1="50%" x2="68%" y2="85%" stroke="url(#lineGradient)" strokeWidth="1.5" />
                                </svg>

                                {/* Center Node */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                                    <div className="relative group cursor-pointer">
                                        <div className="w-56 h-48 bg-gradient-to-br from-orange-500 to-orange-600 [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)] flex flex-col items-center justify-center shadow-2xl shadow-orange-500/30 transition-transform duration-500 group-hover:scale-110">
                                            <Lightbulb className="w-12 h-12 text-white mb-2" />
                                            <span className="text-2xl font-bold text-white tracking-wide">AI Core</span>
                                        </div>
                                        {/* Pulse Effect */}
                                        <div className="absolute inset-0 bg-orange-500/30 w-56 h-48 [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)] animate-ping -z-10" />
                                    </div>
                                </div>

                                {/* Left Nodes */}
                                {featuresLeft.map((feature, index) => {
                                    const yPositions = ["top-[15%]", "top-[38%]", "top-[62%]", "top-[85%]"];
                                    return (
                                        <div key={feature.id} className={`absolute left-[32%] -translate-x-full -translate-y-1/2 ${yPositions[index]} z-10 pr-8 w-[500px]`}>
                                            <FadeIn delay={index * 100}>
                                                <div className="flex items-center gap-6 group justify-end">
                                                    <div className="text-right">
                                                        <h3 className="text-white font-semibold text-xl group-hover:text-orange-400 transition-colors">{feature.title}</h3>
                                                        <p className="text-white/50 text-base hidden xl:block leading-relaxed max-w-sm ml-auto">{feature.description}</p>
                                                    </div>
                                                    <div className={`shrink-0 w-28 h-24 ${feature.bg} ${feature.border} border-2 backdrop-blur-md [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-opacity-100 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:bg-opacity-40`}>
                                                        <feature.icon className={`w-10 h-10 ${feature.color}`} />
                                                    </div>
                                                </div>
                                            </FadeIn>
                                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/20" />
                                        </div>
                                    );
                                })}

                                {/* Right Nodes */}
                                {featuresRight.map((feature, index) => {
                                    const yPositions = ["top-[15%]", "top-[38%]", "top-[62%]", "top-[85%]"];
                                    return (
                                        <div key={feature.id} className={`absolute right-[32%] translate-x-full -translate-y-1/2 ${yPositions[index]} z-10 pl-8 w-[500px]`}>
                                            <FadeIn delay={400 + (index * 100)}>
                                                <div className="flex items-center gap-6 group flex-row-reverse justify-end">
                                                    <div className="text-left">
                                                        <h3 className="text-white font-semibold text-xl group-hover:text-orange-400 transition-colors">{feature.title}</h3>
                                                        <p className="text-white/50 text-base hidden xl:block leading-relaxed max-w-sm">{feature.description}</p>
                                                    </div>
                                                    <div className={`shrink-0 w-28 h-24 ${feature.bg} ${feature.border} border-2 backdrop-blur-md [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-opacity-100 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:bg-opacity-40`}>
                                                        <feature.icon className={`w-10 h-10 ${feature.color}`} />
                                                    </div>
                                                </div>
                                            </FadeIn>
                                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/20" />
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Mobile View (Grid) */}
                            <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[...featuresLeft, ...featuresRight].map((feature) => (
                                    <div key={feature.id} className={`p-6 rounded-xl border ${feature.border} ${feature.bg} backdrop-blur-sm flex items-center gap-4`}>
                                        <div className="p-3 bg-white/5 rounded-lg shrink-0">
                                            <feature.icon className={`w-6 h-6 ${feature.color}`} />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-medium">{feature.title}</h3>
                                            <p className="text-white/40 text-sm">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default SmartEcosystemBackground;
