
// YouTube Music Player
let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '0',
    width: '0',
    videoId: 'axVD4h2HYks',
    playerVars: {
      autoplay: 1,
      controls: 0,
      loop: 1,
      playlist: 'axVD4h2HYks,I1D7jRktEyU'
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
