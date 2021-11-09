const refs = {
  textInput: document.querySelector("#name-input"),
  textShow: document.querySelector("#name-output"),
};

refs.textInput.addEventListener(
  "input",
  () =>
    (refs.textShow.textContent = refs.textInput.value
      ? refs.textInput.value
      : "Anonymous")
);

refs.textInput.addEventListener("blur", () => (refs.textInput.value = ""));
