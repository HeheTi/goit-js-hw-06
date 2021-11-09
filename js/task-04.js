const btnDecrement = document.querySelector('[data-action = "decrement"]');
console.log("🚀 ~ btnDecrement", btnDecrement);

const btnIncrement = document.querySelector('button[data-action="increment"]');
console.log("🚀 ~ btnIncrement", btnIncrement);

const counter = document.querySelector("#value");

let counterValue = 0;

const takesCount = function () {
  if (counter.textContent > 0) counterValue -= 1;
  counter.textContent = counterValue;
};

const addCount = function () {
  if (counter.textContent >= 0) counterValue += 1;
  counter.textContent = counterValue;
};

btnDecrement.addEventListener("click", takesCount);
btnIncrement.addEventListener("click", addCount);
