const nameInput = document.querySelector("input#name-input");
const nameOutput = document.querySelector("span#name-output");

nameInput.addEventListener("input", (event) => {
  const value = nameInput.value;

  if (value.length > 0) {
    nameOutput.textContent = value;
  } else {
    nameOutput.textContent = "Anonymous";
  }
});
