/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'

// https://vitejs.dev/config/
import federation, { VitePluginFederationOptions } from '@originjs/vite-plugin-federation'

const federationOptions: VitePluginFederationOptions ={
  name:'nlwesports',
  filename:'remoteEntry.js',
  exposes:{
    './Home':'./src/pages/Home'
  },
  shared:['react']
}

export default defineConfig({
  plugins: [react(), federation({
    name:'nlwesports',
    filename:'remoteEntry.js',
    exposes:{
      './Home':'./src/pages/Home'
    },
    shared:['react','react-dom']
  })],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    coverage:{
      provider:'istanbul',
      exclude: ['**/styles.tsx'],
    },
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },
})
