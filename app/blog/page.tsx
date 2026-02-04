import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, User, TrendingUp, BookOpen, Lightbulb, Target } from "lucide-react"

export const metadata: Metadata = {
    title: "AI Finance Blog & Insights - ChatFin | Expert Analysis & Trends",
    description: "Expert insights on AI in finance and accounting. Discover the latest trends, best practices, and innovations in financial technology. Stay ahead with our comprehensive newsletter and analysis.",
    keywords: [
        "AI finance blog",
        "finance AI insights",
        "accounting AI trends",
        "financial technology blog",
        "AI finance newsletter",
        "finance automation insights",
        "AI accounting blog",
        "finance AI best practices",
        "financial AI trends",
        "AI finance innovation",
        "finance technology news",
        "AI CFO insights",
        "finance AI case studies",
        "AI finance thought leadership",
        "financial automation blog",
        "AI finance strategy",
        "finance AI research",
        "financial AI analysis",
        "finance AI expert insights",
        "AI finance industry news"
    ],
    alternates: {
        canonical: "https://chatfin.ai/blog"
    },
    openGraph: {
        title: "AI Finance Blog & Insights - ChatFin | Expert Analysis & Trends",
        description: "Expert insights on AI in finance and accounting. Discover the latest trends, best practices, and innovations in financial technology.",
        url: "https://chatfin.ai/blog",
        type: "website",
        images: [
            {
                url: "https://chatfin.ai/blog-hero.png",
                width: 1200,
                height: 630,
                alt: "ChatFin AI Finance Blog"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "AI Finance Blog & Insights - ChatFin",
        description: "Expert insights on AI in finance and accounting. Latest trends and best practices."
    }
}

export default function Blog() {
    const featuredPosts = [
        {
            title: "The Agentic Finance Revolution: How ChatFin is Transforming Finance",
            excerpt: "Discover how AI-powered agentic finance is changing the game. ChatFin's intelligent agents automate reconciliation, invoice processing, and forecasting - reducing manual work by 90%.",
            link: "/blog/agentic-finance-revolution",
            badge: "FEATURED",
            external: false
        },
        {
            title: "Complete Guide to AI Finance Automation in 2026",
            excerpt: "Everything you need to know about AI finance automation. From implementation roadmaps to ROI calculations, learn how to transform your finance operations with ChatFin.",
            link: "/blog/ai-finance-automation-guide",
            badge: "NEW",
            external: false
        }
    ]

    const blogPosts = [
        {
            title: "The Generative AI Glossary for Finance",
            excerpt: "Generative AI is transforming the finance industry by automating workflows, delivering insights, and creating value in ways we couldn't imagine a decade ago. Whether you're a finance professional or an executive navigating this evolving space, here's your go-to...",
            link: "/the-generative-ai-glossary-for-finance",
            category: "AI Fundamentals"
        },
        {
            title: "LLMs Did the Talking, Now LAMs Do the Doing",
            excerpt: "It seems like every tech headline in 2025 has one thing in common: AI agents. From boardrooms to coffee shops, everyone's talking about how this year belongs to AI agents that go beyond chat - they act. And while large language models (LLMs) dominated the last few...",
            link: "/llms-did-the-talking-now-lams-do-the-doing",
            category: "AI Trends"
        },
        {
            title: "What Makes a Great Controller",
            excerpt: "A great controller holds one of the most crucial roles in any organization, ensuring accurate financial management and providing strategic insights. Here are some of the qualities and responsibilities that make a controller stand out.",
            link: "/what-makes-a-great-controller",
            category: "Finance Leadership"
        },
        {
            title: "The Myths About Finance AI Agents",
            excerpt: "AI in finance is growing fast, but there are still many myths about it. Here, we'll break down five common myths in simple terms.",
            link: "/the-myths-about-finance-ai-agents",
            category: "AI Education"
        },
        {
            title: "The Role of AI agents in Enhancing Collaboration between Controllers and FP&A",
            excerpt: "In today's dynamic business environment, maintaining financial health while preparing for growth requires more than just balancing the books. Controllers and Financial Planning & Analysis (FP&A) teams, both essential pillars of financial management, often find...",
            link: "/the-role-of-ai-agents-in-enhancing-collaboration-between-controllers-and-fpa",
            category: "Team Collaboration"
        },
        {
            title: "What we learnt from deploying ChatFin AI in finance teams",
            excerpt: "At ChatFin, we've had the unique opportunity to collaborate with some amazingly forward-thinking finance teams across various industries. These teams, led by leaders who not only embrace change but actively seek it, believed in the transformative power of AI and...",
            link: "/what-we-learnt-from-deploying-chatfin-ai-in-finance-teams",
            category: "Case Studies"
        },
        {
            title: "The Answer Is More Straightforward Than You Think: Finance AI—Build vs. Buy?",
            excerpt: "When it comes to implementing generative AI applications in the finance sector, the debate between building in-house solutions versus purchasing from vendors can seem complex. However, the decision often leans convincingly towards buying. Here's why this choice is not...",
            link: "/the-answer-is-more-straightforward-than-you-think-finance-ai-build-vs-buy",
            category: "Strategy"
        },
        {
            title: "What is the difference? ChatFin Vs ChatGPT",
            excerpt: "ChatFin and ChatGPT serve different purposes and have different capabilities. ChatFIN is a purpose-driven language model. It is designed specifically for accounting and finance. ChatFIN not only understands finance and accounting contexts but also has the ability to...",
            link: "/what-is-the-difference-chatfin-vs-chatgpt",
            category: "Product Comparison"
        }
    ]

    const categories = [
        "AI Fundamentals",
        "AI Trends",
        "Finance Leadership",
        "AI Education",
        "Team Collaboration",
        "Case Studies",
        "Strategy",
        "Product Comparison"
    ]

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-block mb-6">
                        <span className="text-sm font-semibold text-[#135142] dark:text-green-400 tracking-wider uppercase bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-full border border-green-200 dark:border-green-800">
                            Newsletter & Insights
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                        Stay ahead with{" "}
                        <span className="bg-gradient-to-r from-[#135142] to-[#10b875] bg-clip-text text-transparent">
                            AI insights
                        </span>
                        , applications, and finance trends.
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                        Newsletter & insights on AI for finance, accounting automation, and financial technology innovations.
                    </p>
                </div>
            </section>

            {/* Featured Posts */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {featuredPosts.map((post, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                                {post.badge && (
                                    <div className="mb-4">
                                        <span className="text-xs font-bold text-[#135142] dark:text-green-400 tracking-wider uppercase bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full">
                                            {post.badge}
                                        </span>
                                    </div>
                                )}
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    {post.title}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <Link
                                    href={post.link}
                                    className="inline-flex items-center text-[#135142] dark:text-green-400 font-semibold hover:text-[#10b875] transition-colors"
                                    {...(post.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                >
                                    {index === 0 ? "Read Newsletter" : "Read Full Post"}
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Categories */}
            <section className="py-12 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Browse by Category
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category, index) => (
                            <Link
                                key={index}
                                href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-full px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-[#135142] hover:text-white dark:hover:bg-green-400 dark:hover:text-gray-900 transition-colors"
                            >
                                {category}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            Latest Articles
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Explore our collection of articles on AI finance, automation, and industry insights.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <Link href={post.link} key={index} className="group">
                                <article className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-[#135142] dark:hover:border-green-400 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2">
                                    <div className="mb-4">
                                        <span className="text-xs font-semibold text-[#135142] dark:text-green-400 tracking-wider uppercase">
                                            {post.category}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#135142] dark:group-hover:text-green-400 transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center text-[#135142] dark:text-green-400 font-medium">
                                        Read more
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Topics */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            Popular Topics
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "AI for Controllers",
                                desc: "Learn how AI is transforming controller workflows",
                                icon: Target,
                                link: "/best-ai-agents-for-controllers"
                            },
                            {
                                title: "FP&A Automation",
                                desc: "Discover AI tools for financial planning and analysis",
                                icon: TrendingUp,
                                link: "/10-best-ai-agents-for-fpa-teams"
                            },
                            {
                                title: "CFO Insights",
                                desc: "Strategic AI implementations for finance leaders",
                                icon: User,
                                link: "/top-ai-tools-for-cfos"
                            },
                            {
                                title: "Finance Trends",
                                desc: "Latest trends in AI and financial technology",
                                icon: Lightbulb,
                                link: "/top-10-ai-tools-for-finance-accounting-in-2025"
                            }
                        ].map((topic, index) => (
                            <Link href={topic.link} key={index} className="group">
                                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700 hover:border-[#135142] dark:hover:border-green-400 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2">
                                    <div className="w-16 h-16 bg-gradient-to-r from-[#135142] to-[#10b875] rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <topic.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#135142] dark:group-hover:text-green-400 transition-colors">
                                        {topic.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        {topic.desc}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Signup */}
            <section className="py-20 bg-gradient-to-r from-[#135142] to-[#10b875]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Never Miss an Update
                    </h2>
                    <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                        Subscribe to our newsletter for the latest insights on AI in finance, industry trends, and product updates.
                    </p>
                    <div className="max-w-md mx-auto flex gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded-xl border-0 focus:ring-2 focus:ring-white focus:outline-none"
                        />
                        <Button className="bg-white text-[#135142] hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold">
                            Subscribe
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}