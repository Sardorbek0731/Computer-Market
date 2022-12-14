const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const userAboutForm = document.getElementById("user-about-form");
const userCardBtn = document.getElementById("user-card-btn");
const register = document.getElementById("register");
const openHome = document.getElementById("open-home");
const userCardRegister = document.getElementById("user-card-register");
const userCardName = document.getElementById("user-card-name");
const nextBtn = document.getElementById("next-btn");
const password = document.getElementById("password");
const cardNumber = document.getElementById("card-number");
const cardName = document.getElementById("card-name");
const cardPassword = document.getElementById("card-password");
const logout = document.getElementById("logout");

let inputValues = JSON.parse(localStorage.getItem("register"))
  ? JSON.parse(localStorage.getItem("register"))
  : [];

let passwordStorage = JSON.parse(localStorage.getItem("password"))
  ? JSON.parse(localStorage.getItem("password"))
  : [];

let cardValues = JSON.parse(localStorage.getItem("user-card"))
  ? JSON.parse(localStorage.getItem("user-card"))
  : [];

// setItem
function setItemValues() {
  localStorage.setItem("register", JSON.stringify(inputValues));
}
function setItemPassword() {
  localStorage.setItem("password", JSON.stringify(passwordStorage));
}
function setItemCard() {
  localStorage.setItem("user-card", JSON.stringify(cardValues));
}

function clickedNextBtn() {
  userAboutForm.classList.add("hidden");
  userCardRegister.classList.remove("hidden");
  userCardRegister.classList.add("flex");

  userCardName.innerHTML = `${inputValues.firstName} ${inputValues.lastName}`;
}
function registerFunc() {
  userAboutForm.classList.remove("hidden");
  userCardRegister.classList.add("hidden");
  openHome.classList.add("hidden");
}

function welcome() {
  register.classList.add("hidden");
  openHome.classList.remove("hidden");
}

function defaultValue() {
  firstName.value = inputValues.firstName;
  lastName.value = inputValues.lastName;
}

nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    firstName.value.length > 0 &&
    lastName.value.length > 0 &&
    password.value.length > 0 &&
    inputValues.inputBoolean == undefined &&
    cardValues.cardBoolean == undefined
  ) {
    clickedNextBtn();

    inputValues = {
      firstName: firstName.value,
      lastName: lastName.value,
      inputBoolean: true,
      welcome: true,
    };

    passwordStorage = password.value;

    userCardName.innerHTML = `${inputValues.firstName} ${inputValues.lastName}`;
    setItemValues();
    setItemPassword();

    alertError.forEach((item) => {
      item.classList.remove("show");
      item.style.right = "-100%";
    });
  } else if (
    inputValues.firstName == firstName.value &&
    inputValues.lastName == lastName.value &&
    passwordStorage == password.value
  ) {
    alertError.forEach((item) => {
      item.classList.remove("show");
      item.style.right = "-100%";
    });

    inputValues = {
      firstName: firstName.value,
      lastName: lastName.value,
      inputBoolean: true,
    };

    setItemValues();
    welcome();
    alertFunc(alertSuccess, closeSuccessBtn);
  } else {
    alertFunc(alertError, closeErrorBtns);
  }
});

userCardBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    cardName.value.length > 0 &&
    cardNumber.value.length > 0 &&
    cardPassword.value.length > 0
  ) {
    welcome();
    alertError.forEach((item) => {
      item.classList.remove("show");
      item.style.right = "-100%";
    });

    cardValues = {
      cardName: cardName.value,
      cardNumber: cardNumber.value,
      cardPassword: cardPassword.value,
      cardBoolean: true,
    };

    setItemCard();
    alertFunc(alertSuccess, closeSuccessBtn);
  } else {
    alertFunc(alertError, closeErrorBtns);
  }
});

if (inputValues.inputBoolean && cardValues.cardBoolean) {
  welcome();
}

if (inputValues.inputBoolean) {
  clickedNextBtn();
}

logout.addEventListener("click", () => {
  inputValues = {
    firstName: inputValues.firstName,
    lastName: inputValues.lastName,
  };

  setItemValues();
});

if (inputValues.firstName.length > 0 && inputValues.lastName.length > 0) {
  defaultValue();
}
