import ColorSection from "./components/ColorSection";
import FeatureSection from "./components/Feature";
import Footer from "./components/Footer";
import Header from "./components/header";
import HeroSection from "./components/HeroSection";
import HomeLayout from "./components/layouts/HomeLayout";
import SpecSection from "./components/Spec";
import { ThemeProvider } from "./components/ThemeProvider";
import { Separator } from "./components/ui/separator";

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-theme">
      <HomeLayout>
        <div className="min-h-dvh  w-full bg-background relative text-foreground">
          <Header />
          <div className="pt-20  space-y-8 2xl:space-y-0">
            <HeroSection />
            <ColorSection />
            <FeatureSection />
            <Separator className="mb-8" />
            <SpecSection />
            <Footer />
          </div>
        </div>
      </HomeLayout>
    </ThemeProvider>
  );
}
