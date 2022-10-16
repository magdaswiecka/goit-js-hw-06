const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector("ul#ingredients");

const liList = [];

for (const i of ingredients) {
  const li = document.createElement("li");
  li.textContent = i;
  li.className = "item";

  liList.push(li);
}

ul.append(...liList);
