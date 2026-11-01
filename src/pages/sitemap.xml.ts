import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { products } from '../data/products';
import { locales, localePath } from '../i18n';

export const GET: APIRoute = ({ site: astroSite }) => {
  const base = astroSite ?? new URL(site.url);
  const paths = [
    '/',
    '/products/',
    ...products.map((product) => `/products/${product.slug}/`),
    '/oem-odm/',
    '/privacy/',
  ];

  const urls = paths
    .flatMap((path) => {
      const alternates = [
        ...locales.map(
          (lang) =>
            `    <xhtml:link rel="alternate" hreflang="${lang}" href="${new URL(localePath(lang, path), base).href}"/>`
        ),
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${new URL(localePath('en', path), base).href}"/>`,
      ].join('\n');

      return locales.map(
        (lang) =>
          `  <url>\n    <loc>${new URL(localePath(lang, path), base).href}</loc>\n${alternates}\n  </url>`
      );
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
