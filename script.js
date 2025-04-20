
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 200);

// Optional: Alert on button click
function showSorry() {
  alert("Bhai Amjad, sach mein dil se sorry hoon. Maaf karde na yaar!");
}
