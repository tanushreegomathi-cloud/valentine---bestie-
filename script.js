const noBtn = document.getElementById("noBtn");
const heartsContainer = document.getElementById("hearts");

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("click", moveNo);

function moveNo() {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 70 + "vw";
  noBtn.style.top = Math.random() * 70 + "vh";
}

function yesClicked() {
  document.getElementById("valentine").innerHTML = `
    <h1>YAYYY ❤️ you're my galentine 💃</h1>
    <h2>love you achu kuttyy 🥺💞</h2>
  `;

  setInterval(createHeart, 200);
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}
