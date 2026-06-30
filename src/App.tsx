import ColorSection from "./components/ColorSection";
import Header from "./components/header";
import HeroSection from "./components/HeroSection";
import { ThemeProvider } from "./components/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-theme">
      <div className="min-h-dvh  w-full bg-background relative text-foreground">
        <Header />
        <div className="pt-20  space-y-8 2xl:space-y-0">
          <HeroSection />
          <ColorSection />
        </div>
      </div>
    </ThemeProvider>
  );
}
