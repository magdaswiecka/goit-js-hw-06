const input = document.querySelector("input#font-size-control");
const span = document.querySelector("span#text");

input.addEventListener("input", () => {
  span.style = `font-size: ${input.value}px`;
});