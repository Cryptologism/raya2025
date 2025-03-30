const lampuContainer = document.getElementById('lampuContainer');
for (let i = 0; i < 5; i++) {
  const lampu = document.createElement('div');
  lampu.className = 'lampu';
  lampu.style.animationDelay = `${i * 0.2}s`;
  lampuContainer.appendChild(lampu);
}

const pelitaRow = document.getElementById('pelitaRow');
for (let i = 0; i < 2; i++) {
  const pelita = document.createElement('img');
  pelita.src = "https://upload.wikimedia.org/wikipedia/commons/9/9e/Pelita_icon.png";
  pelita.alt = "Pelita Raya";
  pelita.className = "pelita";
  pelitaRow.appendChild(pelita);
}

// Bintang berkelip
const stars = document.getElementById('stars');
for (let i = 0; i < 50; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.top = Math.random() * 100 + '%';
  star.style.left = Math.random() * 100 + '%';
  star.style.animationDelay = `${Math.random() * 2}s`;
  stars.appendChild(star);
}
