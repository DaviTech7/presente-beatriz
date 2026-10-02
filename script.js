function mostrarPresente() {

    document.getElementById("inicio").style.display = "none";

    document.getElementById("revelacao").classList.remove("escondido");

    window.scrollTo(0, 0);
}


function abrirPresente() {

    document.getElementById("revelacao").style.display = "none";

    document.getElementById("presente").classList.remove("escondido");

    const musica = document.getElementById("musica");

    const botao = document.getElementById("botaoMusica");

    musica.play()
        .then(() => {

            botao.textContent = "❚❚";

        })
        .catch(() => {

            botao.textContent = "▶";

        });

    window.scrollTo(0, 0);
}


function tocarMusica() {

    const musica = document.getElementById("musica");

    const botao = document.getElementById("botaoMusica");

    if (musica.paused) {

        musica.play();

        botao.textContent = "❚❚";

    } else {

        musica.pause();

        botao.textContent = "▶";

    }
}


const musica = document.getElementById("musica");

if (musica) {

    musica.addEventListener("ended", function () {

        const botao = document.getElementById("botaoMusica");

        botao.textContent = "▶";

    });

}