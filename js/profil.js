// Profil Register

// Register Item
const registerProfil = document.getElementById("register-profil");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const number = document.getElementById("number");
const message = document.getElementById("message");
const openProfil = document.getElementById("open-profil");

// Show message

const nameError = document.getElementById("name-error");
const lastNameError = document.getElementById("lastName-error");
const emailError = document.getElementById("email-error");
const numberError = document.getElementById("number-error");

openProfil.addEventListener("click", (e) => {
  e.preventDefault();
  setTimeout(() => {
    if (firstName.value.length === 0) {
      nameError.classList.remove("hidden");
    }
  }, 700);
  setTimeout(() => {
    if (lastName.value.length === 0) {
      lastNameError.classList.remove("hidden");
    }
  }, 1400);
  setTimeout(() => {
    if (email.value.length === 0) {
      emailError.classList.remove("hidden");
    }
  }, 2100);
  setTimeout(() => {
    if (number.value.length === 0) {
      numberError.classList.remove("hidden");
    }
  }, 2800);
});

// Profil Item
const profil = document.getElementById("profil");
const userName = document.getElementById("user-name");
const userFirstName = document.getElementById("user-firstName");
const userLastName = document.getElementById("user-lastName");
const userEmail = document.getElementById("user-email");
const userNumber = document.getElementById("user-number");
const userCreateFirstName = document.getElementById("user-create-firstName");
const userCreateLastName = document.getElementById("user-create-lastName");
const userCreateEmail = document.getElementById("user-create-email");
const userCreateNumber = document.getElementById("user-create-number");
const userImg = document.getElementById("user-img");

// LocalStorage

let userStorage = JSON.parse(localStorage.getItem("user"))
  ? JSON.parse(localStorage.getItem("user"))
  : [];

if (userStorage.length) {
  openedProfil();
  showUserAbout();
} else {
  closedProfil();
}

// user setItem
function setUserItem() {
  localStorage.setItem("user", JSON.stringify(userStorage));
}

// openedProfil
function openedProfil() {
  profil.style.display = "block";
  registerProfil.style.display = "none";
}

// closedProfil
function closedProfil() {
  profil.style.display = "none";
  registerProfil.style.display = "block";
}

// showUserAbout
function showUserAbout() {
  userStorage.forEach((item) => {
    userImg.innerHTML = item.firstName.slice(0, 1).toUpperCase();
    userFirstName.innerHTML = item.firstName;
    userLastName.innerHTML = item.lastName;
    userEmail.innerHTML = item.email;
    userNumber.innerHTML = item.number;
    userName.innerHTML = `${item.firstName} ${item.lastName}`;

    userCreateFirstName.value = item.firstName;
    userCreateLastName.value = item.lastName;
    userCreateEmail.value = item.email;
    userCreateNumber.value = item.number;
  });
}

openProfil.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    firstName.value.length > 0 &&
    lastName.value.length > 0 &&
    email.value.length > 0 &&
    number.value.length > 0
  ) {
    userStorage.push({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      number: number.value,
    });

    setUserItem();
    openedProfil();
    showUserAbout();
  }
});

// Create User Settings
const createSettingsBtn = document.getElementById("create-settings");
const profilSettings = document.getElementById("profil-settings");
const userAboutSaveBtn = document.getElementById("user-about-save");
const deleteSettings = document.getElementById("delete-settings");
const closeProfilSetting = document.getElementById("close-profil-setting");

createSettingsBtn.addEventListener("click", () => {
  profilSettings.classList.remove("hidden");
});
closeProfilSetting.addEventListener("click", () => {
  profilSettings.classList.add("hidden");
});

userAboutSaveBtn.addEventListener("click", (e) => {
  e.preventDefault();

  userStorage.forEach((item) => {
    item.firstName = userCreateFirstName.value;
    item.lastName = userCreateLastName.value;
    item.email = userCreateEmail.value;
    item.number = userCreateNumber.value;
  });

  setUserItem();
  showUserAbout();
  profilSettings.classList.add("hidden");
});

deleteSettings.addEventListener("click", () => {
  closedProfil();
  localStorage.setItem("user", JSON.stringify(""));
});
