// Profil Register
let passwordStorage = JSON.parse(localStorage.getItem("password"))
  ? JSON.parse(localStorage.getItem("password"))
  : [];

// getItem
function setNewPassword() {
  localStorage.setItem("password", JSON.stringify(passwordStorage));
}

const registerProfil = document.getElementById("register-profil");
const email = document.getElementById("email");
const number = document.getElementById("number");
const yaer = document.getElementById("year");
const openProfil = document.getElementById("open-profil");

const profil = document.getElementById("profil");
const userName = document.getElementById("user-name");
const userFirstName = document.getElementById("user-firstName");
const userLastName = document.getElementById("user-lastName");
const userEmail = document.getElementById("user-email");
const userNumber = document.getElementById("user-number");
const userAge = document.getElementById("user-age");
const userYear = document.getElementById("user-year");
const userCreateFirstName = document.getElementById("user-create-firstName");
const userCreateLastName = document.getElementById("user-create-lastName");
const userCreateEmail = document.getElementById("user-create-email");
const userCreateNumber = document.getElementById("user-create-number");
const userCreateYear = document.getElementById("user-create-year");
const userCreateAge = document.getElementById("user-create-age");
const userImg = document.getElementById("user-img");
const changePassword = document.getElementById("change-password");
const changePasswordBox = document.getElementById("change-password-box");
const changedInputSave = document.getElementById("changed-input-save");
const saveChangedBtn = document.getElementById("save-changed-btn");
const canselChanged = document.getElementById("cansel-changed");
const changedInput = document.getElementById("changed-input");
const errorChanged = document.getElementById("error-changed");
const nextChangedBtn = document.getElementById("next-changed-btn");
const changePasswordForm = document.getElementById("change-password-form");
const changedPasswordForm = document.getElementById("changed-password-form");
const canselChangedSave = document.getElementById("cansel-changed-save");
const deleteUserAllAbout = document.getElementById("delete-user-all-about");
const deleteBox = document.getElementById("deleteBox");
const deleteBtn = document.getElementById("delete-btn");
const deleteInput = document.getElementById("delete-input");
const canselDelete = document.getElementById("cansel-delete");
const deleteText = document.getElementById("delete-text");
const errorDelete = document.getElementById("error-delete");

// Changed password
changePassword.addEventListener("click", () => {
  changePasswordBox.classList.remove("hidden");
  changePasswordBox.classList.add("flex");
  changedPasswordForm.classList.remove("flex");
  changedPasswordForm.classList.add("hidden");
  changePasswordForm.classList.add("flex");
  changePasswordForm.classList.remove("hidden");
  changedInput.value = "";
});
canselChanged.addEventListener("click", (e) => {
  e.preventDefault();
  changePasswordBox.classList.remove("flex");
  changePasswordBox.classList.add("hidden");
});
nextChangedBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (changedInput.value == passwordStorage) {
    changePasswordForm.classList.remove("flex");
    changePasswordForm.classList.add("hidden");
    changedPasswordForm.classList.add("flex");
    changedPasswordForm.classList.remove("hidden");

    saveChangedBtn.addEventListener("click", () => {
      passwordStorage = changedInputSave.value;
      setNewPassword();
      changePasswordBox.classList.remove("flex");
      changePasswordBox.classList.add("hidden");
    });
    canselChangedSave.addEventListener("click", () => {
      changePasswordBox.classList.remove("flex");
      changePasswordBox.classList.add("hidden");
    });
  } else {
    errorChanged.classList.remove("hidden");

    setTimeout(() => {
      errorChanged.classList.add("hidden");
    }, 3500);
  }
});

// Delete User About
deleteText.addEventListener("click", (e) => {
  e.preventDefault();
  deleteBox.classList.remove("hidden");
  deleteBox.classList.add("flex");
});
canselDelete.addEventListener("click", (e) => {
  e.preventDefault();
  deleteBox.classList.remove("flex");
  deleteBox.classList.add("hidden");
});
deleteBtn.addEventListener("click", () => {
  if (deleteInput.value == passwordStorage) {
    localStorage.clear();
    deleteBtn.href = "../index.html";
  } else {
    errorDelete.classList.remove("hidden");

    setTimeout(() => {
      errorDelete.classList.add("hidden");
    }, 3500);
  }
});

function date() {
  let now = new Date();

  return now.getFullYear();
}

// LocalStorage

let userStorage = JSON.parse(localStorage.getItem("user"))
  ? JSON.parse(localStorage.getItem("user"))
  : [];

let registerItems = JSON.parse(localStorage.getItem("register"))
  ? JSON.parse(localStorage.getItem("register"))
  : [];

if (userStorage.email && userStorage.number && userStorage.yaer) {
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
  userImg.innerHTML = registerItems.firstName.slice(0, 1).toUpperCase();
  userFirstName.innerHTML = registerItems.firstName;
  userLastName.innerHTML = registerItems.lastName;
  userEmail.innerHTML = userStorage.email;
  userNumber.innerHTML = userStorage.number;
  userYear.innerHTML = userStorage.yaer;
  userAge.innerHTML = userStorage.age;
  userName.innerHTML = `${registerItems.firstName} ${registerItems.lastName}`;

  userCreateFirstName.value = registerItems.firstName;
  userCreateLastName.value = registerItems.lastName;
  userCreateEmail.value = userStorage.email;
  userCreateNumber.value = userStorage.number;
  userCreateYear.value = userStorage.yaer;
  userCreateAge.value = userStorage.age;
}

openProfil.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    email.value.length > 0 &&
    number.value.length > 0 &&
    yaer.value.length > 0
  ) {
    let ageNow = date() - yaer.value.slice(0, 4);

    userStorage = {
      email: email.value,
      number: number.value,
      yaer: yaer.value,
      age: ageNow,
    };

    setUserItem();
    openedProfil();
    showUserAbout();
    alertFunc(alertSuccess, closeSuccessBtn);
  } else {
    alertFunc(alertError, closeErrorBtns);
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
  defaultAlert(alertSuccessCreate);
});
closeProfilSetting.addEventListener("click", () => {
  if (
    userCreateFirstName.value.length > 0 &&
    userCreateLastName.value.length > 0 &&
    userCreateEmail.value.length > 0 &&
    userCreateNumber.value.length > 0 &&
    userCreateYear.value.length > 0 &&
    userCreateAge.value.length > 0
  ) {
    profilSettings.classList.add("hidden");
  } else {
    alertFunc(alertErrorCreate, closeErrorBtnCreate);
  }
});

userAboutSaveBtn.addEventListener("click", () => {
  if (
    userCreateFirstName.value.length > 0 &&
    userCreateLastName.value.length > 0 &&
    userCreateEmail.value.length > 0 &&
    userCreateNumber.value.length > 0 &&
    userCreateYear.value.length > 0 &&
    userCreateAge.value.length > 0
  ) {
    registerItems.firstName = userCreateFirstName.value;
    registerItems.lastName = userCreateLastName.value;
    userStorage.email = userCreateEmail.value;
    userStorage.number = userCreateNumber.value;
    userStorage.yaer = userCreateYear.value;
    userStorage.age = userCreateAge.value;

    setUserItem();
    showUserAbout();
    profilSettings.classList.add("hidden");
    alertFunc(alertSuccessCreate, closeSuccessBtnCreate);
    defaultAlert(alertErrorCreate);
  } else {
    alertFunc(alertErrorCreate, closeErrorBtnCreate);
  }
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
  user.style.display = "flex";
  user.addEventListener("click", () => {
    userNavItem.classList.toggle("hidden");
  });

  userItem.innerHTML = registerItems.firstName.charAt();
}

openProfil.addEventListener("click", () => {
  userNav();
});

userAboutSaveBtn.addEventListener("click", () => {
  userNav();
});

if (userStorage.email && userStorage.number && userStorage.yaer) {
  userNav();
  openedProfil();
  showUserAbout();
} else {
  closedProfil();
}
