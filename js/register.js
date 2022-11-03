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

function defaultValue() {
  inputValues.forEach((item) => {
    firstName.value = item.firstName;
    lastName.value = item.lastName;
  });
}

// User card value
const userAboutForm = document.getElementById("user-about-form");
const userCardRegister = document.getElementById("user-card-register");
const userCardName = document.getElementById("user-card-name");
const nextBtn = document.getElementById("next-btn");
const password = document.getElementById("password");

function clickedNextBtn() {
  userAboutForm.style.display = "none";
  userCardRegister.style.display = "flex";
}

if (inputValues.length) {
  defaultValue();

  nextBtn.addEventListener("click", (e) => {
    inputValues.forEach((item) => {
      if (item.password == password.value) {
        clickedNextBtn();
        error.classList.add("hidden");
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
