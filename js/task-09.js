function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  buttonRef: document.querySelector(".change-color"),
  colorRef: document.querySelector(".color"),
};

const changeBgColor = function () {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  refs.colorRef.textContent = color;
};

refs.buttonRef.addEventListener("click", changeBgColor);
