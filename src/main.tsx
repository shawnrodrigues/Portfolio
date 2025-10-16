import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from './contexts/ThemeContext.tsx';
import { FestiveProvider } from './contexts/FestiveContext.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <FestiveProvider>
        <App />
      </FestiveProvider>
    </ThemeProvider>
  </StrictMode>
);
