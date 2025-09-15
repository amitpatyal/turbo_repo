import sharedConfig from "@repo/css/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  //...sharedConfig,
  content: [...sharedConfig.content],
  theme: {
    ...sharedConfig.theme,
    // extend: {
    //   // app-specific overrides
    //   colors: {
    //     brand: "#FF5722",
    //   },
    // },
  },
  plugins: [...sharedConfig.plugins],
};
