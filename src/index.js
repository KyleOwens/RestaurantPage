import {getNavBar} from './components/navbar'
import {getHomePage} from './components/home'

const body = document.querySelector('body');
const pageCon = document.querySelector('#content');

body.prepend(getNavBar(1));
//pageCon.appendChild(getHomePage());
