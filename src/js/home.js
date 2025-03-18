import '../css/home.css';
import FigureWan from '../image/Figure_1.svg'
import FigurTwo from '../image/Figure_2.svg'
import FigurThree from '../image/Figure_3.svg'
import FigurFour from '../image/Figure_4.svg'
import FigurFive from '../image/Figure_5.svg'
import burito from '../image/burito.png'

export function home() {
    const content = document.querySelector('#content');

    const container = document.querySelector('.container');  

    const mainHome = document.createElement('div');
    mainHome.classList.add('main');
    container.appendChild(mainHome);

    const figureWan = document.createElement('img');
    figureWan.src = FigureWan;
    figureWan.alt = 'Фигура';
    figureWan.classList.add('figure-wan');  
    mainHome.appendChild(figureWan);  


    const figureTwo = document.createElement('img');
    figureTwo.src = FigurTwo;
    figureTwo.alt = 'Фигура';
    figureTwo.classList.add('figure-two');  
    mainHome.appendChild(figureTwo);  

    const figurethree = document.createElement('img');
    figurethree.src = FigurThree;
    figurethree.alt = 'Фигура';
    figurethree.classList.add('figure-three');  
    mainHome.appendChild(figurethree);  

    const figurefour = document.createElement('img');
    figurefour.src = FigurFour;
    figurefour.alt = 'Фигура';
    figurefour.classList.add('figure-four');  
    mainHome.appendChild(figurefour);  

    const figurefive = document.createElement('img');
    figurefive.src = FigurFive;
    figurefive.alt = 'Фигура';
    figurefive.classList.add('figure-five');  
    mainHome.appendChild(figurefive);  

    const Burito = document.createElement('img');
    Burito.src = burito;
    Burito.alt = 'бУРИТО';
    Burito.classList.add('burito');  
    mainHome.appendChild(Burito);  
}