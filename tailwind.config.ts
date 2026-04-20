import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#070A0F",
        panel: "#101826",
        accentGreen: "#16E08B",
        accentPurple: "#8B5CF6",
        muted: "#9AA6B2"
      },
      boxShadow: {
        glass: "0 12px 32px rgba(0, 0, 0, 0.28)",
        glow: "0 0 40px rgba(139, 92, 246, 0.3)"
      },
      backgroundImage: {
        "mesh-gradient": "radial-gradient(circle at 20% 15%, rgba(22, 224, 139, 0.18), transparent 35%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.2), transparent 38%), radial-gradient(circle at 50% 80%, rgba(22, 224, 139, 0.1), transparent 34%)"
      }
    }
  },
  plugins: []
} satisfies Config;
