import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, CheckCircle, TeamIcon, NotificationIcon, AnalyticsIcon, PolicyIcon } from '../../icons';
import FeatureCard from '../ui/FeatureCard';

const FeaturesSection: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: t('features.visualCalendar.title'),
      description: t('features.visualCalendar.description')
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: t('features.approvalWorkflows.title'),
      description: t('features.approvalWorkflows.description')
    },
    {
      icon: <TeamIcon className="h-6 w-6" />,
      title: t('features.teamManagement.title'),
      description: t('features.teamManagement.description')
    },
    {
      icon: <NotificationIcon className="h-6 w-6" />,
      title: t('features.notifications.title'),
      description: t('features.notifications.description')
    },
    {
      icon: <AnalyticsIcon className="h-6 w-6" />,
      title: t('features.analytics.title'),
      description: t('features.analytics.description')
    },
    {
      icon: <PolicyIcon className="h-6 w-6" />,
      title: t('features.policyManagement.title'),
      description: t('features.policyManagement.description')
    }
  ];

  return (
    <div id="features" className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">{t('features.title')}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {t('features.subtitle')}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
            {t('features.description')}
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;