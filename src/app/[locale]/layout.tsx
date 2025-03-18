import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { locales } from '@/config/i18n';
import Navbar from '@/components/layout/Navbar';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
    return locales.map(locale => ({ locale }));
}

export default async function LocaleLayout({
                                               children,
                                               params: { locale },
                                           }: {
    children: ReactNode;
    params: { locale: string };
}) {
    let messages;

    try {
        messages = (await import(`../../../messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }

    return (
        <html lang={locale}>
        <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                {children}
            </main>
            <footer className="bg-gray-800 text-white mt-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
                    <p>&copy; {new Date().getFullYear()} L5R Tools. <span className="translate-footer-copyright" /></p>
                    <p className="text-sm mt-2 translate-footer-disclaimer" />
                </div>
            </footer>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}