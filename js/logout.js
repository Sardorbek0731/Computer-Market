const logout = document.getElementById("logout");
let inputValues = JSON.parse(localStorage.getItem("register"))
  ? JSON.parse(localStorage.getItem("register"))
  : [];

function setItemValues() {
  localStorage.setItem("register", JSON.stringify(inputValues));
}

logout.addEventListener("click", () => {
  inputValues = {
    firstName: inputValues.firstName,
    lastName: inputValues.lastName,
  };

  setItemValues();
});
