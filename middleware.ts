import createMiddleware from 'next-intl/middleware';


export default createMiddleware({
    locales: ['en', 'fr', 'de','es','pt-PT', 'pt-BR', 'ar'],
    defaultLocale: 'en',
    localePrefix: 'always',
    // Cette configuration est cruciale pour la redirection
    pathnames: {
        '/': '/',
        // Ajoutez ici d'autres routes si nécessaire
    }
});

// Correction de la configuration pour être compatible avec Next.js


export const config = {
    matcher: [
        '/',
        '/auth',  // Ajoutez la route auth
        '/(fr|en|de|es|pt-PT|pt-BR|ar)/:path*'
    ]
};