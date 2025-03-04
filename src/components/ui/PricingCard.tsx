import React from 'react';
import { CheckCircle } from '../../icons';
import { useTranslation } from 'react-i18next';

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  buttonText: string;
  highlighted?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  title, 
  description, 
  price, 
  period, 
  features, 
  buttonText, 
  highlighted = false 
}) => {
  const { t } = useTranslation();

  return (
    <div className={`border ${highlighted ? 'border-indigo-500' : 'border-gray-200 dark:border-gray-700'} rounded-lg shadow-sm divide-y divide-gray-200 dark:divide-gray-700`}>
      <div className="p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">{title}</h3>
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">{description}</p>
        <p className="mt-8">
          <span className="text-4xl font-extrabold text-gray-900 dark:text-white">{price}</span>
          <span className="text-base font-medium text-gray-500 dark:text-gray-400">{period}</span>
        </p>
        <a href="#" className="mt-8 block w-full bg-indigo-600 dark:bg-indigo-500 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-indigo-700 dark:hover:bg-indigo-600">
          {buttonText}
        </a>
      </div>
      <div className="pt-6 pb-8 px-6">
        <h4 className="text-sm font-medium text-gray-900 dark:text-white tracking-wide uppercase">{t('pricing.whatsIncluded')}</h4>
        <ul className="mt-6 space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex space-x-3">
              <CheckCircle className="flex-shrink-0 h-5 w-5 text-green-500" />
              <span className="text-sm text-gray-500 dark:text-gray-400">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;