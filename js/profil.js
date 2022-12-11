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
const numberError = document.getElementById("number-error");

openProfil.addEventListener("click", (e) => {
  e.preventDefault();
  setTimeout(() => {
    if (number.value.length === 0) {
      numberError.classList.remove("hidden");
    }
  }, 1000);
  setTimeout(() => {
    if (number.value.length === 0) {
      numberError.classList.add("hidden");
    }
  }, 4000);
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

if (
  userStorage.firstName &&
  userStorage.lastName &&
  userStorage.email &&
  userStorage.number
) {
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
  userImg.innerHTML = userStorage.firstName.slice(0, 1).toUpperCase();
  userFirstName.innerHTML = userStorage.firstName;
  userLastName.innerHTML = userStorage.lastName;
  userEmail.innerHTML = userStorage.email;
  userNumber.innerHTML = userStorage.number;
  userName.innerHTML = `${userStorage.firstName} ${userStorage.lastName}`;

  userCreateFirstName.value = userStorage.firstName;
  userCreateLastName.value = userStorage.lastName;
  userCreateEmail.value = userStorage.email;
  userCreateNumber.value = userStorage.number;
}

openProfil.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    firstName.value.length &&
    lastName.value.length &&
    email.value.length &&
    number.value.length
  ) {
    userStorage = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      number: number.value,
    };

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

  userStorage.firstName = userCreateFirstName.value;
  userStorage.lastName = userCreateLastName.value;
  userStorage.email = userCreateEmail.value;
  userStorage.number = userCreateNumber.value;

  setUserItem();
  showUserAbout();
  profilSettings.classList.add("hidden");
});

deleteSettings.addEventListener("click", () => {
  closedProfil();
  localStorage.setItem("user", JSON.stringify(""));
});

// User nav
let user = document.getElementById("user");
let userItem = document.getElementById("user-item");
let userNavItem = document.getElementById("user-nav");

function userNav() {
  let userStorageNav = JSON.parse(localStorage.getItem("user"));

  user.style.display = "flex";
  user.addEventListener("click", () => {
    userNavItem.classList.toggle("hidden");
  });

  userItem.innerHTML = userStorageNav.firstName.charAt();
}

openProfil.addEventListener("click", () => {
  userNav();
});

userAboutSaveBtn.addEventListener("click", () => {
  userNav();
});

if (
  userStorage.firstName &&
  userStorage.lastName &&
  userStorage.email &&
  userStorage.number
) {
  userNav();
  openedProfil();
  showUserAbout();
} else {
  closedProfil();
}
