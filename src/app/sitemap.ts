import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aqlaan.com'
  
  const routes = [
    '',
    '/about',
    '/consultations',
    '/contact',
    '/get-started',
    '/products',
    '/solutions',
    '/solutions/computer-vision',
    '/solutions/enterprise-automation',
    '/solutions/healthcare-ai',
    '/solutions/infrastructure-ai',
    '/solutions/language-intelligence',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.includes('/solutions/') ? 0.9 : 0.8,
  }))
}
