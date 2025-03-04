import { ThemeProvider } from "../context/ThemeContext";
import Footer from "./Footer";
import Header from "./Header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        <div className="pt-16">{children}</div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};
