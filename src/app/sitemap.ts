import { MetadataRoute } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get all products
  const products = await prisma.product.findMany()
  
  const productUrls = products.map((product) => ({
    url: `${baseUrl}/shop/${product.slug}`,
    lastModified: product.updatedAt,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const routes = [
    '',
    '/shop',
    '/order',
    '/subscriptions',
    '/locations',
    '/rewards',
    '/careers',
    '/contact',
    '/gift-cards',
    '/account',
    '/legal/privacy',
    '/legal/terms',
    '/legal/refunds',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return [...routes, ...productUrls]
}
