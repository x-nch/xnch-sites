/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          25: '#fcfcfc',
          50: '#fafafa',
          75: '#f8f8f8',
          100: '#f5f5f5',
          150: '#f3f3f3',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          850: '#1a1a1a',
          900: '#171717',
        },
        accent: '#1e40af',

        // Public-site system, sampled from the xnchSystems design comp.
        // One saturated colour in the entire design — accent is the only hue.
        paper: {
          DEFAULT: '#f3f0e8',
          alt: '#ebeae2',
          alt2: '#e9e8df',
          card: '#f8f6ee',
        },
        ink: {
          DEFAULT: '#172321',
          soft: '#2b3634',
          line: '#3a4644',
        },
        brand: {
          DEFAULT: '#d84e33',
          deep: '#ae4732',
          tint: '#f28a6e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        // Eyebrow labels and metadata in the design are monospace, tracked out.
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        '4xl': ['2.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '5xl': ['3.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        '6xl': ['4.5rem', { lineHeight: '1.0', letterSpacing: '-0.04em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '88': '22rem',
        '96': '24rem',
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
      },
      maxWidth: {
        '4.5xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
      },
      boxShadow: {
        'light': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.02)',
        'border': 'inset 0 0 0 1px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}