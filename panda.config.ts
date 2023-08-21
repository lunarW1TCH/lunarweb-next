import { defineConfig, defineGlobalStyles } from '@pandacss/dev';
import globalCss from './app/global-styles';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './styles/create-panda-styles.ts',
  ],

  // Files to exclude
  exclude: [],

  hash: true,

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: {
            50: { value: '#f5e0d3' },
            100: { value: '#e5d1c5' },
            200: { value: '#d9baa7' },
            300: { value: '#cca38a' },
            400: { value: '#c5987c' },
            500: { value: '#bf8c6d' },
            600: { value: '#ac7e62' },
            700: { value: '#997057' },
            800: { value: '#86624c' },
            900: { value: '#604637' },
          },
          categories: {
            language: { value: '#008080' },
            library: { value: '#ff85a2' },
            tool: { value: '#aaaaaa' },
          },
          error: {
            background: { value: '#F8C8DC' },
            text: { value: '#990000' },
            border: { value: '#990000' },
          },
        },
        sizes: {},
        spacing: {
          xxs: { value: '2px' },
          xs: { value: '4px' },
          s: { value: '8px' },
          m: { value: '12px' },
          l: { value: '16px' },
          xl: { value: '20px' },
          xxl: { value: '40px' },
          xxxl: { value: '80px' },
        },
        radii: {
          xs: { value: '4px' },
          s: { value: '8px' },
          m: { value: '12px' },
          l: { value: '16px' },
        },
        fontSizes: {
          xs: { value: '12px' },
          s: { value: '16px' },
          m: { value: '20px' },
          l: { value: '28px' },
          xl: { value: '32px' },
          xxl: { value: '40px' },
        },
        fontWeights: {
          bold: { value: '700' },
        },
        borders: {
          accent: { value: '2px solid {colors.primary.700}' },
          accentError: { value: '2px solid {colors.error.border}' },
          negative: { value: '2px solid white' },
          subtle: { value: '1px solid {colors.primary.700}' },
          subtleNegative: { value: '1px solid white' },
        },
        shadows: {
          accent: { value: 'inset 0 0 6px rgba(0, 0, 0, 0.3)' },
          solid: { value: '3px 3px 0px 1px rgba(66, 68, 90, 0.5)' },
        },
      },
    },
    breakpoints: {
      s: '576px',
      m: '768px',
      l: '992px',
      xl: '1200px',
    },
  },

  globalCss,

  // The output directory for your css system
  outdir: 'styled-system',
});
