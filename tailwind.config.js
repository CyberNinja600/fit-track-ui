import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Your existing primary scale
        primary: "#a2c9ff",

        // New theme colors
        "on-tertiary-container": "#452000",
        "on-background": "#dce2f7",
        "primary-fixed-dim": "#a2c9ff",
        "outline": "#8a919e",
        "on-primary": "#00315c",
        "surface-container-highest": "#2e3544",
        "surface-container": "#191f2e",
        "inverse-on-surface": "#2a3040",
        "surface": "#0c1321",
        "on-tertiary-fixed": "#301400",
        "secondary": "#c2c5db",
        "on-secondary": "#2b3040",
        "on-primary-fixed-variant": "#004881",
        "tertiary": "#ffb783",
        "secondary-fixed-dim": "#c2c5db",
        "inverse-primary": "#0060aa",
        "primary-fixed": "#d3e4ff",
        "outline-variant": "#404753",
        "error-container": "#93000a",
        "tertiary-container": "#df7404",
        "on-surface-variant": "#c0c7d5",
        "surface-elevated": "#0D1526",
        "on-secondary-fixed-variant": "#424658",
        "on-secondary-container": "#b0b4c9",
        "surface-dim": "#0c1321",
        "surface-stroke": "#1E293B",
        "tertiary-fixed-dim": "#ffb783",
        "on-tertiary": "#4f2500",
        "background": "#0c1321",
        "on-error": "#690005",
        "on-tertiary-fixed-variant": "#703700",
        "inverse-surface": "#dce2f7",
        "accent-warning": "#F59E0B",
        "surface-container-lowest": "#070e1c",
        "primary-container": "#2593f8",
        "on-primary-fixed": "#001c38",
        "surface-tint": "#a2c9ff",
        "surface-bright": "#333949",
        "on-error-container": "#ffdad6",
        "accent-success": "#10B981",
        "error": "#ffb4ab",
        "surface-container-high": "#232a39",
        "on-secondary-fixed": "#161b2b",
        "surface-variant": "#2e3544",
        "secondary-container": "#424658",
        "tertiary-fixed": "#ffdcc5",
        "on-surface": "#dce2f7",
        "on-primary-container": "#002b50",
        "surface-container-low": "#151b2a",
        "secondary-fixed": "#dee1f7",
      },

      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },

      spacing: {
        "margin-mobile": "20px",
        "unit": "4px",
        "max-width": "1280px",
        "margin-desktop": "48px",
        "gutter": "16px",
      },

      fontFamily: {
        "data-mono": ["JetBrains Mono", "monospace"],
        "headline-lg": ["Hanken Grotesk", "sans-serif"],
        "display-lg": ["Hanken Grotesk", "sans-serif"],
        "headline-lg-mobile": ["Hanken Grotesk", "sans-serif"],
        "label-sm": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
      },

      fontSize: {
        "headline-lg": [
          "32px",
          { lineHeight: "40px", fontWeight: "700" },
        ],
        "display-lg": [
          "48px",
          {
            lineHeight: "56px",
            letterSpacing: "-0.02em",
            fontWeight: "800",
          },
        ],
        "data-mono": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0.02em",
            fontWeight: "500",
          },
        ],
        "headline-lg-mobile": [
          "24px",
          { lineHeight: "32px", fontWeight: "700" },
        ],
        "label-sm": [
          "12px",
          { lineHeight: "16px", fontWeight: "600" },
        ],
        "body-md": [
          "16px",
          { lineHeight: "24px", fontWeight: "400" },
        ],
      },

      backgroundImage: {
        grid: [
          "linear-gradient(to right, #1E293B 1px, transparent 1px)",
          "linear-gradient(to bottom, #1E293B 1px, transparent 1px)",
        ].join(", "),
      },

      backgroundSize: {
        "grid-size": "40px 40px",
      },

      boxShadow: {
        "input-focus": "0 0 0 2px rgba(37, 147, 248, 0.2)",
      },

      keyframes: {
        blink: {
          "from, to": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        scanlines: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(10px)" },
        },
        scan: {
          "0%": { top: "0%" },
          "100%": { top: "100%" },
        },
      },

      animation: {
        blink: "blink 1s step-end infinite",
        scanlines: "scanlines 0.15s linear infinite",
        scan: "scan 8s linear infinite",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".material-symbols-outlined": {
          "font-variation-settings": "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
          display: "inline-block",
          "vertical-align": "middle",
        },
        ".terminal-cursor::after": {
          content: "'_'",
          animation: "blink 1s step-end infinite",
        },
        ".drag-preview": {
          opacity: "0.5",
          cursor: "grabbing",
        },
        ".custom-scrollbar::-webkit-scrollbar": {
          height: "6px",
          width: "6px",
        },
        ".custom-scrollbar::-webkit-scrollbar-track": {
          background: "#0c1321",
        },
        ".custom-scrollbar::-webkit-scrollbar-thumb": {
          background: "#404753",
          "border-radius": "10px",
        },
        ".custom-scrollbar::-webkit-scrollbar-thumb:hover": {
          background: "#a2c9ff",
        },
        ".bento-grid": {
          display: "grid",
          "grid-template-columns": "repeat(12, 1fr)",
          gap: "24px",
        },
        ".glitch-hover:hover": {
          "text-shadow": "2px 0 #2593f8, -2px 0 #df7404",
        },
        ".chart-bar": {
          transition: "height 1s cubic-bezier(0.4, 0, 0.2, 1)",
        },
        ".terminal-grid": {
          "background-image": "linear-gradient(rgba(30, 41, 59, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 41, 59, 0.2) 1px, transparent 1px)",
          "background-size": "40px 40px",
        },
        ".scanline": {
          "width": "100%",
          "height": "2px",
          "background": "rgba(162, 201, 255, 0.1)",
          "position": "absolute",
          "animation": "scan 8s linear infinite",
          "z-index": "10",
          "pointer-events": "none",
        },
        "@keyframes blink": {
            "from, to": { opacity: "1" },
            "50%": { opacity: "0" },
        }
      });
    }),
  ],
};
