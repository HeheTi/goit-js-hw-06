const refs = {
  btnDecrement: document.querySelector('[data-action = "decrement"]'),
  btnIncrement: document.querySelector('button[data-action="increment"]'),
  counter: document.querySelector("#value"),
};

let counterValue = 0;

const takesCount = function () {
  if (refs.counter.textContent > 0) counterValue -= 1;
  refs.counter.textContent = counterValue;
};

const addCount = function () {
  if (refs.counter.textContent >= 0) counterValue += 1;
  refs.counter.textContent = counterValue;
};

refs.btnDecrement.addEventListener("click", takesCount);
refs.btnIncrement.addEventListener("click", addCount);
