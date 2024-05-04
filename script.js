const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const claimBtn = document.getElementById("claim-btn");
const firstNameError = document.getElementById("first-name-empty");
const lastNameError = document.getElementById("last-name-empty");
const emailEmpty = document.getElementById("email-empty");
const emailInvalid = document.getElementById("email-invalid");
const passwordEmpty = document.getElementById("password-empty");
const passwordShort = document.getElementById("password-short");
const eye = document.getElementById("eye");

const removeClass = (element, className) => {
  element.classList.remove(className);
};

const addClass = (element, className) => {
  element.classList.add(className);
};

const hideElement = (element) => {
  element.style.display = "none";
};

const showElement = (element) => {
  element.style.display = "block";
};

const isEmpty = (element) => {
  return element.value.trim() === "";
};

const checkInputs = () => {
  [firstName, lastName, email, password].forEach((input) => removeClass(input, "input-error"));
  [firstNameError, lastNameError, emailEmpty, emailInvalid, passwordEmpty, passwordShort].forEach(hideElement);

  if (isEmpty(firstName)) {
    addClass(firstName, "input-error");
    showElement(firstNameError);
    return;
  }

  if (isEmpty(lastName)) {
    addClass(lastName, "input-error");
    showElement(lastNameError);
    return;
  }

  if (isEmpty(email)) {
    addClass(email, "input-error");
    showElement(emailEmpty);
    return;
  }

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim().match(validEmail)) {
    addClass(email, "input-error");
    showElement(emailInvalid);
    return;
  }

  if (isEmpty(password)) {
    addClass(password, "input-error");
    showElement(passwordEmpty);
    return;
  }

  if (password.value.length < 6) {
    addClass(password, "input-error");
    showElement(passwordShort);
    return;
  }
}


claimBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkInputs();
});

eye.addEventListener("click", () => {
  if (password.type === "password") {
    eye.src = "images/eye-slash.svg";
    eye.alt = "Hide Password";
    password.type = "text";
  } else {
    password.type = "password";
    eye.src = "images/eye.svg";
    eye.alt = "Show Password";
  }
});