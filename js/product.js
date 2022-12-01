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
  "Lenova Thinkbook 15",
  "HP Pavilion x360",
  "Asus Vivobook 15",
];

// Product item image
let itemImages = [];

for (let i = 0; i <= itemNames.length; i++) {
  itemImages.push(i);
}

// Product item price
const itemPrice = [
  "24 400 000",
  "10 200 000",
  "16 650 000",
  "9 500 000",
  "24 600 000",
  "17 000 000",
  "12 560 000",
  "9 155 000",
  "14 300 000",
  "8 500 000",
  "10 105 000",
  "13 100 000",
  "11 000 000",
  "10 150 000",
  "12 200 155",
];

// Product Items
for (let i = 0; i < itemNames.length; i++) {
  productItems.innerHTML += `
    <div class="product_item flex justify_center align_center" id="product-item">

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
                <h1 id="product-item-name">${itemNames[i]}</h1>
            </div>

            <img src="../image/Products/Image-${i}.png" alt="Desktop image" />
        </div>

        <div class="productItem_body flex justify_center align_center">
            <div class="productItem_cost">
                <h1 id="product-item-price">UZS ${itemPrice[i]}</h1>
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

            <div class="learning" id="learning-btn">
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
const productItemName = document.querySelectorAll("#product-item-name");
const productItemPrice = document.querySelectorAll("#product-item-price");
const anOrderBtns = document.querySelectorAll("#placing-an-order-btn");
const productItemSearch = document.getElementById("product-item-search");
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
                  <h2>UZS ${item.itemPrice}</h2>
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
    itemIndex: index,
    itemNames: itemNames[index],
    itemPrice: itemPrice[index],
    itemImage: itemImages[index],
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
    itemIndex: index,
    itemImage: itemImages[index],
    itemNames: itemNames[index],
    itemPrice: itemPrice[index],
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
                    <h1 id="product-item-name">${item.itemNames}</h1>
                  </div>
                  <img
                    src="../image/Products/Image-${item.itemImage}.png"
                    alt="Desktop image"
                  />
                </div>
                <div class="productItem_body flex justify_center align_center">
                  <div class="productItem_cost">
                    <h1>UZS ${item.itemPrice}</h1>
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
                  <div class="learning">
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
const learningBtn = document.querySelectorAll("#learning-btn");
const productItemLearning = document.getElementById("product-item-learning");

let itemAboutDisplay = [
  '15,6" QHD 2560x1440 IPS 240Hz',
  '13" QHD 2260x1350 IPS 140Hz',
  '16.5" QHD 2960x1540 IPS 200Hz',
  '15" QHD 2450x1420 IPS 250Hz',
  '17.3" QHD 1360x1240 IPS 350Hz',
  '12" QHD 2120x1230 IPS 260Hz',
  '14.1" QHD 2260x1350 IPS 200Hz',
  '11" QHD 2130x1340 IPS 270Hz',
  '20.5" QHD 3460x1740 IPS 400Hz',
  '15.5" QHD 2560x1440 IPS 240Hz',
  '13.5" QHD 2060x1040 IPS 215Hz',
  '15.7" QHD 2660x1540 IPS 245Hz',
  '12.5" QHD 2360x1140 IPS 265Hz',
  '10" QHD 2060x1240 IPS 225Hz',
  '12" QHD 2635x1145 IPS 315Hz',
];

function learningFunc() {
  bagMain.classList.add("hidden");
  likeMain.classList.add("hidden");
  productMain.classList.add("hidden");
  learningMain.classList.remove("hidden");
}

learningBtn.forEach((item, i) => {
  item.addEventListener("click", () => {
    learningFunc();

    productItemLearning.innerHTML = `
      <div class="productItem_learnings flex justify_center align_center">
          <div class="item_learning">
            <div class="learning_row">
              <div class="learning_img">
                <img src="../image/Learning/${i}.jpg" alt="Computer image" />
              </div>
              <div class="learning_imgs"></div>
            </div>
            <div class="learning_column flex justify_evenly">
              <div class="learning_title">
                <h1>${productItemName[i].innerHTML}</h1>
              </div>
              <div class="learning_price">
                <h1>${productItemPrice[i].innerHTML}</h1>
              </div>
              <div class="learning_about">
                <h1>Ekran: ${itemAboutDisplay[i]}</h1>
                <h1>
                  Protsessor: Intel® Core™ i7-12700H (3,5 gigagerts – 4,7
                  gigagertsli)<br />
                  (14 yadro; №6 samarali yadro, 8 ta samarali yadro; 20 ta
                  ip)<br />
                </h1>
                <h1>Video karta: GeForce RTX3070Ti NVIDIA 8GB/256Bit/GDDR6</h1>
                <h1>Operativ xotira: 16 GB DDR5</h1>
                <h1>Saqlash: 1TB PCIe® NVMe™ M.2 SSD</h1>
              </div>
            </div>
          </div>
        </div>
    `;
  });
});

// Item search
productItemSearch.addEventListener("input", () => {
  let inputValue = productItemSearch.value.toLowerCase().trim();
  productItemName.forEach((item) => {
    if (item.textContent.toLowerCase().includes(inputValue)) {
      item.parentElement.parentElement.parentElement.style.display = "flex";
    } else {
      item.parentElement.parentElement.parentElement.style.display = "none";
    }
  });
});

// Product Item Type
const pruductTypeValues = document.getElementById("pruduct-type-values");
const productTypeItems = document.getElementById("product-type-items");
const pruductTypeValue = document.getElementById("pruduct-type-value");

let typeNames = [
  "Hammasi",
  "Asus",
  "Honor MagicBook",
  "Lenova",
  "HP",
  "Samsung",
  "Dell",
  "MacBook",
  "MSI Modern",
];
typeNames.forEach((item) => {
  productTypeItems.innerHTML += `
      <li class="productType_item" id="product-type-item">${item}</li>
  `;
});

const productTypeItem = document.querySelectorAll("#product-type-item");

productTypeItem.forEach((item) => {
  item.addEventListener("click", () => {
    pruductTypeValue.innerHTML = item.innerHTML;

    productItemName.forEach((name) => {
      if (item.innerHTML.toLowerCase() == "hammasi") {
        name.parentElement.parentElement.parentElement.style.display = "flex";
      } else if (
        name.innerHTML.toLowerCase().includes(item.innerHTML.toLowerCase())
      ) {
        name.parentElement.parentElement.parentElement.style.display = "flex";
      } else {
        name.parentElement.parentElement.parentElement.style.display = "none";
      }
    });
  });
});

pruductTypeValues.addEventListener("click", () => {
  productTypeItems.classList.toggle("hidden");
});

// User nav
let users = document.querySelectorAll("#user");
let userItems = document.querySelectorAll("#user-item");
let userNavItem = document.getElementsByClassName("userNav");
let userStorage = JSON.parse(localStorage.getItem("user"));

function userNav() {
  users.forEach((user, i) => {
    user.style.display = "flex";
    user.addEventListener("click", () => {
      userClick(i);
    });
  });
  userStorage.forEach((item) => {
    userItems.forEach((userItem) => {
      userItem.innerHTML = item.firstName.charAt();
    });
  });
}

function userClick(id) {
  userNavItem[id].classList.toggle("hidden");
}

if (userStorage) userNav();
