// Global
const fontSize = document.getElementById("font-size");
const fontFamily = document.getElementById("font-family");
const html = document.querySelector(`html`);

function fonSizeRegEx(screen) {
  fontSize.addEventListener("input", () => {
    if (fontSize.value > screen) {
      fontSize.style.border = `1px solid red`;
    } else {
      fontSize.style.border = `1px solid rgb(0, 137, 147)`;
    }
  });
}

let settingStorage = JSON.parse(localStorage.getItem("settings"))
  ? JSON.parse(localStorage.getItem("settings"))
  : [];

// setItem
function setItem() {
  localStorage.setItem("settings", JSON.stringify(settingStorage));
}

// getItem
function getItem() {
  let settingItems = JSON.parse(localStorage.getItem("settings"));
  html.style.fontSize = `${settingItems[settingItems.length - 1].fontSize}px`;
  html.style.fontFamily = `${settingItems[settingItems.length - 1].fontFamily}`;
}

function settingFunc() {
  if (fontSize.value.length) {
    settingStorage.push({
      fontSize: fontSize.value,
      fontFamily: fontFamily.value,
    });

    setItem();
    getItem();
  }
}

if (settingStorage.length) {
  let settingItems = JSON.parse(localStorage.getItem("settings"));
  getItem();
  fontSize.placeholder = `${settingItems[settingItems.length - 1].fontSize}px`;
  fontFamily.value = `${settingItems[settingItems.length - 1].fontFamily}`;
} else if (window.screen.width >= 1600) {
  fonSizeRegEx(20);
  fontSize.placeholder = `20`;
} else if (window.screen.width >= 1440 && window.screen.width <= 1600) {
  fonSizeRegEx(16);
  fontSize.placeholder = `16`;
} else if (window.screen.width >= 1024 && window.screen.width <= 1440) {
  fonSizeRegEx(12);
  fontSize.placeholder = `12`;
}
