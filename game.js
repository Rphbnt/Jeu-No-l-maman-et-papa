const player = document.getElementById("player");
const game = document.getElementById("game");
const scoreDisplay = document.getElementById("score");

let x = window.innerWidth / 2;
let y = window.innerHeight / 2;
let speed = 5;
let score = 0;
const maxScore = 5;

const gifts = [];

/* 🎁 CRÉATION DES CADEAUX */
for (let i = 0; i < maxScore; i++) {
  const gift = document.createElement("img");
  gift.src = "68324570-gift-box-with-green-ribbon-isolated-on-transparent-background-vector-illustration.jpg"; // image cadeau
  gift.classList.add("gift");

  gift.style.left = Math.random() * (window.innerWidth - 50) + "px";
  gift.style.top = Math.random() * (window.innerHeight - 50) + "px";

  game.appendChild(gift);
  gifts.push(gift);
}

/* 🕹️ CLAVIER (PC) */
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") y -= speed;
  if (e.key === "ArrowDown") y += speed;
  if (e.key === "ArrowLeft") x -= speed;
  if (e.key === "ArrowRight") x += speed;
  update();
});

/* 📱 TACTILE (MOBILE) */
let touchStartX = 0;
let touchStartY = 0;

document.addEventListener("touchstart", e => {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
});

document.addEventListener("touchmove", e => {
  const dx = e.touches[0].clientX - touchStartX;
  const dy = e.touches[0].clientY - touchStartY;

  x += dx * 0.05;
  y += dy * 0.05;

  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;

  update();
});

/* 🔄 MISE À JOUR */
function update() {
  x = Math.max(0, Math.min(window.innerWidth - 50, x));
  y = Math.max(0, Math.min(window.innerHeight - 50, y));

  player.style.left = x + "px";
  player.style.top = y + "px";

  checkCollision();
}

/* 💥 COLLISIONS */
function checkCollision() {
  gifts.forEach((gift, index) => {
    const gRect = gift.getBoundingClientRect();
    const pRect = player.getBoundingClientRect();

    if (
      pRect.left < gRect.right &&
      pRect.right > gRect.left &&
      pRect.top < gRect.bottom &&
      pRect.bottom > gRect.top
    ) {
      gift.remove();
      gifts.splice(index, 1);
      score++;
      scoreDisplay.textContent = `🎁 ${score} / ${maxScore}`;

      if (score >= maxScore) {
        setTimeout(() => {
          window.location.href = "victory.html";
        }, 500);
      }
    }
  });
}
