// Global Item../image/learning/items/
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

function learningFunc() {
  bagMain.classList.add("hidden");
  likeMain.classList.add("hidden");
  productMain.classList.add("hidden");
  learningMain.classList.remove("hidden");
}

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
let itemAboutProseccor = [
  "Protsessor: Intel® Core™ i7-12700H (3,5 gigagerts – 4,7 gigagertsli) (14 yadro; №6 samarali yadro, 8 ta samarali yadro;)",
  "Intel Core i5-1235U 12-avlod pokoleniya, taktovaya chastota do 4,4 GGts, 12 MB kesh-pamyati L3, 10 yader, 12 potokov",
  "Intel Core i5-1135g7 4 yadra 8 potokov, taktovaya chastota 2,4 GGts razgon do 4,2 GGts kesh-pamyat' 8 mb",
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
let imageId = 0;

learningBtn.forEach((item, itemId) => {
  item.addEventListener("click", () => {
    learningFunc();

    productItemLearning.innerHTML = `
      <div class="productItem_learnings flex justify_center align_center">
          <div class="item_learning">
            <div class="learning_row">
              <div class="learning_img">
                <img src="../image/Learning/${itemId}.jpg" alt="Computer image" />
              </div>
              <div class="learning_imgs"></div>
            </div>
            <div class="learning_column flex justify_evenly">
              <div class="learning_title">
                <h1>${productItemName[itemId].innerHTML}</h1>
              </div>
              <div class="learning_price">
                <h1>${productItemPrice[itemId].innerHTML}</h1>
              </div>
              <div class="learning_about">
                <h1>Ekran: ${itemAboutDisplay[itemId]}</h1>
                <h1>
                  Prosessor: ${itemAboutProseccor[itemId]}
                </h1>
                <h1>Video karta: GeForce RTX3070Ti NVIDIA 8GB/256Bit/GDDR6</h1>
                <h1>Operativ xotira: 16 GB DDR5</h1>
                <h1>Saqlash: 1TB PCIe® NVMe™ M.2 SSD</h1>
              </div>
            </div>
          </div>
          
          <div class="learningMain_imgs flex align_center">
            <div class="learningMain_img">
                <img src="../image/learning/${itemId}/${imageId}.png" id="fullscreen-main-img"/>
            </div>

            <div class="main_slider flex align_center">
              <div class="mainLeft_slider mainSlider_item flex justify_center align_center" id="left-main-slider">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    fill="currentColor" 
                    class="bi bi-chevron-left" 
                    viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>
              </div>

              <div class="mainRight_slider mainSlider_item flex justify_center align_center" id="right-main-slider">
                <svg    
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    fill="currentColor" 
                    class="bi bi-chevron-right" 
                    viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </div>
            </div>

            <div class="fullscreen_btn" id="fullscreen-btn">
              <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  fill="currentColor" 
                  class="bi bi-fullscreen" 
                  viewBox="0 0 16 16">
                <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z"/>
              </svg>
            </div>
          </div> 

          <div class="learningItem_imgs flex justify_between align_center">
            <div class="learningItem_img active" id="learning-item-img">
                <img src="../image/learning/${itemId}/0.png"/>
            </div>
            <div class="learningItem_img" id="learning-item-img">
              <img src="../image/learning/${itemId}/1.png" />
            </div>
            <div class="learningItem_img" id="learning-item-img">
              <img src="../image/learning/${itemId}/2.png" />
            </div>
            <div class="learningItem_img" id="learning-item-img">
              <img src="../image/learning/${itemId}/3.png" />
            </div>
          </div>

          <div class="overlay" id="global-overlay"></div>
        </div>
    `;

    const fullscreenBtn = document.getElementById("fullscreen-btn");
    const globalOverlay = document.getElementById("global-overlay");
    const leftMainSlider = document.getElementById("left-main-slider");
    const rightMainSlider = document.getElementById("right-main-slider");
    const fullscreenMainImg = document.getElementById("fullscreen-main-img");
    const learningItemImg = document.querySelectorAll("#learning-item-img");

    learningItemImg.forEach((item, i) => {
      item.addEventListener("click", () => {
        fullscreenMainImg.src = `../image/learning/${itemId}/${i}.png`;

        learningItemImg.forEach((item) => {
          item.classList.remove("active");
        });
        learningItemImg[i].classList.add("active");
        imageId = i;
      });
    });

    function activeItem() {
      learningItemImg.forEach((item) => {
        item.classList.remove("active");
      });
      learningItemImg[imageId].classList.add("active");
    }

    function sliderFunc(where) {
      if (imageId > learningItemImg.length - 1) {
        imageId = 0;
        where.src = `../image/learning/${itemId}/${imageId}.png`;
      } else if (imageId < 0) {
        imageId = learningItemImg.length - 1;
        where.src = `../image/learning/${itemId}/${imageId}.png`;
      } else {
        where.src = `../image/learning/${itemId}/${imageId}.png`;
      }
    }

    rightMainSlider.addEventListener("click", () => {
      imageId++;
      sliderFunc(fullscreenMainImg);
      activeItem();
    });

    leftMainSlider.addEventListener("click", () => {
      imageId--;
      sliderFunc(fullscreenMainImg);
      activeItem();
    });

    fullscreenBtn.addEventListener("click", () => {
      globalOverlay.style.display = "flex";
      globalOverlay.innerHTML = `
        <div class="close flex justify_center align_center" id="close">
          <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              fill="currentColor" 
              class="bi bi-x-lg" 
              viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
          </svg>
        </div>

        <div class="slider">
          <div class="left_slider slider_item flex justify_center align_center" id="left-slider">
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                fill="currentColor" 
                class="bi bi-chevron-left" 
                viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
          </div>

          <div class="right_slider slider_item flex justify_center align_center" id="right-slider">
            <svg    
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                fill="currentColor" 
                class="bi bi-chevron-right" 
                viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </div>
        </div>

        <img src="../image/learning/${itemId}/${imageId}.png" id="fullscreen-img"/>
        `;

      const close = document.getElementById("close");
      const fullscreenImg = document.getElementById("fullscreen-img");
      const leftSlider = document.getElementById("left-slider");
      const rightSlider = document.getElementById("right-slider");

      close.addEventListener("click", () => {
        globalOverlay.style.display = "none";
      });

      leftSlider.addEventListener("click", () => {
        imageId--;
        sliderFunc(fullscreenImg);
      });

      rightSlider.addEventListener("click", () => {
        imageId++;
        sliderFunc(fullscreenImg);
      });
    });
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
let registerStorage = JSON.parse(localStorage.getItem("register"));

function userNav() {
  users.forEach((user, i) => {
    user.style.display = "flex";
    user.addEventListener("click", () => {
      userClick(i);
    });
  });

  userItems.forEach((userItem) => {
    userItem.innerHTML = registerStorage.firstName.charAt();
  });
}

function userClick(id) {
  userNavItem[id].classList.toggle("hidden");
}

if (userStorage) userNav();

const logouts = document.querySelectorAll("#logout");
let inputValues = JSON.parse(localStorage.getItem("register"))
  ? JSON.parse(localStorage.getItem("register"))
  : [];

function setItemValues() {
  localStorage.setItem("register", JSON.stringify(inputValues));
}

logouts.forEach((item) => {
  item.addEventListener("click", () => {
    inputValues = {
      firstName: inputValues.firstName,
      lastName: inputValues.lastName,
    };

    setItemValues();
  });
});
