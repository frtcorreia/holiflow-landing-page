import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "../icons";
import { useTranslation } from "react-i18next";

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
      aria-label={isDarkMode ? t("theme.light") : t("theme.dark")}
    >
      {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
};

export default ThemeToggle;
