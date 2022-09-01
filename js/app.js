// Loader

const main = document.getElementById("main");
const profilLoader = document.getElementById("profil-loader");

setTimeout(() => {
  main.style.display = "block";
  profilLoader.style.display = "none";
}, 3000);

// Message

const messageOpen = document.getElementById("message-open");
const messageClose = document.getElementById("message-close");
const messageItemText = document.getElementById("message-item-text");

messageOpen.addEventListener("click", () => {
  messageItemText.style.display = "flex";
});
messageClose.addEventListener("click", () => {
  messageItemText.style.display = "none";
});
