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
        'organic-1': "60% 40% 30% 70% / 60% 30% 70% 40%",
        'organic-2': "70% 30% 70% 30% / 30% 70% 30% 70%",
        'organic-3': "40% 60% 40% 60% / 50% 40% 60% 50%",
        'organic-4': "50% 50% 30% 70% / 40% 60% 50% 50%",
    },
    boxShadow: {
        soft: "0 24px 60px -30px rgba(10, 10, 10, 0.15)",
        card: "0 20px 40px -24px rgba(10, 10, 10, 0.12)",
        'card-hover': "0 24px 70px rgba(15,23,42,0.08)",
        'yellow-glow': "0 35px 80px rgba(255,171,0,.18)",
        'glass': "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        'glass-hover': "0 12px 40px 0 rgba(31, 38, 135, 0.5)",
        'neumorphism': "20px 20px 60px #d1d9e6, -20px -20px 60px #ffffff",
        'neumorphism-pressed': "inset 20px 20px 60px #d1d9e6, inset -20px -20px 60px #ffffff",
        'brutalist': "8px 8px 0 0 #000",
        'brutalist-hover': "12px 12px 0 0 #000",
        'inner-glow': "inset 0 0 60px rgba(255, 171, 0, 0.1)",
    },
      backdropBlur: {
        'xs': '2px',
        'glass': '20px',
      },
      backgroundImage: {
        'gradient-mesh': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(139, 92, 246, 0.3), transparent), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(236, 72, 153, 0.2), transparent), radial-gradient(ellipse 70% 50% at 0% 0%, rgba(59, 130, 246, 0.2), transparent)',
        'aurora-gradient': 'linear-gradient(115deg, rgba(139, 92, 246, 0.4) 0%, rgba(236, 72, 153, 0.3) 25%, rgba(59, 130, 246, 0.3) 50%, rgba(16, 185, 129, 0.3) 75%, rgba(245, 158, 11, 0.4) 100%)',
        'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
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
        "blob": {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        "aurora": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255, 171, 0, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(255, 171, 0, 0.6)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out forwards",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "blob": "blob 7s infinite",
        "aurora": "aurora 60s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      backgroundSize: {
        "300%": "300% 300%",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}