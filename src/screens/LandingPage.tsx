import HeroSection from "../components/sections/HeroSection";
import FeaturesSection from "../components/sections/FeaturesSection";
import HowItWorksSection from "../components/sections/HowItWorksSection";
import CTASection from "../components/sections/CTASection";
import { Layout } from "../components/Layout";

export const LandingPage = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CTASection />
    </Layout>
  );
};
