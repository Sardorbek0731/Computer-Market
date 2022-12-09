//Language
const languageBtn = document.getElementById("language-btn");
const languageItems = document.getElementById("language-items");
const languageItem = document.querySelectorAll("#language-item");
const languageValue = document.getElementById("language-value");

languageBtn.addEventListener("click", () => {
  languageItems.classList.toggle("hidden");
});
languageItem.forEach((item) => {
  item.addEventListener("click", () => {
    languageValue.innerHTML = item.innerHTML;
  });
});
