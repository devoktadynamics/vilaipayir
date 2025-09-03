import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2 items-center justify-center mt-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 rounded-lg border text-sm font-medium transition-colors ${i18n.language === 'en' ? 'bg-green-600 text-white border-green-700' : 'bg-white text-gray-700 border-gray-300 hover:bg-green-50'}`}
      >
        English
      </button>
      <button
        onClick={() => changeLanguage('ta')}
        className={`px-3 py-1 rounded-lg border text-sm font-medium transition-colors ${i18n.language === 'ta' ? 'bg-green-600 text-white border-green-700' : 'bg-white text-gray-700 border-gray-300 hover:bg-green-50'}`}
      >
        தமிழ்
      </button>
    </div>
  );
};

export default LanguageSwitcher; 