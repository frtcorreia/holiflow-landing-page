import { useState } from "react";
import { useTranslation } from "react-i18next";

interface EmailVisibilityProps {
  email: string;
}

export const EmailVisibility: React.FC<EmailVisibilityProps> = ({ email }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? (
          <p>{t("emailVisibility.clickToHide")}</p>
        ) : (
          <p style={{ textDecoration: "underline" }}>
            {t("emailVisibility.clickToShow")}
          </p>
        )}
      </button>
      {isVisible && (
        <a href={`mailto:${email}`} className="text-primary hover:underline">
          {email}
        </a>
      )}
    </div>
  );
};
