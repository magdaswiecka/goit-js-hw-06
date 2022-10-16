const input = document.querySelector("input#validation-input");

const maxLength = input.dataset["length"];

input.addEventListener("blur", () => {
  if(input.value.length > maxLength) {
    input.className = "invalid";
  } else {
    input.className = "valid";
  }
});