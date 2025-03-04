import React from 'react';

interface TestimonialCardProps {
  name: string;
  position: string;
  quote: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, position, quote, image }) => {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <img className="h-12 w-12 rounded-full" src={image} alt={name} />
        </div>
        <div className="ml-4">
          <h4 className="text-lg font-bold text-gray-900 dark:text-white">{name}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">{position}</p>
        </div>
      </div>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        {quote}
      </p>
    </div>
  );
};

export default TestimonialCard;