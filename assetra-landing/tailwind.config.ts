import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0b0b10",
          soft: "#12121a",
        },
        card: "#141424",
        text: {
          DEFAULT: "#f5f6ff",
          muted: "#cfd0e6",
          softer: "#aeb0cc",
        },
        brand: {
          from: "#6a5cff",
          mid: "#7b5cff",
          to: "#ff5fc0",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(2,6,23,0.45)",
        glowViolet: "0 10px 24px rgba(123,92,255,.4)",
        glowPink: "0 6px 16px rgba(255,95,192,.28)"
      },
      borderRadius: {
        xl2: "22px"
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" }
        }
      },
      animation: {
        floaty: "floaty 3s ease-in-out infinite"
      }
    }
  },
  plugins: []
} satisfies Config;