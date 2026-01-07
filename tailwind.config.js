module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./components/**/*.{html,js}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Confident foundation, premium brand presence
        primary: {
          DEFAULT: "#1A1A1A", // gray-900
          50: "#F7F7F7", // gray-50
          100: "#E3E3E3", // gray-100
          200: "#C8C8C8", // gray-200
          300: "#A4A4A4", // gray-300
          400: "#818181", // gray-400
          500: "#666666", // gray-500
          600: "#515151", // gray-600
          700: "#434343", // gray-700
          800: "#383838", // gray-800
          900: "#1A1A1A", // gray-900
        },
        // Secondary Colors - Warm canvas, sophisticated backdrop
        secondary: {
          DEFAULT: "#F8F6F3", // warm-gray-50
          50: "#F8F6F3", // warm-gray-50
          100: "#F0EDE8", // warm-gray-100
          200: "#E5E0D8", // warm-gray-200
          300: "#D4CEC3", // warm-gray-300
          400: "#C3BBAD", // warm-gray-400
          500: "#B2A898", // warm-gray-500
        },
        // Accent Colors - Refined gold, selective emphasis moments
        accent: {
          DEFAULT: "#C9A96E", // gold-500
          50: "#FAF7F0", // gold-50
          100: "#F3EDD9", // gold-100
          200: "#E8D9B3", // gold-200
          300: "#DCC58D", // gold-300
          400: "#D0B167", // gold-400
          500: "#C9A96E", // gold-500
          600: "#B08F4E", // gold-600
          700: "#8A6F3D", // gold-700
          800: "#6B5530", // gold-800
          900: "#4D3E22", // gold-900
        },
        // Background Colors
        background: "#FFFFFF", // white
        surface: "#F5F5F5", // gray-100
        // Text Colors
        text: {
          primary: "#2D2D2D", // gray-800
          secondary: "#6B6B6B", // gray-500
        },
        // Status Colors
        success: {
          DEFAULT: "#2D5A27", // green-800
          50: "#E8F5E7", // green-50
          100: "#C8E6C5", // green-100
          200: "#A5D6A1", // green-200
          300: "#81C67D", // green-300
          400: "#66B661", // green-400
          500: "#4CAF50", // green-500
          600: "#43A047", // green-600
          700: "#388E3C", // green-700
          800: "#2D5A27", // green-800
        },
        warning: {
          DEFAULT: "#8B4513", // brown-700
          50: "#FDF5E6", // brown-50
          100: "#F9E5C1", // brown-100
          200: "#F4D49A", // brown-200
          300: "#EFC373", // brown-300
          400: "#D4A056", // brown-400
          500: "#B8813A", // brown-500
          600: "#A06B2E", // brown-600
          700: "#8B4513", // brown-700
        },
        error: {
          DEFAULT: "#8B2635", // red-800
          50: "#FFEBEE", // red-50
          100: "#FFCDD2", // red-100
          200: "#EF9A9A", // red-200
          300: "#E57373", // red-300
          400: "#EF5350", // red-400
          500: "#F44336", // red-500
          600: "#E53935", // red-600
          700: "#D32F2F", // red-700
          800: "#8B2635", // red-800
        },
      },
      fontFamily: {
        headline: ['Playfair Display', 'serif'],
        body: ['Source Sans Pro', 'sans-serif'],
        cta: ['Montserrat', 'sans-serif'],
        accent: ['Crimson Text', 'serif'],
      },
      boxShadow: {
        subtle: '0 4px 20px rgba(26, 26, 26, 0.08)',
        elevation: '0 8px 32px rgba(26, 26, 26, 0.12)',
      },
      transitionDuration: {
        base: '300ms',
      },
      transitionTimingFunction: {
        'out-smooth': 'cubic-bezier(0.33, 1, 0.68, 1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
      },
      lineHeight: {
        'extra-tight': '1.1',
        'extra-loose': '2',
      },
      animation: {
        'fadeIn': 'fadeIn 300ms ease-out forwards',
        'slideUp': 'slideUp 400ms ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}