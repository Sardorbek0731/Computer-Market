// Top
const up = document.getElementById("up");
const message = document.getElementById("message");

document.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    up.style.bottom = "2rem";
    message.style.bottom = "7rem";
  } else {
    up.style.bottom = "-100%";
    message.style.bottom = "2rem";
  }
});
