import {getNavBar} from './components/navbar'

const body = document.querySelector('body');

body.prepend(getNavBar(0));