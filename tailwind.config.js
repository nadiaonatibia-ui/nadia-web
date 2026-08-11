export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        crudo: "#F5F0E8",
        "crudo-dark": "#1A1A2E",
        ink: "#241129",
        vino: "#7A1440",
        "vino-2": "#611033",
        rojo: "#D2491F",
        coral: "#E8794E",
        teal: "#39B98E",
        rosa: "#F29CC3",
        hueso: "#F3EFC2",
        "gray-warm": "#6B6B6B",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
