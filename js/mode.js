const body = document.querySelector("body");
const darkMode = document.querySelectorAll("#dark-mode");
const lightMode = document.querySelectorAll("#light-mode");

let storageMode = JSON.parse(localStorage.getItem("mode"));

if (storageMode) modeFunc();

function modeFunc() {
  body.classList.toggle("dark_mode");
  darkMode.forEach((item) => {
    item.classList.toggle("mb-0");
    item.classList.toggle("hidden");
  });
  lightMode.forEach((item) => {
    item.classList.toggle("mb-0");
    item.classList.toggle("hidden");
  });
}

darkMode.forEach((item) => {
  item.addEventListener("click", () => {
    modeFunc();
    localStorage.setItem("mode", JSON.stringify("dark-mode"));
  });
});
lightMode.forEach((item) => {
  item.addEventListener("click", () => {
    modeFunc();
    localStorage.setItem("mode", JSON.stringify(""));
  });
});
