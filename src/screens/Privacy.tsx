import { Shield } from "lucide-react";
import { Layout } from "../components/Layout";
import { EmailVisibility } from "../components/EmailVisibility";
import { useTranslation } from "react-i18next";

export const Privacy = () => {
  const { t } = useTranslation();

  const renderListItems = (key: string) => {
    const items = t(key, { returnObjects: true }) as string[];
    return items.map((item: string, index: number) => (
      <li key={index}>{item}</li>
    ));
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-4xl dark:text-white">
        <div className="flex items-center gap-3 mb-8">
          <Shield className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold text-foreground">
            {t("privacy.title")}
          </h1>
        </div>

        <div className="space-y-8 text-muted-foreground">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              {t("privacy.introduction.title")}
            </h2>
            <p>{t("privacy.introduction.description")}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              {t("privacy.information.title")}
            </h2>
            <p>{t("privacy.information.description")}</p>
            <ul className="list-disc pl-6 space-y-2">
              {renderListItems("privacy.information.items")}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              {t("privacy.usage.title")}
            </h2>
            <p>{t("privacy.usage.description")}</p>
            <ul className="list-disc pl-6 space-y-2">
              {renderListItems("privacy.usage.items")}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              {t("privacy.protection.title")}
            </h2>
            <p>{t("privacy.protection.description")}</p>
            <ul className="list-disc pl-6 space-y-2">
              {renderListItems("privacy.protection.items")}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              {t("privacy.rights.title")}
            </h2>
            <p>{t("privacy.rights.description")}</p>
            <ul className="list-disc pl-6 space-y-2">
              {renderListItems("privacy.rights.items")}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              {t("privacy.contact.title")}
            </h2>
            <p>{t("privacy.contact.description")}</p>
            <EmailVisibility email="privacy@holiflow.pt" />
          </section>
        </div>
      </div>
    </Layout>
  );
};
