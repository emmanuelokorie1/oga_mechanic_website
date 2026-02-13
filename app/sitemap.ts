import { MetadataRoute } from 'next';
import { routes } from '@/constant/routes';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ogamechanic.org';
  
  // Define static routes
  // Using the routes object from constants to ensure consistency
  // If routes are just strings, we map them directly. If they are objects, we extract the path.
  const staticRoutes = [
    '', // Home
    routes.about,
    routes.services,
    routes.contact,
    routes.signup,
    routes.terms,
    routes.privacy,
    // Add other public routes here
  ].map((route) => {
    // Handle if route is just a path string
    const path = route.startsWith('/') ? route : `/${route}`;
    // Remove double slashes if any (except protocol)
    return path.replace('//', '/');
  });

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
