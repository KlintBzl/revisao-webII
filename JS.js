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

const navbar = document.querySelector(".nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

let index = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function mostrarSlide(i) {
    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    slides[i].classList.add("active");
    dots[i].classList.add("active");
}

function proximoSlide() {
    index = (index + 1) % slides.length;
    mostrarSlide(index);
}

function slideAnterior() {
    index = (index - 1 + slides.length) % slides.length;
    mostrarSlide(index);
}

document.querySelector(".next").onclick = () => {
    proximoSlide();
    reiniciarAuto();
};

document.querySelector(".prev").onclick = () => {
    slideAnterior();
    reiniciarAuto();
};

dots.forEach((dot, i) => {
    dot.onclick = () => {
        index = i;
        mostrarSlide(index);
        reiniciarAuto();
    };
});

let auto = setInterval(proximoSlide, 4000);

function reiniciarAuto() {
    clearInterval(auto);
    auto = setInterval(proximoSlide, 4000);
}