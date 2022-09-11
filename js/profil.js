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

let now = new Date();

let year = now.getFullYear();

openProfil.addEventListener("click", (e) => {
  e.preventDefault();
  userName.innerHTML = `${firstName.value} ${lastName.value}`;
  userCreateFirstName.value = firstName.value;
  userCreateLastName.value = lastName.value;
  userCreateEmail.value = email.value;
  userCreateNumber.value = number.value;
});

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
  userFirstName.innerHTML = userCreateFirstName.value;
  userLastName.innerHTML = userCreateLastName.value;
  userEmail.innerHTML = userCreateEmail.value;
  userNumber.innerHTML = userCreateNumber.value;
  settingsOverlay.classList.add("hidden");
  createUserAbout.classList.add("hidden");
  createUserAbout.style.display = "none";
});

// LocalStorage

let nameTodos = JSON.parse(localStorage.getItem("firstName"));
let lastTodos = JSON.parse(localStorage.getItem("lastName"));
let emailTodos = JSON.parse(localStorage.getItem("email"));
let numberTodos = JSON.parse(localStorage.getItem("number"));

openProfil.addEventListener("click", () => {
  registerProfil.style.display = "none";
  profil.style.display = "block";
  localStorage.setItem("firstName", JSON.stringify(firstName.value));
  localStorage.setItem("lastName", JSON.stringify(lastName.value));
  localStorage.setItem("email", JSON.stringify(email.value));
  localStorage.setItem("number", JSON.stringify(number.value));
  userFirstName.innerHTML = nameTodos;
  userLastName.innerHTML = lastTodos;
  userEmail.innerHTML = emailTodos;
  userNumber.innerHTML = numberTodos;
  userName.innerHTML = `${nameTodos} ${lastTodos}`;
});
