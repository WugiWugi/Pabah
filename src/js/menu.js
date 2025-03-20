import '../css/menu.css';

import gamburger from '../image/Gamburger.svg';

export function menu() {
    const content = document.querySelector('#content');

    const container = document.querySelector('.container');

    const mainMenu = document.createElement('div');
    mainMenu.classList.add('main');
    container.appendChild(mainMenu);



    let numberOfBurgers = 8

    for (let i = 0; i < numberOfBurgers; i++) {
        const burger = document.createElement('img');
        burger.src = gamburger;
        burger.alt = 'бУРГЕР';
        burger.classList.add('main__burger');
        mainMenu.appendChild(burger);
    }


    const mainbuttom = document.createElement('div');
    mainbuttom.classList.add('main__container-burgers-bottom');
    container.appendChild(mainbuttom);

    const burgersBottom = document.createElement('button');
    burgersBottom.classList.add('main__burgers-bottom');
    mainbuttom.appendChild(burgersBottom);
    burgersBottom.textContent = 'More'
    
}