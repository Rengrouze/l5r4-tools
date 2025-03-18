'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next-intl/client';
import { locales } from '@/config/i18n';

export default function LocaleSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value;
        router.replace(pathname, { locale: newLocale });
    };

    return (
        <select
            value={locale}
            onChange={handleChange}
            className="py-1 px-2 border rounded bg-white text-gray-700"
        >
            {locales.map(loc => (
                <option key={loc} value={loc}>
                    {loc === 'en' ? '🇬🇧 English' : '🇫🇷 Français'}
                </option>
            ))}
        </select>
    );
}