// Top
const up = document.getElementById("up");

document.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    up.style.bottom = "2rem";
  } else {
    up.style.bottom = "-100%";
  }
});
