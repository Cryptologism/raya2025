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
