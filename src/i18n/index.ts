export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const htmlLang: Record<Locale, string> = { en: 'en', es: 'es' };
export const ogLocale: Record<Locale, string> = { en: 'en_US', es: 'es_ES' };

/** Site base path without trailing slash, e.g. '/superstrong-demo' ('' when hosted at the root). */
export const BASE_PATH = import.meta.env.BASE_URL.replace(/\/+$/, '');

/** Prefix an absolute site path with the deployment base path. */
export function assetPath(path: string): string {
  return BASE_PATH + path;
}

/** Remove the deployment base path from a pathname. */
export function stripBase(pathname: string): string {
  if (!BASE_PATH || !pathname.startsWith(BASE_PATH)) return pathname;
  const rest = pathname.slice(BASE_PATH.length);
  return rest.startsWith('/') ? rest : '/' + rest;
}

/** Prefix a default-locale path for the given locale. */
export function localePath(lang: Locale, path: string): string {
  if (lang === defaultLocale) return assetPath(path);
  if (path === '/') return assetPath(`/${lang}/`);
  return assetPath(`/${lang}${path}`);
}

/** Remove the locale prefix from a pathname to get the default-locale path. */
export function stripLocale(lang: Locale, pathname: string): string {
  const path = stripBase(pathname);
  if (lang === defaultLocale) return path;
  const stripped = path.replace(new RegExp(`^/${lang}(?=/|$)`), '');
  return stripped || '/';
}

export function otherLocale(lang: Locale): Locale {
  return lang === 'en' ? 'es' : 'en';
}

export function fmt(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key) =>
    key in vars ? String(vars[key]) : match
  );
}
