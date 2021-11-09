const refs = {
  inputRef: document.querySelector("#font-size-control"),
  textRef: document.querySelector("#text"),
};

const changeTextSize = () => {
  refs.textRef.style.fontSize = `${inputRef.value}px`;
};
refs.inputRef.addEventListener("input", changeTextSize);

// const changeTextSize = (event) => {
//   textRef.style.fontSize = event.currentTarget.value + "px";
// };
