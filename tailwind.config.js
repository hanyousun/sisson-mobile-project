/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "screen-height": "calc(var(--vh, 1vh) * 100)",
      },
      colors: {
        bgColor: {
          1: "rgba(0, 0, 0, 0.85)",
          2: "rgba(0, 0, 0, 0.6)",
          3: "rgba(0, 0, 0, 0.5)",
          4: "rgba(0, 0, 0, 0.2)",
          5: "rgba(0, 0, 0, 0.15)",
          6: "#2B2B2B",
          7: "#222222",
          8: "#262626",
          9: "#333333",
        },
        whColor: {
          1: "rgba(255, 255, 255, 0.9)",
          2: "rgba(255, 255, 255, 0.8)",
          3: "rgba(255, 255, 255, 0.7)",
          4: "rgba(255, 255, 255, 0.6)",
          5: "rgba(255, 255, 255, 0.55)",
          6: "rgba(255, 255, 255, 0.4)",
          7: "rgba(255, 255, 255, 0.3)",
          8: "rgba(255, 255, 255, 0.25)",
          9: "rgba(255, 255, 255, 0.2)",
          10: "rgba(255, 255, 255, 0.15)",
          11: "rgba(255, 255, 255, 0.13)",
          12: "rgba(255, 255, 255, 0.1)",
          13: "rgba(255, 255, 255, 0.05)",
        },
        primary: {
          1: "#4DDEBD",
          2: "rgba(99, 250, 215, 1)",
          3: "rgba(99, 250, 215, 0.8)",
          4: "rgba(99, 250, 215, 0.6)",
          5: "rgba(99, 250, 215, 0.2)",
          6: "linear-gradient(180deg, #3CDCB7 0%, #25DFB5 80.36%)",
          7: "linear-gradient(180deg, #4EECE2 0%, #4EECD0 26%, #38DCB6 100%)",
          8: "rgba(90, 233, 200, 1)",
          9: "rgba(90, 233, 200, 0.7)",
          10: "rgba(90, 233, 200, 0.5)",
          11: "rgba(90, 233, 200, 0.1)",
        },
        point: {
          1: "rgba(248, 255, 168, 1)",
          2: "rgba(248, 255, 168, 0.75)",
          3: "rgba(248, 255, 168, 0.4)",
          4: "#FFFDCC",
          5: "linear-gradient(217.94deg, #FFE587 5.48%, #FFA05B 88.66%)",
        },
      },
      fontSize: {
        15: ["0.9375rem"],
        29: [
          "1.8125rem",
          {
            lineHeight: "2.5625rem",
          },
        ],
      },
      boxShadow: {
        innerStyle: "inset -20px -60px 40px 0px rgba(0, 0, 0, 1)",
      },
    },
    fontFamily: {
      NotoSansKR: ["NotoSansKR"],
    },
  },
  plugins: [],
};
