// src/components/layout/Navbar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { locales } from '@/config/i18n';
import LocaleSwitcher from './LocaleSwitcher';

const Navbar = () => {
    const t = useTranslations();
    const appName = useTranslations('app');
    const navT = useTranslations('navigation');
    const pathname = usePathname();
    const locale = useLocale();

    const isActive = (path: string) => {
        return pathname === `/${locale}${path}` ? 'text-indigo-500 border-b-2 border-indigo-500' : 'text-gray-600 hover:text-indigo-500';
    };

    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" locale={locale} className="font-bold text-xl text-indigo-600">
                                {appName('title')}
                            </Link>
                        </div>
                        <div className="ml-10 flex items-center space-x-4">
                            <Link href="/" locale={locale} className={`px-3 py-2 ${isActive('/')}`}>
                                {navT('home')}
                            </Link>
                            <Link href="/config" locale={locale} className={`px-3 py-2 ${isActive('/config')}`}>
                                {navT('config')}
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <LocaleSwitcher />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;