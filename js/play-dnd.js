"use strict";


$(document).ready(function () {


//    new character object
    let newChar = {};
    newChar.race = '';
    newChar.subRace = '';
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
                $('#racialBonus_' + this.ability_score.index).html(this.bonus);
            })
        })
    })
    //subrace selection
    $('.subRaceButton').click(function () {
        console.log(this.value);
        $.get('https://www.dnd5eapi.co/api/subraces/' + $('#subRace_' + this.value).find(':selected').val()).done(function (data) {
            newChar.subRace = data;
            console.log(newChar.subRace)
            $(newChar.subRace.ability_bonuses).each(function () {
                $('#racialBonus_' + this.ability_score.index).html(this.bonus);
            })
        });
    });

        //populates subclass info when selected
        $('#subRace_dwarf').change(function (e) {
            e.preventDefault();
            if ($(this).val() === 'hill-dwarf') {
                $('#subClassInfo_hillDwarf').html('Wiser than their mountain siblings, Hill Dwarves also tend to be even more sturdy than them, meaning they are able to stand more hits before falling in combat.')
            }
        });
        $('#subRace_elf').change(function (e) {
            e.preventDefault();
            if ($(this).val() === 'high-elf') {
                $('#subClassInfo_highElf').html('High elves are more studious and value art in a greater way than their other elven cousins. In addition, they master both longswords and shortswords, as well as shortbows and longbows.')
            }
        });
        $('#subRace_halfling').change(function (e) {
            e.preventDefault();
            if ($(this).val() === 'lightfoot-halfling') {
                $('#subClassInfo_lightfootHalfling').html('The lightfoot halflings can easily hide behind anything that is higher than themselves and tend to be more charismatic than the rest from their race.')
            }
        });

        //takes you to class tab when you click a race
        $(".raceButton").click(function (e) {
            e.preventDefault();
            $('#class-tab').tab('show');
        })
        //assigns a class when a class card is clicked
        $('.classButton').change(function () {
            $.get('https://www.dnd5eapi.co/api/classes/' + this.value).done(function (data) {
                newChar.class = data;
            })
        })
        //takes you to statistics tab when you click a class
        $(".classButton").click(function (e) {
            e.preventDefault();
            $('#statistics-tab').tab('show');
        })
//function to check statistics dropdowns and disable already chosen options
        let abilityScoreCalculate = $('.abilityScoreSelection').change(function () {
            let abilityScoreArray = [];
            $('.abilityScoreSelection').each(function () {
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
            //assigns dropdown values into stats card
            $('#baseScore_str').html(parseInt(abilityScoreArray[0].substring(13)));
            $('#baseScore_dex').html(parseInt(abilityScoreArray[1].substring(13)));
            $('#baseScore_con').html(parseInt(abilityScoreArray[2].substring(13)));
            $('#baseScore_int').html(parseInt(abilityScoreArray[3].substring(13)));
            $('#baseScore_wis').html(parseInt(abilityScoreArray[4].substring(13)));
            $('#baseScore_cha').html(parseInt(abilityScoreArray[5].substring(13)));
            //adds chosen numbers from dropdowns with racial modifier and populates total
            $('#abilityScoreTotal_str').html(parseInt($('#baseScore_str')[0].innerText) + parseInt($('#racialBonus_str')[0].innerText))
            $('#abilityScoreTotal_dex').html(parseInt($('#baseScore_dex')[0].innerText) + parseInt($('#racialBonus_dex')[0].innerText))
            $('#abilityScoreTotal_con').html(parseInt($('#baseScore_con')[0].innerText) + parseInt($('#racialBonus_con')[0].innerText))
            $('#abilityScoreTotal_int').html(parseInt($('#baseScore_int')[0].innerText) + parseInt($('#racialBonus_int')[0].innerText))
            $('#abilityScoreTotal_wis').html(parseInt($('#baseScore_wis')[0].innerText) + parseInt($('#racialBonus_wis')[0].innerText))
            $('#abilityScoreTotal_cha').html(parseInt($('#baseScore_cha')[0].innerText) + parseInt($('#racialBonus_cha')[0].innerText))
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