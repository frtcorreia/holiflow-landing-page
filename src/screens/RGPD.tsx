import { Shield } from "lucide-react";
import { Layout } from "../components/Layout";
import { EmailVisibility } from "../components/EmailVisibility";
import { useTranslation } from "react-i18next";

export const RGPD = () => {
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
            {t("rgpd.title")}
          </h1>
        </div>

        <div className="space-y-8 text-muted-foreground">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              {t("rgpd.introduction.title")}
            </h2>
            <p>{t("rgpd.introduction.description")}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              {t("rgpd.principles.title")}
            </h2>
            <p>{t("rgpd.principles.description")}</p>
            <ul className="list-disc pl-6 space-y-2">
              {renderListItems("rgpd.principles.items")}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              {t("rgpd.rights.title")}
            </h2>
            <p>{t("rgpd.rights.description")}</p>
            <ul className="list-disc pl-6 space-y-2">
              {renderListItems("rgpd.rights.items")}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              {t("rgpd.security.title")}
            </h2>
            <p>{t("rgpd.security.description")}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              {t("rgpd.contact.title")}
            </h2>
            <p>{t("rgpd.contact.description")}</p>
            <EmailVisibility email="privacy@holiflow.pt" />
            <p>{t("rgpd.contact.complaint")}</p>
          </section>
        </div>
      </div>
    </Layout>
  );
};
