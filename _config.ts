import lume from "lume/mod.ts";

const site = lume({
  src: "./src",
});

site.copy("favicon.ico");

export default site;
