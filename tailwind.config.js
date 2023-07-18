/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        "16/9": [16, 9],
      },
      fontFamily: {
        mont: ["var(--font-mont)"],
        notojp: ["var(--font-notojp)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-original":
          "linear-gradient(124deg, rgba(232, 252, 33, 0.46) 0%, rgba(232, 252, 33, 0.46) 14.286%,rgba(196, 218, 49, 0.46) 14.286%, rgba(196, 218, 49, 0.46) 28.572%,rgba(161, 185, 64, 0.46) 28.572%, rgba(161, 185, 64, 0.46) 42.858%,rgba(125, 151, 80, 0.46) 42.858%, rgba(125, 151, 80, 0.46) 57.144%,rgba(89, 117, 96, 0.46) 57.144%, rgba(89, 117, 96, 0.46) 71.43%,rgba(54, 84, 111, 0.46) 71.43%, rgba(54, 84, 111, 0.46) 85.716%,rgba(18, 50, 127, 0.46) 85.716%, rgba(18, 50, 127, 0.46) 100.002%),linear-gradient(316deg, rgb(248, 151, 43) 0%, rgb(248, 151, 43) 14.286%,rgb(246, 132, 46) 14.286%, rgb(246, 132, 46) 28.572%,rgb(243, 113, 49) 28.572%, rgb(243, 113, 49) 42.858%,rgb(241, 94, 52) 42.858%, rgb(241, 94, 52) 57.144%,rgb(239, 75, 55) 57.144%, rgb(239, 75, 55) 71.43%,rgb(236, 56, 58) 71.43%, rgb(236, 56, 58) 85.716%,rgb(234, 37, 61) 85.716%, rgb(234, 37, 61) 100.002%);",
        "gradient-works":
          "linear-gradient(148deg, rgba(242,121,20) 0%, rgba(255,187,51) 50%, rgba(242,121,20) 100%)",
      },
      fontSize: {
        large: "var(--large)",
        h1: "var(--h1)",
        h2: "var(--h2)",
        h3: "var(--h3)",
        h4: "var(--h4)",
        h5: "var(--h5)",
        h6: "var(--h6)",
        body: "var(--bady)",
      },
      colors: {
        dark: "var(--foreground-color)",
        light: "var(--background-color)",
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        Primary: "var(--Primary-color)",
        mute: "#a9a9a9",
        Light: "#fcfcfc",
        Dark: "#222",
      },
      animation: {
        "fade-in": "fadeIn 2s ease-in-out",
        "fade-out": "fadeOut 2s ease-in-out",
        bounceLeft: "bounceLeft 1s infinite",
        bounceRight: "bounceRight 1s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        bounceLeft: {
          "0%, 100%": {
            transform: "translateX(-15%)",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "none",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
          },
        },
        bounceRight: {
          "0%, 100%": {
            transform: "translateX(15%)",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "none",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
          },
        },
      },
    },
  },
  plugins: [],
};
