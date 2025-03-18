import { home } from './js/home.js';
import './css/header.css'
import logo from './image/logo.svg';


document.addEventListener('DOMContentLoaded', () => {
    home(); // Вызываем home() при загрузке страницы
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

const logotip = document.createElement('img')
logotip.src = logo
logotip.alt = 'Логотип'
logotip.classList.add('logo')
headerContainer.appendChild(logotip)

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
homeLink.textContent='Home'
homeLink.href = '#'


const menuItem = document.createElement('li')
menuItem.classList.add('item')
headerUl.appendChild(menuItem)

const menuLink = document.createElement('a')
menuLink.classList.add('menu', 'link')
menuItem.appendChild(menuLink)
menuLink.textContent='Menu'
menuLink.href = '#'


const contactsItem = document.createElement('li')
contactsItem.classList.add('item')
headerUl.appendChild(contactsItem)

const contactsLink = document.createElement('a')
contactsLink.classList.add('contacts', 'link')
contactsItem.appendChild(contactsLink)
contactsLink.textContent='Contacts'
contactsLink.href = '#'