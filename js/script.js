// Menu scroll

const menu = document.querySelector('header');

function animeScroll() {

    const header = document.querySelector('header');
    const inicio = header.children[2].children[0];

    /* Muda as cores do menu, background branco e fonte verde (class .header) */
    const aside = document.querySelector('aside');
    const posicao = aside.getBoundingClientRect();

    if (posicao.y < 55) {
        menu.classList.add("header")
        menu.style.transition = '.5s';

        inicio.style.opacity = '1';
        inicio.style.transition = '.9s';
    } else {
        menu.classList.remove("header")
        menu.style.transition = '.5s';

        inicio.style.opacity = '0';
        inicio.style.transition = '.5s';
    }

    const contato = document.querySelector('.step3');
    const posicaoContato = contato.getBoundingClientRect();

    if (posicaoContato.y < 25) {
        menu.classList.remove("header")
        menu.style.transition = '.5s';
    }

    const container = document.querySelector('.container');
    const p = container.children[0].children[0];

    /* Oculta linha por linha da descrição */
    const span1 = p.children[0];
    const span2 = p.children[1];
    const span3 = p.children[2];
    const span4 = p.children[3];

    const posicao1 = span1.getBoundingClientRect();
    const posicao2 = span2.getBoundingClientRect();
    const posicao3 = span3.getBoundingClientRect();
    const posicao4 = span4.getBoundingClientRect();

    if (posicao1.y < 45) {
        span1.style.opacity = '0';
        span1.style.transition = '.5s';
    } else {
        span1.style.opacity = '1';
        span1.style.transition = '.5s';
    }

    if (posicao2.y < 45) {
        span2.style.opacity = '0';
        span2.style.transition = '.5s';
    } else {
        span2.style.opacity = '1';
        span2.style.transition = '.5s';
    }

    if (posicao3.y < 45) {
        span3.style.opacity = '0';
        span3.style.transition = '.5s';
    } else {
        span3.style.opacity = '1';
        span3.style.transition = '.5s';
    }

    if (posicao4.y < 45) {
        span4.style.opacity = '0';
        span4.style.transition = '.5s';
    } else {
        span4.style.opacity = '1';
        span4.style.transition = '.5s';
    }
}

function animeAside() {

    const aside = document.querySelector('.aside');
    const posicaoAside = aside.getBoundingClientRect();
    const ul = aside.children[0].children[0].children[0];
    const img = aside.children[0].children[1].children[0];

    const span = ul.children[0];
    const li1 = ul.children[1];
    const li2 = ul.children[2];
    const li3 = ul.children[3];
    const li4 = ul.children[4];
    const li5 = ul.children[5];

    if (posicaoAside.y < 470) {
        span.style.opacity = '1';
        span.style.transition = '.7s';
        img.style.opacity = '1';
        img.style.transition = '.9s';
    } else {
        span.style.opacity = '0';
        span.style.transition = '.7s';
        img.style.opacity = '0';
        img.style.transition = '.9s';
    }

    if (posicaoAside.y < 415) {
        li1.style.transform = "translateX(0px)";
        li1.style.opacity = '1';
        li1.style.transition = '.5s';
    } else {
        li1.style.transform = "translateX(-500px)";
        li1.style.opacity = '0';
        li1.style.transition = '.5s';
    }

    if (posicaoAside.y < 365) {
        li2.style.transform = "translateX(0px)";
        li2.style.opacity = '1';
        li2.style.transition = '.5s';
    } else {
        li2.style.transform = "translateX(-500px)";
        li2.style.opacity = '0';
        li2.style.transition = '.5s';
    }

    if (posicaoAside.y < 300) {
        li3.style.transform = "translateX(0px)";
        li3.style.opacity = '1';
        li3.style.transition = '.5s';
    } else {
        li3.style.transform = "translateX(-500px)";
        li3.style.opacity = '0';
        li3.style.transition = '.5s';
    }

    if (posicaoAside.y < 240) {
        li4.style.transform = "translateX(0px)";
        li4.style.opacity = '1';
        li4.style.transition = '.5s';
    } else {
        li4.style.transform = "translateX(-500px)";
        li4.style.opacity = '0';
        li4.style.transition = '.5s';
    }

    if (posicaoAside.y < 185) {
        li5.style.transform = "translateX(0px)";
        li5.style.opacity = '1';
        li5.style.transition = '.5s';
    } else {
        li5.style.transform = "translateX(-500px)";
        li5.style.opacity = '0';
        li5.style.transition = '.5s';
    }
}

window.addEventListener('scroll', function() {
    animeScroll();
    animeAside();
})

// Menu Hamburguer
/*
const hamburguer = document.querySelector('.hamburguer');
const ul = document.querySelector('ul');

hamburguer.addEventListener("mouseover", (menuHamburguer));

function menuHamburguer() {
    ul.style.display = 'flex';
    hamburguer.style.display = 'none';

    ul.style.transition = '.5s';
    hamburguer.style.transition = '.5s';

    ul.addEventListener("mouseout", (closeMenu));

    function closeMenu() {
        ul.style.display = 'none';
        hamburguer.style.display = 'flex';

        ul.style.transition = '.5s';
        hamburguer.style.transition = '.5s';
    }

}
*/
// Cards 180deg

const cards = document.querySelector('.cards');
//console.log(cards)
//cards.children[0].addEventListener("mouseover", (girar()));
//cards.children[1].addEventListener("mouseover", (girar));
//cards.children[2].addEventListener("mouseover", (girar));

/*function girar() {

    cards.children[0].style.transform = "rotateY(180deg)";
    cards.children[0].style.transition = '.5s';

    if (cards.children[0].style.transform = "rotateY(180deg)" == true) {
        const figure = cards.children[0].children[0];
        const p = cards.children[0].children[1];
        const img = cards.children[0].children[2];
        const span = cards.children[0].children[3];

        figure.style.transform = "rotateY(0deg)";
        p.style.transform = "rotateY(0deg)";
        img.style.transform = "rotateY(0deg)";
        span.style.transform = "rotateY(0deg)";
    }

    cards.children[0].addEventListener("mouseout", (voltar));

    function voltar() {
        cards.children[0].style.transform = "rotateY(0deg)";
        cards.children[0].style.transition = '.5s';
    }
}*/