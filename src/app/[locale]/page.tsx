import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

// Types pour les outils
type ToolId = 'dice-calculator' | 'character-sheet';

type Tool = {
  id: ToolId;
  icon: string;
  path: string;
};

// Liste des outils disponibles
const tools: Tool[] = [
  {
    id: 'dice-calculator',
    icon: '🎲',
    path: '/tools/dice-calculator',
  },
  {
    id: 'character-sheet',
    icon: '📝',
    path: '/tools/character-sheet',
  },
];

export async function generateMetadata({
                                         params: { locale }
                                       }: {
  params: { locale: string }
}) {
  const t = await getTranslations({ locale, namespace: 'app' });

  return {
    title: t('title'),
    description: t('subtitle')
  };
}

export default function Home() {
  const t = useTranslations();

  return (
      <div className="py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{t('home.title')}</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('home.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
              <Link key={tool.id} href={tool.path} className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-50 transition-colors">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 flex items-center justify-center bg-indigo-100 rounded-full mr-3">
                    <span className="text-indigo-600 text-xl">{tool.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{t(`tools.${tool.id}.name`)}</h3>
                </div>
                <p className="text-gray-600">{t(`tools.${tool.id}.description`)}</p>
              </Link>
          ))}
        </div>
      </div>
  );
}