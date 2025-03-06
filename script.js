// Animações quando os elementos aparecerem na tela
const observer = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {

        // Adiciona a classe com a animação de "mostrar" quando o elemento aparecer na tela
        if (entrada.isIntersecting) {
            entrada.target.classList.add("mostrar");
        }

        // Descomentar caso queira que a animação aconteça toda vez que o elemento aparecer
        // else {
        //     entrada.target.classList.remove("mostrar");
        // }
    });
});

const elementosEscondidos = document.querySelectorAll(".esconder");
elementosEscondidos.forEach((elemento) => {
    observer.observe(elemento);
});



// Animação na imagem do HOME
const wrapper = document.querySelector("#wrapper")
const imagemFundoHome = document.querySelector("#imagem-home");

// Adiciona BLUR na imagem do HOME ao scrollar para baixo
wrapper.onscroll = () => {
    let distanciaScroll = wrapper.scrollTop;
    let qtdBlur = Math.min(distanciaScroll / 180, 4);

    imagemFundoHome.style.filter = `blur(${qtdBlur}px)`
}
