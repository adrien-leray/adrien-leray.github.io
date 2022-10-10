import lume from "lume/mod.ts";
import windi from "lume/plugins/windi_css.ts";

const site = lume({
  src: "./src",
});

site.use(windi());

site.copy("favicon.ico");

export default site;
