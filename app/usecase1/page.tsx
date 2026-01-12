import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
    ArrowRight,
    CheckCircle2,
    Database,
    Cloud,
    Server,
    Layers,
    Code,
    Cpu,
    BarChart3,
    Users,
    FileText,
    TrendingUp,
    Shield,
    DollarSign,
    CreditCard
} from 'lucide-react'

// 10 Detailed Use Cases
const useCases = [
    {
        id: 1,
        anchor: "bank-reconciliation",
        title: "Bank Reconciliation Automation",
        businessChallenge: "Finance teams spend hours manually matching bank statement lines with GL transactions, leading to slow closes and potential for human error.",
        techStack: "Python, Pandas, AWS Textract, FuzzyWuzzy logic.",
        blueprint: "PDF Bank Statements -> AWS Textract (OCR) extracts transaction tables -> Pandas cleans and standardizes dates/amounts -> Fuzzy matching algorithm compares with ERP ledger data -> High confidence matches are auto-reconciled -> Exceptions flagged for review.",
        diagramType: "css"
    },
    {
        id: 2,
        anchor: "predictive-accruals",
        title: "Predictive Month-End Accruals",
        businessChallenge: "Estimating unbilled expenses (accruals) is often a guessing game, resulting in inaccurate P&L statements during the close process.",
        techStack: "Scikit-learn (Regression), BigQuery, Airflow.",
        blueprint: "Historical AP invoice data ingested -> Feature engineering (seasonality, vendor history, open POs) -> Machine Learning Regression Model -> Predicts accrual amounts for unbilled services -> Generates Journal Entry proposals for approval.",
        diagramType: "image",
        imageSrc: "https://i.postimg.cc/mrbLjKHh/Screenshot-2026-01-08-193412.png"
    },
    {
        id: 3,
        anchor: "anomaly-detection",
        title: "GL Anomaly Detection",
        businessChallenge: "Manual review of thousands of GL lines fails to catch subtle coding errors or potential fraud, risking financial integrity.",
        techStack: "TensorFlow (Autoencoder), DBT, Snowflake.",
        blueprint: "Raw GL transactions stream to Snowflake -> DBT transforms data for model -> Autoencoder Neural Network learns 'normal' transaction patterns -> High reconstruction error flags anomalies (e.g., wrong department, unusual amount) -> Alert sent to Controller.",
        diagramType: "css"
    },
    {
        id: 4,
        anchor: "invoice-extraction",
        title: "Vendor Invoice Extraction",
        businessChallenge: "Data entry from invoices with varying layouts is time-consuming and prone to typos.",
        techStack: "Azure AI Document Intelligence, Logic Apps, ERP API.",
        blueprint: "Invoices arrive via email -> Logic App triggers Document Intelligence -> AI extracts key fields (Invoice #, Date, Line Items) regardless of format -> Validation rules check PO alignment -> Data pushed directly to NetSuite/SAP.",
        diagramType: "image",
        imageSrc: "https://i.postimg.cc/mrbLjKHh/Screenshot-2026-01-08-193412.png"
    },
    {
        id: 5,
        anchor: "cash-flow",
        title: "Cash Flow Forecasting",
        businessChallenge: "Spreadsheet-based forecasts can't easily incorporate complex variables like market indices or pipeline probabilities.",
        techStack: "Prophet (Time Series), Spark, Tableau.",
        blueprint: "Ingest Bank History + CRM Sales Pipeline + Macro Indices -> Prophet Time Series Model decomoses trends and seasonality -> Generates 13-week cash position forecast -> Visualized in Tableau for CFO gaming.",
        diagramType: "css"
    },
    {
        id: 6,
        anchor: "expense-compliance",
        title: "Expense Policy Compliance",
        businessChallenge: "Auditing 100% of expense reports is impossible; sampling leaves gaps for policy violations.",
        techStack: "OpenAI GPT-4, Vector Database (Pinecone).",
        blueprint: "Policy Document embedding in Vector DB -> Employee runs expense report -> Expense description & receipt text embedded -> Semantic Search against Policy Rules -> GPT-4 evaluates compliance -> Flags 'Dinner over limit' or 'Alcohol not allowed'.",
        diagramType: "image",
        imageSrc: "https://i.postimg.cc/mrbLjKHh/Screenshot-2026-01-08-193412.png"
    },
    {
        id: 7,
        anchor: "churn-prediction",
        title: "Customer Churn Prediction",
        businessChallenge: "Finance revenue projections often miss the risk of customer churn until it's too late.",
        techStack: "Random Forest Classifier, Salesforce Data.",
        blueprint: "Billing history + Support ticket frequency + Usage stats -> Random Forest Model calculates specific churn probability -> High risk accounts flagged to Customer Success -> Financial forecast adjusted for potential revenue loss.",
        diagramType: "css"
    },
    {
        id: 8,
        anchor: "credit-scoring",
        title: "Automated Credit Scoring",
        businessChallenge: "Manual credit checks slow down the sales cycle and onboarding of new B2B customers.",
        techStack: "XGBoost, D&B API, Python.",
        blueprint: "New Customer Application -> Script calls D&B/Experian API for credit history -> XGBoost model combines external data with internal risk criteria -> Assigns Credit Limit & Payment Terms automatically.",
        diagramType: "css"
    },
    {
        id: 9,
        anchor: "regulatory-reporting",
        title: "Regulatory Reporting Automation",
        businessChallenge: "Gathering and formatting data for regulatory reports (10K, 10Q, Tax) is a manual, copy-paste nightmare.",
        techStack: "Python, XBRL Libraries, Workiva API.",
        blueprint: "Source Systems (ERP, HR, CRM) -> Aggregation Python Script -> Data Mapped to Standard XBRL Taxonomy -> Automated draft generation in Reporting Tool -> Final human review and submission.",
        diagramType: "image",
        imageSrc: "https://i.postimg.cc/mrbLjKHh/Screenshot-2026-01-08-193412.png"
    },
    {
        id: 10,
        anchor: "contract-analysis",
        title: "Legacy Contract Analysis",
        businessChallenge: "Revenue leakage often occurs because finance isn't aware of specific terms (CPI increases, renewal dates) in old PDF contracts.",
        techStack: "LangChain, LLM, OCR.",
        blueprint: "PDF Contract Repository -> OCR text extraction -> LLM (e.g., Claude/GPT) prompted to find 'Price Increase Clauses' and 'Renewal Dates' -> Structured data extracted to ERP Contract Master -> Auto-alerts set for renewal window.",
        diagramType: "css"
    }
]

export default function Usecase1Page() {
    return (
        <div className="min-h-screen bg-[#0a0a14] pt-20">
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f1123] to-[#0a0a14] overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[#00E599]/30 bg-[#00E599]/10 text-[#00E599] text-sm font-medium tracking-wide">
                        AI & MACHINE LEARNING
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-8 tracking-tight max-w-5xl mx-auto leading-tight">
                        <span className="text-[#00E599]">10 Top Finance AI Blueprints</span><br />
                        for 2026
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed">
                        Practical architectural patterns and tech stacks to modernize your financial operations.
                    </p>

                    {/* Hero Image */}
                    <div className="w-full max-w-5xl mx-auto mb-16 relative aspect-video rounded-2xl overflow-hidden border border-gray-800 bg-[#0f1123] shadow-2xl shadow-emerald-500/10 group">
                        <Image
                            src="https://i.postimg.cc/T3Q3FyMc/Screenshot-2026-01-10-091313-Picsart-Ai-Image-Enhancer.png"
                            alt="AI Architecture Blueprints"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-50"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-transparent to-transparent opacity-60"></div>
                    </div>
                </div>
            </section>

            {/* Sticky Navigation / Table of Contents */}
            <section className="sticky top-20 z-40 bg-[#0a0a14]/95 backdrop-blur-md border-y border-gray-800 py-4 mb-16">
                <div className="max-w-7xl mx-auto px-4 overflow-x-auto no-scrollbar">
                    <div className="flex space-x-2 md:space-x-4 min-w-max">
                        {useCases.map((useCase) => (
                            <Link
                                key={useCase.id}
                                href={`#${useCase.anchor}`}
                                className="px-4 py-2 rounded-full bg-[#0f1123] text-gray-300 text-sm hover:text-[#00E599] transition-all whitespace-nowrap"
                            >
                                {useCase.id}. {useCase.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases List */}
            <section className="pb-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto space-y-32">
                    {useCases.map((useCase) => (
                        <div key={useCase.id} className="scroll-mt-48" id={useCase.anchor}>
                            <div className="flex items-baseline gap-4 mb-8 border-b border-gray-800 pb-4">
                                <span className="text-4xl font-bold text-[#00E599] font-mono">{useCase.id < 10 ? `0${useCase.id}` : useCase.id}.</span>
                                <h2 className="text-3xl md:text-4xl font-bold text-white">
                                    {useCase.title}
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                                <div className="space-y-8">
                                    {/* Business Challenge */}
                                    <div className="group">
                                        <h3 className="text-lg font-bold text-[#00E599] mb-2 uppercase tracking-wider text-sm flex items-center gap-2">
                                            <TrendingUp className="h-4 w-4" /> Business challenge
                                        </h3>
                                        <p className="text-gray-300 text-lg leading-relaxed border-l-2 border-gray-800 pl-4 group-hover:border-[#00E599] transition-colors">
                                            {useCase.businessChallenge}
                                        </p>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="group">
                                        <h3 className="text-lg font-bold text-[#00E599] mb-2 uppercase tracking-wider text-sm flex items-center gap-2">
                                            <Code className="h-4 w-4" /> Tech stack
                                        </h3>
                                        <p className="text-gray-300 bg-[#0f1123] p-4 rounded-lg border border-gray-800 font-mono text-sm group-hover:border-gray-700 transition-colors shadow-inner">
                                            {useCase.techStack}
                                        </p>
                                    </div>

                                    {/* Blueprint Text */}
                                    <div className="group">
                                        <h3 className="text-lg font-bold text-[#00E599] mb-2 uppercase tracking-wider text-sm flex items-center gap-2">
                                            <Layers className="h-4 w-4" /> Blueprint
                                        </h3>
                                        <p className="text-gray-300 text-lg leading-relaxed border-l-2 border-gray-800 pl-4 group-hover:border-[#00E599] transition-colors">
                                            {useCase.blueprint}
                                        </p>
                                    </div>
                                </div>

                                {/* Diagram Visualization */}
                                <div>
                                    {useCase.diagramType === 'image' ? (
                                        <div className="relative rounded-2xl overflow-hidden border border-gray-800 bg-[#0f1123] shadow-2xl shadow-emerald-500/10 group hover:shadow-emerald-500/20 transition-all duration-300 h-full min-h-[400px]">
                                            <Image
                                                src={useCase.imageSrc || '/placeholder.png'}
                                                alt={`Architecture diagram for ${useCase.title}`}
                                                fill
                                                className="object-cover"
                                            />
                                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl mix-blend-overlay"></div>
                                        </div>
                                    ) : (
                                        <div className="relative rounded-2xl overflow-hidden border border-gray-800 bg-[#0f1123] shadow-2xl shadow-emerald-500/10 group hover:shadow-emerald-500/20 transition-all duration-300 flex flex-col h-full">
                                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-20 group-hover:opacity-100 transition-opacity duration-300"></div>

                                            {/* Diagram Header */}
                                            <div className="p-4 border-b border-gray-800 flex justify-between items-center bg-[#0a0a14]/50 relative z-10">
                                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Architecture Diagram</span>
                                                <div className="flex gap-1.5">
                                                    <div className="w-2 h-2 rounded-full bg-red-500/20"></div>
                                                    <div className="w-2 h-2 rounded-full bg-yellow-500/20"></div>
                                                    <div className="w-2 h-2 rounded-full bg-green-500/20"></div>
                                                </div>
                                            </div>

                                            {/* CSS Diagram Content */}
                                            <div className="flex-1 flex flex-col items-center justify-center py-12 px-6 space-y-8 relative z-10 min-h-[400px]">
                                                {/* Layer 1: Input */}
                                                <div className="w-full max-w-[200px] p-4 rounded bg-[#1a1f35] border border-gray-700 flex items-center justify-center gap-3 relative shadow-lg">
                                                    <FileText className="text-blue-400 h-5 w-5" />
                                                    <span className="text-sm font-bold text-gray-200">Source Data</span>
                                                    <div className="absolute -bottom-8 left-1/2 w-0.5 h-8 bg-gray-700"></div>
                                                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-700"></div>
                                                </div>

                                                {/* Layer 2: Processing */}
                                                <div className="w-full p-6 rounded bg-[#0a0a14] border border-gray-800 border-dashed relative">
                                                    <div className="absolute -top-3 left-4 bg-[#0f1123] px-2 text-xs text-gray-500 font-bold uppercase">AI Processing</div>
                                                    <div className="grid grid-cols-3 gap-2">
                                                        <div className="bg-[#1a1f35] p-2 rounded border border-gray-700 flex flex-col items-center shadow-sm">
                                                            <Cloud className="text-[#00E599] h-6 w-6 mb-1" />
                                                            <span className="text-[10px] text-gray-300">Ingest</span>
                                                        </div>
                                                        <div className="bg-[#1a1f35] p-2 rounded border border-gray-700 flex flex-col items-center shadow-sm">
                                                            <Cpu className="text-orange-400 h-6 w-6 mb-1" />
                                                            <span className="text-[10px] text-gray-300">Model</span>
                                                        </div>
                                                        <div className="bg-[#1a1f35] p-2 rounded border border-gray-700 flex flex-col items-center shadow-sm">
                                                            <Server className="text-purple-400 h-6 w-6 mb-1" />
                                                            <span className="text-[10px] text-gray-300">Output</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Line Down */}
                                                <div className="h-8 w-0.5 bg-gray-700 relative">
                                                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-700"></div>
                                                </div>

                                                {/* Layer 3: Data */}
                                                <div className="w-full max-w-[240px] p-4 rounded bg-[#1a1f35] border border-gray-700 flex items-center justify-between gap-3 shadow-lg">
                                                    <div className="flex flex-col items-center">
                                                        <Database className="text-blue-500 h-6 w-6" />
                                                        <span className="text-[10px] font-bold mt-1 text-gray-300">Storage</span>
                                                    </div>
                                                    <div className="h-8 w-px bg-gray-600"></div>
                                                    <div className="flex flex-col items-center">
                                                        <BarChart3 className="text-green-500 h-6 w-6" />
                                                        <span className="text-[10px] font-bold mt-1 text-gray-300">Action</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 pointer-events-none"></div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-20 px-4 bg-[#0B0F19] border-t border-gray-800">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to build?</h2>
                    <p className="text-gray-400 text-xl mb-10">Access the full library of 101 Gen AI blueprints and start your transformation.</p>
                    <div className="flex justify-center gap-4">
                        <Button className="bg-[#00E599] text-[#0a0a14] hover:bg-[#00c985] rounded-full px-8 h-12 text-lg font-bold transition-all hover:scale-105">
                            Download Full Report
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
