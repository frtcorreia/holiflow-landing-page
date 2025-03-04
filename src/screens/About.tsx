import { Layout } from "../components/Layout";
import { EmailVisibility } from "../components/EmailVisibility";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-4xl dark:text-white">
        <div className="flex items-center gap-3 mb-8">
          <h1 className="text-3xl font-bold text-foreground">
            {t("about.title")}
          </h1>
        </div>

        <div className="space-y-8 text-muted-foreground">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              {t("about.whoWeAre.title")}
            </h2>
            <p>{t("about.whoWeAre.description")}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              {t("about.mission.title")}
            </h2>
            <p>{t("about.mission.description")}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              {t("about.values.title")}
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("about.values.transparency")}</li>
              <li>{t("about.values.innovation")}</li>
              <li>{t("about.values.collaboration")}</li>
              <li>{t("about.values.efficiency")}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              {t("about.contact.title")}
            </h2>
            <p>{t("about.contact.description")}</p>
            <EmailVisibility email="contact@holiflow.pt" />
          </section>
        </div>
      </div>
    </Layout>
  );
};
