const inputRef = document.querySelector("#validation-input");

const getChangeColor = () => {
  if (+inputRef.dataset.length === inputRef.value.length) {
    update("valid", "invalid");
  } else {
    update("invalid", "valid");
  }
};

function update(add, rem) {
  inputRef.classList.add(add);
  inputRef.classList.remove(rem);
}

inputRef.addEventListener("blur", getChangeColor);

inputRef.addEventListener("focus", () => {
  inputRef.value = "";
});
