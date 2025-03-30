
const envelope = document.getElementById('envelope');
const card = document.getElementById('card');

envelope.addEventListener('click', () => {
  envelope.style.display = 'none';
  card.classList.remove('hidden');
});

// YouTube Music Player
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
