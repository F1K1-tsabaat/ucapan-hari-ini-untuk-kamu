function tampilkanUcapan() {
  const ucapan = document.getElementById("ucapan");
  ucapan.textContent = "Aku bersyukur setiap hari karena kamu ada. Selamat ulang tahun, cintaku ❤️";
  ucapan.classList.remove("ucapan-hidden");

  // Mainkan musik
  document.getElementById("musik").play();

  // Confetti animasi
  buatConfetti();
}

// Confetti effect
function buatConfetti() {
  for (let i = 0; i < 100; i++) {
    let confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 5000);
  }
}

// Tambahkan style untuk confetti
const style = document.createElement("style");
style.innerHTML = `
  .confetti {
    position: fixed;
    width: 10px;
    height: 10px;
    background-color: hsl(${Math.random()*360}, 100%, 70%);
    top: -10px;
    border-radius: 50%;
    animation: jatuh linear forwards;
    z-index: 999;
  }

  @keyframes jatuh {
    to {
      transform: translateY(100vh) rotate(360deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
