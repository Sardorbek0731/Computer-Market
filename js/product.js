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
  : 0;

// There Main and Emty Main open link
function productBagLink() {
  productMain.style.display = "none";
  topHeader.style.display = "none";
  topHeaderBag.style.display = "block";
  localStorage.setItem("thereProductNone", JSON.stringify("none"));
  localStorage.setItem("thereProductHeaderBlock", JSON.stringify("block"));

  if (thereProductItem.length > 0) {
    localStorage.setItem("thereProductBlock", JSON.stringify("block"));
    thereProduct.style.display = "block";
  } else {
    localStorage.clear();
    emptyProduct.style.display = "block";
  }
}
let thereProductBlock = JSON.parse(localStorage.getItem("thereProductBlock"))
  ? JSON.parse(localStorage.getItem("thereProductBlock"))
  : "none";

let thereProductNone = JSON.parse(localStorage.getItem("thereProductNone"))
  ? JSON.parse(localStorage.getItem("thereProductNone"))
  : "block";

let thereProductHeaderBlock = JSON.parse(
  localStorage.getItem("thereProductHeaderBlock")
)
  ? JSON.parse(localStorage.getItem("thereProductHeaderBlock"))
  : "none";

thereProduct.style.display = thereProductBlock;
productMain.style.display = thereProductNone;
topHeader.style.display = thereProductNone;

// There Main and Emty Main close link

function productItemBack() {
  localStorage.setItem(
    "thereProductBlockNone",
    JSON.stringify(("none"))
  );
  localStorage.setItem(
    "thereProductNoneBlock",
    JSON.stringify(("block"))
  );
  localStorage.setItem("thereProductHeaderNone", JSON.stringify("none"));
  thereProduct.style.display = "none";
  emptyProduct.style.display = "none";
  topHeaderBag.style.display = "none";
  topHeader.style.display = "block";
  productMain.style.display = "block";
}
let thereProductBlockNone = JSON.parse(
  localStorage.getItem("thereProductBlockNone")
)
  ? JSON.parse(localStorage.getItem("thereProductBlockNone"))
  : thereProductBlock;

let thereProductNoneBlock = JSON.parse(
  localStorage.getItem("thereProductNoneBlock")
)
  ? JSON.parse(localStorage.getItem("thereProductNoneBlock"))
  : thereProductNone;
let thereProductHeaderNone = JSON.parse(
  localStorage.getItem("thereProductHeaderNone")
)
  ? JSON.parse(localStorage.getItem("thereProductHeaderNone"))
  : thereProductHeaderBlock;

thereProduct.style.display = thereProductBlockNone;
productMain.style.display = thereProductNoneBlock;
topHeaderBag.style.display = thereProductHeaderNone;
topHeader.style.display = thereProductNoneBlock;

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
