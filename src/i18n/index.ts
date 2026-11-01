export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const htmlLang: Record<Locale, string> = { en: 'en', es: 'es' };
export const ogLocale: Record<Locale, string> = { en: 'en_US', es: 'es_ES' };

/** Prefix a default-locale path for the given locale. */
export function localePath(lang: Locale, path: string): string {
  if (lang === defaultLocale) return path;
  if (path === '/') return `/${lang}/`;
  return `/${lang}${path}`;
}

/** Remove the locale prefix from a pathname to get the default-locale path. */
export function stripLocale(lang: Locale, pathname: string): string {
  if (lang === defaultLocale) return pathname;
  const stripped = pathname.replace(new RegExp(`^/${lang}(?=/|$)`), '');
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
