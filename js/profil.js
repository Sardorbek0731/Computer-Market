// Profil Register

// Register Item
const registerProfil = document.getElementById("register-profil");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const age = document.getElementById("age");
const message = document.getElementById("message");
const openProfil = document.getElementById("open-profil");

// Profil Item
const profil = document.getElementById("profil");
const userImg = document.getElementById("user-img");
const userName = document.getElementById("user-name");
const userEmail = document.getElementById("user-email");
const userAbout = document.getElementById("user-about");
const userAge = document.getElementById("user-age");
const userYear = document.getElementById("user-year");

let now = new Date();

let year = now.getFullYear();

openProfil.addEventListener("click", (e) => {
  e.preventDefault();
  registerProfil.style.display = "none";
  profil.style.display = "block";
  userName.innerHTML = `${firstName.value} ${lastName.value}`;
  userEmail.innerHTML = email.value;
  userAbout.innerHTML = message.value;
  userYear.innerHTML = `${year - age.value} yil`;
  userAge.innerHTML = age.value;
});
