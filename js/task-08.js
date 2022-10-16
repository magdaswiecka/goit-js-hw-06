const form = document.querySelector("form.login-form");
const emailInput = document.querySelector("form.login-form input[name=email]");
const passwordInput = document.querySelector("form.login-form input[name=password]");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  if(email.length === 0 || password.length === 0) {
    alert("Wszystkie pola są wymagane");
  } else {
    const formValues = {
      email: email,
      password: password
    };

    console.log(formValues);

    form.reset();
  }
});