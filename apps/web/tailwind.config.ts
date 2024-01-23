import { type Config } from "tailwindcss";

import baseConfig from "@ezisnap/tailwind-config";

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [baseConfig],
} satisfies Config;
