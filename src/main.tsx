import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router';
import { Toaster } from './components/ui/sonner.tsx';
import ReactQueryProvider from '@/components/ReactQueryProvider.tsx';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <BrowserRouter>
    <ReactQueryProvider>
      <App />
      <Toaster />
    </ReactQueryProvider>
  </BrowserRouter>,
  // </StrictMode>,
);
