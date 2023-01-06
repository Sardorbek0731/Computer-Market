const alertSuccess = document.getElementById("alert-success");
const alertError = document.querySelectorAll("#alert-error");
const closeBtns = document.querySelectorAll("#close");
const closeSuccessBtn = document.getElementById("close-success");

alertSuccess.classList.remove("show");
alertSuccess.style.right = "-100%";

alertError.forEach((item) => {
  item.classList.remove("show");
  item.style.right = "-100%";
});
function alertSuccessFunc() {
  alertSuccess.classList.remove("show");
  alertSuccess.style.right = "-100%";

  setTimeout(() => {
    alertSuccess.classList.add("show");
    alertSuccess.style.right = "2rem";
  }, 200);

  closeSuccessBtn.addEventListener("click", () => {
    setTimeout(() => {
      alertSuccess.classList.remove("show");
    }, 1200);
    alertSuccess.style.right = "-100%";
  });
}

function alertErrorFunc() {
  alertError.forEach((item) => {
    item.classList.remove("show");
    item.style.right = "-100%";
  });

  setTimeout(() => {
    alertError.forEach((item) => {
      item.classList.add("show");
      item.style.right = "2rem";
    });
  }, 200);

  closeBtns.forEach((closeBtn, i) => {
    closeBtn.addEventListener("click", () => {
      setTimeout(() => {
        alertError[i].classList.remove("show");
      }, 1200);
      alertError[i].style.right = "-100%";
    });
  });
}
