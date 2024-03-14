/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    borderRadius: {
      card: "22.6px",
      "primary-button": "50px",
      "check-button": "8px",
      "wide-check-button": "16px",
    },
    fontWeight: {
      regular: "400",
      medium: "500",
      semibold: "600",
    },
    fontSize: {
      xs: [
        "12px",
        {
          lineHeight: "14.32px",
        },
      ],
      sm: [
        "14px",
        {
          lineHeight: "16.71px",
        },
      ],
      base: [
        "16px",
        {
          lineHeight: "19.09px",
        },
      ],
      lg: [
        "18px",
        {
          lineHeight: "21.48px",
        },
      ],
      xl: [
        "20px",
        {
          lineHeight: "23.87px",
        },
      ],
      "2xl": [
        "24px",
        {
          lineHeight: "28.64px",
        },
      ],
      "3xl": [
        "32px",
        {
          lineHeight: "38.19px",
        },
      ],
    },
    colors: {
      primary: "#EC9D26",
      warm50: "#FFFFFF",
      warm75: "#F2F2F2",
      warm100: "#E6E6E6",
      warm200: "#CCCCCC",
      warm300: "#B3B3B3",
      warm400: "#999999",
      warm500: "#808080",
      warm600: "#666666",
      warm700: "#4D4D4D",
      warm800: "#333333",
      warm900: "#1A1A1A",
      error: "#E35858",
    },
  },
  plugins: [],
};
