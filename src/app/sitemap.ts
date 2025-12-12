import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_LP_URL}`,
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_LP_URL}terms`,
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_LP_URL}privacy-policy'`,
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.5,
    },
    {
      url: `${process.env.NEXT_PUBLIC_LP_URL}data-security'`,
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.5,
    },
  ];
}
