const noBtn = document.getElementById("noBtn");
const heartsContainer = document.getElementById("hearts");

function openValentine() {
  document.getElementById("start").style.display = "none";
  document.getElementById("valentine").classList.remove("hidden");
}

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("click", moveNo);

function moveNo() {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "vw";
  noBtn.style.top = Math.random() * 80 + "vh";
}

function yesClicked() {
  document.getElementById("valentine").innerHTML =
    "<h1>YAY 💖 You’re my Valentine 🥰</h1>";

  setInterval(createHeart, 300);
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}
