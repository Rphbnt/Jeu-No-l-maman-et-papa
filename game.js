const game = document.getElementById("game");
const player = document.getElementById("player");

let x = 180;
let y = 180;
const speed = 20;

const gifts = [];
const totalGifts = 6;

/* Création des cadeaux */
for (let i = 0; i < totalGifts; i++) {
  const gift = document.createElement("div");
  gift.className = "gift";
  gift.textContent = "🎁";
  gift.style.left = Math.random() * 350 + "px";
  gift.style.top = Math.random() * 350 + "px";
  game.appendChild(gift);
  gifts.push(gift);
}

/* Déplacement */
function move(direction) {
  if (direction === "up") y -= speed;
  if (direction === "down") y += speed;
  if (direction === "left") x -= speed;
  if (direction === "right") x += speed;

  x = Math.max(0, Math.min(360, x));
  y = Math.max(0, Math.min(360, y));

  player.style.left = x + "px";
  player.style.top = y + "px";

  checkCollision();
}

/* Clavier PC */
document.addEventListener("keydown", e => {
  if (e.key === "ArrowUp") move("up");
  if (e.key === "ArrowDown") move("down");
  if (e.key === "ArrowLeft") move("left");
  if (e.key === "ArrowRight") move("right");
});

/* Collision cadeaux */
function checkCollision() {
  gifts.forEach((gift, index) => {
    const gx = gift.offsetLeft;
    const gy = gift.offsetTop;

    if (Math.abs(x - gx) < 30 && Math.abs(y - gy) < 30) {
      gift.remove();
      gifts.splice(index, 1);
    }
  });

  if (gifts.length === 0) {
    setTimeout(() => {
      window.location.href = "victory.html";
    }, 500);
  }
}
