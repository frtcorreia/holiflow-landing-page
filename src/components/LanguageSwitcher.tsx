import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from '../icons';

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
      >
        <Globe className="h-5 w-5 mr-1" />
        <span className="hidden md:inline">{i18n.language === 'pt' ? 'PT' : 'EN'}</span>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-10">
          <button
            onClick={() => changeLanguage('en')}
            className={`block px-4 py-2 text-sm w-full text-left ${
              i18n.language === 'en' 
                ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-gray-700' 
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            {t('language.en')}
          </button>
          <button
            onClick={() => changeLanguage('pt')}
            className={`block px-4 py-2 text-sm w-full text-left ${
              i18n.language === 'pt' 
                ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-gray-700' 
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            {t('language.pt')}
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;