// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unfonts from 'unplugin-fonts/vite'


// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
    },
  },
  esbuild: {
    // https://github.com/vitejs/vite/issues/8644#issuecomment-1159308803
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-macros', 'babel-plugin-styled-components'],
      },
    }),
    Unfonts({
      custom: {
        display: 'swap',
        families: {
          'Archivo': {
            src: './src/assets/fonts/Archivo-*',
            transform(font) {
              if(font.basename === 'Archivo-Bold'){
                font.weight = 700;
              }
              if(font.basename === 'Archivo-Regular'){
                font.weight = 400;
              }
              if(font.basename === 'Archivo-SemiBold'){
                font.weight = 500;
              }
              return font;
            },
          },
          'Caveat': {
            src: './src/assets/fonts/Caveat-Bold*'
          },
          'Muli': {
            src: './src/assets/fonts/Muli-Black*'
          }
        }
        ,
        preload: true,
      }
    })
  ],
})