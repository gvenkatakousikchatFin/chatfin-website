import type React from "react"
import "./globals.css"
import type { Metadata, Viewport } from "next"
import { Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://chatfin.ai'),
  title: {
    default: "ChatFin - AI Super Agent for Finance & Accounting Teams",
    template: "%s | ChatFin - AI Finance Solutions"
  },
  description: "AI Super Agent for Finance and Accounting Teams. AI agents built to handle real work across Controllership, FP&A, AP, AR, Tax, Treasury and operations. Free for individuals, advanced features for teams.",
  applicationName: "ChatFin",
  authors: [{ name: "ChatFin Inc" }],
  generator: "Next.js",
  keywords: [
    "AI finance",
    "finance AI",
    "accounting AI",
    "AI for finance",
    "AI for accounting",
    "finance automation",
    "accounting automation",
    "AI agents finance",
    "AI accountant",
    "finance AI tools",
    "accounting AI solutions",
    "AI financial planning",
    "AI reconciliation",
    "AI invoice processing",
    "AI expense management",
    "financial AI assistant",
    "controllership AI",
    "FP&A AI",
    "accounts payable AI",
    "accounts receivable AI",
    "treasury AI",
    "tax AI",
    "CFO AI tools",
    "controller AI",
    "finance team AI",
    "enterprise finance AI",
    "AI financial reporting",
    "AI budget analysis",
    "AI cash flow",
    "financial forecasting AI",
    "AI audit",
    "compliance AI",
    "financial data analysis",
    "AI financial insights",
    "finance process automation",
    "AI month-end close",
    "financial planning AI",
    "AI variance analysis",
    "financial dashboard AI",
    "AI expense tracking",
    "invoice automation AI",
    "payment automation AI",
    "AI financial control",
    "finance workflow automation",
    "AI financial operations",
    "financial AI software",
    "AI finance platform",
    "finance technology",
    "fintech AI",
    "AI bookkeeping",
    "financial AI agent",
    "AI for CFO",
    "AI for finance teams",
    "automated financial analysis",
    "AI driven finance",
    "intelligent finance solutions",
    "AI powered accounting",
    "finance AI automation",
    "AI financial management",
    "chatfin",
    "chat finance",
    "financial chatbot",
    "AI finance assistant"
  ],
  referrer: 'origin-when-cross-origin',
  creator: "ChatFin Inc",
  publisher: "ChatFin Inc",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chatfin.ai',
    siteName: 'ChatFin',
    title: 'ChatFin - AI Super Agent for Finance & Accounting Teams',
    description: 'AI Super Agent for Finance and Accounting Teams. AI agents built to handle real work across Controllership, FP&A, AP, AR, Tax, Treasury and operations. Free for individuals, advanced features for teams.',
    images: [
      {
        url: 'https://chatfin.ai/chatfin-dashboard.png',
        width: 1200,
        height: 630,
        alt: 'ChatFin AI Finance Dashboard',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ChatFinAI',
    creator: '@ChatFinAI',
    title: 'ChatFin - AI Super Agent for Finance & Accounting Teams',
    description: 'AI Super Agent for Finance and Accounting Teams. AI agents built to handle real work across Controllership, FP&A, AP, AR, Tax, Treasury and operations.',
    images: ['https://chatfin.ai/chatfin-dashboard.png'],
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'Finance Technology',
  classification: 'AI Finance Solutions',
  alternates: {
    canonical: 'https://chatfin.ai',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Essential Meta Tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#135142" />
        <meta name="msapplication-TileColor" content="#135142" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Enhanced SEO Meta Tags */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="ICBM" content="40.7128, -74.0060" />
        <meta name="DC.title" content="ChatFin - AI Super Agent for Finance & Accounting Teams" />
        <meta name="DC.creator" content="ChatFin Inc" />
        <meta name="DC.subject" content="AI Finance, Accounting Automation, Financial Technology" />
        <meta name="DC.description" content="AI Super Agent for Finance and Accounting Teams. Automate financial operations with intelligent AI agents." />
        <meta name="rating" content="General" />
        <meta name="distribution" content="Global" />
        <meta name="revisit-after" content="3 days" />
        <meta name="expires" content="never" />
        <meta name="pragma" content="no-cache" />
        <meta name="cache-control" content="no-cache" />

        {/* Business/Commerce Meta Tags */}
        <meta name="price" content="Free for individuals" />
        <meta name="currency" content="USD" />
        <meta name="availability" content="InStock" />
        <meta name="business:contact_data:street_address" content="" />
        <meta name="business:contact_data:locality" content="United States" />
        <meta name="business:contact_data:region" content="" />
        <meta name="business:contact_data:country_name" content="United States" />

        {/* Additional Social Media Meta Tags */}
        <meta property="fb:app_id" content="your-facebook-app-id" />
        <meta property="article:publisher" content="https://www.facebook.com/ChatFinAI" />
        <meta property="article:author" content="https://www.facebook.com/ChatFinAI" />
        <meta property="article:section" content="Technology" />
        <meta property="article:tag" content="AI Finance, Financial Technology, Accounting Automation" />
        
        {/* LinkedIn Meta Tags */}
        <meta property="linkedin:owner" content="ChatFin Inc" />
        
        {/* Pinterest Meta Tags */}
        <meta name="pinterest" content="nopin" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://api.chatfin.ai" />
        <link rel="preconnect" href="https://cdn.chatfin.ai" />

        {/* DNS Prefetch for faster loading */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://api.chatfin.ai" />

        {/* Enhanced Favicon and Touch Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#135142" />

        {/* Additional Link Relations for SEO */}
        <link rel="author" href="https://chatfin.ai/about" />
        <link rel="publisher" href="https://chatfin.ai" />
        <link rel="license" href="https://chatfin.ai/terms" />
        <link rel="help" href="https://chatfin.ai/support" />
        <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="ChatFin" />

        {/* Comprehensive Schema.org structured data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ChatFin",
              "alternateName": ["ChatFin Inc", "ChatFin AI", "Chat Finance AI"],
              "url": "https://chatfin.ai",
              "logo": {
                "@type": "ImageObject",
                "url": "https://chatfin.ai/chatfin-logo.png",
                "width": "180",
                "height": "60"
              },
              "description": "Leading AI Super Agent platform for Finance and Accounting Teams. Streamline financial operations with intelligent automation across Controllership, FP&A, AP, AR, Tax, Treasury and operations.",
              "foundingDate": "2024",
              "industry": ["Financial Technology", "Artificial Intelligence", "Business Software", "Accounting Software"],
              "keywords": "AI finance, finance automation, accounting AI, financial planning AI, AI for CFO, finance AI agent, accounting automation, financial operations AI",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "url": "https://chatfin.ai/book-demo",
                  "availableLanguage": "English"
                },
                {
                  "@type": "ContactPoint", 
                  "contactType": "sales",
                  "url": "https://chatfin.ai/book-demo",
                  "availableLanguage": "English"
                }
              ],
              "sameAs": [
                "https://www.linkedin.com/company/chatfin",
                "https://twitter.com/ChatFinAI",
                "https://github.com/chatfin",
                "https://youtube.com/@chatfinai"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "ChatFin AI Finance Solutions",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "SoftwareApplication",
                      "name": "ChatFin Individual",
                      "description": "Free AI finance tools for individual users"
                    },
                    "price": "0",
                    "priceCurrency": "USD"
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "SoftwareApplication",
                      "name": "ChatFin Team",
                      "description": "Advanced AI finance features for teams"
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "priceCurrency": "USD",
                      "price": "Contact for pricing"
                    }
                  }
                ]
              }
            })
          }}
        />

        {/* Enhanced Software Application Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "ChatFin - AI Super Agent for Finance",
              "alternateName": ["ChatFin", "ChatFin AI", "Finance AI Agent"],
              "applicationCategory": "BusinessApplication",
              "applicationSubCategory": "Finance and Accounting Software",
              "operatingSystem": ["Web Browser", "Chrome", "Firefox", "Safari", "Edge"],
              "description": "Comprehensive AI Super Agent platform designed specifically for Finance and Accounting Teams. Automate controllership, FP&A, accounts payable, accounts receivable, tax, treasury and operational finance tasks.",
              "url": "https://chatfin.ai",
              "downloadUrl": "https://chatfin.ai/try-free",
              "screenshot": "https://chatfin.ai/chatfin-dashboard.png",
              "featureList": [
                "AI Financial Planning & Analysis (FP&A)",
                "Automated Controllership Tasks",
                "Accounts Payable Automation", 
                "Accounts Receivable Management",
                "AI Tax Preparation & Compliance",
                "Treasury Operations Automation",
                "Financial Reporting & Analytics",
                "Invoice Processing & Approval",
                "Expense Management",
                "Budget Analysis & Forecasting",
                "Month-end Close Automation",
                "Financial Data Integration",
                "Real-time Financial Dashboards",
                "Compliance & Audit Support"
              ],
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Free Individual Plan",
                  "price": "0",
                  "priceCurrency": "USD",
                  "description": "Free AI finance tools for individual users",
                  "availability": "https://schema.org/InStock"
                },
                {
                  "@type": "Offer",
                  "name": "Team Plan",
                  "description": "Advanced features for finance teams",
                  "availability": "https://schema.org/InStock",
                  "url": "https://chatfin.ai/book-demo"
                }
              ],
              "creator": {
                "@type": "Organization",
                "name": "ChatFin Inc",
                "url": "https://chatfin.ai"
              },
              "publisher": {
                "@type": "Organization",
                "name": "ChatFin Inc",
                "url": "https://chatfin.ai"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "ratingCount": "100",
                "bestRating": "5",
                "worstRating": "1"
              }
            })
          }}
        />

        {/* Website Schema for better search visibility */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "ChatFin - AI Finance Solutions",
              "alternateName": "ChatFin AI",
              "url": "https://chatfin.ai",
              "description": "Leading AI platform for finance and accounting automation. Transform your financial operations with intelligent AI agents.",
              "publisher": {
                "@type": "Organization",
                "name": "ChatFin Inc"
              },
              "potentialAction": [
                {
                  "@type": "SearchAction",
                  "target": "https://chatfin.ai/search?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              ],
              "mainEntity": {
                "@type": "WebPage",
                "name": "AI Finance & Accounting Solutions",
                "url": "https://chatfin.ai"
              }
            })
          }}
        />

        {/* Service Schema for AI Finance Services */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "AI Finance & Accounting Automation Services",
              "description": "Comprehensive AI-powered finance and accounting services including FP&A, controllership, AP/AR management, tax automation, and treasury operations.",
              "provider": {
                "@type": "Organization",
                "name": "ChatFin Inc",
                "url": "https://chatfin.ai"
              },
              "serviceType": "AI Finance Automation",
              "areaServed": "Worldwide",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "AI Finance Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Financial Planning & Analysis",
                      "description": "Automated FP&A processes with AI-driven insights"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "AI Controllership Services",
                      "description": "Automated month-end close, financial reporting, and compliance"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Accounts Payable Automation",
                      "description": "Intelligent invoice processing, approval workflows, and payment automation"
                    }
                  }
                ]
              },
              "category": "Financial Technology Services",
              "audience": {
                "@type": "Audience",
                "audienceType": "Finance Professionals"
              }
            })
          }}
        />

        {/* FAQ Schema for common finance AI questions */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is ChatFin AI Super Agent?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ChatFin is an AI Super Agent platform specifically designed for Finance and Accounting Teams. It automates complex financial tasks across Controllership, FP&A, AP, AR, Tax, Treasury and operations, helping finance professionals work more efficiently."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does AI help finance and accounting teams?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI automates repetitive financial tasks like invoice processing, expense categorization, financial reporting, reconciliations, and budget analysis. This allows finance teams to focus on strategic analysis and decision-making while reducing manual errors and processing time."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is ChatFin suitable for small businesses?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! ChatFin offers a free plan for individuals and scalable solutions for businesses of all sizes. Small businesses can start with basic automation and scale up as they grow."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What finance processes can be automated with AI?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ChatFin can automate FP&A processes, controllership tasks, accounts payable/receivable, expense management, financial reporting, tax preparation, treasury operations, month-end close procedures, and compliance workflows."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </body>
    </html>
  )
}
