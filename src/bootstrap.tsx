import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import { GlobalStyles } from '@/styles/global';
import { ThemeSelectorProvider } from '@/contexts/theme';
import { I18nProvider } from './contexts/i18n';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeSelectorProvider>
      <I18nProvider>
        <Home />
      </I18nProvider>
      <GlobalStyles />
    </ThemeSelectorProvider>
  </React.StrictMode>
)
