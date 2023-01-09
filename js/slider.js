const thoughtItems = document.getElementById("thought-items");
const thoughtItem = document.querySelectorAll("#thought-item");
let count = 0;

function slider() {
  if (count > thoughtItem.length - 1) {
    count = 0;
  } else if (count < 0) {
    count = thoughtItem.length - 1;
  }
  thoughtItems.style.transform = `translateX(-${count * 30}rem)`;
}

function leftSlider() {
  count--;
  slider();
}
function rightSlider() {
  count++;
  slider();
}
