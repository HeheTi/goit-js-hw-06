const refs = {
  textInput: document.querySelector("#name-input"),
  textShow: document.querySelector("#name-output"),
};

refs.textInput.addEventListener(
  "input",
  () =>
    (refs.textShow.textContent = textInput.value
      ? textInput.value
      : "Anonymous")
);

refs.textInput.addEventListener("blur", () => (textInput.value = ""));
