const textInput = document.querySelector("#name-input");
const textShow = document.querySelector("#name-output");

textInput.addEventListener("input", () => {
  textShow.textContent = textInput.value ? textInput.value : "Anonymous";
});

textInput.addEventListener("blur", () => (textInput.value = ""));
