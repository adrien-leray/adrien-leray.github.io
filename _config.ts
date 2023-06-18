import lume from "lume/mod.ts";
import windi from "lume/plugins/windi_css.ts";
import inline from "lume/plugins/inline.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import svgo from "lume/plugins/svgo.ts";
import esbuild from "lume/plugins/esbuild.ts";
import sourceMaps from "lume/plugins/source_maps.ts";
import metas from "lume/plugins/metas.ts";

// Modules plugin configuration
const modules = {
  pagesExtensions: [".page.js", ".page.ts"],
};

const site = lume({
  src: "./src",
}, { modules });

site.use(windi({
  config: {
    theme: {
      extend: {
        fontFamily: {
          sans: ["Work Sans", "ui-sans-serif", "system-ui"],
          serif: ["Work Sans"],
          mono: ["Work Sans", "ui-monospace", "SFMono-Regular"],
          display: ["Work Sans"],
          body: ["Work Sans"],
        },
        lineHeight: {
          "title": "4rem",
        },
      },
      colors: {
        // LIGHT
        "primary": "#525F77",
        "primary-50": "#4977C2",
        "on-primary": "#FFFFFF",
        "secondary": "#5C5E65",
        "on-secondary": "#FFFFFF",
        "tertiary": "#665B66",
        "on-tertiary": "#FFFFFF",
        "error": "#BA1A1A",
        "on-error": "#FFFFFF",
        "primary-container": "#D7E2FF",
        "secondary-container": "#E1E2EA",
        "tertiary-container": "#EEDEEB",
        "error-container": "#FFDAD6",
        "on-primary-container": "#0F1B31",
        "on-secondary-container": "#191C21",
        "on-tertiary-container": "#211922",
        "on-error-container": "#410002",
        "background": "#fafafa;",
        "on-background": "#000",
        "surface": "#fafafa;",
        "on-surface": "#000",
        "surface-variant": "#E4E2E5",
        "on-surface-variant": "#464649",
        "outline": "#77777A",
        // DARK
        "d-primary": "#BAC7E3",
        "d-secondary": "#C5C6CE",
        "d-tertiary": "#D1C2CF",
        "d-error": "#FFB4AB",
        "d-on-primary": "#243047",
        "d-on-secondary": "#2E3036",
        "d-on-tertiary": "#372D37",
        "d-on-error": "#690005",
        "d-primary-container": "#3B475F",
        "d-secondary-container": "#44474D",
        "d-tertiary-container": "#4E444E",
        "d-error-container": "#93000A",
        "d-on-primary-container": "#D7E2FF",
        "d-on-secondary-container": "#E1E2EA",
        "d-on-tertiary-container": "#EEDEEB",
        "d-on-error-container": "#FFB4AB",
        "d-background": "#1B1B1C",
        "d-on-background": "#E5E2E3",
        "d-surface": "#1B1B1C",
        "d-on-surface": "#E5E2E3",
        "d-surface-variant": "#464649",
        "d-on-surface-variant": "#C7C6C9",
        "d-outline": "#919093",
      },
    },
  },
}));

site.use(metas());
site.use(svgo());
site.use(inline());
site.use(minifyHTML());

site.use(esbuild({
  extensions: [".ts", ".js"],
  options: {
    bundle: true,
    format: "esm",
    minify: false,
    keepNames: true,
    platform: "browser",
    target: "esnext",
    incremental: true,
    treeShaking: true,
  },
}));
site.use(sourceMaps());

site.copy("favicon.ico");

export default site;
