// Global
const fontSize = document.getElementById("font-size");
const html = document.querySelector(`html`);

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

  settingItems.forEach((item) => {
    console.log(item.fontSize);
    html.style.fontSize = `${item.fontSize}px`;
  });
}

function settingFunc() {
  if (fontSize.value.length) {
    settingStorage.push({
      fontSize: fontSize.value,
    });

    setItem();
    getItem();
  }
}

if (settingStorage.length) getItem();
