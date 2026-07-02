import ColorSection from "./components/ColorSection";
import FeatureSection from "./components/Feature";
import Footer from "./components/Footer";
import Header from "./components/header";
import HeroSection from "./components/HeroSection";
import HomeLayout from "./components/layouts/HomeLayout";
import SpecSection from "./components/Spec";
import { ThemeProvider } from "./components/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-theme">
      <HomeLayout>
        <div className="min-h-dvh w-full bg-background relative text-foreground">
          <Header />
          <div className="pt-20">
            <HeroSection />
            <ColorSection />
            <FeatureSection />
            <SpecSection />
            <Footer />
          </div>
        </div>
      </HomeLayout>
    </ThemeProvider>
  );
}
