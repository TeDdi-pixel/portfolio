module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        bp353: "353px",
        bp461: "461px",
        bp500: "500px",
        bp632: "632px",
        bp936: "936px",
        bp1050: "1050px",
        bp1232: "1232px",
        bp1296: "1296px",
        bp1386: "1386px",
      },
      colors: {
        darkGreen: "hsl(var(--dark-green))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        purple: "hsl(var(--purple))",
        texture: "hsl(var(--green))",
        pink: "hsl(var(--pink))",
        background: "hsl(var(--background))",
        background2: "hsl(var(--background2))",
        foreground: "hsl(var(--foreground))",
        text: {
          DEFAULT: "hsl(var(--text))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        custom: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;",
      },
      keyframes: {
        scrollBackground: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "100% 100%" },
        },
        scrollBackground2: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "100% -100%" },
        },
        scrollBackground3: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "-100% 100%" },
        },
      },
      animation: {
        scrollBackground: "scrollBackground 80s linear infinite",
        scrollBackground2: "scrollBackground2 80s linear infinite",
        scrollBackground3: "scrollBackground3 80s linear infinite",
        "spin-slow": "spin 3s linear infinite",
        "spin-fast": "spin 0.5s linear infinite",
      },
    },
  },
};
