import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/api/',
                    '/admin/',
                    '/_next/',
                    '/private/',
                    '/temp/',
                ],
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
            },
            {
                userAgent: 'Slurp',
                allow: '/',
            },
            {
                // Allow MozBot for backlink indexing and domain authority
                userAgent: 'rogerbot',
                allow: '/',
            },
            {
                // Allow Moz's DotBot for link discovery
                userAgent: 'DotBot',
                allow: '/',
            },
            {
                // Allow Ahrefs for backlink analysis
                userAgent: 'AhrefsBot',
                allow: '/',
            },
            {
                // Allow Semrush for SEO analysis
                userAgent: 'SemrushBot',
                allow: '/',
            },
            {
                // Block only truly unwanted bots
                userAgent: 'MJ12bot',
                disallow: '/',
            },
        ],
        sitemap: 'https://chatfin.ai/sitemap.xml',
    }
}