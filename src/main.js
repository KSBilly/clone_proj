document.addEventListener('DOMContentLoaded', function(){
    const button = document.querySelectorAll('[data-tab-button]');
    const questions=document.querySelectorAll('[data-faq-question]');

    const heroSection=document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const posiçaoAtual= window.scrollY

        if (posiçaoAtual < alturaHero ){
            ocultaElementosHeader();
        } else {
            exibeElementosHeader();
        };
    });

    for (let i = 0; i < button.length; i++){
        button[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeAbas();
            aba.classList.add('show__list--is--active');
            removeClassBtn();
            botao.target.classList.add('show__tabs__button--is--active');
        })
    }

    for (let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
})

function ocultaElementosHeader(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeElementosHeader(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function abreOuFechaResposta(elemento){
    const classe = 'faq__question__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);

}

function removeClassBtn(){
    const button = document.querySelectorAll('[data-tab-button]')

    for (let i = 0; i < button.length; i++) {
        button[i].classList.remove('show__tabs__button--is--active');
    }
}

function escondeAbas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]')

    for (let i = 0; i<tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('show__list--is--active');
    }
}