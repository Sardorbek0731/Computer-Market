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
const userImg = document.getElementById("user-img");
const userName = document.getElementById("user-name");
const userFirstName = document.getElementById("user-firstName");
const userLastName = document.getElementById("user-lastName");
const userEmail = document.getElementById("user-email");
const userNumber = document.getElementById("user-number");

let now = new Date();

let year = now.getFullYear();

openProfil.addEventListener("click", (e) => {
  e.preventDefault();
  registerProfil.style.display = "none";
  profil.style.display = "block";
  userName.innerHTML = `${firstName.value} ${lastName.value}`;
  userFirstName.innerHTML = firstName.value;
  userLastName.innerHTML = lastName.value;
  userEmail.innerHTML = email.value;
  userNumber.innerHTML = number.value;
});
