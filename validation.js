const form = document.querySelector("form");
form.setAttribute("novalidate", "");
const emailInput = document.querySelector("input");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (hasError(emailInput)) {
    return false;
  }

  form.submit();
});

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
  return "Please enter a valid email address";
};

const showError = (field, error) => {
  const form = field.form;
  form.classList.add("error");

  const fieldId = field.id || field.name;
  const errorId = `error-for-${fieldId}`;

  let errorMessage = form.querySelector(`#${errorId}`);
  if (!errorMessage) {
    errorMessage = document.createElement("div");
    errorMessage.id = errorId;
    errorMessage.className = "form-error-message";
    form.appendChild(errorMessage);
  }
  errorMessage.innerHTML = error;

  field.setAttribute("aria-describedby", errorId);
};

const removeError = (field) => {
  const form = field.form;
  form.classList.remove("error");

  const fieldId = field.id || field.name;
  const errorId = `error-for-${fieldId}`;

  let errorMessage = form.querySelector(`#${errorId}`);
  if (errorMessage) {
    errorMessage.remove();
  }

  field.removeAttribute("aria-describedby");
};
