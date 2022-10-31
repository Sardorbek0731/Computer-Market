// Global Item
const productItems = document.getElementById("product-items");

// Time
function orderTime() {
  let now = new Date();

  let date = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
  let month =
    now.getMonth() + 1 < 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1;
  let year = now.getFullYear();

  return `${date}.${month}.${year}`;
}
function deliveryTime() {
  let now = new Date();

  let date =
    now.getDate() + 2 < 10 ? "0" + (now.getDate() + 2) : now.getDate() + 2;
  let month =
    now.getMonth() + 1 < 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1;
  let year = now.getFullYear();

  return `${date}.${month}.${year}`;
}

// Product item image

const itemImage = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
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
  "Honor MagicBook Pro",
  "Ultrabuk HP ENVY 13",
  "MSI Modern 14",
];

// Product item price
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
  "UZS 8 500 000",
  "UZS 10 105 000",
  "UZS 13 100 000",
];

// Product Items
for (let i = 0; i < itemNames.length; i++) {
  productItems.innerHTML += `
    <div class="product_item flex justify_center align_center">

        <div class="product_item_like_btn">
            <form>
                <button
                  type="button"
                  class="productItemLikeBtn"
                  onclick="productItemLike(${i})"
                >
                    <i class="fa-solid fa-heart"></i>
                </button>
            </form>
        </div>

        <div class="productItem_head flex justify_center align_center">
            <div class="productItem_name">
                <h1>${itemNames[i]}</h1>
            </div>

            <img src="../image/Products/Image-${i}.png" alt="Desktop image" />
        </div>

        <div class="productItem_body flex justify_center align_center">
            <div class="productItem_cost">
                <h1>${itemPrice[i]}</h1>
            </div>

            <div class="productItem_shop">
              <form>
                  <button
                      type="button"
                      onclick="placingAnOrder(${i})"
                      id="placing-an-order-btn"
                    >
                        Buyurtma berish
                  </button>
              </form>
            </div>

            <div class="learning" onclick="openLearning()">
                <h1>Batafsil...</h1>
            </div>
        </div>
    </div>
  `;
}

// Product Page
const productMain = document.getElementById("product-main");
const bagMain = document.getElementById("bag-main");
const likeMain = document.getElementById("like-main");
const learningMain = document.getElementById("learning-main");
const emptyProduct = document.getElementById("empty-product");
const thereProduct = document.getElementById("there-product");
const emtyProductLike = document.getElementById("emty-product-like");
const thereProductLike = document.getElementById("there-product-like");
const thereProductItems = document.getElementById("there-product-items");
const anOrderBtns = document.querySelectorAll("#placing-an-order-btn");
const itemLikeBtns = document.getElementsByClassName("productItemLikeBtn");
const likeProductItems = document.getElementById("like-product-items");
const thereProductItem = document.getElementsByClassName("there_product_item");
const itemDeleteBtn = document.getElementsByClassName("item-delete-btn");
const productItemCounter = document.querySelectorAll("#product-item-counter");
const productItemLikeCounter = document.querySelectorAll(
  "#product-item-like-counter"
);
productItemCounter.forEach((itemCounter) => {
  itemCounter.innerHTML = 0;
});
productItemLikeCounter.forEach((itemCounter) => {
  itemCounter.innerHTML = 0;
});

let storageItem = JSON.parse(localStorage.getItem("item"))
  ? JSON.parse(localStorage.getItem("item"))
  : [];

let likeMainBlock = JSON.parse(localStorage.getItem("likeMain-block"))
  ? JSON.parse(localStorage.getItem("likeMain-block"))
  : [];

// show counter
function showCounter() {
  let counter = JSON.parse(localStorage.getItem("item"));

  productItemCounter.forEach((itemCounter) => {
    itemCounter.innerHTML = counter.length;
  });
}

// showItem
function showItem() {
  let storageItem = JSON.parse(localStorage.getItem("item"));
  thereProductItems.innerHTML = "";
  storageItem.forEach((item, i) => {
    thereProductItems.innerHTML += `
      <div class="there_product_item flex justify_evenly align_center">
          <div class="there_product_item_img">
              <img src="../image/Products/Image-${item.itemImage}.png" alt="Item image" />
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
                  <h3>${item.orderTime}</h3>
              </div>

              <div class="there_product_item_date_title">
                  <h1>Yetkazish vaqti:</h1>
                  <h3>${item.deliveryTime}</h3>
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

function clickAnOrder(index) {
  anOrderBtns[index].classList.add("clicked_an_order");
  anOrderBtns[index].disabled = true;
  anOrderBtns[index].innerHTML = "Buyurtma berildi";
}

function placingAnOrder(index) {
  storageItem.push({
    orderTime: orderTime(),
    deliveryTime: deliveryTime(),
    itemImage: itemImage[index],
    itemNames: itemNames[index],
    itemPrice: itemPrice[index],
    itemIndex: index,
  });
  setItem();
  showCounter();
  showItem();
  clickAnOrder(index);

  if (storageItem.length) {
    thereProductDiv();
  } else {
    emtyProductDiv();
  }
}

if (storageItem.length) {
  showCounter();
  showItem();
  thereProductDiv();

  storageItem.forEach((item) => {
    clickAnOrder(item.itemIndex);
  });
} else {
  emtyProductDiv();
}

// There item page

function productBagLink() {
  bagMain.classList.remove("hidden");
  likeMain.classList.add("hidden");
  productMain.classList.add("hidden");
  learningMain.classList.add("hidden");
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
  bagMain.classList.add("hidden");
  likeMain.classList.add("hidden");
  learningMain.classList.add("hidden");
  productMain.classList.remove("hidden");
}

// Ordering at Product like
function orderLikeItem() {
  const anOrderLike = document.querySelectorAll("#an-order-like");
  likeStorage.forEach((likeItem, i) => {
    storageItem.forEach((storageItem) => {
      if (likeItem.itemNames == storageItem.itemNames) {
        anOrderLike[i].classList.add("clicked_an_order");
        anOrderLike[i].disabled = true;
        anOrderLike[i].innerHTML = "Buyurtma berildi";
      }
    });
  });

  anOrderLike.forEach((item, i) => {
    item.addEventListener("click", () => {
      anOrderLike[i].classList.add("clicked_an_order");
      anOrderLike[i].disabled = true;
      anOrderLike[i].innerHTML = "Buyurtma berildi";
    });
  });
}

// Like Product
function openLikeProduct() {
  bagMain.classList.add("hidden");
  productMain.classList.add("hidden");
  learningMain.classList.add("hidden");
  likeMain.classList.remove("hidden");

  orderLikeItem();
}

let likeStorage = JSON.parse(localStorage.getItem("likeItem"))
  ? JSON.parse(localStorage.getItem("likeItem"))
  : [];

// thereProductLike
function thereItemLike() {
  emtyProductLike.style.display = "none";
  thereProductLike.style.display = "block";
}
function emtyItemLike() {
  emtyProductLike.style.display = "block";
  thereProductLike.style.display = "none";
}

// setItemLike
function likeSetItem() {
  localStorage.setItem("likeItem", JSON.stringify(likeStorage));
}

function clickedLike(index) {
  itemLikeBtns[index].classList.add("clicked_like");
  itemLikeBtns[index].disabled = true;
}

function productItemLike(index) {
  likeStorage.push({
    itemImage: itemImage[index],
    itemNames: itemNames[index],
    itemPrice: itemPrice[index],
    itemIndex: index,
  });
  likeSetItem();
  showLikeItem();
  showLikeCounter();
  clickedLike(index);

  if (likeStorage.length) {
    thereItemLike();
  } else {
    emtyItemLike();
  }
}
function showLikeItem() {
  let likeStorage = JSON.parse(localStorage.getItem("likeItem"));
  likeProductItems.innerHTML = "";
  likeStorage.forEach((item, i) => {
    likeProductItems.innerHTML += `
      <div class="product_item_like flex justify_center align_center">
                <div class="productItemLikeDelete" onclick="productItemLikeDelete(${i})">
                  <i class="fa-solid fa-trash-can"></i>
                </div>
                <div class="productItem_head flex justify_center align_center">
                  <div class="productItem_name">
                    <h1>${item.itemNames}</h1>
                  </div>
                  <img
                    src="../image/Products/Image-${item.itemImage}.png"
                    alt="Desktop image"
                  />
                </div>
                <div class="productItem_body flex justify_center align_center">
                  <div class="productItem_cost">
                    <h1>${item.itemPrice}</h1>
                  </div>
                  <div class="productItem_shop">
                    <form>
                      <button
                        type="button"
                        onclick="placingAnOrder(${item.itemIndex})"
                        id="an-order-like"
                      >
                        Buyurtma berish
                      </button>
                    </form>
                  </div>
                  <div class="learning" onclick="openLearning()">
                    <h1>Batafsil...</h1>
                  </div>
                </div>
      </div>
    `;
  });
}

// showLikeCounter
function showLikeCounter() {
  let likeCounter = JSON.parse(localStorage.getItem("likeItem"));

  productItemLikeCounter.forEach((itemCounter) => {
    itemCounter.innerHTML = likeCounter.length;
  });
}

// show like item delete
function productItemLikeDelete(id) {
  const newLikeStorage = likeStorage.filter((item, i) => {
    return i !== id;
  });
  likeStorage = newLikeStorage;

  likeSetItem();
  showLikeCounter();
  showLikeItem();
  orderLikeItem();

  if (!newLikeStorage.length) {
    emtyItemLike();
  }
}

if (likeStorage.length) {
  showLikeItem();
  showLikeCounter();
  thereItemLike();

  likeStorage.forEach((item) => {
    clickedLike(item.itemIndex);
  });
} else {
  emtyItemLike();
}

// Product Item Learning
function openLearning() {
  bagMain.classList.add("hidden");
  likeMain.classList.add("hidden");
  productMain.classList.add("hidden");
  learningMain.classList.remove("hidden");
}
