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
const createPost = document.getElementById("create-post");
const responsePost = document.getElementById("response-post");
const questionInput = document.getElementById("question-input");

function time() {
  let now = new Date();

  let hour = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
  let minute =
    now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();

  let year =
    now.getFullYear() < 10 ? "0" + now.getFullYear() : now.getFullYear();
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
  createPost.innerHTML += `
            <div class="flex align_center post_item">
                <div class="post_date">
                  <h4>${time()}</h4>
                </div>
                <div class="post_items flex">
                  <div class="message_text quation_text">
                    <p>
                      ${questionInput.value}
                    </p>
                  </div>
                  <div class="message_body_brand request_icon">
                    <i class="fa-solid fa-user"></i>
                  </div>
                </div>
            </div>`;

  if (
    questionInput.value === "Salom" ||
    questionInput.value === "Assalomu alaykum"
  ) {
    setTimeout(() => {
      responsePost.innerHTML += `
              <div class="first_post post_item flex align_center">
                  <div class="first_post_date post_date">
                    <h4>${time()}</h4>
                  </div>
                  <div class="post_items flex">
                    <div class="message_body_brand message_brand">
                      <i class="fa-solid fa-laptop" id="brand-icon"></i>
                    </div>
                    <div class="message_text">
                      <p>
                        Valaykum, assalom.<br />
                        Hhurmatli mijoz! Siz tushinmagan<br />
                        qismlaringiz bo'lsa savolingizni be-<br />
                        rishingiz mumkin.<br />
                      </p>
                    </div>
                  </div>
              </div>
      `;
    }, 2000);
    createPost == createPost ? responsePost : createPost;
  } else {
    setTimeout(() => {
      responsePost.innerHTML += `
                <div class="first_post post_item flex align_center">
                    <div class="first_post_date post_date">
                      <h4>${time()}</h4>
                    </div>
                    <div class="post_items flex">
                      <div class="message_body_brand message_brand">
                        <i class="fa-solid fa-laptop" id="brand-icon"></i>
                      </div>
                      <div class="message_text">
                        <p>
                          Bizning adminimiz bilan bog'lanib<br>
                          savollarga javob olishingiz mumkin<br><br>
                          Tel: +998 94 117 3949
                        </p>
                      </div>
                    </div>
                </div>
        `;
      responsePost == responsePost ? createPost : responsePost;
    }, 2000);
  }

  formCreate.reset();
});
