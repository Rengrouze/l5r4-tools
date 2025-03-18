import { redirect } from 'next/navigation';
import { defaultLocale } from '@/config/i18n';

// Redirect to the default locale
export default function Home() {
    redirect(`/${defaultLocale}`);
}