/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./*.html", "./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Semantic tokens driven by CSS variables (see src/input.css :root / .light)
        ink: {
          DEFAULT: "rgb(var(--ink-950) / <alpha-value>)",
          950: "rgb(var(--ink-950) / <alpha-value>)",
          900: "rgb(var(--ink-900) / <alpha-value>)",
          800: "rgb(var(--ink-800) / <alpha-value>)",
          700: "rgb(var(--ink-700) / <alpha-value>)",
          600: "rgb(var(--ink-600) / <alpha-value>)",
        },
        bone: {
          DEFAULT: "rgb(var(--bone) / <alpha-value>)",
          muted: "rgb(var(--bone-muted) / <alpha-value>)",
          dim: "rgb(var(--bone-dim) / <alpha-value>)",
        },
        line: "rgb(var(--line) / <alpha-value>)",
        // `gold` = theme accent (xanthous in dark, burgundy in light) via CSS var
        gold: {
          DEFAULT: "rgb(var(--gold) / <alpha-value>)",
          soft: "#FF6A2A",
          deep: "#D84200",
        },
        // Fixed brand colors for poster-style blocks (same in both themes)
        xanthous: "#F7B538",
        burgundy: {
          DEFAULT: "#780116",
          deep: "#5A0011",
          soft: "#94122A",
        },
        cream: "#F7ECCF",
        sage: "#7FB389",
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        ancola: ['Ancola', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      maxWidth: {
        container: '1320px',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out-soft': 'cubic-bezier(0.65, 0.05, 0.36, 1)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        'marquee-slow': 'marquee 60s linear infinite',
        floaty: 'floaty 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
