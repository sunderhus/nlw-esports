import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyles } from '@/styles/global';
import { ThemeSelectorProvider } from '@/contexts/themeProvider/ThemeSelectorProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeSelectorProvider>
      <App />
      <GlobalStyles />
    </ThemeSelectorProvider>
  </React.StrictMode>
)
