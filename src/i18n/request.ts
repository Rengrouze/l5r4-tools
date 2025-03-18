import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

type SupportedLocale = 'en' | 'fr' | 'de' | 'es' | 'pt-PT' | 'pt-BR' | 'ar';

export default getRequestConfig(async ({requestLocale}) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as SupportedLocale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});