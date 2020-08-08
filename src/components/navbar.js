const getNavBar = (selectedPosition) => {
    const navbar = document.createElement('nav');
    const logoContainer = getLogoContainer();
    const navButtons = getNavButtons(selectedPosition);
    const contactButtons = getContactButtons();

    navbar.appendChild(logoContainer);
    navbar.appendChild(navButtons);
    navbar.appendChild(contactButtons);

    return navbar;
}

const updateNavbar = (buttons, index) => {
    buttons.forEach(button => {
        button.classList.remove('selected');
    });

    buttons[index].classList.add('selected');
}

const getLogoContainer = () => {
    const logoContainer = document.createElement('div');
    const logo = document.createElement('img');
    const subtitle = document.createElement('p');

    logoContainer.classList.add('logo-container');
    logo.src = 'imgs/logo.png';
    logo.id = 'logo';

    subtitle.textContent = 'Pizza Planet'

    logoContainer.appendChild(logo);
    logoContainer.appendChild(subtitle);

    return logoContainer;
}

const getNavButtons = (position) => {
    const options = ['Home', 'Menu', 'About', 'Contact']

    const container = document.createElement('div');
    const list = document.createElement('ul');
    
    container.appendChild(list);

    for(let i = 0; i<options.length; i++){
        const listItem = document.createElement('li');

        if(i === position){
            listItem.classList.add('selected');
        }
        listItem.textContent = options[i];
        list.appendChild(listItem)
    }

    container.classList.add('nav-buttons');

    return container;
}

const getContactButtons = () => {
    const container = document.createElement('div')
    const insta = document.createElement('img');
    const facebook = document.createElement('img');
    const telephone = document.createElement('button');

    container.classList.add('contact-buttons');
    
    insta.src = 'imgs/instagram.png';    
    facebook.src = 'imgs/facebook.png';
    
    telephone.classList.add('phone-number');
    telephone.textContent = '608-867-5309';

    container.appendChild(insta);
    container.appendChild(facebook);
    container.appendChild(telephone);

    return container;
}

export {getNavBar}
