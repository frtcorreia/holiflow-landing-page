import React from 'react';

interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description }) => {
  return (
    <div className="relative">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4 mx-auto">
        <span className="text-lg font-bold">{number}</span>
      </div>
      <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white text-center">{title}</h3>
      <p className="mt-2 text-base text-gray-500 dark:text-gray-400 text-center">
        {description}
      </p>
    </div>
  );
};

export default StepCard;