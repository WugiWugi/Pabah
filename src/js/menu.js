import '../css/menu.css';

import gamburger from '../image/Gamburger.svg';
import mainFooterElement from '../image/footerMenu.svg';

export function menu() {
    const content = document.querySelector('#content')

    const mainMenu = document.createElement('div');
    mainMenu.classList.add('main');
    content.appendChild(mainMenu);

    const container = document.createElement('div');
    container.classList.add('main__menu-container')
    mainMenu.appendChild(container);

    const containerImg = document.createElement('div');
    containerImg.classList.add('container_img')
    container.appendChild(containerImg);

    const footerContainer = document.createElement('div')
    footerContainer.classList.add('footer-container');
    mainMenu.appendChild(footerContainer);


    let numberOfBurgers = 8

    function renderBurgers() {

        containerImg.innerHTML = '';

        for (let i = 0; i < numberOfBurgers; i++) {
            const burger = document.createElement('img');
            burger.src = gamburger;
            burger.alt = 'БУРГЕР';
            burger.classList.add('main__burger');
            containerImg.appendChild(burger);
        }

        if (numberOfBurgers === 16) {
            const footerElement = document.createElement('img');
            footerElement.src = mainFooterElement;
            footerElement.alt = 'Подвал';
            footerElement.classList.add('main__footer-element');
            footerContainer.appendChild(footerElement);
        }

    }


    renderBurgers();

    const mainbuttom = document.createElement('div');
    mainbuttom.classList.add('main__container-burgers-bottom');
    mainMenu.appendChild(mainbuttom);

    const burgersBottom = document.createElement('button');
    burgersBottom.classList.add('main__burgers-bottom');
    mainbuttom.appendChild(burgersBottom);
    burgersBottom.textContent = 'More'

    burgersBottom.addEventListener('click', () => {
        numberOfBurgers += 8;
        renderBurgers();
        mainbuttom.remove()
    });
}

