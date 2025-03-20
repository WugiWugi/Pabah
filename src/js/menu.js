import '../css/menu.css';

import gamburger from '../image/Gamburger.svg';
import mainFooterElement from '../image/footerMenu.svg';

export function menu() {
    const content = document.querySelector('#content');

    const container = document.querySelector('.container');

    const mainMenu = document.createElement('div');
    mainMenu.classList.add('main');
    container.appendChild(mainMenu);



    let numberOfBurgers = 8


    function renderBurgers() {
        // Очищаем контейнер перед добавлением новых бургеров
        mainMenu.innerHTML = '';

        for (let i = 0; i < numberOfBurgers; i++) {
            const burger = document.createElement('img');
            burger.src = gamburger;
            burger.alt = 'БУРГЕР';
            burger.classList.add('main__burger');
            mainMenu.appendChild(burger);
        }
        if (numberOfBurgers === 16) {
            const footerElement = document.createElement('img');
            footerElement.src = mainFooterElement;
            footerElement.alt = 'Подвал';
            footerElement.classList.add('main__footer-element');
            content.appendChild(footerElement);
        }

    }

    // Создаём начальные 8 бургеров
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

