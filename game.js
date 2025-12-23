const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let score = 0;
const scoreEl = document.getElementById("score");

const santa = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 40,
  speed: 5
};

const keys = {};

const gifts = [];
const giftImg = new Image();
giftImg.src = "const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let score = 0;
const scoreEl = document.getElementById("score");

const santa = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 40,
  speed: 5
};

const keys = {};

const gifts = [];
const giftImg = new Image();
giftImg.src = "68324570-gift-box-with-green-ribbon-isolated-on-transparent-background-vector-illustration.jpg"; // ➜ mets une image cadeau 🎁

for (let i = 0; i < 10; i++) {
  gifts.push({
    x: Math.random() * (canvas.width - 40),
    y: Math.random() * (canvas.height - 40),
    size: 40,
    collected: false
  });
}

/* CONTROLES PC */
window.addEventListener("keydown", e => keys[e.key] = true);
window.addEventListener("keyup", e => keys[e.key] = false);

/* CONTROLES MOBILE */
function bind(btn, key) {
  btn.addEventListener("touchstart", () => keys[key] = true);
  btn.addEventListener("touchend", () => keys[key] = false);
}

bind(left, "ArrowLeft");
bind(right, "ArrowRight");
bind(up, "ArrowUp");
bind(down, "ArrowDown");

function update() {
  if (keys["ArrowLeft"]) santa.x -= santa.speed;
  if (keys["ArrowRight"]) santa.x += santa.speed;
  if (keys["ArrowUp"]) santa.y -= santa.speed;
  if (keys["ArrowDown"]) santa.y += santa.speed;

  gifts.forEach(gift => {
    if (!gift.collected &&
        santa.x < gift.x + gift.size &&
        santa.x + santa.size > gift.x &&
        santa.y < gift.y + gift.size &&
        santa.y + santa.size > gift.y) {

      gift.collected = true;
      score++;
      scoreEl.textContent = score;

      if (score === 10) {
        setTimeout(() => {
          alert("🎄 Mission réussie !");
        }, 300);
      }
    }
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Santa 🎅
  ctx.font = santa.size + "px serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("🎅", santa.x, santa.y);

  // Gifts 🎁
  gifts.forEach(gift => {
    if (!gift.collected) {
      ctx.drawImage(giftImg, gift.x, gift.y, gift.size, gift.size);
    }
  });
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

loop();
"; // ➜ mets une image cadeau 🎁

for (let i = 0; i < 10; i++) {
  gifts.push({
    x: Math.random() * (canvas.width - 40),
    y: Math.random() * (canvas.height - 40),
    size: 40,
    collected: false
  });
}

/* CONTROLES PC */
window.addEventListener("keydown", e => keys[e.key] = true);
window.addEventListener("keyup", e => keys[e.key] = false);

/* CONTROLES MOBILE */
function bind(btn, key) {
  btn.addEventListener("touchstart", () => keys[key] = true);
  btn.addEventListener("touchend", () => keys[key] = false);
}

bind(left, "ArrowLeft");
bind(right, "ArrowRight");
bind(up, "ArrowUp");
bind(down, "ArrowDown");

function update() {
  if (keys["ArrowLeft"]) santa.x -= santa.speed;
  if (keys["ArrowRight"]) santa.x += santa.speed;
  if (keys["ArrowUp"]) santa.y -= santa.speed;
  if (keys["ArrowDown"]) santa.y += santa.speed;

  gifts.forEach(gift => {
    if (!gift.collected &&
        santa.x < gift.x + gift.size &&
        santa.x + santa.size > gift.x &&
        santa.y < gift.y + gift.size &&
        santa.y + santa.size > gift.y) {

      gift.collected = true;
      score++;
      scoreEl.textContent = score;

      if (score === 10) {
        setTimeout(() => {
          alert("🎄 Mission réussie !");
        }, 300);
      }
    }
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Santa 🎅
  ctx.font = santa.size + "px serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("🎅", santa.x, santa.y);

  // Gifts 🎁
  gifts.forEach(gift => {
    if (!gift.collected) {
      ctx.drawImage(giftImg, gift.x, gift.y, gift.size, gift.size);
    }
  });
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

loop();
