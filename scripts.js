const main = document.querySelector(".main");
const text = main.querySelector("h1");
const shadowLength = 500;

function textShadow(event) {
  const { offsetWidth: width, offsetHeight: height } = main;
  let { offsetX: x, offsetY: y } = event;

  if (this !== event.target) {
    x += event.target.offsetLeft;
    y += event.target.offsetTop;
  }

  const shadowWidth = Math.round((x / width) * shadowLength - shadowLength / 2);
  const shadowHeight = Math.round(
    (y / height) * shadowLength - shadowLength / 2
  );

  text.style.textShadow = `
    ${shadowWidth}px ${shadowHeight}px 0 rgba(255,0,255,0.7),
    ${-shadowWidth}px ${shadowHeight}px 0 rgba(0,255,255,0.7),
    ${shadowHeight}px ${-shadowWidth}px 0 rgba(0,255,0,0.7),
    ${-shadowHeight}px ${shadowWidth}px 0 rgba(0,0,255,0.7)
  `;
}

main.addEventListener("mousemove", textShadow);
