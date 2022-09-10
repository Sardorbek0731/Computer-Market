const plusBtn = document.querySelector(".plus");
const containerSecond = document.querySelector(".container_second");
const xMark = document.querySelector(".xMark");
const plusIcon = document.querySelector("#plusIcon");

plusBtn.addEventListener("click", () => {
  plusIcon.style.transform = "rotate(315deg)";
  plusBtn.style.animation = "plus-animate 5s linear forwards";
  setTimeout(() => {
    containerSecond.style.display = "flex";
  }, 2500);
  setTimeout(() => {
    plusBtn.style.display = "none";
  }, 5100);
});

xMark.addEventListener("click", () => {
  setTimeout(() => {
    containerSecond.style.display = "none";
  }, 2500);
  plusBtn.style.display = "flex";
  plusBtn.style.animation = "close-animate 5s linear forwards";
});
