"use strict";


$(document).ready(function () {


//    character creation
    let newChar = {};
    newChar.race = '';
    newChar.class = '';
    newChar.background = '';
    newChar.equipment = [];


    // assigns a race when the race card button is clicked and then populated statistics page with racial bonuses
    $('.raceButton').click(function () {
        $.get('https://www.dnd5eapi.co/api/races/' + this.value).done(function (data) {
            $('.racialBonus').each(function () {
                $('span').html('0');
            });
            newChar.race = data;
            $(newChar.race.ability_bonuses).each(function () {
                console.log(this.ability_score.index);
                $('#racialBonus_' + this.ability_score.index).html(this.bonus);
            })
        });
    })
    //takes you to class tab when you click a race
    $(".raceButton").click(function () {
        $('#class-tab').tab('show');
    })

    //assigns a class when a class card is clicked
    $('.classButton').click(function () {
        $.get('https://www.dnd5eapi.co/api/classes/' + this.value).done(function (data) {
            newChar.class = data;
            console.log(newChar);
        })
    })

    //takes you to statistics tab when you click a class
    $(".classButton").click(function () {
        $('#statistics-tab').tab('show');
    })

//function to check statistics dropdowns and disable already chosen options
    $('.abilityScoreSelection').change(function() {
        let abilityScoreArray = [];
        $('.abilityScoreSelection').each(function() {
            abilityScoreArray.push(this.value)
        })
        if (abilityScoreArray.indexOf('abilityScore-8') !== -1) {
            $('.value-8').prop('disabled', true);
        } else {
            $('.value-8').prop('disabled', false);
        }
        if (abilityScoreArray.indexOf('abilityScore-10') !== -1) {
            $('.value-10').prop('disabled', true);
        } else {
            $('.value-10').prop('disabled', false);
        }
        if (abilityScoreArray.indexOf('abilityScore-12') !== -1) {
            $('.value-12').prop('disabled', true);
        } else {
            $('.value-12').prop('disabled', false);
        }
        if (abilityScoreArray.indexOf('abilityScore-13') !== -1) {
            $('.value-13').prop('disabled', true);
        } else {
            $('.value-13').prop('disabled', false);
        }
        if (abilityScoreArray.indexOf('abilityScore-14') !== -1) {
            $('.value-14').prop('disabled', true);
        } else {
            $('.value-14').prop('disabled', false);
        }
        if (abilityScoreArray.indexOf('abilityScore-15') !== -1) {
            $('.value-15').prop('disabled', true);
        } else {
            $('.value-15').prop('disabled', false);
        }
        $('#baseScore_str').html(abilityScoreArray[0].substring(13));
        $('#baseScore_dex').html(abilityScoreArray[1].substring(13));
        $('#baseScore_con').html(abilityScoreArray[2].substring(13));
        $('#baseScore_int').html(abilityScoreArray[3].substring(13));
        $('#baseScore_wis').html(abilityScoreArray[4].substring(13));
        $('#baseScore_cha').html(abilityScoreArray[5].substring(13));
    })


//change style functions
//grasslands
    function activateGrasslandsStyle() {
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

    function activateGrasslandsStyleHomePage() {
        let homepageBody = document.getElementById('homepageBody');
        homepageBody.style.backgroundColor = 'rgba(252,252,241,0.7)';
        homepageBody.style.color = '#000000';
        homepageBody.classList.add('pixel-box');
    }

    grasslandsStyle.addEventListener('click', activateGrasslandsStyleHomePage);

    function activateGrasslandsStyleRacePage() {
        let raceCarousel = document.getElementById('raceCarousel');
        raceCarousel.style.backgroundColor = 'rgba(252,252,241,0.7)';
        raceCarousel.style.color = '#000000';
        raceCarousel.classList.add('pixel-box');
    }

    grasslandsStyle.addEventListener('click', activateGrasslandsStyleRacePage);

    function activateGrasslandsStyleClassPage() {
        let classCards = document.getElementsByClassName('classCard');

        for (let i = 0; i < classCards.length; i++) {
            classCards[i].style.backgroundColor = 'rgba(252,252,241,0.7)';
            classCards[i].style.color = '#000000';
        }
    }

    grasslandsStyle.addEventListener('click', activateGrasslandsStyleClassPage);

});