const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");

// Register default values
let inputValues = JSON.parse(localStorage.getItem("user"))
  ? JSON.parse(localStorage.getItem("user"))
  : [];

function defaultValue() {
  inputValues.forEach((item) => {
    firstName.value = item.firstName;
    lastName.value = item.lastName;
  });
}

if (inputValues.length) defaultValue();

const plusBtn = document.querySelector(".plus");
const containerSecond = document.querySelector(".container_second");
const xMark = document.querySelector(".xMark");
const plusIcon = document.querySelector("#plusIcon");

plusBtn.addEventListener("click", () => {
  plusIcon.style.transform = "rotate(315deg)";
  plusBtn.style.animation = "plus-animate 5s linear forwards";
  setTimeout(() => {
    containerSecond.style.display = "flex";
  }, 2500);
  setTimeout(() => {
    plusBtn.style.display = "none";
  }, 5100);
});

xMark.addEventListener("click", () => {
  setTimeout(() => {
    containerSecond.style.display = "none";
  }, 2500);
  plusBtn.style.display = "flex";
  plusBtn.style.animation = "close-animate 5s linear forwards";
});

// User card value
const userAboutForm = document.getElementById("user-about-form");
const userCardRegister = document.getElementById("user-card-register");
const userCardName = document.getElementById("user-card-name");
const firstNextBtn = document.getElementById("first-next-btn");
const secondNextBtn = document.getElementById("second-next-btn");
const password = document.getElementById("password");
const firstNameSecond = document.getElementById("firstNameSecond");
const lastNameSecond = document.getElementById("lastNameSecond");
const passwordSecond = document.getElementById("passwordSecond");

function clickedNextBtn() {
  userAboutForm.style.display = "none";
  userCardRegister.style.display = "flex";
}

firstNextBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    firstName.value.length &&
    lastName.value.length &&
    password.value.length
  ) {
    clickedNextBtn();
    userCardName.innerHTML = `${firstName.value} ${lastName.value}`;
  }
});
secondNextBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    firstNameSecond.value.length &&
    lastNameSecond.value.length &&
    passwordSecond.value.length
  ) {
    clickedNextBtn();
    userCardName.innerHTML = `${firstNameSecond.value} ${lastNameSecond.value}`;
  }
});
