import '../css/contacts.css';


import contactsFooterElement from '../image/footerContacts.svg';

export function contacts() {

    const content = document.querySelector('#content')

    const mainContacts = document.createElement('div');
    mainContacts.classList.add('main');
    content.appendChild(mainContacts);


    const container = document.createElement('div');
    container.classList.add('main__contacts-container')
    mainContacts.appendChild(container);


    const hoursContainer = document.createElement('div');
    hoursContainer.classList.add('main__hours-container', 'containers')
    container.appendChild(hoursContainer);
    const hoursContainerLabel = document.createElement('p');
    hoursContainerLabel.classList.add('main__label')
    hoursContainer.appendChild(hoursContainerLabel);
    hoursContainerLabel.textContent = 'Pabah restaurant opening hours'
    const hoursContainerMeaning = document.createElement('p');
    hoursContainerMeaning.classList.add('main__Meaning')
    hoursContainer.appendChild(hoursContainerMeaning);
    hoursContainerMeaning.textContent = 'from 9:00 to 22:00'

    const emailContainer = document.createElement('div');
    emailContainer.classList.add('main__email-containe', 'containers')
    container.appendChild(emailContainer);
    const emailContainerLabel = document.createElement('p');
    emailContainerLabel.classList.add('main__label')
    emailContainer.appendChild(emailContainerLabel);
    emailContainerLabel.textContent = 'Email'
    const emailContainerMeaning = document.createElement('p');
    emailContainerMeaning.classList.add('main__Meaning')
    emailContainer.appendChild(emailContainerMeaning);
    emailContainerMeaning.textContent = 'pabah@mail.ru'

    const addressСontainer = document.createElement('div');
    addressСontainer.classList.add('main__address-containe', 'containers')
    container.appendChild(addressСontainer);
    const addressContainerLabel = document.createElement('p');
    addressContainerLabel.classList.add('main__label')
    addressСontainer.appendChild(addressContainerLabel);
    addressContainerLabel.textContent = 'address'
    const addressContainerMeaning = document.createElement('p');
    addressContainerMeaning.classList.add('main__Meaning')
    addressСontainer.appendChild(addressContainerMeaning);
    addressContainerMeaning.textContent = 'Grozny, Kurortnaya street, 5'

    const phoneСontainer = document.createElement('div');
    phoneСontainer.classList.add('main__phone-containe', 'containers')
    container.appendChild(phoneСontainer);
    const phoneContainerLabel = document.createElement('p');
    phoneContainerLabel.classList.add('main__label')
    phoneСontainer.appendChild(phoneContainerLabel);
    phoneСontainer.textContent = 'phone'
    const phoneContainerMeaning = document.createElement('p');
    phoneContainerMeaning.classList.add('main__Meaning')
    phoneСontainer.appendChild(phoneContainerMeaning);
    phoneContainerMeaning.textContent = '8 (928) 229-04-04'


    const contactsFooterContainer = document.createElement('div')
    contactsFooterContainer.classList.add('contacts__footer-container');
    mainContacts.appendChild(contactsFooterContainer);

    const contactsfooterElement = document.createElement('img');
    contactsfooterElement.src = contactsFooterElement;
    contactsfooterElement.alt = 'Подвал';
    contactsfooterElement.classList.add('contacts__footer-element');
    contactsFooterContainer.appendChild(contactsfooterElement);

}