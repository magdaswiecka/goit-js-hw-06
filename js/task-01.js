const liItems = document.querySelectorAll("ul#categories li.item");

console.log(`Number of categories: ${liItems.length}`);

for(const liItem of liItems) {
  const title = liItem.querySelector("h2").textContent
  const numElements = liItem.querySelectorAll("li").length
  console.log(`Category: ${title}`);
  console.log(`Elements: ${numElements}`)
}