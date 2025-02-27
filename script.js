// Animações quando os elementos aparecerem na tela
const observer = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {

        // Adiciona a classe com a animação de "mostrar" quando o elemento aparecer na tela
        if (entrada.isIntersecting) {
            entrada.target.classList.add("mostrar"); // POR QUE TARGET?? POR QUE TARGET?? POR QUE TARGET?? POR QUE TARGET?? POR QUE TARGET?? POR QUE TARGET?? POR QUE TARGET?? POR QUE TARGET?? POR QUE TARGET?? POR QUE TARGET?? 
        }

        // else {
        //     entrada.target.classList.remove("mostrar");
        // }
    });
});

const elementosEscondidos = document.querySelectorAll(".esconder");
elementosEscondidos.forEach((elemento) => {
    observer.observe(elemento);
});



// SCROLL
const wrapper = document.querySelector("#wrapper")
const imagemFundoHome = document.querySelector("#imagem-home");

// Adiciona BLUR na imagem do HOME ao scrollar para baixo
wrapper.onscroll = () => {
    let distanciaScroll = wrapper.scrollTop;
    let qtdBlur = Math.min(distanciaScroll / 180, 6);

    imagemFundoHome.style.filter = `blur(${qtdBlur}px)`
}
