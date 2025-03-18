import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from '@/config/i18n';

export default createMiddleware({
    // A list of all locales that are supported
    locales,
    defaultLocale,
    // Used when no locale matches
    localePrefix: 'as-needed',
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/((?!api|_next|.*\\..*).*)']
};