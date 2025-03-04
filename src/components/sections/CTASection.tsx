import React from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "../../icons";

const CTASection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-indigo-700 dark:bg-indigo-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">{t("cta.title1")}</span>
          <span className="block text-indigo-200">{t("cta.title2")}</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="https://app.holiflow.pt/auth/signin"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 dark:text-indigo-500 dark:hover:bg-gray-100"
            >
              {t("cta.getStarted")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
