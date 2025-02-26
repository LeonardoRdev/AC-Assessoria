// Sugeriram eu desfocar o fundo do "HOME" conforme for descendo
// Infinite scroll
// Animação ao iniciar a página

const observer = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {

        // Adiciona a classe com a animação de "mostrar" quando o elemento aparecer na tela
        if (entrada.isIntersecting) {
            entrada.target.classList.add("mostrar");
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
