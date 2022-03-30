let panel, start, frames;

frames = 0;

const create = () => {
  const div = document.createElement("div");

  div.style.position = "fixed";
  div.style.right = "0px";
  div.style.top = "0px";
  div.style.width = "50px";
  div.style.height = "50px";
  div.style.backgroundColor = "black";
  div.style.color = "white";

  return div;
};

const tick = () => {
  frames++;

  const now = performance.now();
  if (now >= start + 1000) {
    panel.innerText = frames;
    frames = 0;
    start = now;
  }
  requestAnimationFrame(tick);
};

const init = (parent = document.body) => {
  panel = create();
  window.requestAnimationFrame(() => {
    parent.appendChild(panel);
    start = performance.now();
    tick();
  });
};

init();
