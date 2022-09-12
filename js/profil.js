// Profil Register

// Register Item
const registerProfil = document.getElementById("register-profil");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const number = document.getElementById("number");
const message = document.getElementById("message");
const openProfil = document.getElementById("open-profil");

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

// LocalStorage

openProfil.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    firstName.value.length > 0 &&
    lastName.value.length > 0 &&
    email.value.length > 0 &&
    number.value.length > 0
  ) {
    localStorage.setItem("firstName", JSON.stringify(firstName.value));
    localStorage.setItem("lastName", JSON.stringify(lastName.value));
    localStorage.setItem("email", JSON.stringify(email.value));
    localStorage.setItem("number", JSON.stringify(number.value));
    localStorage.setItem("none", JSON.stringify("none"));
    localStorage.setItem("block", JSON.stringify("block"));

    let nameTodos = JSON.parse(localStorage.getItem("firstName"))
      ? JSON.parse(localStorage.getItem("firstName"))
      : [];

    let lastTodos = JSON.parse(localStorage.getItem("lastName"))
      ? JSON.parse(localStorage.getItem("lastName"))
      : [];

    let emailTodos = JSON.parse(localStorage.getItem("email"))
      ? JSON.parse(localStorage.getItem("email"))
      : [];

    let numberTodos = JSON.parse(localStorage.getItem("number"))
      ? JSON.parse(localStorage.getItem("number"))
      : [];

    userFirstName.innerHTML = nameTodos;
    userLastName.innerHTML = lastTodos;
    userEmail.innerHTML = emailTodos;
    userNumber.innerHTML = numberTodos;
    userName.innerHTML = `${nameTodos} ${lastTodos}`;
    profil.style.display = "block";
    registerProfil.style.display = "none";

    userCreateFirstName.value = nameTodos;
    userCreateLastName.value = lastTodos;
    userCreateEmail.value = emailTodos;
    userCreateNumber.value = numberTodos;
  }
});

let nameTodos = JSON.parse(localStorage.getItem("firstName"))
  ? JSON.parse(localStorage.getItem("firstName"))
  : [];

let lastTodos = JSON.parse(localStorage.getItem("lastName"))
  ? JSON.parse(localStorage.getItem("lastName"))
  : [];

let emailTodos = JSON.parse(localStorage.getItem("email"))
  ? JSON.parse(localStorage.getItem("email"))
  : [];

let numberTodos = JSON.parse(localStorage.getItem("number"))
  ? JSON.parse(localStorage.getItem("number"))
  : [];

let noneTodos = JSON.parse(localStorage.getItem("none"))
  ? JSON.parse(localStorage.getItem("none"))
  : [];

let blockTodos = JSON.parse(localStorage.getItem("block"))
  ? JSON.parse(localStorage.getItem("block"))
  : [];

userFirstName.innerHTML = nameTodos;
userLastName.innerHTML = lastTodos;
userEmail.innerHTML = emailTodos;
userNumber.innerHTML = numberTodos;
userName.innerHTML = `${nameTodos} ${lastTodos}`;

userCreateFirstName.value = nameTodos;
userCreateLastName.value = lastTodos;
userCreateEmail.value = emailTodos;
userCreateNumber.value = numberTodos;

profil.style.display = blockTodos;
registerProfil.style.display = noneTodos;

// Create User Settings
const createSettingsBtn = document.getElementById("create-settings");
const settingsOverlay = document.getElementById("settings-overlay");
const createUserAbout = document.getElementById("create-user-about");
const userAboutSaveBtn = document.getElementById("user-about-save");

createSettingsBtn.addEventListener("click", () => {
  settingsOverlay.classList.remove("hidden");
  createUserAbout.classList.remove("hidden");
  createUserAbout.style.display = "flex";
});

userAboutSaveBtn.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem(
    "settingFirstName",
    JSON.stringify(userCreateFirstName.value)
  );
  localStorage.setItem(
    "settingLastName",
    JSON.stringify(userCreateLastName.value)
  );
  localStorage.setItem("settingEmail", JSON.stringify(userCreateEmail.value));
  localStorage.setItem("settingNumber", JSON.stringify(userCreateNumber.value));

  let seetingNameTodos = JSON.parse(localStorage.getItem("settingFirstName"))
    ? JSON.parse(localStorage.getItem("settingFirstName"))
    : nameTodos;

  let seetingLastTodos = JSON.parse(localStorage.getItem("settingLastName"))
    ? JSON.parse(localStorage.getItem("settingLastName"))
    : lastTodos;

  let seetingEmailTodos = JSON.parse(localStorage.getItem("settingEmail"))
    ? JSON.parse(localStorage.getItem("settingEmail"))
    : emailTodos;

  let seetingNumberTodos = JSON.parse(localStorage.getItem("settingNumber"))
    ? JSON.parse(localStorage.getItem("settingNumber"))
    : numberTodos;

  userFirstName.innerHTML = seetingNameTodos;
  userLastName.innerHTML = seetingLastTodos;
  userEmail.innerHTML = seetingEmailTodos;
  userNumber.innerHTML = seetingNumberTodos;
  userName.innerHTML = `${seetingNameTodos} ${seetingLastTodos}`;
  settingsOverlay.classList.add("hidden");
  createUserAbout.classList.add("hidden");
  createUserAbout.style.display = "none";
});

let seetingNameTodos = JSON.parse(localStorage.getItem("settingFirstName"))
  ? JSON.parse(localStorage.getItem("settingFirstName"))
  : nameTodos;

let seetingLastTodos = JSON.parse(localStorage.getItem("settingLastName"))
  ? JSON.parse(localStorage.getItem("settingLastName"))
  : lastTodos;

let seetingEmailTodos = JSON.parse(localStorage.getItem("settingEmail"))
  ? JSON.parse(localStorage.getItem("settingEmail"))
  : emailTodos;

let seetingNumberTodos = JSON.parse(localStorage.getItem("settingNumber"))
  ? JSON.parse(localStorage.getItem("settingNumber"))
  : numberTodos;

userFirstName.innerHTML = seetingNameTodos;
userLastName.innerHTML = seetingLastTodos;
userEmail.innerHTML = seetingEmailTodos;
userNumber.innerHTML = seetingNumberTodos;
userName.innerHTML = `${seetingNameTodos} ${seetingLastTodos}`;
settingsOverlay.classList.add("hidden");
createUserAbout.classList.add("hidden");
createUserAbout.style.display = "none";

userCreateFirstName.value = seetingNameTodos;
userCreateLastName.value = seetingLastTodos;
userCreateEmail.value = seetingEmailTodos;
userCreateNumber.value = seetingNumberTodos;
