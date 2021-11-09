const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

const changeTextSize = (event) => {
  textRef.style.fontSize = `${inputRef.value}px`;
};
inputRef.addEventListener("input", changeTextSize);

// const changeTextSize = (event) => {
//   textRef.style.fontSize = event.currentTarget.value + "px";
// };
