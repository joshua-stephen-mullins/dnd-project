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
    proficiencies: ["Medicine", "Perception", "Religion", "Survival", "Athletics"],
    profBonus: 2,
    strScore: 10,
    strMod: 0,
    strCheck: function (){
        return "Die roll " + d20Roll + " | Strength Modifier " + cassidyAgustus.strMod + " | Total: " + (d20Roll + cassidyAgustus.strMod)},
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
cassidyAgustus.arcana = cassidyAgustus.intMod;
cassidyAgustus.athletics = cassidyAgustus.strMod;
cassidyAgustus.athleticsCheck = function (){
    if (cassidyAgustus.proficiencies.indexOf('Athletics') !== -1){
        return "Die roll " + d20Roll + " | Strength Modifier " + cassidyAgustus.strMod + " | Proficiency Bonus " + cassidyAgustus.profBonus + " | Total: " + (d20Roll + cassidyAgustus.strMod + cassidyAgustus.profBonus);
    } else {
        return "Die roll " + d20Roll + " | Strength Modifier " + cassidyAgustus.strMod + " | Total: " + (d20Roll + cassidyAgustus.strMod);
    }
};
cassidyAgustus.deception = cassidyAgustus.charMod;
cassidyAgustus.history = cassidyAgustus.intMod;
cassidyAgustus.insight = cassidyAgustus.wisMod;
cassidyAgustus.intimidation = cassidyAgustus.charMod;
cassidyAgustus.investigation = cassidyAgustus.intMod;
cassidyAgustus.medicine = cassidyAgustus.wisMod;
cassidyAgustus.nature = cassidyAgustus.intMod;
cassidyAgustus.perception = cassidyAgustus.wisMod;
cassidyAgustus.performance = cassidyAgustus.charMod;
cassidyAgustus.persuasion = cassidyAgustus.charMod;
cassidyAgustus.religion = cassidyAgustus.intMod;
cassidyAgustus.slightOfHand = cassidyAgustus.dexMod;
cassidyAgustus.stealth = cassidyAgustus.dexMod;
cassidyAgustus.survival = cassidyAgustus.wisMod;


console.log(cassidyAgustus.athleticsCheck());

// function checkTest() {
//     if (cassidyAgustus.proficiencies.indexOf('Athletics') !== -1){
//         return "Die roll " + d20Roll + " | Strength Modifier " + cassidyAgustus.strMod + + " | Proficiency Bonus " + cassidyAgustus.profBonus + " | Total: " + (d20Roll + cassidyAgustus.strMod);
//     } else {
//         return "Die roll " + d20Roll + " | Strength Modifier " + cassidyAgustus.strMod + " | Total: " + (d20Roll + cassidyAgustus.strMod);
//     }
// }