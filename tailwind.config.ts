const flowbite = require("flowbite-react/tailwind");
import { text } from "stream/consumers";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        digifly: {
          green: {
            DEFAULT: "rgba(73, 189, 136, 1)",
            lighter: "rgba(73, 189, 136, 0.1)",
          },
          purple: {
            DEFAULT: "rgba(109, 92, 188, 1)",
            lighter: "rgba(109, 92, 188, 0.5)",
          },
          text: {
            DEFAULT: "rgba(26, 26, 26, 1)",
          },
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
