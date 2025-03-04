import React, { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="relative">
      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
        {icon}
      </div>
      <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">{title}</p>
      <p className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;