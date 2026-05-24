const startButton = document.getElementById('startButton');
const mainSection = document.getElementById('mainSection');
const overlay = document.getElementById('overlay');
const floatingIcons = document.getElementById('floatingIcons');

/* =========================
   SOUND EFFECTS
========================= */
const startSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3');
const popupSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2206/2206-preview.mp3');
const closeSound = new Audio('https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3');

[startSound, popupSound, closeSound].forEach(s => s.volume = 0.5);

/* =========================
   START EXPERIENCE
========================= */
startButton.addEventListener('click', () => {

  startSound.play();

  createParticles();

  // إظهار الموقع بعد الانيميشن
  setTimeout(() => {
    mainSection.style.display = 'block';

    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });

  }, 700);

});

/* =========================
   PARTICLES EXPLOSION EFFECT
========================= */
function createParticles() {

  for (let i = 0; i < 90; i++) {

    const particle = document.createElement('span');
    particle.classList.add('particle');

    const size = Math.random() * 14 + 5;

    particle.style.width = size + 'px';
    particle.style.height = size + 'px';

    // نقطة الانطلاق من الزر
    particle.style.left = startButton.offsetLeft + 90 + 'px';
    particle.style.top = startButton.offsetTop + 90 + 'px';

    // اتجاهات عشوائية
    particle.style.setProperty('--x', `${(Math.random() - 0.5) * 1200}px`);
    particle.style.setProperty('--y', `${(Math.random() - 0.5) * 1200}px`);

    document.body.appendChild(particle);

    setTimeout(() => particle.remove(), 1600);
  }
}

/* =========================
   OPEN POPUPS
========================= */
function openPopup(id) {

  popupSound.play();

  overlay.style.display = 'block';

  const popup = document.getElementById(id);
  popup.classList.add('active');

  // تأثير إضافي بسيط عند الفتح
  popup.style.transform = "translate(-50%,-50%) scale(.9)";
  setTimeout(() => {
    popup.style.transform = "translate(-50%,-50%) scale(1)";
  }, 50);

}

/* =========================
   CLOSE POPUPS
========================= */
function closePopup() {

  closeSound.play();

  overlay.style.display = 'none';

  document.querySelectorAll('.popup').forEach(popup => {
    popup.classList.remove('active');
  });

}

/* =========================
   FLOATING ICONS BACKGROUND
========================= */
const iconList = [
  'fa-video',
  'fa-film',
  'fa-camera',
  'fa-photo-film',
  'fa-clapperboard',
  'fa-headphones',
  'fa-music',
  'fa-wand-magic-sparkles'
];

for (let i = 0; i < 45; i++) {

  const icon = document.createElement('i');

  icon.className = `fa-solid ${iconList[Math.floor(Math.random() * iconList.length)]}`;

  icon.style.left = Math.random() * 100 + '%';
  icon.style.top = Math.random() * 100 + '%';

  icon.style.fontSize = (Math.random() * 25 + 18) + 'px';
  icon.style.animationDuration = (Math.random() * 10 + 8) + 's';

  floatingIcons.appendChild(icon);
}
