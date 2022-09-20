// Product item
const productMain = document.getElementById("product-main");
const thereProductItems = document.getElementById("there-product-items");
const thereProductItem = document.getElementsByClassName("there_product_item");

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

// There Product Item
const thereProduct = document.getElementById("there-product");
const emptyProduct = document.getElementById("empty-product");
const placingAnOrderBtn = document.querySelectorAll("#placing-an-order-btn");

placingAnOrderBtn.forEach((placingBtn, i) => {
  placingBtn.addEventListener("click", () => {
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
                    Dell XPS 17 (i9-12900HKRTX<br />
                    3060)<br />
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
                    <h3>14.09.2022</h3>
                  </div>
                  <div
                    class="there_product_item_deliver_date there_product_item_date_title"
                  >
                    <h1>Yetkazish vaqti:</h1>
                    <h3>18.09.2022</h3>
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

    counter++;
  });
});

const productBagLink = document.getElementById("product-bag-link");
const topHeaderBag = document.getElementById("top-header-bag");
const topHeader = document.getElementById("top-header");

productBagLink.addEventListener("click", () => {
  productMain.style.display = "none";
  topHeader.style.display = "none";
  topHeaderBag.style.display = "block";

  if (thereProductItem.length > 0) {
    thereProduct.style.display = "block";
  } else {
    emptyProduct.style.display = "block";
  }
});

function deleteProduct(counter) {
  thereProductItem[counter].style.display = "none";
  deleteCounter++;
  if (thereProductItem.length === deleteCounter) {
    thereProduct.style.display = "none";
    emptyProduct.style.display = "block";
  }
}
