// Scroll

const scrollProgress = document.getElementById("scrollbarProgress");

window.addEventListener("scroll", () => {
  const heightDoc =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;

  if ((scrollTop / heightDoc) * 90 <= 2) {
    scrollProgress.style.top = `2%`;
  } else {
    scrollProgress.style.top = `${(scrollTop / heightDoc) * 87.5}%`;
  }
  scrollProgress.style.display = `block`;
});
