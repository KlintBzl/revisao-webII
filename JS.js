function abrirFormulario() {
    document.getElementById("modalForm").style.display = "flex";
}

function fecharFormulario() {
    document.getElementById("modalForm").style.display = "none";
}

// fechar clicando fora
window.onclick = function (event) {
    const modal = document.getElementById("modalForm");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

const botao = document.getElementById("btnTopo");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 300) {
        botao.style.display = "block";
    } else {
        botao.style.display = "none";
    }
};

function voltarAoTopo() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}