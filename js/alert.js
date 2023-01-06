const alertSuccess = document.querySelectorAll("#alert-success");
const alertError = document.querySelectorAll("#alert-error");
const alertSuccessCreate = document.querySelectorAll("#alert-success-create");
const alertErrorCreate = document.querySelectorAll("#alert-error-create");
const closeErrorBtns = document.querySelectorAll("#close");
const closeSuccessBtn = document.querySelectorAll("#close-success");
const closeSuccessBtnCreate = document.querySelectorAll("#close-success-create");
const closeErrorBtnCreate = document.querySelectorAll("#close-error-create");

function defaultAlert(where) {
  where.forEach((item) => {
    item.classList.remove("show");
    item.style.right = "-100%";
  });
}
defaultAlert(alertSuccess);
defaultAlert(alertError);
defaultAlert(alertSuccessCreate);
defaultAlert(alertErrorCreate);

function alertFunc(where, btnId) {
  where.forEach((item) => {
    item.classList.remove("show");
    item.style.right = "-100%";
  });

  setTimeout(() => {
    where.forEach((item) => {
      item.classList.add("show");
      item.style.right = "2rem";
    });
  }, 200);

  btnId.forEach((closeBtn, i) => {
    closeBtn.addEventListener("click", () => {
      setTimeout(() => {
        where[i].classList.remove("show");
      }, 1200);
      where[i].style.right = "-100%";
    });
  });
}
