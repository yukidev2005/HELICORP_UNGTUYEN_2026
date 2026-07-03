import ColorSection from '@/components/ColorSection';
import Footer from './components/Footer';
import Header from './components/header';
import HeroSection from './components/HeroSection';
import HomeLayout from './components/layouts/HomeLayout';
import { ThemeProvider } from './components/ThemeProvider';
import { lazy, Suspense } from 'react';

const SwitchsSection = lazy(() => import('./components/Switchs'));
const SpecSection = lazy(() => import('./components/Spec'));
const FeatureSection = lazy(() => import('./components/Feature'));

export default function App() {
  return (
    <ThemeProvider defaultTheme='system' storageKey='vite-theme'>
      <HomeLayout>
        <div className='min-h-dvh w-full bg-background relative text-foreground'>
          <Header />
          <div className='pt-20'>
            <HeroSection />
            <ColorSection />
            <Suspense fallback={null}>
              <FeatureSection />
            </Suspense>
            <Suspense fallback={null}>
              <SpecSection />
            </Suspense>
            <Suspense fallback={null}>
              <SwitchsSection />
            </Suspense>
            <Footer />
          </div>
        </div>
      </HomeLayout>
    </ThemeProvider>
  );
}
