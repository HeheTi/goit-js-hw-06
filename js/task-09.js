function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonRef = document.querySelector(".change-color");
const colorRef = document.querySelector(".color");

const changeBgColor = function () {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorRef.textContent = color;
};

buttonRef.addEventListener("click", changeBgColor);
