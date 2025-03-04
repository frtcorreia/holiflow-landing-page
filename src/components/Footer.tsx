import React from "react";
import { useTranslation } from "react-i18next";
import { Calendar } from "../icons";
import SocialLinks from "./SocialLinks";
import FooterLinks, { Link } from "./FooterLinks";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold text-white">
                Holiflow
              </span>
            </div>
            <p className="text-gray-300 text-base">{t("footer.description")}</p>
            <SocialLinks />
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <FooterLinks
                title={t("footer.product")}
                links={
                  t("footer.productLinks", { returnObjects: true }) as Link[]
                }
              />
              <div className="mt-12 md:mt-0">
                <FooterLinks
                  title={t("footer.support")}
                  links={
                    t("footer.supportLinks", {
                      returnObjects: true,
                    }) as Link[]
                  }
                />
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <FooterLinks
                title={t("footer.company")}
                links={
                  t("footer.companyLinks", { returnObjects: true }) as Link[]
                }
              />
              <div className="mt-12 md:mt-0">
                <FooterLinks
                  title={t("footer.legal")}
                  links={
                    t("footer.legalLinks", { returnObjects: true }) as Link[]
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
