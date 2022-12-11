const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const error = document.getElementById("error");

// Register default values
let inputValues = JSON.parse(localStorage.getItem("register"))
  ? JSON.parse(localStorage.getItem("register"))
  : [];

// setItem
function setItemValue() {
  localStorage.setItem("register", JSON.stringify(inputValues));
}

// getItem
function getItemValue() {
  let response = JSON.parse(localStorage.getItem("register"));
}

let passwordValue = "";

function defaultValue() {
  inputValues.forEach((item) => {
    firstName.value = item.firstName;
    lastName.value = item.lastName;
  });
}

// User card value
const userAboutForm = document.getElementById("user-about-form");
const register = document.getElementById("register");
const openHome = document.getElementById("open-home");
const userCardRegister = document.getElementById("user-card-register");
const userCardName = document.getElementById("user-card-name");
const nextBtn = document.getElementById("next-btn");
const password = document.getElementById("password");

function clickedNextBtn() {
  userAboutForm.style.display = "none";
  userCardRegister.style.display = "flex";
}

function welcomeHome() {
  openHome.classList.remove("hidden");
  register.classList.add("hidden");
}

if (inputValues.length) {
  defaultValue();

  nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    inputValues.forEach((item) => {
      if (password.value == item.password) {
        clickedNextBtn();
        error.classList.add("hidden");

        if (
          firstName.value.length &&
          lastName.value.length &&
          password.value.length
        ) {
          clickedNextBtn();
          userCardName.innerHTML = `${firstName.value} ${lastName.value}`;
        }
      } else {
        error.classList.remove("hidden");
      }
    });
  });
} else {
  nextBtn.addEventListener("click", (e) => {
    e.preventDefault();

    inputValues.push({
      firstName: firstName.value,
      lastName: lastName.value,
      password: password.value,
    });

    if (
      firstName.value.length &&
      lastName.value.length &&
      password.value.length
    ) {
      setItemValue();
      getItemValue();
    }

    if (
      firstName.value.length &&
      lastName.value.length &&
      password.value.length
    ) {
      clickedNextBtn();
      userCardName.innerHTML = `${firstName.value} ${lastName.value}`;
    }
  });
}
