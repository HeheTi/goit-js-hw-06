function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  boxes: document.querySelector("#boxes"),
  btnAdd: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  input: document.querySelector("input"),
};

const createBoxes = function (value) {
  const arrDiv = [];
  let size = 30;
  for (let i = 1; i <= value; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    size += 10;
    arrDiv.push(box);
  }
  refs.boxes.append(...arrDiv);
};

const getValue = () => {
  const value = refs.input.value;
  if (!value) return;
  if (+refs.input.max < value) {
    alert("Enter the amount up to 100");
    return;
  }
  createBoxes(value);
  refs.input.addEventListener("focus", () => (refs.input.value = ""));
};
refs.btnAdd.addEventListener("click", getValue);

refs.btnDestroy.addEventListener("click", () => {
  refs.boxes.innerHTML = "";
  refs.input.value = "";
});

// refs.btnAdd.addEventListener("click", () => createBoxes(refs.input.value));
