const form = document.querySelector("form");
form.setAttribute("novalidate", "");

const emailInput = document.querySelector("input");

console.log(emailInput);

emailInput.addEventListener(
  "blur",
  (event) => validateField(event.target),
  true
);

const validateField = (field) => {
  const error = hasError(field);

  if (error) {
    showError(field, error);
    return;
  }

  removeError(field);
};

const hasError = (field) => {
  if (field.validity.valid) return;
  return "Please enter a valid email";
};

const showError = (field, error) => {
  const parentFormField = field.parentElement;
  parentFormField.classList.add("error");
};

const removeError = (field) => {
  const parentFormField = field.parentElement;
  parentFormField.classList.remove("error");
};
