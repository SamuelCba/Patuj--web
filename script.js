bars = document.querySelector('.bars');
bars.onclick = function() {
    navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('active');
}

const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const progress = document.getElementById('progress');

// Alterna entre reproducir y pausar
playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = '⏸️';
    } else {
        audio.pause();
        playPauseBtn.textContent = '▶️';
    }
});

// Actualiza la barra de progreso
audio.addEventListener('timeupdate', () => {
    progress.value = (audio.currentTime / audio.duration) * 100;
});

// Permite avanzar el audio al mover la barra de progreso
progress.addEventListener('input', () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});
