//Language
const languageBtn = document.querySelectorAll("#language-btn");
const languageItems = document.querySelectorAll("#language-items");
const languageItem = document.querySelectorAll("#language-item");
const languageItemHeader = document.querySelectorAll("#language-item-header");
const languageValue = document.getElementById("language-value");
const languageValueHeader = document.getElementById("language-value-header");

languageBtn.forEach((item, i) => {
  item.addEventListener("click", () => {
    languageItems[i].classList.toggle("hidden");
  });
});
languageItem.forEach((item) => {
  item.addEventListener("click", () => {
    languageValue.innerHTML = item.innerHTML;
    languageValueHeader.innerHTML = item.innerHTML;
  });
});
languageItemHeader.forEach((item) => {
  item.addEventListener("click", () => {
    languageValue.innerHTML = item.innerHTML;
    languageValueHeader.innerHTML = item.innerHTML;
  });
});
