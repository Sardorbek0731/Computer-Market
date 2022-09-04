// Loader

const main = document.getElementById("main");
const profilLoader = document.getElementById("profil-loader");

setTimeout(() => {
  main.style.display = "block";
  profilLoader.style.display = "none";
}, 3000);


// Message

const messageOpen = document.getElementById("message-open");
const messageClose = document.getElementById("message-close");
const messageItemText = document.getElementById("message-item-text");
const formCreate = document.getElementById("form-create");
const messageBody = document.getElementById("message-body");
const questionInput = document.getElementById("question-input");

function time() {
  let now = new Date();

  let hour = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
  let minute =
    now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();

  let year = now.getFullYear();
  let month = now.getMonth() < 10 ? "0" + (now.getMonth() + 1) : now.getMonth();
  let date = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();

  return `${hour}:${minute}, ${year}.${month}.${date}`;
}

messageOpen.addEventListener("click", () => {
  messageItemText.style.display = "flex";
});
messageClose.addEventListener("click", () => {
  messageItemText.style.display = "none";
});

formCreate.addEventListener("submit", (e) => {
  let regEx = /^[a-zA-Z]$/;
  e.preventDefault();
  let inputValue = questionInput.value;
  let uppercase = inputValue.charAt().toUpperCase();
  let lowercase = inputValue.slice(1).toLowerCase();
  let result = uppercase + lowercase;

  if (result.length <= 0) {
    messageBody = false;
  } else if (
    result === "Salom" ||
    result === "Assalomu alaykum" ||
    result === "Assalomu, alaykum"
  ) {
    messageBody.innerHTML += `
          <div class="flex align_center post_item wf-100">

              <div class="post_date">
                <h4>${time()}</h4>
              </div>

              <div class="post_items flex wf-100">

                  <div class="message_text quation_text">
                    <p>
                        ${result}
                    </p>
                  </div>

                  <div class="message_body_brand request_icon">
                      <i class="fa-solid fa-user"></i>
                  </div>

              </div>
          </div>`;

    setTimeout(() => {
      messageBody.innerHTML += `
          <div class="first_post post_item flex align_center wf-100">

              <div class="first_post_date post_date">
                  <h4>${time()}</h4>
              </div>

              <div class="post_items flex wf-100">

                  <div class="message_body_brand message_brand">
                      <i class="fa-solid fa-laptop" id="brand-icon"></i>
                  </div>

                  <div class="message_text">
                      <p>
                        Valaykum, assalom.<br />
                        Hurmatli mijoz! Savollarga javobni<br>
                        adminimizdan olishingiz mumkin,<br>
                        shuningdek ko'p so'raladigan sa-<br>
                        vollar bo'limidan savolingizga ja-<br>
                        vob topishingiz mumkin.<br><br>
                        Admin tel: +998 94 117 3949
                      </p>
                  </div>

              </div>

          </div>`;
    }, 2000);
  } else {
    messageBody.innerHTML += `
          <div class="flex align_center post_item wf-100">

              <div class="post_date">
                <h4>${time()}</h4>
              </div>

              <div class="post_items flex wf-100">

                  <div class="message_text quation_text">
                    <p>
                        ${result}
                    </p>
                  </div>

                  <div class="message_body_brand request_icon">
                      <i class="fa-solid fa-user"></i>
                  </div>

              </div>
          </div>`;
    setTimeout(() => {
      messageBody.innerHTML += `
          <div class="first_post post_item flex align_center wf-100">

              <div class="first_post_date post_date">
                  <h4>${time()}</h4>
              </div>

              <div class="post_items flex wf-100">

                  <div class="message_body_brand message_brand">
                      <i class="fa-solid fa-laptop" id="brand-icon"></i>
                  </div>

                  <div class="message_text">
                      <p>
                        Assalomu, alaykum.<br />
                        Hurmatli mijoz! Savollarga javobni<br>
                        adminimizdan olishingiz mumkin,<br>
                        shuningdek ko'p so'raladigan sa-<br>
                        vollar bo'limidan savolingizga ja-<br>
                        vob topishingiz mumkin.<br><br>
                        Admin tel: +998 94 117 3949
                      </p>
                  </div>

              </div>

          </div>`;
    }, 2000);
  }

  formCreate.reset();
});
