import { home } from './js/home.js';
import { menu } from './js/menu.js';

import './css/header.css'

import logo from './image/logo.svg';

document.addEventListener('DOMContentLoaded', () => {
    menu(); // Вызываем home() при загрузке страницы
});

const content = document.querySelector('#content')
content.classList.add('content')
console.log(content);

const header = document.createElement('header')
header.classList.add('header')
content.appendChild(header)

const container = document.createElement('div')
container.classList.add('container')
header.appendChild(container)

const headerContainer = document.createElement('div')
headerContainer.classList.add('header__container')
container.appendChild(headerContainer)

const headerNav = document.createElement('nav')
headerNav.classList.add('header__nav')
headerContainer.appendChild(headerNav)

const headerUl = document.createElement('ul')
headerUl.classList.add('header__ul')
headerNav.appendChild(headerUl)


const homeItem = document.createElement('li')
homeItem.classList.add('item')
headerUl.appendChild(homeItem)

const homeLink = document.createElement('a')
homeLink.classList.add('home', 'link')
homeItem.appendChild(homeLink)
homeLink.textContent = 'Home'
homeLink.href = '#'


const menuItem = document.createElement('li')
menuItem.classList.add('item')
headerUl.appendChild(menuItem)

const menuLink = document.createElement('a')
menuLink.classList.add('menu', 'link')
menuItem.appendChild(menuLink)
menuLink.textContent = 'Menu'
menuLink.href = '#'


const contactsItem = document.createElement('li')
contactsItem.classList.add('item')
headerUl.appendChild(contactsItem)

const contactsLink = document.createElement('a')
contactsLink.classList.add('contacts', 'link')
contactsItem.appendChild(contactsLink)
contactsLink.textContent = 'Contacts'
contactsLink.href = '#'

const logotip = document.createElement('img')
logotip.src = logo
logotip.alt = 'Логотип'
logotip.classList.add('logo')
headerContainer.appendChild(logotip)


const navContainer = document.createElement('div')
navContainer.classList.add('header__nav-container')
headerContainer.appendChild(navContainer)

const elementLupa = document.createElement('a')
elementLupa.href = '#'
elementLupa.classList.add('element')
navContainer.appendChild(elementLupa)
const imgLupa = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
imgLupa.setAttribute('viewBox', '0 0 25 25');
const pathLupa = document.createElementNS('http://www.w3.org/2000/svg', 'path');
pathLupa.setAttribute('d', 'M18.3472 16.1624C19.5827 14.4802 20.3125 12.4035 20.3125 10.1563C20.3125 4.54712 15.7655 0 10.1563 0C4.54712 0 0 4.54712 0 10.1563C0 15.7655 4.54712 20.3125 10.1563 20.3125C12.4041 20.3125 14.4813 19.5824 16.1638 18.3461L16.1624 18.3472C16.2085 18.4097 16.2597 18.4694 16.3163 18.526L22.3327 24.5424C22.9428 25.1525 23.9322 25.1525 24.5424 24.5424C25.1525 23.9322 25.1525 22.9428 24.5424 22.3327L18.526 16.3163C18.4694 16.2597 18.4097 16.2085 18.3472 16.1624ZM18.75 10.1563C18.75 14.9025 14.9025 18.75 10.1563 18.75C5.41006 18.75 1.5625 14.9025 1.5625 10.1563C1.5625 5.41006 5.41006 1.5625 10.1563 1.5625C14.9025 1.5625 18.75 5.41006 18.75 10.1563Z');
pathLupa.setAttribute('fill', '#063A23');
imgLupa.appendChild(pathLupa);
elementLupa.appendChild(imgLupa);

const elementUser = document.createElement('a')
elementUser.href = '#'
elementUser.classList.add('element')
navContainer.appendChild(elementUser)
const imgUser = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
imgUser.setAttribute('viewBox', '0 0 24 24');
const pathUser = document.createElementNS('http://www.w3.org/2000/svg', 'path');
pathUser.setAttribute('d', 'M12 12C15.3138 12 18 9.31371 18 6C18 2.68629 15.3138 0 12 0C8.68629 0 6 2.68629 6 6C6 9.31371 8.68629 12 12 12ZM16 6C16 8.20914 14.2091 10 12 10C9.79086 10 8 8.20914 8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6Z M24 22C24 24 22 24 22 24H2C2 24 0 24 0 22C0 20 2 14 12 14C22 14 24 20 24 22ZM22 21.9931C21.9972 21.4994 21.6924 20.021 20.3358 18.6642C19.0313 17.3596 16.5781 16 12 16C7.42176 16 4.96871 17.3596 3.6642 18.6642C2.3075 20.021 2.00284 21.4994 2 21.9931H22Z');
pathUser.setAttribute('fill', '#063A23');
imgUser.appendChild(pathUser);
elementUser.appendChild(imgUser);

const elementCorzina = document.createElement('a');
elementCorzina.href = '#';
elementCorzina.classList.add('element', 'element-corzina');
navContainer.appendChild(elementCorzina);
const imgCorzina = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
imgCorzina.setAttribute('viewBox', '0 0 27 25');
const pathCorzina = document.createElementNS('http://www.w3.org/2000/svg', 'path');
pathCorzina.setAttribute('d', 'M0 0.892857C0 0.39975 0.402944 0 0.899999 0H3.6C4.01297 0 4.37297 0.278839 4.47312 0.676304L5.2027 3.57143H26.1C26.3772 3.57143 26.6387 3.69811 26.8094 3.9148C26.98 4.13152 27.0403 4.41411 26.9732 4.68084L24.2732 15.3952C24.1729 15.7927 23.8129 16.0714 23.4 16.0714H7.19999C6.78702 16.0714 6.42702 15.7927 6.32687 15.3952L2.89729 1.78571H0.899999C0.402944 1.78571 0 1.38596 0 0.892857ZM5.6527 5.35714L6.55269 8.92857H8.99999V5.35714H5.6527ZM10.8 5.35714V8.92857H14.4V5.35714H10.8ZM16.2 5.35714V8.92857H19.8V5.35714H16.2ZM21.6 5.35714V8.92857H24.0473L24.9473 5.35714H21.6ZM23.5973 10.7143H21.6V14.2857H22.6973L23.5973 10.7143ZM19.8 10.7143H16.2V14.2857H19.8V10.7143ZM14.4 10.7143H10.8V14.2857H14.4V10.7143ZM8.99999 10.7143H7.00269L7.90269 14.2857H8.99999V10.7143ZM8.99999 19.6429C8.00589 19.6429 7.19999 20.4423 7.19999 21.4286C7.19999 22.4148 8.00589 23.2143 8.99999 23.2143C9.99409 23.2143 10.8 22.4148 10.8 21.4286C10.8 20.4423 9.99409 19.6429 8.99999 19.6429ZM5.39999 21.4286C5.39999 19.4561 7.01177 17.8571 8.99999 17.8571C10.9882 17.8571 12.6 19.4561 12.6 21.4286C12.6 23.4011 10.9882 25 8.99999 25C7.01177 25 5.39999 23.4011 5.39999 21.4286ZM21.6 19.6429C20.6058 19.6429 19.8 20.4423 19.8 21.4286C19.8 22.4148 20.6058 23.2143 21.6 23.2143C22.5941 23.2143 23.4 22.4148 23.4 21.4286C23.4 20.4423 22.5941 19.6429 21.6 19.6429ZM18 21.4286C18 19.4561 19.6117 17.8571 21.6 17.8571C23.5883 17.8571 25.2 19.4561 25.2 21.4286C25.2 23.4011 23.5883 25 21.6 25C19.6117 25 18 23.4011 18 21.4286Z');
pathCorzina.setAttribute('fill', '#063A23');
imgCorzina.appendChild(pathCorzina);
elementCorzina.appendChild(imgCorzina);
let burgers = 0;
function burgerOfCorzine() {
    document.addEventListener('DOMContentLoaded', () => {
        elementCorzina.addEventListener('click', () => openCorzin.classList.toggle('open-corzin'));
        let number = 0;
        let burgers = 0;

        const burgersInTheBasket = document.createElement('span');
        burgersInTheBasket.setAttribute("aria-label", "Количество товаров в корзине");
        burgersInTheBasket.classList.add('elementCorzina__number-of-burgers');
        elementCorzina.appendChild(burgersInTheBasket);

        const openCorzin = document.createElement('div');
        openCorzin.classList.add('elementCorzina__corzin');
        elementCorzina.appendChild(openCorzin);

        const corzinPrise = document.createElement('p');
        corzinPrise.classList.add('elementCorzina__prise');
        openCorzin.appendChild(corzinPrise);

        const buttonCorzin = document.createElement('button');
        buttonCorzin.classList.add('elementCorzina__button-corzin');
        buttonCorzin.textContent = 'Order';

        const mainMenu = document.querySelector('.main__burger');
        mainMenu.addEventListener('click', () => {
            
            burgersInTheBasket.textContent = number < 99 ? ++number : `+${number}`;
            ++burgers
            openCorzin.innerHTML = '';
            const price = 140;
            for (let i = 0; i < burgers; i++) {
                const product = document.createElement('p');
                product.classList.add('elementCorzina__product');
                product.textContent = `Бургер - ${price}р`;
                openCorzin.appendChild(product);
            }
            corzinPrise.textContent = `Итого: ${price * burgers}р`;
            openCorzin.appendChild(corzinPrise);
            if(burgers > 0){
            openCorzin.appendChild(buttonCorzin);
            }
        });
    });
}

burgerOfCorzine()