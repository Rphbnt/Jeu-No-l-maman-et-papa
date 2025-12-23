const game = document.getElementById("game");
const player = document.getElementById("player");
const scoreText = document.getElementById("score");

let x = 180;
let y = 180;
let score = 0;
const totalGifts = 5;
const speed = 20;

const gifts = [];

// CRÉATION DES CADEAUX 🎁
for (let i = 0; i < totalGifts; i++) {
  const gift = document.createElement("div");
  gift.classList.add("gift");
  gift.textContent = "🎁";
  gift.style.left = Math.random() * 350 + "px";
  gift.style.top = Math.random() * 350 + "px";
  game.appendChild(gift);
  gifts.push(gift);
}

function updatePlayer() {
  player.style.left = x + "px";
  player.style.top = y + "px";
  checkCollision();
}

function checkCollision() {
  gifts.forEach((gift, index) => {
    const gx = gift.offsetLeft;
    const gy = gift.offsetTop;

    if (Math.abs(x - gx) < 30 && Math.abs(y - gy) < 30) {
      gift.remove();
      gifts.splice(index, 1);
      score++;
      scoreText.textContent = `🎁 Cadeaux : ${score} / ${totalGifts}`;

      if (score === totalGifts) {
        setTimeout(() => {
          alert("🎄 Bravo ! Père Noël a livré tous les cadeaux !");
        }, 200);
      }
    }
  });
}

// CLAVIER PC
document.addEventListener("keydown", e => {
  if (e.key === "ArrowUp") moveUp();
  if (e.key === "ArrowDown") moveDown();
  if (e.key === "ArrowLeft") moveLeft();
  if (e.key === "ArrowRight") moveRight();
});

// FONCTIONS MOBILE + CLAVIER
function moveUp() {
  if (y > 0) y -= speed;
  updatePlayer();
}
function moveDown() {
  if (y < 360) y += speed;
  updatePlayer();
}
function moveLeft() {
  if (x > 0) x -= speed;
  updatePlayer();
}
function moveRight() {
  if (x < 360) x += speed;
  updatePlayer();
}
