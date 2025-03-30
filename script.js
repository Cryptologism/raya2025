
// Lampu Raya
const lampuContainer = document.getElementById('lampuContainer');
for (let i = 0; i < 5; i++) {
  const lampu = document.createElement('div');
  lampu.className = 'lampu';
  lampu.style.animationDelay = `${i * 0.2}s`;
  lampuContainer.appendChild(lampu);
}

// Pelita
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

// YouTube API
let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '0',
    width: '0',
    videoId: 'I1D7jRktEyU',
    playerVars: {
      autoplay: 1,
      controls: 0,
      loop: 1,
      playlist: 'I1D7jRktEyU'
    },
    events: {
      onReady: (event) => {
        document.getElementById("playMusic").addEventListener("click", () => {
          event.target.playVideo();
          document.getElementById("playMusic").style.display = "none";
        });
      }
    }
  });
}
