// Loader

const main = document.getElementById("main");
const profilLoader = document.getElementById("profil-loader");

document.addEventListener('load', () => {
  profilLoader.style.display = "block";
  main.style.display = "none";
});

// Message

const messageOpen = document.getElementById("message-open");
const messageClose = document.getElementById("message-close");
const messageItemText = document.getElementById("message-item-text");
const formCreate = document.getElementById("form-create");
const messageBody = document.getElementById("message-body");
const nameInput = document.getElementById("name-input");

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
  e.preventDefault();
  let inputValue = nameInput.value;
  let uppercase = inputValue.charAt().toUpperCase();
  let lowercase = inputValue.slice(1).toLowerCase();
  let result = uppercase + lowercase;

  if (
    result.trim().length > 0 &&
    nameInput.placeholder == `Ismingizni kiriting...` &&
    result != "Salom" &&
    result != "Assalomu alaykum"
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
                        Assalomu, alaykum! ${result}.<br />
                        Hurmatli mijoz! Savollaringiz bo'lsa<br>
                        berishingiz mumkin.<br>
                      </p>
                  </div>

              </div>

          </div>`;

      nameInput.placeholder = `Savolingizni berishingiz mumkin...`;
    }, 2000);
  } else if (result === "Salom" || result == "Assalomu alaykum") {
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
                        Valaykum, alaykum!<br />
                        Hurmatli mijoz! Savollaringiz bo'lsa<br>
                        berishingiz mumkin.<br>
                      </p>
                  </div>

              </div>

          </div>`;
    }, 2000);
  } else if (
    result.trim().length > 0 &&
    nameInput.placeholder == `Savolingizni berishingiz mumkin...` &&
    result != "Salom" &&
    result != "Assalomu alaykum"
  ) {
    let questionInputValue = nameInput.value;
    let qusetionUppercase = questionInputValue.charAt().toUpperCase();
    let qusetionLowercase = questionInputValue.slice(1).toLowerCase();
    let questionResult = qusetionUppercase + qusetionLowercase;

    if (questionInputValue.trim().length > 0) {
      messageBody.innerHTML += `
          <div class="flex align_center post_item wf-100">

              <div class="post_date">
                <h4>${time()}</h4>
              </div>

              <div class="post_items flex wf-100">

                  <div class="message_text quation_text">
                    <p>
                        ${questionResult}
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
                        ${questionResult}: Bu savolingizga bizning admin
                        bilan bog'lanish orqali olishingiz,
                        shuningdek ko'p so'raladigan
                        savollar bo'limdan ham savolingizga
                        javob topishingiz mumkin.<br><br>
                        Admin tel: +998 94 117 3949
                      </p>
                  </div>

              </div>

          </div>`;
      }, 2000);
    }
  }

  formCreate.reset();
});
