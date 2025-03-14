document.addEventListener("DOMContentLoaded", function () {
    const botaoMusica = document.getElementById("playPause");
    const audio = document.getElementById("musica");
    let tocando = false;

    botaoMusica.addEventListener("click", function () {
        if (tocando) {
            audio.pause();
            botaoMusica.textContent = "Tocar Música";
        } else {
            audio.play();
            botaoMusica.textContent = "Pausar Música";
        }
        tocando = !tocando;
    });

    // Adiciona efeito de corações flutuando
    setInterval(() => {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        document.body.appendChild(heart);
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 500);
});
