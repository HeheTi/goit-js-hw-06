const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const makeitemsArray = (array) => {
  return array.map((element) => {
    const item = document.createElement("li");
    item.textContent = `${element}`;
    item.classList.add("item");
    return item;
  });
};

const items = makeitemsArray(ingredients);

listEl.append(...items);
