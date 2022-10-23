function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const spanColorValue = document.querySelector("span.color");
const changeColorButton = document.querySelector("button.change-color");


changeColorButton.addEventListener("click", () => {
  const randomColor = getRandomHexColor();

  body.style = `background-color: ${randomColor};`;
  spanColorValue.textContent = randomColor;
});