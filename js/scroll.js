// Scroll

const scrollProgress = document.getElementById("scrollbarProgress");

window.addEventListener("scroll", () => {
  const heightDoc =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;

  console.log((scrollTop / heightDoc) * 90);

  if ((scrollTop / heightDoc) * 90 <= 2) {
    scrollProgress.style.top = `15px`;
  } else {
    scrollProgress.style.top = `${(scrollTop / heightDoc) * 87.5}%`;
  }
});
