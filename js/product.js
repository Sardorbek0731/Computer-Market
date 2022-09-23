const productMain = document.getElementById("product-main");
const thereProductItems = document.getElementById("there-product-items");
const thereProductItem = document.getElementsByClassName("there_product_item");
const productItemCounter = document.getElementById("product-item-counter");
const topHeaderBag = document.getElementById("top-header-bag");
const topHeader = document.getElementById("top-header");
const thereProduct = document.getElementById("there-product");
const emptyProduct = document.getElementById("empty-product");
const placingAnOrderBtn = document.querySelectorAll("#placing-an-order-btn");

// Placing date
function placingDate() {
  let now = new Date();

  let date = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
  let month = now.getMonth() < 10 ? "0" + now.getMonth() : now.getMonth();
  let year = now.getFullYear();

  return `${date}.${month}.${year}`;
}
// Deliver date
function deliverDate() {
  let now = new Date();

  let date = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
  let month = now.getMonth() < 10 ? "0" + now.getMonth() : now.getMonth();
  let year = now.getFullYear();

  return `${date + 3}.${month}.${year}`;
}

// There Main
let counter = 0;
let deleteCounter = 0;
let productItemImages = [
  "Image-1",
  "Image-2",
  "Image-3",
  "Image-4",
  "Image-5",
  "Image-6",
];
let productItemNames = [
  "Dell XPS 17",
  "HP ENVY x360",
  "Samsung Galaxy Book Pro",
  "Products HP Victus 16",
  "MacBook Pro M1 Pro",
  "MICROSOFT Surface Pro 8",
];

placingAnOrderBtn.forEach((placingBtn, i) => {
  placingBtn.addEventListener("click", (e) => {
    e.preventDefault();
    thereProductItems.innerHTML += `
      <div class="there_product_item align_center justify_evenly"
          id=there-product-item>
  
            <div class="there_product_item_img">
                  <img
                    src="../image/Products/${productItemImages[i]}.png"
                    alt="Dell image"
                  />
            </div>
  
            <div class="there_product_item_name flex justify_evenly">
                  <h1>
                    ${productItemNames[i]}
                  </h1>
                <div class="there_product_item_price">
                    <h2>UZS 15,000,000</h2>
                </div>
            </div>
  
            <div class="there_product_item_date flex justify_evenly align_center" >
                <div
                    class="there_product_item_order_date there_product_item_date_title"
                  >
                    <h1>Buyurtma vaqti:</h1>
                    <h3>${placingDate()}</h3>
                  </div>
                  <div
                    class="there_product_item_deliver_date there_product_item_date_title"
                  >
                    <h1>Yetkazish vaqti:</h1>
                    <h3>${deliverDate()}</h3>
                  </div>
            </div>
  
            <div class="there_product_item_btns flex justify_evenly align_center" >
  
                <div class="there_product_item_delete there_product_item_btn">
                    <button type="button" id="there-product-item-delete" onclick=deleteProduct(${counter})>
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
  
                <div class="there_product_item_edit there_product_item_btn">
                    <button type="button" id="there-product-item-edit">
                      <i class="fa-solid fa-pen"></i>
                    </button>
                </div>
  
            </div>
        </div>
    `;

    productItemCounter.innerHTML++;
    counter++;
    localStorage.setItem("item", JSON.stringify(thereProductItems.innerHTML));
    localStorage.setItem(
      "itemCounter",
      JSON.stringify(productItemCounter.innerHTML)
    );
  });
});

let itemStorage = JSON.parse(localStorage.getItem("item"))
  ? JSON.parse(localStorage.getItem("item"))
  : [];

thereProductItems.innerHTML += itemStorage;

let itemStorageCounter = JSON.parse(localStorage.getItem("itemCounter"))
  ? JSON.parse(localStorage.getItem("itemCounter"))
  : [];

productItemCounter.innerHTML = itemStorageCounter.length
  ? itemStorageCounter
  : 0;

// There Main and Emty Main open link
function productBagLink() {
  productMain.style.display = "none";
  topHeader.style.display = "none";
  topHeaderBag.style.display = "block";

  localStorage.setItem("blockStorage", JSON.stringify("block"));
  localStorage.setItem("noneStorage", JSON.stringify("none"));

  if (thereProductItem.length > 0) {
    localStorage.setItem("thereBlockStorage", JSON.stringify("block"));
    thereProduct.style.display = "block";
  } else {
    localStorage.setItem("emptyBlockStorage", JSON.stringify("block"));
    emptyProduct.style.display = "block";
  }
}
let thereBlockStorage = JSON.parse(localStorage.getItem("thereBlockStorage"))
  ? JSON.parse(localStorage.getItem("thereBlockStorage"))
  : [];
let emptyBlockStorage = JSON.parse(localStorage.getItem("emptyBlockStorage"))
  ? JSON.parse(localStorage.getItem("emptyBlockStorage"))
  : [];

let noneStorage = JSON.parse(localStorage.getItem("noneStorage"))
  ? JSON.parse(localStorage.getItem("noneStorage"))
  : [];
let blockStorage = JSON.parse(localStorage.getItem("blockStorage"))
  ? JSON.parse(localStorage.getItem("blockStorage"))
  : [];
productMain.style.display = noneStorage;
topHeader.style.display = noneStorage;
topHeaderBag.style.display = blockStorage;

thereProduct.style.display = thereBlockStorage;
emptyProduct.style.display = emptyBlockStorage;

// There Main and Emty Main close link

function productItemBack() {
  localStorage.setItem("blockBack", JSON.stringify("block"));
  localStorage.setItem("noneBack", JSON.stringify("none"));

  thereProduct.style.display = "none";
  emptyProduct.style.display = "none";
  topHeaderBag.style.display = "none";
  topHeader.style.display = "block";
  productMain.style.display = "block";
}

// There Main item delete
function deleteProduct(counter) {
  thereProductItem[counter].style.display = "none";
  deleteCounter++;

  if (thereProductItem.length === deleteCounter) {
    localStorage.setItem("itemDelete", JSON.stringify("none"));
    localStorage.setItem("emtyItemDelete", JSON.stringify("block"));
    localStorage.setItem("nullItemCounter", JSON.stringify(0));
    emptyProduct.style.display = "block";
    thereProduct.style.display = "none";
  }
}
let emtyItemDelete = JSON.parse(localStorage.getItem("emtyItemDelete"))
  ? JSON.parse(localStorage.getItem("emtyItemDelete"))
  : [];
let itemDelete = JSON.parse(localStorage.getItem("itemDelete"))
  ? JSON.parse(localStorage.getItem("itemDelete"))
  : [];

thereProduct.style.display = itemDelete;
emptyProduct.style.display = emtyItemDelete;
