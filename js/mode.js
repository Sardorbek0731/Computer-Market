const body = document.querySelector("body");
const darkMode = document.getElementById("dark-mode");
const lightMode = document.getElementById("light-mode");

let storageMode = JSON.parse(localStorage.getItem("mode"));

if (storageMode) modeFunc();

function modeFunc() {
  body.classList.toggle("dark_mode");
  darkMode.classList.toggle("mb-0");
  lightMode.classList.toggle("mb-0");
  darkMode.classList.toggle("hidden");
  lightMode.classList.toggle("hidden");
}

darkMode.addEventListener("click", () => {
  modeFunc();
  localStorage.setItem("mode", JSON.stringify("dark-mode"));
});
lightMode.addEventListener("click", () => {
  modeFunc();
  localStorage.setItem("mode", JSON.stringify(""));
});
