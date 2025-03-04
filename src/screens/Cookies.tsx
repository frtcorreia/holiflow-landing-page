import { Cookie } from "lucide-react";
import { Layout } from "../components/Layout";
import { EmailVisibility } from "../components/EmailVisibility";
import { useTranslation } from "react-i18next";

export const Cookies = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-4xl dark:text-white">
        <div className="flex items-center gap-3 mb-8">
          <Cookie className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold text-foreground">
            {t("cookies.title")}
          </h1>
        </div>

        <div className="space-y-8 text-muted-foreground">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              {t("cookies.introduction.title")}
            </h2>
            <p>{t("cookies.introduction.description")}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              {t("cookies.whatAreCookies.title")}
            </h2>
            <p>{t("cookies.whatAreCookies.description")}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              {t("cookies.types.title")}
            </h2>
            <p>{t("cookies.types.description")}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("cookies.types.essential")}</li>
              <li>{t("cookies.types.performance")}</li>
              <li>{t("cookies.types.functionality")}</li>
              <li>{t("cookies.types.advertising")}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              {t("cookies.management.title")}
            </h2>
            <p>{t("cookies.management.description")}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              {t("cookies.contact.title")}
            </h2>
            <p>{t("cookies.contact.description")}</p>
            <EmailVisibility email="privacy@holiflow.pt" />
          </section>
        </div>
      </div>
    </Layout>
  );
};
