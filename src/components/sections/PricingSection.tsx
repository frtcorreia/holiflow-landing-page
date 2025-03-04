import React from 'react';
import { useTranslation } from 'react-i18next';
import PricingCard from '../ui/PricingCard';

const PricingSection: React.FC = () => {
  const { t } = useTranslation();

  const pricingPlans = [
    {
      title: t('pricing.starter.title'),
      description: t('pricing.starter.description'),
      price: t('pricing.starter.price'),
      period: t('pricing.starter.period'),
      features: t('pricing.starter.features', { returnObjects: true }),
      buttonText: t('pricing.startTrial'),
      highlighted: false
    },
    {
      title: t('pricing.professional.title'),
      description: t('pricing.professional.description'),
      price: t('pricing.professional.price'),
      period: t('pricing.professional.period'),
      features: t('pricing.professional.features', { returnObjects: true }),
      buttonText: t('pricing.startTrial'),
      highlighted: true
    },
    {
      title: t('pricing.enterprise.title'),
      description: t('pricing.enterprise.description'),
      price: t('pricing.enterprise.price'),
      period: t('pricing.enterprise.period'),
      features: t('pricing.enterprise.features', { returnObjects: true }),
      buttonText: t('pricing.contactSales'),
      highlighted: false
    }
  ];

  return (
    <div id="pricing" className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">{t('pricing.title')}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {t('pricing.subtitle')}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
            {t('pricing.description')}
          </p>
        </div>

        <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard 
              key={index}
              title={plan.title}
              description={plan.description}
              price={plan.price}
              period={plan.period}
              features={plan.features as string[]}
              buttonText={plan.buttonText}
              highlighted={plan.highlighted}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;