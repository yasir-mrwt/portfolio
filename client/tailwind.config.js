/**
 * Tailwind CSS Configuration
 *
 * Tailwind scans these files for class names and generates CSS.
 * Only classes actually used in code are included in final bundle.
 */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Custom color palette
        primary: {
          50: "#eef2ff",
          600: "#4f46e5",
          700: "#4338ca",
        },
      },
      animation: {
        // Custom animations
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(79, 70, 229, 0.5)" },
          "100%": { boxShadow: "0 0 40px rgba(79, 70, 229, 0.8)" },
        },
      },
    },
  },
  plugins: [],
};
