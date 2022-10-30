import { domReady } from "../helpers/dom.ts";

const applyAnimation = () => {
  const helloEl = document.querySelector<HTMLSpanElement>(`#hello-world`);
  helloEl?.classList.add(
    "rotate-animation",
  );
};

domReady(applyAnimation);
