const withOpacity = (color) => {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${color}), ${opacityValue})`;
    }
    return `rgb(var(${color})`;
  };
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontSize: {
        "6xl": ["64px", "110%"],
        base: ["18px", "28px"],
        sm: ["15px", "24px"],
      },
      colors: {
        ink: withOpacity("--color-ink"),
        canvas: withOpacity("--color-canvas"),
        "accent-primary": withOpacity("--color-accent-primary"),
        "accent-secondary": withOpacity("--color-accent-secondary"),
        dim: withOpacity("--color-dim"),
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
