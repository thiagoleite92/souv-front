import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purpleLight: '#a881e6',
        purple: '#7450ac',
        purpleDark: '#523480',
        'gray-100': '#fbf9fe',
        'gray-200': '#afabb6',
        'gray-300': '#252529',
        'gray-400': '#171719',
        'gray-500': '#111112',
        'gray-600': '#0c0c0d',
        successLight: '#4e995e',
        successDark: '#2f723d',
        pink: '#db5bbf',
        orange: '#E07B67',
        yellow: '#BB9F3A',
        green: '#8CAD51',
        blue: '#7B94CB',
        pinkDark: '#251622',
        orangeDark: '#261A17',
        yellowDark: '#211E12',
        greenDark: '#1C2015',
        blueDark: '#1A1D23',
      },
      fontFamily: {
        sans: 'var(--font-inter)',
      },
    },
  },
  plugins: [],
};
export default config;
