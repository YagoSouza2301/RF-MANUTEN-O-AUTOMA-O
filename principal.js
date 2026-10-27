
// ===================ANIMAÇÃO===================
// SESSÃO2
ScrollReveal().reveal('.text', {
    duration: 1000,
    origin: 'left',
    distance: '50px',
});
ScrollReveal().reveal('.serviços1', {
    duration: 1300,
    origin: 'left',
    distance: '50px',
});
ScrollReveal().reveal('.serviços2', {
    duration: 1400,
    origin: 'left',
    distance: '50px',
});
ScrollReveal().reveal('.serviços3', {
    duration: 1500,
    origin: 'left',
    distance: '50px',
});
ScrollReveal().reveal('.serviços4', {
    duration: 1600,
    origin: 'left',
    distance: '50px',
});

// SESSÃO 3
ScrollReveal().reveal('.top1', {
    duration: 1300,
    origin: 'top',
    distance: '50px',
});
ScrollReveal().reveal('.top2', {
    duration: 1400,
    origin: 'top',
    distance: '50px',
});
ScrollReveal().reveal('.top3', {
    duration: 1500,
    origin: 'top',
    distance: '50px',
});
ScrollReveal().reveal('.top4', {
    duration: 1600,
    origin: 'top',
    distance: '50px',
});

// SESSÃO 4
ScrollReveal().reveal('.machine', {
    duration: 1200,
    origin: 'bottom',
    distance: '50px',
});

// SESSÃO 7
ScrollReveal().reveal('.bottom', {
    duration: 1000,
    origin: 'bottom',
    distance: '50px',
});

$(document).ready(function() {

    // Seleciona o contêiner .carousel e aplica a função slick()
    // que ativa o carrossel com as configurações abaixo
    $('.comit').slick({

        // slidesToSho: número de cards exibidos ao mesmo tempo no carrossel
        slidesToShow: 3, // Exibe 1 cards ao mesmo tempo

        // slidesToScroll: define quantos cards serão deslizados ao mover o carrossel
        slidesToScroll: 1, // Move 1 card por vez ao deslizar

        //inflinite: quando true, o carrossel retorna ao inicio automaticamente
        infinite: false, // Mantém o carrossel em rotação continua

        // dots: quando true, ativa os pontos de navegação abaixo do carrossel
        dots: true, // Adiciona pontos de navegação para os usuários

        // arrows: exibe setas de navegação nas laterais do carrossel
        arrows: true, // Ativa as setas para navegar entre os cards
    });
});