import '../css/home.css';
import bacgrounds from '../image/Bacground.svg'
import buritos from '../image/burito.svg'


export function home() {
    const existingFooter = document.querySelector('.footer-container');
    if (existingFooter) {
        existingFooter.remove();
    }

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
    contentTitle.innerHTML = 'HUNGRY? <br> ORDER FROM US!'


    const contentButton = document.createElement('button');
    contentButton.classList.add('main__button');
    mainСontent.appendChild(contentButton);
    contentButton.textContent = `ORDER NOW!`

    const burito = document.createElement('img');
    burito.src = buritos;
    burito.alt = 'бурито';
    burito.classList.add('burito');
    mainHome.appendChild(burito);

    const bacgroundElement = document.createElement('img');
    bacgroundElement.src = bacgrounds;
    bacgroundElement.alt = 'Фоновый элемент';
    bacgroundElement.classList.add('bacground-element');
    mainHome.appendChild(bacgroundElement);
}