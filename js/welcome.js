const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const error = document.getElementById("error");
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
const cardExpiration = document.getElementById("cardExpiration");
const errorCard = document.getElementById("error-card");
const logout = document.getElementById("logout");

let inputValues = JSON.parse(localStorage.getItem("register"))
  ? JSON.parse(localStorage.getItem("register"))
  : [];

let cardValues = JSON.parse(localStorage.getItem("user-card"))
  ? JSON.parse(localStorage.getItem("user-card"))
  : [];

// setItem
function setItemValues() {
  localStorage.setItem("register", JSON.stringify(inputValues));
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

function welcome() {
  register.classList.add("hidden");
  openHome.classList.remove("hidden");
}

nextBtn.addEventListener("click", () => {
  if (
    firstName.value.length &&
    lastName.value.length &&
    password.value.length
  ) {
    clickedNextBtn();

    inputValues = {
      firstName: firstName.value,
      lastName: lastName.value,
      password: password.value,
    };

    userCardName.innerHTML = `${inputValues.firstName} ${inputValues.lastName}`;
    setItemValues();
  } else {
    setTimeout(() => {
      error.classList.remove("hidden");
    }, 500);
    setTimeout(() => {
      error.classList.add("hidden");
    }, 4000);
  }
});

if (inputValues.firstName && inputValues.lastName && inputValues.password)
  clickedNextBtn();

userCardBtn.addEventListener("click", () => {
  if (
    cardName.value.length &&
    cardNumber.value.length &&
    cardExpiration.value.length
  ) {
    welcome();

    cardValues = {
      cardName: cardName.value,
      cardNumber: cardNumber.value,
      cardExpiration: cardExpiration.value,
    };

    setItemCard();
  } else {
    setTimeout(() => {
      errorCard.classList.remove("hidden");
    }, 500);
    setTimeout(() => {
      errorCard.classList.add("hidden");
    }, 4000);
  }
});

if (cardValues.cardName && cardValues.cardNumber && cardValues.cardExpiration)
  welcome();

logout.addEventListener("click", () => {
  setItemValues();
});
