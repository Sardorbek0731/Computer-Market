// Product item
const productMain = document.getElementById("product-main");
const thereProductItems = document.getElementById("there-product-items");
const thereProductItem = document.getElementById("there-product-item");
const thereProduct = document.getElementById("there-product");
const topHeaderBag = document.getElementById("top-header-bag");
const productBag = document.getElementById("product-bag");

productBag.addEventListener("click", () => {
  productMain.style.display = "none";
  thereProduct.style.display = "block";
  topHeaderBag.style.display = "block";

  // There Product Item Delete and Edit

  ProductItemDelete.addEventListener("click", () => {
    thereProductItem.style.display = "none";
  });
});

// There Product Item
const placingAnOrderBtn = document.getElementById("placing-an-order-btn");

placingAnOrderBtn.addEventListener("click", () => {
  thereProductItems.innerHTML += `
    <div class="there_product_item flex align_center justify_evenly"
        id="there-product-item">

          <div class="there_product_item_img">
                <img
                  src="../image/Products/Dell XPS 17 (i9-12900HKRTX3060).png"
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
                  <button type="button" id=there-product-item-delete">
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
});
