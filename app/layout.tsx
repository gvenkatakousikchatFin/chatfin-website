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
    "AI financial operations"
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
        {/* Additional SEO Meta Tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#135142" />
        <meta name="msapplication-TileColor" content="#135142" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />

        {/* Favicon and Touch Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ChatFin",
              "alternateName": "ChatFin Inc",
              "url": "https://chatfin.ai",
              "logo": "https://chatfin.ai/chatfin-logo.png",
              "description": "AI Super Agent for Finance and Accounting Teams",
              "foundingDate": "2024",
              "sameAs": [
                "https://www.linkedin.com/company/chatfin",
                "https://twitter.com/ChatFinAI"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "url": "https://chatfin.ai/talk-to-us"
              },
              "offers": {
                "@type": "Offer",
                "category": "AI Finance Software",
                "description": "AI agents for finance and accounting teams"
              }
            })
          }}
        />

        {/* Additional structured data for software application */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "ChatFin",
              "operatingSystem": "Web Browser",
              "applicationCategory": "BusinessApplication",
              "description": "AI Super Agent for Finance and Accounting Teams",
              "url": "https://chatfin.ai",
              "screenshot": "https://chatfin.ai/chatfin-dashboard.png",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "description": "Free for individuals"
              },
              "creator": {
                "@type": "Organization",
                "name": "ChatFin Inc"
              }
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
