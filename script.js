
const urlParams = new URLSearchParams(window.location.search);
const namaTamu = urlParams.get('to') || 'Tamu Spesial';

let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '0',
    width: '0',
    videoId: 'JENpTmMQBQY',
    playerVars: {
      autoplay: 0,
      loop: 1,
      playlist: 'JENpTmMQBQY',
    }
  });
}

const btnOpen = document.getElementById('open-invitation');
const popup = document.getElementById('popup');
const invitation = document.getElementById('invitation');
const namaTamuDisplay = document.getElementById('namaTamu');
const infoNamaTamu = document.getElementById('info-nama-tamu');

namaTamuDisplay.textContent = namaTamu;

btnOpen.addEventListener('click', () => {
  popup.style.display = 'none';
  invitation.style.display = 'block';
  infoNamaTamu.textContent = `Kepada Yth: ${namaTamu}`;
  player.playVideo();
});

const countDownDate = new Date("June 20, 2025 10:00:00").getTime();
const countdownEl = document.getElementById("countdown");
setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  countdownEl.innerHTML = `${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;
}, 1000);
