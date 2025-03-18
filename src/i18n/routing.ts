import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'fr', 'de', 'es', 'pt-PT', 'pt-BR', 'ar'],

  // Used when no locale matches
  defaultLocale: 'en'
});

// Anglais
// Français
// Espagnol
// Allemand

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);