"use strict";
$(document).ready(function () {
//    new character object
    let newChar = {};
    newChar.race = '';
    newChar.subRace = '';
    newChar.class = '';
    newChar.background = '';
    newChar.equipment = [];
    newChar.proficiencies = {
        background: [],
        race: [],
        class: [],
    };
    // assigns a race when the race card button is clicked and then populated statistics page with racial bonuses and takes you to class tab when you click a race
    $('.raceButton').click(function (e) {
        e.preventDefault();
        //retrieves race info based on race button clicked
        $.get(`https://www.dnd5eapi.co/api/races/${this.value}`).done(function (data) {
            //resets racial bonuses to 0 on statistics page - basically just here in case you go back and click a different race
            $('.racialBonus').each(() => $('.racialBonus span').html('0'));
            //takes page to next tab
            $('#class-tab').tab('show');
            //assigns api data to newChar object
            newChar.race = data;
            //populates statistics page with racial bonuses
            $(newChar.race.ability_bonuses).each(function () {
                $(`#racialBonus_${this.ability_score.index}`).html(this.bonus);
            })
            //populating various fields on the features tab with race info from api
            $('#alignment').html(`<span class="fw-bold">Alignment: </span>${newChar.race.alignment}`);
            $('#age').html('<span class="fw-bold">Age: </span>' + newChar.race.age);
            $('#size-desc').html(`<span class="fw-bold">Size: </span>${newChar.race.size_description}`);

            //function to provide dropdown if race has additional language choice options
            function languageFeaturesPopulation(e) {
                if (newChar.race.hasOwnProperty('language_options')) {
                    $('#languages').html(`<span class="fw-bold">Languages: </span>${newChar.race.language_desc}<br><select class="text-center" id="language_selection"></select>`);
                    newChar.race.language_options.from.options.forEach((option) => $('#language_selection').append(`<option value="${option.item.index}">${option.item.name}</option>`))
                } else {
                    $('#languages').html(`<span class="fw-bold">Languages: </span>${newChar.race.language_desc}`)
                }
            }

            languageFeaturesPopulation();
            //populates traits section of racial features
            if (newChar.race.traits.length === 0) {
                $('#traits').addClass('d-none');
            } else {
                $('#traitCards').html('');
                $('#traitsHeader').html('<h3>Traits</h3>');
                newChar.race.traits.forEach(function (trait) {
                    $.get(`https://www.dnd5eapi.co/api/traits/${trait.index}`).done(function (data) {
                        let trait = data;
                        $('#traitCards').append(`<div class="p-0" id="${trait.index}"><p class="text-decoration-underline mb-0 text-start">${trait.name}</p><p>${trait.desc}</p></div>`);
                        //conditional to create select option for traits that has a choice
                        if (trait.hasOwnProperty('proficiency_choices')) {
                            for (let i = 1; i <= trait.proficiency_choices.choose; i++) {
                                $(`#${trait.index}`).append(`<select class="text-center" id="${trait.index}_selection${i}"></select>`);
                                trait.proficiency_choices.from.options.forEach(((choice) => $('#' + trait.index + '_selection' + i).append(`<option value="${choice.item.index}">${choice.item.name}</option>`)))
                            }
                        }
                        if (trait.hasOwnProperty('proficiencies')) {
                            trait.proficiencies.forEach((proficiency) => newChar.proficiencies.race.push(proficiency))
                        }
                        //conditional to populate table for dragonborn choices
                        if (trait.index === 'draconic-ancestry') {
                            $('#draconic-ancestry').append('<table class="table"><tr><th class="m-1">Dragon</th><th class="m-1">Damage Type</th><th class="m-1">Breath Weapon</th></tr>' +
                                '<tr><td>Black</td><td>Acid</td><td>5 by 30 ft. line (Dex. save)</td></tr>' +
                                '<tr><td>Blue</td><td>Lightning</td><td>5 by 30 ft. line (Dex. save)</td></tr>' +
                                '<tr><td>Brass</td><td>Fire</td><td>5 by 30 ft. line (Dex. save)</td></tr>' +
                                '<tr><td>Bronze</td><td>Lightning</td><td>5 by 30 ft. line (Dex. save)</td></tr>' +
                                '<tr><td>Copper</td><td>Acid</td><td>5 by 30 ft. line (Dex. save)</td></tr>' +
                                '<tr><td>Gold</td><td>Fire</td><td>15 ft. cone (Dex. save)</td></tr>' +
                                '<tr><td>Green</td><td>Poison</td><td>15 ft. cone (Con. save)</td></tr>' +
                                '<tr><td>Red</td><td>Fire</td><td>15 ft. cone (Dex. save)</td></tr>' +
                                '<tr><td>Silver</td><td>Cold</td><td>15 ft. cone (Con. save)</td></tr>' +
                                '<tr><td>White</td><td>Cold</td><td>15 ft. cone (Con. save)</td></tr>' +
                                '</table>' +
                                '<select id="draconic-ancestry-selection"' +
                                '</select>')
                            trait.trait_specific.subtrait_options.from.options.forEach(((choice) => $('#draconic-ancestry-selection').append(`<option value="${choice.item.index}">${choice.item.name}</option>`)));
                        }
                    })
                })
            }
        })
    })
    //subrace selection
    $('.subRaceButton').click(function () {
        //pulls subrace data from api using selection value from dropdown
        $.get('https://www.dnd5eapi.co/api/subraces/' + $(`#subRace_${this.value}`).find(':selected').val()).done(function (data) {
            newChar.subRace = data;
            console.log(newChar)
            //added additional statistical bonuses from subclass to statistics tab
            $(newChar.subRace.ability_bonuses).each(function () {
                $(`#racialBonus_${this.ability_score.index}`).html(this.bonus);
            })
            //populates racial traits from subrace to racial features section on features tab
            newChar.subRace.racial_traits.forEach(function (trait) {
                $.get(`https://www.dnd5eapi.co/api/traits/${trait.index}`).done(function (data) {
                    let trait = data;
                    $('#traitCards').append(`<div class="p-0" id="${trait.index}"><p class="text-decoration-underline m-0">${trait.name}</p><p>${trait.desc}</p></div>`);
                    if (trait.hasOwnProperty('language_options')) {
                        $(`#${trait.index}`).append('<select id="' + trait.index + '_selection"></select>');
                        trait.language_options.from.options.forEach(function (option) {
                            $('#' + trait.index + '_selection').append('<option value="' + option.item.index + '">' + option.item.name + '</option>')
                        })
                    }
                    if (trait.hasOwnProperty('proficiencies')) {
                        trait.proficiencies.forEach((proficiency) => newChar.proficiencies.race.push(proficiency))
                    }
                })
            })
        });
    });
    //populates subrace info when selected
    $('.subRaceSelection').change(function (e) {
        e.preventDefault();
        if ($(this).val() === 'hill-dwarf') {
            $('#subClassInfo_hillDwarf').html('Wiser than their mountain siblings, Hill Dwarves also tend to be even more sturdy than them, meaning they are able to stand more hits before falling in combat.')
        } else if ($(this).val() === 'high-elf') {
            $('#subClassInfo_highElf').html('High elves are more studious and value art in a greater way than their other elven cousins. In addition, they master both longswords and shortswords, as well as shortbows and longbows.')
        } else if ($(this).val() === 'lightfoot-halfling') {
            $('#subClassInfo_lightfootHalfling').html('The lightfoot halflings can easily hide behind anything that is higher than themselves and tend to be more charismatic than the rest from their race.')
        } else if ($(this).val() === 'rock-gnome') {
            $('#subClassInfo_rockGnome').html('Rock gnomes are known as the best tinkerers. These hardy beings can create little gadgets or things with a specific purpose, to be used for commodity or to maybe get them out of trouble.')
        }
    });
    //assigns a class when a class card is clicked and takes you to statistics tab when you click a class
    $('.classButton').click(function (e) {
        console.log("CLICKED");
        e.preventDefault();
        $.get(`https://www.dnd5eapi.co/api/classes/${this.value}`).done(function (data) {
            newChar.class = data;
            console.log(newChar.class);
            $(`#classHitDie`).html(`d${newChar.class.hit_die}`);
            for (let i = 0; i < newChar.class.proficiencies.length; i++) {
                if (!newChar.class.proficiencies[i].name.includes('Saving')) {
                    if (i === 0) {
                        $(`#classProficiencies`).append(newChar.class.proficiencies[i].name)
                    } else {
                        $(`#classProficiencies`).append(`, ${newChar.class.proficiencies[i].name}`)
                    }
                }
            }
            for (let j = 0; j < newChar.class.proficiency_choices.length; j++) {
                $(`#classProficienciesChoices`).append(`
                <p class="text-start" id="classProficiencyChoice_${j}">${newChar.class.proficiency_choices[j].desc}: </p>
                `)
                for (let i = 0; i < newChar.class.proficiency_choices[j].choose; i++) {
                    $(`#classProficiencyChoice_${j}`).append(`
                    <select id="classProficiencyChoice_${j}_selection_${i}"></select>
                    `)
                    if (newChar.class.proficiency_choices[j].from.options[0].hasOwnProperty('choice')) {
                        newChar.class.proficiency_choices[j].from.options.forEach(function (option) {
                            option.choice.from.options.forEach(function (choice) {
                                $(`#classProficiencyChoice_${j}_selection_${i}`).append(`
                        <option>${choice.item.name}</option>
                        `)
                            })
                        })
                    } else {
                        newChar.class.proficiency_choices[j].from.options.forEach(function (option) {
                            $(`#classProficiencyChoice_${j}_selection_${i}`).append(`
                        <option value="${option.item.index}">${option.item.name}</option>
                        `)
                        })
                    }
                }
            }
            for (let i = 0; i < newChar.class.starting_equipment.length; i++) {
                if (i === 0) {
                    if (newChar.class.starting_equipment[i].quantity !== 1) {
                        $(`#classEquipment`).append(`${newChar.class.starting_equipment[i].quantity}x ${newChar.class.starting_equipment[i].equipment.name}`)
                    } else {
                        $(`#classEquipment`).append(`${newChar.class.starting_equipment[i].equipment.name}`)
                    }
                } else {
                    if (newChar.class.starting_equipment[i].quantity !== 1) {
                        $(`#classEquipment`).append(`, ${newChar.class.starting_equipment[i].quantity}x ${newChar.class.starting_equipment[i].equipment.name}`)
                    } else {
                        $(`#classEquipment`).append(`, ${newChar.class.starting_equipment[i].equipment.name}`)
                    }
                }
            }
            for (let i = 0; i < newChar.class.starting_equipment_options.length; i++) {
                $(`#classEquipmentChoices`).append(`
                <p class="text-start" id="classEquipmentChoice_${i}">${newChar.class.starting_equipment_options[i].desc}: </p>
                `)
                for (let j = 0; j < newChar.class.starting_equipment_options[i].choose; j++) {
                    $(`#classEquipmentChoice_${i}`).append(`
                        <select id="classEquipmentChoice_${i}_choice_${j}"></select>
                        `)
                    if (newChar.class.starting_equipment_options[i].from.hasOwnProperty("options")) {
                        for (let p = 0; p < newChar.class.starting_equipment_options[i].from.options.length; p++) {
                            if (newChar.class.starting_equipment_options[i].from.options[p].option_type === "counted_reference") {
                                if (newChar.class.starting_equipment_options[i].from.options[p].hasOwnProperty("count") && newChar.class.starting_equipment_options[i].from.options[p].count !== 1) {
                                    $(`#classEquipmentChoice_${i}_choice_${j}`).append(`
                            <option value="${newChar.class.starting_equipment_options[i].from.options[p].of.index}">${newChar.class.starting_equipment_options[i].from.options[p].count}x ${newChar.class.starting_equipment_options[i].from.options[p].of.name}</option>
                            `)
                                } else {
                                    $(`#classEquipmentChoice_${i}_choice_${j}`).append(`
                            <option value="${newChar.class.starting_equipment_options[i].from.options[p].of.index}">${newChar.class.starting_equipment_options[i].from.options[p].of.name}</option>
                            `)
                                }
                            } else if ((newChar.class.starting_equipment_options[i].from.options[p].option_type === "choice")) {
                                $.get(`https://www.dnd5eapi.co${newChar.class.starting_equipment_options[i].from.options[p].choice.from.equipment_category.url}`).done(function (data) {
                                    console.log(data);
                                    data.equipment.forEach(function (item) {
                                        $(`#classEquipmentChoice_${i}_choice_${j}`).append(`
                            <option value="${item.index}">${item.name}</option>
                            `)
                                    })
                                })
                            } else if (newChar.class.starting_equipment_options[i].from.options[p].option_type === "multiple") {
                                $(`#classEquipmentChoice_${i}_choice_${j}`).append(`
                            <option id="classEquipmentChoice_${i}_choice_${j}_option"></option>
                            `)
                                //    option if you wanted to display all of the multiples in the select option
                                for (let q = 0; q < newChar.class.starting_equipment_options[i].from.options[p].items.length; q++) {
                                    if (newChar.class.starting_equipment_options[i].from.options[p].items[q].option_type === 'counted_reference') {
                                        if (q === 0) {
                                            $(`#classEquipmentChoice_${i}_choice_${j}_option`).append(`
                            ${newChar.class.starting_equipment_options[i].from.options[p].items[q].of.name}
                            `)
                                        } else {
                                            $(`#classEquipmentChoice_${i}_choice_${j}_option`).append(`
                             / ${newChar.class.starting_equipment_options[i].from.options[p].items[q].of.name}
                            `)
                                        }
                                    } else if (newChar.class.starting_equipment_options[i].from.options[p].items[q].option_type === 'choice') {
                                        $.get(`https://www.dnd5eapi.co${newChar.class.starting_equipment_options[i].from.options[p].items[q].choice.from.equipment_category.url}`).done(function (data) {
                                            console.log(data);
                                        })
                                    }
                                }
                            }
                        }
                    } else {
                        $.get(`https://www.dnd5eapi.co${newChar.class.starting_equipment_options[i].from.equipment_category.url}`).done(function (data) {
                            console.log(data);
                            data.equipment.forEach(function (item) {
                                $(`#classEquipmentChoice_${i}_choice_${j}`).append(`
                            <option value="${item.index}">${item.name}</option>
                            `)
                            })
                        })
                    }
                }
            }
            $(`#classSavingThrows`).html(`${newChar.class.saving_throws[0].name}, ${newChar.class.saving_throws[1].name}`);
            $('#statistics-tab').tab('show');
        })
    })
//function to check statistics dropdowns and disable already chosen options
    $('.abilityScoreSelectionDropdown').change(function () {
        reloadStatisticsTab();
    })

    function reloadStatisticsTab() {
        let abilityScoreArray = [];
        $('.abilityScoreSelection').each(function () {
            abilityScoreArray.push(this.value)
        })
        for (let i = 8; i <= 15; i++) {
            if (abilityScoreArray.indexOf(`abilityScore-${i}`) !== -1) {
                $(`.value-${i}`).prop('disabled', true);
            } else {
                $(`.value-${i}`).prop('disabled', false);
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
        }
    }

//backgrounds tab functions
    $.get('https://www.dnd5eapi.co/api/backgrounds/').done(function (data) {
        let backgrounds = data.results;
        backgrounds.forEach(function (background) {
            $.get(`https://www.dnd5eapi.co/api/backgrounds/${background.index}`).done(function (data) {
                let background = data;
                //creates card for backgrounds
                $('#backgroundCards').html(`<div class="pixel-box col-10 col-md-5 col-lg-5 col-xl-5 ${background.index}Card">` +
                    `<h3>${background.name}</h3>` +
                    `<p>${background.feature.name}</p>` +
                    `<p>${background.feature.desc}</p>` +
                    `<div class="pixelButtonContainer">` +
                    `<button class="backgroundButton" value="${background.index}">` +
                    `<div class="pixel"><p>${background.name}</p></div>` +
                    `</button>` +
                    `</div>` +
                    `</div>`)
                //assigns background to newChar object and takes you to proficiencies tab when you click a background
                $('.backgroundButton').click(function (e) {
                    newChar.background = data;
                    e.preventDefault();
                    if (background.hasOwnProperty('starting_proficiencies')) {
                        for (let i = 0; i < background.starting_proficiencies.length; i++) {
                            newChar.proficiencies.background.push(background.starting_proficiencies[i]);
                            if (background.starting_proficiencies.indexOf(background.starting_proficiencies[i]) === (background.starting_proficiencies.length - 1)) {
                                $('#backgroundProficiencies').append((background.starting_proficiencies[i].name).slice(7));
                            } else {
                                $('#backgroundProficiencies').append(`${(background.starting_proficiencies[i].name).slice(7)}, `);
                            }
                        }
                    }
                    if (newChar.background.hasOwnProperty('language_options')) {
                        $.get('https://www.dnd5eapi.co/api/languages').done((data) => {
                            for (let i = 0; i < background.language_options.choose; i++) {
                                $('#backgroundLanguages').append(`<select id="backgroundLanguagesChoice${i}"></select> `);
                                data.results.forEach((language) => $('#backgroundLanguagesChoice' + i).append(`<option value="${language.index}">${language.name}</option>`))
                            }
                        })
                    }
                    if (newChar.background.hasOwnProperty('starting_equipment')) {
                        newChar.background.starting_equipment.forEach(function (item) {
                            $(`#backgroundEquipment`).append(
                                `${item.equipment.name}`
                            )
                        })
                    }
                    if (newChar.background.hasOwnProperty('starting_equipment_options')) {
                        $(`#backgroundEquipment`).append(`<select id="backgroundEquipmentChoices"></select>`);
                        $.get(`https://www.dnd5eapi.co${newChar.background.starting_equipment_options[0].from.equipment_category.url}`).done((data) => {
                            data.equipment.forEach(function (item) {
                                $(`#backgroundEquipmentChoices`).append(`<option value="${item.index}">${item.name}</option>`)
                            })
                        })

                    }
                    newChar.background.starting_equipment_options
                    $('#features-tab').tab('show');
                })
            })
        })
    })


    $.get('https://www.dnd5eapi.co/api/rules/adventuring/').done(function (data) {
        let adventuring = data;
       // console.log(adventuring);
        adventuring.subsections.forEach(function (section) {
            $(`#rulesPage`).append(`
            <h1> ${section.name} </h1>
            <div id="${section.index}.content"></div>
            `)
          //  console.log(section);
            $.get('https://www.dnd5eapi.co' + section.url).done(function (sectionData) {
                console.log(sectionData);
                $(`#${section.index}.content`).append(`
                <p>${sectionData.desc}</p>
                `)
            })
        })
    })

     $.get('https://www.dnd5eapi.co/api/rules/appendix').done(function (data) {
         let rules = data;
         console.log(data);
         data.forEach(function (section) {
             $(`#rulesPage`).append(`
             <h1> ${section.name} </h1>
             <div id="${section.name}.content"</div>
             `)
             $.get('https://www.dnd5eapi.co/' + section.url).done(function (data) {
                 $(`#${section.name}`).html(`
                ${data.desc}
                 `)
             })
         })
     })
    
         $.get('https://www.dnd5eapi.co/api/rules/combat').done(function (data) {
         let rules = data;
         console.log(data);
         data.forEach(function (section) {
             $(`#rulesPage`).append(`
             <h1> ${section.name} </h1>
             <div id="${section.name}.content"</div>
             `)
             $.get('https://www.dnd5eapi.co/' + section.url).done(function (data) {
                 $(`#${section.name}`).html(`
                ${data.desc}
                 `)
             })
         })
     })
    
})
