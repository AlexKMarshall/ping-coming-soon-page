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

  const fieldId = field.id || field.name;
  const errorId = `error-for-${fieldId}`;

  let errorMessage = parentFormField.querySelector(`#${errorId}`);
  if (!errorMessage) {
    errorMessage = document.createElement("div");
    errorMessage.id = errorId;
    errorMessage.className = "error-text";
    parentFormField.appendChild(errorMessage);
  }
  errorMessage.innerHTML = error;

  field.setAttribute("aria-describedby", errorId);
};

const removeError = (field) => {
  const parentFormField = field.parentElement;
  parentFormField.classList.remove("error");
};
