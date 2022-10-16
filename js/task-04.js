let counterValue = 0;

function updateCounter() {
  const span = document.querySelector("span#value");

  span.textContent = counterValue;
}


const buttons = document.querySelectorAll("div#counter button");

const firstButton = document.querySelector("div#counter button[data-action=decrement]")
const secondButton = document.querySelector("div#counter button[data-action=increment]")

firstButton.addEventListener("click", () => {
  counterValue = counterValue - 1;
  updateCounter();
});

secondButton.addEventListener("click", () => {
  counterValue = counterValue + 1;
  updateCounter();
});