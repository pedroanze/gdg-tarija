/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        Background: "#eeeeee",
        "rojo-GDG": "#EA4335",
        "amarillo-GDG": "#F9AB00",
        "azul-GDG": "#4285F4",
        "verde-GDG": "#34A853",
        "Gray-900": "#202124",
        "Orange": "#F46831",
        "iwd-primary":"#165185",
        "iwd-secondary":"#CAE6FF",
        blue: {
          50: "#F0F5FE",
          100: "#DCE9FD",
          200: "#B6D0FB",
          300: "#8FB7F8",
          400: "#699EF6",
          500: "#4285F4",
          600: "#0E63F0",
          700: "#0B4DBB",
          800: "#083786",
          900: "#052151",
          950: "#031636",
        },
        red: {
          50: "#FBDEDB",
          100: "#F9CDC9",
          200: "#F6AAA4",
          300: "#F2887F",
          400: "#EE655A",
          500: "#EA4335",
          600: "#D12416",
          700: "#9E1B10",
          800: "#6C130B",
          900: "#390A06",
          950: "#1F0503",
        },
        yellow: {
          50: "#FFE7B2",
          100: "#FFE09D",
          200: "#FFD474",
          300: "#FFC74C",
          400: "#FFBA23",
          500: "#F9AB00",
          600: "#C18400",
          700: "#895E00",
          800: "#513700",
          900: "#191100",
          950: "#000000",
        },
        green: {
          50: "#AEE6BD",
          100: "#9EE1B0",
          200: "#7FD797",
          300: "#60CE7D",
          400: "#41C464",
          500: "#34A853",
          600: "#277D3E",
          700: "#195229",
          800: "#0C2714",
          900: "#000000",
          950: "#000000",
        },
      },
      keyframes: {
        'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
      },
      animation: {
        'border-spin': 'border-spin 10s linear infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
  safelist: [
    // Agrega las clases dinámicas que Tailwind no puede detectar
    'bg-rojo-GDG',
    'bg-amarillo-GDG',
    'bg-azul-GDG',
    'bg-verde-GDG',
    'bg-Gray-900',
    'bg-Orange',
    'text-rojo-GDG',
    'text-amarillo-GDG',
    'text-azul-GDG',
    'text-verde-GDG',
    'text-Gray-900',
    'text-Orange',
  ],
};
