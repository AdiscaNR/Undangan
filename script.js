const urlParams = new URLSearchParams(window.location.search);
const namaTamu = urlParams.get('to') || 'Tamu Spesial';
const namaTamuDisplay = document.getElementById('namaTamu');
const infoNamaTamu = document.getElementById('info-nama-tamu');
const popup = document.getElementById('popup');
const invitation = document.getElementById('invitation');
const btnOpen = document.getElementById('open-invitation');
const audio = document.getElementById('bg-music');

namaTamuDisplay.textContent = namaTamu;

btnOpen.addEventListener('click', () => {
  popup.style.display = 'none';
  invitation.style.display = 'block';
  infoNamaTamu.textContent = 'Kepada Yth: ' + namaTamu;

  audio.play();
});

const countDownDateAkad = new Date("June 20, 2025 10:00:00").getTime();
const countDownDateResepsi = new Date("June 20, 2025 19:00:00").getTime();
const countdownEl = document.getElementById("countdown");

setInterval(() => {
  const now = new Date().getTime();
  const distanceAkad = countDownDateAkad - now;
  const distanceResepsi = countDownDateResepsi - now;

  if (distanceAkad > 0) {
    const days = Math.floor(distanceAkad / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distanceAkad % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distanceAkad % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distanceAkad % (1000 * 60)) / 1000);
    countdownEl.innerHTML = `Hitung Mundur Akad: ${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;
  } else if (distanceResepsi > 0) {
    const days = Math.floor(distanceResepsi / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distanceResepsi % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distanceResepsi % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distanceResepsi % (1000 * 60)) / 1000);
    countdownEl.innerHTML = `Hitung Mundur Resepsi: ${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;
  } else {
    countdownEl.innerHTML = "Acara telah selesai.";
  }
}, 1000);
