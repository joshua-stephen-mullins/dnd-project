"use strict";

// function to roll a d20
function d20RollFunction(){
    return Math.floor(Math.random() * (20 - 1) + 1);
}

// variable for the d20 roll function
let d20Roll = d20RollFunction();

let cassidyAgustus = {
    charName: "Cassidy Agustus",
    charRace: "Gnome",
    charClass: "Druid",
    proficiencies: ["Medicine", "Perception", "Religion", "Survival"],
    profBonus: 2,
    strScore: 10,
    strMod: 0,
    strCheck: function () {
        return `Die roll ${d20Roll} | Strength Modifier ${cassidyAgustus.strMod} | Total: ${d20Roll + cassidyAgustus.strMod}`
    },
    dexScore: 12,
    dexMod: 1,
    dexCheck: function (){
        return "Die roll " + d20Roll + " | Dexterity Modifier " + cassidyAgustus.dexMod + " | Total: " + (d20Roll + cassidyAgustus.dexMod)},
    conScore: 14,
    conMod: 2,
    conCheck: function (){
        return "Die roll " + d20Roll + " | Constitution Modifier " + cassidyAgustus.conMod + " | Total: " + (d20Roll + cassidyAgustus.conMod)},
    intScore: 14,
    intMod: 2,
    intCheck: function (){
        return "Die roll " + d20Roll + " | Intelligence Modifier " + cassidyAgustus.intMod + " | Total: " + (d20Roll + cassidyAgustus.intMod)},
    wisScore: 17,
    wisMod: 3,
    wisCheck: function (){
        return "Die roll " + d20Roll + " | Wisdom Modifier " + cassidyAgustus.wisMod + " | Total: " + (d20Roll + cassidyAgustus.wisMod)},
    charScore: 8,
    charMod: -1,
    charCheck: function (){
        return "Die roll " + d20Roll + " | Charisma Modifier " + cassidyAgustus.charMod + " | Total: " + (d20Roll + cassidyAgustus.charMod)},
};

cassidyAgustus.acrobatics = cassidyAgustus.dexMod;
cassidyAgustus.acrobaticsCheck = function (){
    if (cassidyAgustus.proficiencies.indexOf('Acrobatics') !== -1){
        return "Die roll " + d20Roll + " | Dexterity Modifier " + cassidyAgustus.dexMod + " | Proficiency Bonus " + cassidyAgustus.profBonus + " | Total: " + (d20Roll + cassidyAgustus.dexMod + cassidyAgustus.profBonus);
    } else {
        return "Die roll " + d20Roll + " | Dexterity Modifier " + cassidyAgustus.dexMod + " | Total: " + (d20Roll + cassidyAgustus.dexMod);
    }
}
cassidyAgustus.animalHandling = cassidyAgustus.wisMod;
cassidyAgustus.animalHandlingCheck = function (){
    if (cassidyAgustus.proficiencies.indexOf('Animal Handling') !== -1){
        return "Die roll " + d20Roll + " | Wisdom Modifier " + cassidyAgustus.wisMod + " | Proficiency Bonus " + cassidyAgustus.profBonus + " | Total: " + (d20Roll + cassidyAgustus.wisMod + cassidyAgustus.profBonus);
    } else {
        return "Die roll " + d20Roll + " | Wisdom Modifier " + cassidyAgustus.wisMod + " | Total: " + (d20Roll + cassidyAgustus.wisMod);
    }
}
cassidyAgustus.arcana = cassidyAgustus.intMod;
cassidyAgustus.arcanaCheck = function (){
    if (cassidyAgustus.proficiencies.indexOf('Arcana') !== -1){
        return "Die roll " + d20Roll + " | Intelligence Modifier " + cassidyAgustus.intMod + " | Proficiency Bonus " + cassidyAgustus.profBonus + " | Total: " + (d20Roll + cassidyAgustus.intMod + cassidyAgustus.profBonus);
    } else {
        return "Die roll " + d20Roll + " | Intelligence Modifier " + cassidyAgustus.intMod + " | Total: " + (d20Roll + cassidyAgustus.intMod);
    }
}
cassidyAgustus.athletics = cassidyAgustus.strMod;
cassidyAgustus.athleticsCheck = function (){
    if (cassidyAgustus.proficiencies.indexOf('Athletics') !== -1){
        return "Die roll " + d20Roll + " | Strength Modifier " + cassidyAgustus.strMod + " | Proficiency Bonus " + cassidyAgustus.profBonus + " | Total: " + (d20Roll + cassidyAgustus.strMod + cassidyAgustus.profBonus);
    } else {
        return "Die roll " + d20Roll + " | Strength Modifier " + cassidyAgustus.strMod + " | Total: " + (d20Roll + cassidyAgustus.strMod);
    }
};
cassidyAgustus.deception = cassidyAgustus.charMod;
cassidyAgustus.deceptionCheck = function (){
    if (cassidyAgustus.proficiencies.indexOf('Deception') !== -1){
        return "Die roll " + d20Roll + " | Charisma Modifier " + cassidyAgustus.charMod + " | Proficiency Bonus " + cassidyAgustus.profBonus + " | Total: " + (d20Roll + cassidyAgustus.charMod + cassidyAgustus.profBonus);
    } else {
        return "Die roll " + d20Roll + " | Charisma Modifier " + cassidyAgustus.charMod + " | Total: " + (d20Roll + cassidyAgustus.charMod);
    }
}
cassidyAgustus.history = cassidyAgustus.intMod;
cassidyAgustus.historyCheck = function (){
    if (cassidyAgustus.proficiencies.indexOf('History') !== -1){
        return "Die roll " + d20Roll + " | Intelligence Modifier " + cassidyAgustus.intMod + " | Proficiency Bonus " + cassidyAgustus.profBonus + " | Total: " + (d20Roll + cassidyAgustus.intMod + cassidyAgustus.profBonus);
    } else {
        return "Die roll " + d20Roll + " | Intelligence Modifier " + cassidyAgustus.intMod + " | Total: " + (d20Roll + cassidyAgustus.intMod);
    }
}
cassidyAgustus.insight = cassidyAgustus.wisMod;
cassidyAgustus.insightCheck = function (){
    if (cassidyAgustus.proficiencies.indexOf('Insight') !== -1){
        return "Die roll " + d20Roll + " | Wisdom Modifier " + cassidyAgustus.wisMod + " | Proficiency Bonus " + cassidyAgustus.profBonus + " | Total: " + (d20Roll + cassidyAgustus.wisMod + cassidyAgustus.profBonus);
    } else {
        return "Die roll " + d20Roll + " | Wisdom Modifier " + cassidyAgustus.wisMod + " | Total: " + (d20Roll + cassidyAgustus.wisMod);
    }
}
cassidyAgustus.intimidation = cassidyAgustus.charMod;
cassidyAgustus.intimidationCheck = function (){
    if (cassidyAgustus.proficiencies.indexOf('Intimidation') !== -1){
        return "Die roll " + d20Roll + " | Charisma Modifier " + cassidyAgustus.charMod + " | Proficiency Bonus " + cassidyAgustus.profBonus + " | Total: " + (d20Roll + cassidyAgustus.charMod + cassidyAgustus.profBonus);
    } else {
        return "Die roll " + d20Roll + " | Charisma Modifier " + cassidyAgustus.charMod + " | Total: " + (d20Roll + cassidyAgustus.charMod);
    }
}
cassidyAgustus.investigation = cassidyAgustus.intMod;
cassidyAgustus.investigationCheck = function (){
    if (cassidyAgustus.proficiencies.indexOf('Investigation') !== -1){
        return "Die roll " + d20Roll + " | Intelligence Modifier " + cassidyAgustus.intMod + " | Proficiency Bonus " + cassidyAgustus.profBonus + " | Total: " + (d20Roll + cassidyAgustus.intMod + cassidyAgustus.profBonus);
    } else {
        return "Die roll " + d20Roll + " | Intelligence Modifier " + cassidyAgustus.intMod + " | Total: " + (d20Roll + cassidyAgustus.intMod);
    }
}
cassidyAgustus.medicine = cassidyAgustus.wisMod;
cassidyAgustus.medicineCheck = function (){
    if (cassidyAgustus.proficiencies.indexOf('Medicine') !== -1){
        return "Die roll " + d20Roll + " | Wisdom Modifier " + cassidyAgustus.wisMod + " | Proficiency Bonus " + cassidyAgustus.profBonus + " | Total: " + (d20Roll + cassidyAgustus.wisMod + cassidyAgustus.profBonus);
    } else {
        return "Die roll " + d20Roll + " | Wisdom Modifier " + cassidyAgustus.wisMod + " | Total: " + (d20Roll + cassidyAgustus.wisMod);
    }
}
cassidyAgustus.nature = cassidyAgustus.intMod;
cassidyAgustus.natureCheck = function (){
    if (cassidyAgustus.proficiencies.indexOf('Nature') !== -1){
        return "Die roll " + d20Roll + " | Intelligence Modifier " + cassidyAgustus.intMod + " | Proficiency Bonus " + cassidyAgustus.profBonus + " | Total: " + (d20Roll + cassidyAgustus.intMod + cassidyAgustus.profBonus);
    } else {
        return "Die roll " + d20Roll + " | Intelligence Modifier " + cassidyAgustus.intMod + " | Total: " + (d20Roll + cassidyAgustus.intMod);
    }
}
cassidyAgustus.perception = cassidyAgustus.wisMod;
cassidyAgustus.perceptionCheck = function (){
    if (cassidyAgustus.proficiencies.indexOf('Perception') !== -1){
        return "Die roll " + d20Roll + " | Wisdom Modifier " + cassidyAgustus.wisMod + " | Proficiency Bonus " + cassidyAgustus.profBonus + " | Total: " + (d20Roll + cassidyAgustus.wisMod + cassidyAgustus.profBonus);
    } else {
        return "Die roll " + d20Roll + " | Wisdom Modifier " + cassidyAgustus.wisMod + " | Total: " + (d20Roll + cassidyAgustus.wisMod);
    }
}
cassidyAgustus.performance = cassidyAgustus.charMod;
cassidyAgustus.performanceCheck = function (){
    if (cassidyAgustus.proficiencies.indexOf('Performance') !== -1){
        return "Die roll " + d20Roll + " | Charisma Modifier " + cassidyAgustus.charMod + " | Proficiency Bonus " + cassidyAgustus.profBonus + " | Total: " + (d20Roll + cassidyAgustus.charMod + cassidyAgustus.profBonus);
    } else {
        return "Die roll " + d20Roll + " | Charisma Modifier " + cassidyAgustus.charMod + " | Total: " + (d20Roll + cassidyAgustus.charMod);
    }
}
cassidyAgustus.persuasion = cassidyAgustus.charMod;
cassidyAgustus.persuasionCheck = function (){
    if (cassidyAgustus.proficiencies.indexOf('Persuasion') !== -1){
        return "Die roll " + d20Roll + " | Charisma Modifier " + cassidyAgustus.charMod + " | Proficiency Bonus " + cassidyAgustus.profBonus + " | Total: " + (d20Roll + cassidyAgustus.charMod + cassidyAgustus.profBonus);
    } else {
        return "Die roll " + d20Roll + " | Charisma Modifier " + cassidyAgustus.charMod + " | Total: " + (d20Roll + cassidyAgustus.charMod);
    }
}
cassidyAgustus.religion = cassidyAgustus.intMod;
cassidyAgustus.religionCheck = function (){
    if (cassidyAgustus.proficiencies.indexOf('Religion') !== -1){
        return "Die roll " + d20Roll + " | Intelligence Modifier " + cassidyAgustus.intMod + " | Proficiency Bonus " + cassidyAgustus.profBonus + " | Total: " + (d20Roll + cassidyAgustus.intMod + cassidyAgustus.profBonus);
    } else {
        return "Die roll " + d20Roll + " | Intelligence Modifier " + cassidyAgustus.intMod + " | Total: " + (d20Roll + cassidyAgustus.intMod);
    }
}
cassidyAgustus.slightOfHand = cassidyAgustus.dexMod;
cassidyAgustus.slightOfHandCheck = function (){
    if (cassidyAgustus.proficiencies.indexOf('Slight of Hand') !== -1){
        return "Die roll " + d20Roll + " | Dexterity Modifier " + cassidyAgustus.dexMod + " | Proficiency Bonus " + cassidyAgustus.profBonus + " | Total: " + (d20Roll + cassidyAgustus.dexMod + cassidyAgustus.profBonus);
    } else {
        return "Die roll " + d20Roll + " | Dexterity Modifier " + cassidyAgustus.dexMod + " | Total: " + (d20Roll + cassidyAgustus.dexMod);
    }
}
cassidyAgustus.stealth = cassidyAgustus.dexMod;
cassidyAgustus.stealth = function (){
    if (cassidyAgustus.proficiencies.indexOf('Stealth') !== -1){
        return "Die roll " + d20Roll + " | Dexterity Modifier " + cassidyAgustus.dexMod + " | Proficiency Bonus " + cassidyAgustus.profBonus + " | Total: " + (d20Roll + cassidyAgustus.dexMod + cassidyAgustus.profBonus);
    } else {
        return "Die roll " + d20Roll + " | Dexterity Modifier " + cassidyAgustus.dexMod + " | Total: " + (d20Roll + cassidyAgustus.dexMod);
    }
}
cassidyAgustus.survival = cassidyAgustus.wisMod;
cassidyAgustus.survivalCheck = function (){
    if (cassidyAgustus.proficiencies.indexOf('Survival') !== -1){
        return "Die roll " + d20Roll + " | Wisdom Modifier " + cassidyAgustus.wisMod + " | Proficiency Bonus " + cassidyAgustus.profBonus + " | Total: " + (d20Roll + cassidyAgustus.wisMod + cassidyAgustus.profBonus);
    } else {
        return "Die roll " + d20Roll + " | Wisdom Modifier " + cassidyAgustus.wisMod + " | Total: " + (d20Roll + cassidyAgustus.wisMod);
    }
}


console.log(cassidyAgustus.athleticsCheck());

// function checkTest() {
//     if (cassidyAgustus.proficiencies.indexOf('Athletics') !== -1){
//         return "Die roll " + d20Roll + " | Strength Modifier " + cassidyAgustus.strMod + + " | Proficiency Bonus " + cassidyAgustus.profBonus + " | Total: " + (d20Roll + cassidyAgustus.strMod);
//     } else {
//         return "Die roll " + d20Roll + " | Strength Modifier " + cassidyAgustus.strMod + " | Total: " + (d20Roll + cassidyAgustus.strMod);
//     }
// }