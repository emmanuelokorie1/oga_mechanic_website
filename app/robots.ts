import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://ogamechanic.org';
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/'], // Example disallowed route
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
