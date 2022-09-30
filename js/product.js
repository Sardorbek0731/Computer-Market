// Product Page
const productItemCounter = document.getElementById("product-item-counter");
const productMain = document.getElementById("product-main");
const emptyProduct = document.getElementById("empty-product");
const thereProduct = document.getElementById("there-product");
const bagMain = document.getElementById("bag-main");
const thereProductItems = document.getElementById("there-product-items");
const thereProductItem = document.getElementsByClassName("there_product_item");
const itemDeleteBtn = document.getElementsByClassName("item-delete-btn");
productItemCounter.innerHTML = 0;

// Product item image

const imageNames = [
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

// Product item name

const itemNames = [
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
const itemPrice = [
  "UZS 24 400 000",
  "UZS 10 200 000",
  "UZS 16 650 000",
  "UZS 9 500 000",
  "UZS 24 600 000",
  "UZS 17 000 000",
  "UZS 12 560 000",
  "UZS 9 155 000",
  "UZS 14 300 000",
];

let storageItem = JSON.parse(localStorage.getItem("item"))
  ? JSON.parse(localStorage.getItem("item"))
  : [];

if (storageItem.length) {
  showCounter();
  showItem();
  thereProductDiv();
} else {
  emtyProductDiv();
}

// show counter
function showCounter() {
  let counter = JSON.parse(localStorage.getItem("item"));

  productItemCounter.innerHTML = counter.length;
}

// showItem
function showItem() {
  let storageItem = JSON.parse(localStorage.getItem("item"));
  thereProductItems.innerHTML = "";
  storageItem.forEach((item, i) => {
    thereProductItems.innerHTML += `
      <div class="there_product_item flex justify_evenly align_center">
              <div class="there_product_item_img">
                <img src="../image/Products/${item.itemImage}.png" alt="Item image" />
              </div>

              <div class="there_product_item_name flex justify_evenly">
                <h1>${item.itemNames}</h1>
                <div class="there_product_item_price">
                  <h2>${item.itemPrice}</h2>
                </div>
              </div>

              <div class="there_product_item_date flex justify_evenly">
                <div class="there_product_item_date_title">
                  <h1>Buyurtma vaqti:</h1>
                  <h3>15.09.2022</h3>
                </div>

                <div class="there_product_item_date_title">
                  <h1>Yetkazish vaqti:</h1>
                  <h3>15.09.2022</h3>
                </div>

              </div>

              <div class="there_product_item_btns flex justify_evenly">
                <div class="there_product_item_btn there_product_item_delete">
                  <button type="button" onclick="deleteItem(${i})">
                    <i class="fa-solid fa-trash-can"></i>
                  </button>
                </div>
                
                <div class="there_product_item_btn there_product_item_edit">
                  <button type="button">
                    <i class="fa-regular fa-pen-to-square"></i>
                  </button>
                </div>
              </div>
      </div>
    `;
  });
}

// thereProductDiv
function thereProductDiv() {
  emptyProduct.style.display = "none";
  thereProduct.style.display = "block";
}
function emtyProductDiv() {
  emptyProduct.style.display = "block";
  thereProduct.style.display = "none";
}

// setItem
function setItem() {
  localStorage.setItem("item", JSON.stringify(storageItem));
}

function placingAnOrder(index) {
  storageItem.push({
    time: "14:10, 30.09.2022",
    itemImage: imageNames[index],
    itemNames: itemNames[index],
    itemPrice: itemPrice[index],
  });
  setItem();
  showCounter();
  showItem();

  if (storageItem.length) {
    thereProductDiv();
  } else {
    emtyProductDiv();
  }
}

// There item page

function productBagLink() {
  productMain.style.display = "none";
  bagMain.style.display = "block";
}

// Delete Item
function deleteItem(id) {
  const newStorageItem = storageItem.filter((item, i) => {
    return i !== id;
  });
  storageItem = newStorageItem;
  setItem();
  showCounter();
  showItem();

  if (!newStorageItem.length) {
    emtyProductDiv();
  }
}

// Product item "Back" link

function productItemBack() {
  productMain.style.display = "block";
  bagMain.style.display = "none"
}
