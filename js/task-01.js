const listCategoriesEl = document.querySelector("#categories");

const amountOfElements = [...listCategoriesEl.children];
console.log(`Number of categories: ${amountOfElements.length}`);

const array = amountOfElements.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.querySelectorAll("li").length}`);
});
