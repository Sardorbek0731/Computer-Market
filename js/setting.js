// Global
const fontSize = document.getElementById("font-size");
const fontFamily = document.getElementById("font-family");
const html = document.querySelector(`html`);

// Font Family
let fontFamilys = [
  "Segoe UI",
  "Impact",
  "Times New Roman",
  "Georgia",
  "Garamond",
  "Arial",
  "Verdana",
  "Helvetica",
  "Courier New",
  "Lucida Console",
  "Monaco",
  "Brush Script MT",
  "Lucida Handwriting",
  "Copperplate",
  "Papyrus",
  "fantasy",
];

fontFamilys.forEach((item) => {
  fontFamily.innerHTML += `
      <option value="${item}">${item}</option>
  `;
});

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
  settingItems.forEach((item) => {
    html.style.fontSize = `${item.fontSize}px`;
    html.style.fontFamily = `${item.fontFamily}`;
  });
}

function settingFunc() {
  if (fontSize.value.length && fontFamily.value.length) {
    settingStorage = [
      {
        fontSize: fontSize.value,
        fontFamily: fontFamily.value,
      },
    ];

    setItem();
    getItem();
  }
}
if (window.screen.width >= 1600) {
  fonSizeRegEx(20);
  fontSize.placeholder = `20`;
} else if (window.screen.width >= 1440 && window.screen.width <= 1600) {
  fonSizeRegEx(16);
  fontSize.placeholder = `16`;
} else if (window.screen.width >= 1024 && window.screen.width <= 1440) {
  fonSizeRegEx(12);
  fontSize.placeholder = `12`;
}
if (settingStorage.length) {
  let settingItems = JSON.parse(localStorage.getItem("settings"));
  getItem();
  settingItems.forEach((item) => {
    fontSize.placeholder = `${item.fontSize}`;
    fontFamily.value = `${item.fontFamily}`;
  });
}

// User nav
let user = document.getElementById("user");
let userItem = document.getElementById("user-item");
let userNavItem = document.getElementById("user-nav");
let userStorage = JSON.parse(localStorage.getItem("user"));
let registerStorage = JSON.parse(localStorage.getItem("register"));

function userNav() {
  user.style.display = "flex";
  user.addEventListener("click", () => {
    userNavItem.classList.toggle("hidden");
  });

  userItem.innerHTML = registerStorage.firstName.charAt();
}

if (userStorage) userNav();
