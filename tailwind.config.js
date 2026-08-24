/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        brand: {
          // Signature Accent (5% Website / 3% ERP)
          yellow: {
            DEFAULT: "#FFAB00",
            hover: "#E69A00",
            light: "rgba(255, 171, 0, 0.1)",
            glow: "rgba(255, 171, 0, 0.15)",
          },
          // Dominant Background (75% Website / 82% ERP)
          white: "#FFFFFF",
          // Dark Neutrals & Surfaces (20% Website / 15% ERP)
          neutral: {
            950: "#030303",
            900: "#0A0A0A", // Main High-Contrast Text
            800: "#1A1A1A", // Primary Dark Neutral Surface
            700: "#2A2A2A", // Secondary Dark Surface
            600: "#404040", // Muted Text
            500: "#666666", // Placeholder / Subtitles
            400: "#A3A3A3", // Disabled States
            300: "#D4D4D4", // Secondary Borders
            200: "#E5E5E5", // Primary Borders & Dividers
            100: "#F5F5F5", // Secondary Backgrounds
            50: "#FAFAFA",  // Soft Card Fill
            25: "#FBFBFB",
          },
        },
        },
        backgroundColor: {
          'hero': '#FFFFFF',
          'transformation': '#FFFDF8',
          'core-modules': '#FAFBFC',
          'platform-action': '#FFFFFF',
          'pricing': '#FFFDF8',
          'implementation': '#FAFBFC',
          'faq': '#FFFFFF',
          'contact': '#FFF8EA',
          'footer': '#F8F9FB',
        },
        borderColor: {
          brand: {
            'neutral-50': '#FAFAFA',
            'neutral-100': '#F5F5F5',
            'neutral-200': '#E5E5E5',
            'neutral-300': '#D4D4D4',
            'neutral-400': '#A3A3A3',
            'neutral-500': '#666666',
            'neutral-600': '#404040',
            'neutral-700': '#2A2A2A',
            'neutral-800': '#1A1A1A',
            'neutral-900': '#0A0A0A',
          },
        },
        fontFamily: {
          sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '128': '32rem',
        '144': '36rem',
      },
    borderRadius: {
        xl: "1.5rem",
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
        '2xl': "1.75rem",
        '3xl': "2rem",
        '4xl': "3rem",
        '6xl': "24px",
    },
    boxShadow: {
        soft: "0 24px 60px -30px rgba(10, 10, 10, 0.15)",
        card: "0 20px 40px -24px rgba(10, 10, 10, 0.12)",
        'card-hover': "0 24px 70px rgba(15,23,42,0.08)",
        'yellow-glow': "0 35px 80px rgba(255,171,0,.18)",
    },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out forwards",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}