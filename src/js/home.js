import '../css/home.css';
import Bacground from '../image/Bacground.svg'
import Burito from '../image/burito.svg'
import User from '../image/User.svg'
import Lupa from '../image/Lupa.svg'
import Corzina from '../image/Corzina.svg'

export function home() {
    const content = document.querySelector('#content');

    const container = document.querySelector('.container');  

    const mainHome = document.createElement('div');
    mainHome.classList.add('main');
    container.appendChild(mainHome);

    const mainСontent = document.createElement('div');
    mainСontent.classList.add('main__content');  
    mainHome.appendChild(mainСontent);  

    const contentTitle = document.createElement('h1');
    contentTitle.classList.add('main__title');  
    mainСontent.appendChild(contentTitle);  
    contentTitle.innerHTML  = 'HUNGRY? <br> ORDER FROM US!'


    const contentButton = document.createElement('button');
    contentButton.classList.add('main__button');  
    mainСontent.appendChild(contentButton);  
    contentButton.textContent = `ORDER NOW!`

    const burito = document.createElement('img');
    burito.src = Burito;
    burito.alt = 'бурито';
    burito.classList.add('burito');  
    mainHome.appendChild(burito);  

    const bacgroundElement = document.createElement('img');
    bacgroundElement.src = Bacground;
    bacgroundElement.alt = 'Фоновый элемент';
    bacgroundElement.classList.add('bacground-element');  
    mainHome.appendChild(bacgroundElement);  
}