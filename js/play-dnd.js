"use strict";


//change style functions


//grasslands
function activateGrasslandsStyle (){
    let bodyElement = document.getElementsByTagName('body')[0];
    bodyElement.style.backgroundImage = 'url("../img/pixel-sky.png")';
    bodyElement.style.backgroundSize = 'cover';
    bodyElement.style.backgroundRepeat = 'no-repeat';
    bodyElement.style.backgroundAttachment = 'fixed';

    let navbarElement = document.getElementsByTagName('nav')[0];
    console.log(navbarElement);
    navbarElement.style.backgroundColor = '#efb73f';
    navbarElement.classList.remove('bg-light')

    let styleDropdown = document.getElementById('styleDropdown');
    styleDropdown.style.backgroundColor = '#ab6e03';
}
let grasslandsStyle = document.getElementById('styleGrassland');
grasslandsStyle.addEventListener('click', activateGrasslandsStyle);
