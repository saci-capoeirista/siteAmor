document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("musica");
    const playPauseBtn = document.getElementById("playPause");
    let isPlaying = false;

    playPauseBtn.addEventListener("click", function () {
        if (isPlaying) {
            audio.pause();
            playPauseBtn.textContent = "Tocar Música";
        } else {
            audio.play();
            playPauseBtn.textContent = "Pausar Música";
        }
        isPlaying = !isPlaying;
    });
});
