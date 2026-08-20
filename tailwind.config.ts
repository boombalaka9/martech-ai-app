import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        serif: ['"Source Serif 4"', "Georgia", "serif"],
        sans: ['"Work Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        rk: {
          surface: "#f8f9fe",
          "surface-dim": "#d9dade",
          "surface-lowest": "#ffffff",
          "surface-low": "#f3f3f8",
          "surface-container": "#edeef2",
          "surface-high": "#e7e8ed",
          "surface-highest": "#e1e2e7",
          "on-surface": "#191c1f",
          "on-surface-variant": "#41474f",
          outline: "#727780",
          "outline-variant": "#c1c7d0",
          primary: "#00355a",
          "primary-container": "#004c7e",
          "on-primary": "#ffffff",
          "on-primary-container": "#88bdf5",
          secondary: "#775a00",
          "secondary-container": "#fec30a",
          "on-secondary-container": "#6d5200",
          "bg-neutral": "#F8FAFC",
          "text-primary": "#1E293B",
          "border-subtle": "#E2E8F0",
          gold: "#FFC40C",
          success: "#10B981",
          warning: "#F59E0B",
          danger: "#EF4444",
          info: "#3B82F6",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
