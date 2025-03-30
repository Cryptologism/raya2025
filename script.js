
const envelope = document.getElementById('envelope');
const card = document.getElementById('card');

envelope.addEventListener('click', () => {
  envelope.classList.add('open');
  setTimeout(() => {
    card.classList.remove('hidden');
  }, 600);
});

// Generate floating ketupat as surprise
for (let i = 0; i < 20; i++) {
  const k = document.createElement('div');
  k.className = 'floating-ketupat';
  k.style.left = Math.random() * 100 + 'vw';
  k.style.animationDelay = Math.random() * 10 + 's';
  document.body.appendChild(k);
}

// Confetti animation
function createConfettiPiece() {
  const confetti = document.createElement('div');
  confetti.className = 'confetti';
  confetti.style.left = Math.random() * 100 + 'vw';
  confetti.style.backgroundColor = ['#ff595e', '#ffca3a', '#8ac926', '#1982c4', '#6a4c93'][Math.floor(Math.random() * 5)];
  confetti.style.animationDelay = Math.random() * 2 + 's';
  document.body.appendChild(confetti);

  setTimeout(() => {
    confetti.remove();
  }, 5000);
}

// Play confetti and sound when envelope opens
envelope.addEventListener('click', () => {
  envelope.classList.add('open');
  setTimeout(() => {
    card.classList.remove('hidden');
    for (let i = 0; i < 30; i++) createConfettiPiece();
    const pop = new Audio('https://www.fesliyanstudios.com/play-mp3/6962'); // Pop sound
    pop.play();
  }, 600);
});
