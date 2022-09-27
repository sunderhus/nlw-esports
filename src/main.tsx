import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import { GlobalStyles } from '@/styles/global';
import { ThemeSelectorProvider } from '@/contexts/themeProvider/ThemeSelectorProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeSelectorProvider>
      <Home />
      <GlobalStyles />
    </ThemeSelectorProvider>
  </React.StrictMode>
)
