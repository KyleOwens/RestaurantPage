import {getNavBar, updateNavBar} from './components/navbar';
import {getHomePage} from './components/home';
import {getMenu} from './components/menu';

const body = document.querySelector('body');
const pageCon = document.querySelector('#content');

body.prepend(getNavBar(0));
pageCon.appendChild(getHomePage());

const navButtons = Array.from(document.querySelectorAll('li'));
const homeButton = navButtons[0];
const menuButton = navButtons[1];

homeButton.addEventListener('click', (e) => {
    changePage(e, getHomePage());
});

menuButton.addEventListener('click', (e) => {
    changePage(e, getMenu());
});

function changePage(e, page){
    if(!e.target.classList.contains('selected')){
        removeCurrentSelected()
        e.target.classList.add('selected');
        pageCon.removeChild(pageCon.children[0]);
        pageCon.appendChild(page);
    }
}

function removeCurrentSelected(){
    navButtons.forEach(button => {
        button.classList.remove('selected');
    })
}
