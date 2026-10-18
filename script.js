const musicToggle = document.getElementById('musicToggle');
const musicLabel = document.getElementById('musicLabel');
const musicIcon = document.getElementById('musicIcon');
const audio = document.getElementById('backgroundMusic');
const revealButton = document.getElementById('revealButton');
const secretMessage = document.getElementById('secretMessage');

// La música está desactivada hasta que agregues un archivo con permiso de uso.
// Para usarla: abrí index.html, buscá el bloque <audio> y seguí las instrucciones del README.
musicToggle.addEventListener('click', async () => {
  const hasMusic = audio.querySelector('source') || audio.src;
  if (!hasMusic) {
    musicLabel.textContent = 'Agregá tu música en audio/';
    musicIcon.textContent = '♪';
    window.setTimeout(() => { musicLabel.textContent = 'Activar música'; }, 2400);
    return;
  }
  if (audio.paused) {
    try {
      await audio.play();
      musicToggle.setAttribute('aria-pressed', 'true');
      musicLabel.textContent = 'Pausar música';
      musicIcon.textContent = '♫';
    } catch (error) {
      musicLabel.textContent = 'Tocá para reintentar';
    }
  } else {
    audio.pause();
    musicToggle.setAttribute('aria-pressed', 'false');
    musicLabel.textContent = 'Activar música';
    musicIcon.textContent = '♫';
  }
});

revealButton.addEventListener('click', () => {
  const opening = secretMessage.hidden;
  secretMessage.hidden = !opening;
  revealButton.setAttribute('aria-expanded', String(opening));
  revealButton.innerHTML = opening
    ? 'Cerrar sorpresa <span>♡</span>'
    : 'Abrir mi sorpresa <span>✦</span>';
});

// PERSONALIZACIÓN OPCIONAL:
// Cambiá "mi persona favorita" y "alguien que te quiere mucho" directamente en index.html.
