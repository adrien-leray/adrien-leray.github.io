import lume from "lume/mod.ts";
import md from "https://jspm.dev/markdown-it-container";

const site = lume({
  src: "./src",
}, {
  markdown: {
    plugins: [md],
  },
});

export default site;
