// Setting
const html = document.querySelector(`html`);

let settingStorage = JSON.parse(localStorage.getItem("settings"))
  ? JSON.parse(localStorage.getItem("settings"))
  : [];

function getItem() {
  let settingItems = JSON.parse(localStorage.getItem("settings"));
  html.style.fontSize = `${settingItems[settingItems.length - 1].fontSize}px`;
  html.style.fontFamily = `${settingItems[settingItems.length - 1].fontFamily}`;
}

if (settingStorage.length) getItem();
