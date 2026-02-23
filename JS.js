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