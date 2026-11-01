import type { APIRoute } from 'astro';
import { site } from '../data/site';

export const GET: APIRoute = ({ site: astroSite }) => {
  const base = astroSite ?? new URL(site.url);
  const rules = site.demoMode
    ? 'User-agent: *\nDisallow: /'
    : 'User-agent: *\nAllow: /';

  const body = `${rules}\n\nSitemap: ${new URL('/sitemap.xml', base).href}\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
