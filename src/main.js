document.addEventListener('DOMContentLoaded', function(){
    const button = document.querySelectorAll('[data-tab-button]')

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
})

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