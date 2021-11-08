const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "JIT",
  theme: {
    extend: {},
  },
  purge: {
    mode: "all",
    content: ["./Web/View/**/*.hs"],
  },
  plugins: [require("@tailwindcss/forms")],
};
