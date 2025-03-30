// Lampu Raya Animation
const lampuContainer = document.getElementById('lampuContainer');

for (let i = 0; i < 5; i++) {
  const lampu = document.createElement('div');
  lampu.classList.add('lampu');
  lampu.style.animationDelay = `${i * 0.3}s`;
  lampuContainer.appendChild(lampu);
}

// Pelita Images
const pelitaRow = document.getElementById('pelitaRow');
for (let i = 0; i < 2; i++) {
  const pelita = document.createElement('img');
  pelita.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Pelita_icon.svg/1024px-Pelita_icon.svg.png";
  pelita.alt = "Pelita Raya";
  pelita.className = "pelita";
  pelitaRow.appendChild(pelita);
}
