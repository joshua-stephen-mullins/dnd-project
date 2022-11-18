"use strict";


$(document).ready(function(){



//    character creation
let newChar = {};
    newChar.race = '';
    newChar.class = '';
    newChar.background = '';
    newChar.equipment = [];

$('.raceButton').click(function(){
    $.get('https://www.dnd5eapi.co/api/races/' + this.value).done(function(data){
        $('.racialBonus').each(function(){
            $('span').html('0');
        });
        newChar.race = data;
        $(newChar.race.ability_bonuses).each(function() {
            console.log(this.ability_score.index);
            $('#racialBonus_' + this.ability_score.index).html(this.bonus);
        })
    });
})

//takes you to class tab when you click a race
    $(".raceButton").click(function() {
        $('#class-tab').tab('show');
    })


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
    // styleDropdown.style.backgroundColor = '#ab6e03';
}
let grasslandsStyle = document.getElementById('styleGrassland');
grasslandsStyle.addEventListener('click', activateGrasslandsStyle);

function activateGrasslandsStyleHomePage (){
    let homepageBody = document.getElementById('homepageBody');
    homepageBody.style.backgroundColor = 'rgba(252,252,241,0.7)';
    homepageBody.style.color = '#000000';
    homepageBody.classList.add('pixel-box');
}
grasslandsStyle.addEventListener('click', activateGrasslandsStyleHomePage);

function activateGrasslandsStyleRacePage (){
    let raceCarousel = document.getElementById('raceCarousel');
    raceCarousel.style.backgroundColor = 'rgba(252,252,241,0.7)';
    raceCarousel.style.color = '#000000';
    raceCarousel.classList.add('pixel-box');
}
grasslandsStyle.addEventListener('click', activateGrasslandsStyleRacePage);

function activateGrasslandsStyleClassPage (){
    let classCards = document.getElementsByClassName('classCard');

    for (let i = 0; i < classCards.length; i++){
        classCards[i].style.backgroundColor = 'rgba(252,252,241,0.7)';
        classCards[i].style.color = '#000000';
    }
}
grasslandsStyle.addEventListener('click', activateGrasslandsStyleClassPage);

});