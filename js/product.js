// Product item
const productMain = document.getElementById("product-main");
const bagMain = document.getElementById("bag-main");
const productBag = document.getElementById("product-bag");


productBag.addEventListener("click", () => {
  productMain.style.display = "none";
  bagMain.style.display = "block";
});
