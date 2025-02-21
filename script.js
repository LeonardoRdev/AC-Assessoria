// Sugeriram eu desfocar o fundo do "home" conforme for descendo
// Infinite scroll

// Arrumar responsividade do HEADER
// Animação ao iniciar a página

const menuHamburguer = document.querySelector("#menu-hamburguer");
const navBar = document.querySelector("nav");
menuHamburguer.onclick = (() => {
    if (navBar.classList.contains("mostrar-nav")) {
        navBar.classList.remove("mostrar-nav");
    }

    else {
        navBar.classList.add("mostrar-nav");
    }
});
