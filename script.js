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

const checkInputs = () => {
  firstName.classList.remove("input-error");
  lastName.classList.remove("input-error");
  email.classList.remove("input-error");
  password.classList.remove("input-error");
  firstNameError.style.display = "none";
  lastNameError.style.display = "none";
  emailEmpty.style.display = "none";
  emailInvalid.style.display = "none";
  passwordEmpty.style.display = "none";
  passwordShort.style.display = "none";

  if (firstName.value.trim() === "") {
    firstName.classList.add("input-error");
    firstNameError.style.display = "block";
    return;
  }

  if (lastName.value.trim() === "") {
    lastName.classList.add("input-error");
    lastNameError.style.display = "block";
    return;
  }

  if (email.value.trim() === "") {
    email.classList.add("input-error");
    emailEmpty.style.display = "block";
    return;
  }

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim().match(validEmail)) {
    email.classList.add("input-error");
    emailInvalid.style.display = "block";
    return;
  }

  if (password.value.trim() === "") {
    password.classList.add("input-error");
    passwordEmpty.style.display = "block";
    return;
  }

  if (password.value.length < 6) {
    password.classList.add("input-error");
    passwordShort.style.display = "block";
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