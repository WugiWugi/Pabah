import { home } from './js/home.js';
import './css/header.css'
import logo from './image/logo.svg';
import Lupa from './image/Lupa.svg';
import User from './image/User.svg';
import Corzina from './image/Corzina.svg';


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
elementLupa.classList.add('element-lypa')
navContainer.appendChild(elementLupa)
const imgLupa = document.createElement('img')
imgLupa.src = Lupa
imgLupa.alt = 'Лупа'
imgLupa.classList.add('lupa','icons')
elementLupa.appendChild(imgLupa)

const elementUser = document.createElement('a')
elementUser.href = '#'
elementUser.classList.add('element-user')
navContainer.appendChild(elementUser)
const imgUser = document.createElement('img')
imgUser.src = User
imgUser.alt = 'Пользователь'
imgUser.classList.add('user','icons')
elementUser.appendChild(imgUser)

const elementCorzina = document.createElement('a')
elementCorzina.href = '#'
elementCorzina.classList.add('element-corzina')
navContainer.appendChild(elementCorzina)
const imgCorzina = document.createElement('img')
imgCorzina.src = Corzina
imgCorzina.alt = 'Корзина'
imgCorzina.classList.add('corzina','icons')
elementCorzina.appendChild(imgCorzina)
