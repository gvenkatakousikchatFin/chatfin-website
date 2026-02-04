import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://chatfin.ai'
    const currentDate = new Date().toISOString()

    // Static routes with priority and update frequency
    const staticRoutes = [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'daily' as const,
            priority: 1.0,
        },
        {
            url: `${baseUrl}/pricing`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/solutions`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/ai-tools-for-accounting-and-finance`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: currentDate,
            changeFrequency: 'daily' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/book-demo`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/try-free`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/get-started`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/dashboard`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        },
        // Book demo sub-pages
        {
            url: `${baseUrl}/book-demo/enterprise`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/book-demo/individual`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/book-demo/schedule`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/book-demo/confirmation`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.5,
        },
        {
            url: `${baseUrl}/book-demo/home1`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        },
        {
            url: `${baseUrl}/book-demo/home2`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        },
        {
            url: `${baseUrl}/book-demo/home3`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        },
        // Try free sub-pages
        {
            url: `${baseUrl}/try-free/step2`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        },
        {
            url: `${baseUrl}/try-free/step3`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        },
        {
            url: `${baseUrl}/try-free/success-erp`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.5,
        },
        {
            url: `${baseUrl}/try-free/redirect-demo`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.5,
        },
        // Alternative home pages
        {
            url: `${baseUrl}/home2`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.5,
        },
        {
            url: `${baseUrl}/home3`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.5,
        },
        {
            url: `${baseUrl}/careers`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/usecases`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog/agentic-finance-revolution`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/blog/ai-finance-automation-guide`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/coming-soon`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.3,
        },
    ]

    return staticRoutes
}