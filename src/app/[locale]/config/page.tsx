'use client';

import { useState } from 'react';
import { useRouter } from 'next-intl/client';
import { useTranslations } from 'next-intl';

// Types pour les caractéristiques du personnage
type Clan = 'crab' | 'crane' | 'dragon' | 'lion' | 'mantis' | 'phoenix' | 'scorpion' | 'unicorn' | 'other';

type CharacterStats = {
    // Anneaux
    earth: number;
    air: number;
    fire: number;
    water: number;
    void: number;
    // Compétences
    kenjutsu: number;
    iaijutsu: number;
    knowledge: number;
    etiquette: number;
    // Autres informations
    clan: Clan;
    school: string;
    name: string;
};

export default function ConfigPage() {
    const router = useRouter();
    const t = useTranslations('config');

    const [character, setCharacter] = useState<CharacterStats>({
        earth: 2,
        air: 2,
        fire: 2,
        water: 2,
        void: 2,
        kenjutsu: 1,
        iaijutsu: 1,
        knowledge: 1,
        etiquette: 1,
        clan: 'lion',
        school: '',
        name: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setCharacter(prev => ({
            ...prev,
            [name]: name === 'name' || name === 'school' ? value : parseInt(value) || 0
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Sauvegarder dans localStorage ou un state global
        localStorage.setItem('l5r-character', JSON.stringify(character));
        alert('Configuration sauvegardée!');
        router.push('/');
    };

    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">{t('title')}</h1>

            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6">
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-4">{t('generalInfo')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 mb-2">{t('fields.name')}</label>
                            <input
                                type="text"
                                name="name"
                                value={character.name}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">{t('fields.clan')}</label>
                            <select
                                name="clan"
                                value={character.clan}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            >
                                <option value="crab">{t('clans.crab')}</option>
                                <option value="crane">{t('clans.crane')}</option>
                                <option value="dragon">{t('clans.dragon')}</option>
                                <option value="lion">{t('clans.lion')}</option>
                                <option value="mantis">{t('clans.mantis')}</option>
                                <option value="phoenix">{t('clans.phoenix')}</option>
                                <option value="scorpion">{t('clans.scorpion')}</option>
                                <option value="unicorn">{t('clans.unicorn')}</option>
                                <option value="other">{t('clans.other')}</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">{t('fields.school')}</label>
                            <input
                                type="text"
                                name="school"
                                value={character.school}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-4">{t('rings')}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {(['earth', 'air', 'fire', 'water', 'void'] as const).map(ring => (
                            <div key={ring}>
                                <label className="block text-gray-700 mb-2 capitalize">{t(`fields.${ring}`)}</label>
                                <input
                                    type="number"
                                    name={ring}
                                    min="1"
                                    max="10"
                                    value={character[ring]}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-4">{t('skills')}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {(['kenjutsu', 'iaijutsu', 'knowledge', 'etiquette'] as const).map(skill => (
                            <div key={skill}>
                                <label className="block text-gray-700 mb-2 capitalize">{t(`fields.${skill}`)}</label>
                                <input
                                    type="number"
                                    name={skill}
                                    min="0"
                                    max="10"
                                    value={character[skill]}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                    >
                        {t('save')}
                    </button>
                </div>
            </form>
        </div>
    );
}