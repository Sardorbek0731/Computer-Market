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
  "Image-7",
  "Image-8",
  "Image-9",
];
let productItemNames = [
  "Dell XPS 17",
  "HP ENVY x360",
  "Samsung Galaxy Book Pro",
  "Products HP Victus 16",
  "MacBook Pro M1 Pro",
  "MICROSOFT Surface Pro 8",
  "Asus Zenbook 14 Ux434",
  "Dell Inspiron 5510 Core",
  "Lenova IdeaPad Flex 5",
];
let productItemMoney = [
  "24 400 000",
  "10 200 000",
  "16 650 000",
  "9 500 000",
  "24 600 000",
  "17 000 000",
  "12 560 000",
  "9 155 000",
  "14 300 000",
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
                    <h2>UZS ${productItemMoney[i]}</h2>
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
  : 0;

// There Main and Emty Main open link
function productBagLink() {
  productMain.style.display = "none";
  topHeader.style.display = "none";
  topHeaderBag.style.display = "block";
  localStorage.setItem("clickLinkNone", JSON.stringify("none"));
  localStorage.setItem("clickLinkBlock", JSON.stringify("block"));

  if (thereProductItem.length > 0) {
    localStorage.setItem("thereProductBlock", JSON.stringify("block"));
    thereProduct.style.display = "block";
  } else {
    localStorage.setItem("emtyProductBlock", JSON.stringify("block"));
    localStorage.clear();
    emptyProduct.style.display = "block";
  }
}
let thereProductBlock = JSON.parse(localStorage.getItem("thereProductBlock"))
  ? JSON.parse(localStorage.getItem("thereProductBlock"))
  : [];
let emtyProductBlock = JSON.parse(localStorage.getItem("emtyProductBlock"))
  ? JSON.parse(localStorage.getItem("emtyProductBlock"))
  : [];

let clickLinkNone = JSON.parse(localStorage.getItem("clickLinkNone"))
  ? JSON.parse(localStorage.getItem("clickLinkNone"))
  : [];

let clickLinkBlock = JSON.parse(localStorage.getItem("clickLinkBlock"))
  ? JSON.parse(localStorage.getItem("clickLinkBlock"))
  : [];

thereProduct.style.display = thereProductBlock;
emptyProduct.style.display = emtyProductBlock;
topHeaderBag.style.display = clickLinkNone;
productMain.style.display = clickLinkNone;
topHeader.style.display = clickLinkNone;

// There Main and Emty Main close link

function productItemBack() {
  localStorage.setItem("backLinkNone", JSON.stringify("none"));
  localStorage.setItem("backLinkBlock", JSON.stringify("block"));
  thereProduct.style.display = "none";
  emptyProduct.style.display = "none";
  topHeaderBag.style.display = "none";
  topHeader.style.display = "block";
  productMain.style.display = "block";
}
let backLinkNone = JSON.parse(localStorage.getItem("backLinkNone"))
  ? JSON.parse(localStorage.getItem("backLinkNone"))
  : [];

let backLinkBlock = JSON.parse(localStorage.getItem("backLinkBlock"))
  ? JSON.parse(localStorage.getItem("backLinkBlock"))
  : [];

thereProduct.style.display = backLinkNone;
emptyProduct.style.display = backLinkNone;
topHeaderBag.style.display = backLinkNone;
productMain.style.display = backLinkBlock;
topHeader.style.display = backLinkBlock;

// There Main item delete
function deleteProduct(counter) {
  thereProductItem[counter].style.display = "none";
  deleteCounter++;
  productItemCounter.innerHTML--;

  localStorage.setItem("newDeleteCounter", JSON.stringify(++counter));
  localStorage.setItem(
    "newProductItems",
    JSON.stringify(thereProductItems.innerHTML)
  );
  localStorage.setItem(
    "newItemCounter",
    JSON.stringify(productItemCounter.innerHTML)
  );

  let newDeleteCounter = JSON.parse(localStorage.getItem("newDeleteCounter"))
    ? JSON.parse(localStorage.getItem("newDeleteCounter"))
    : [];

  if (thereProductItem.length === newDeleteCounter) {
    localStorage.clear();
    thereProduct.style.display = "none";
    topHeaderBag.style.display = "block";
    emptyProduct.style.display = "block";
  }
}

let newProductItems = JSON.parse(localStorage.getItem("newProductItems"))
  ? JSON.parse(localStorage.getItem("newProductItems"))
  : itemStorage;

let newItemCounter = JSON.parse(localStorage.getItem("newItemCounter"))
  ? JSON.parse(localStorage.getItem("newItemCounter"))
  : itemStorageCounter;

thereProductItems.innerHTML = newProductItems;
productItemCounter.innerHTML = newItemCounter;
