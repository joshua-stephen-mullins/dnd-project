"use strict";

// function to roll a d20
function d20RollFunction(){
    return Math.floor(Math.random() * (20 - 1) + 1);
}

// variable for the d20 roll function
let d20Roll = d20RollFunction();


// WIP - function for calculating ability modifier when you input the ability score
function modCalc (abilityScore){

}

// function to do checks for primary stats
function strCheck(charName) {
    return `Die roll ${d20Roll} | Strength Modifier ${charName.strMod} | Total: ${d20Roll + charName.strMod}`
}
function dexCheck(charName){
    return `Die roll ${d20Roll} | Dexterity Modifier ${charName.dexMod} | Total: ${d20Roll + charName.dexMod}`
}

function conCheck(charName){
    return "Die roll " + d20Roll + " | Constitution Modifier " + charName.conMod + " | Total: " + (d20Roll + charName.conMod)
}

function intCheck(charName){
    return "Die roll " + d20Roll + " | Intelligence Modifier " + charName.intMod + " | Total: " + (d20Roll + charName.intMod)
}

function wisCheck(charName){
    return "Die roll " + d20Roll + " | Wisdom Modifier " + charName.wisMod + " | Total: " + (d20Roll + charName.wisMod)
}

function charCheck(charName){
    return "Die roll " + d20Roll + " | Charisma Modifier " + charName.charMod + " | Total: " + (d20Roll + charName.charMod)
}

// function for skill checks

function acrobaticsCheck(charName){
    if (charName.proficiencies.indexOf('Acrobatics') !== -1){
        return `Die roll ${d20Roll} | Dexterity Modifier ${charName.dexMod} | Proficiency Bonus ${charName.profBonus} | Total:  ${(d20Roll + charName.dexMod + charName.profBonus)}`;
    } else {
        return `Die roll ${d20Roll} | Dexterity Modifier ${charName.dexMod} | Proficiency Bonus ${charName.profBonus} | Total:  ${(d20Roll + charName.dexMod)}`;
    }
}

function animalHandlingCheck(charName){
    if (charName.proficiencies.indexOf('Animal Handling') !== -1){
        return `Die roll ${d20Roll} | Wisdom Modifier ${charName.wisMod} | Proficiency Bonus ${charName.profBonus} | Total:  ${(d20Roll + charName.wisMod + charName.profBonus)}`;
    } else {
        return `Die roll ${d20Roll} | Wisdom Modifier ${charName.wisMod} | Proficiency Bonus ${charName.profBonus} | Total:  ${(d20Roll + charName.wisMod)}`;
    }
}

function arcanaCheck(charName){
    if (charName.proficiencies.indexOf('Arcana') !== -1){
        return `Die roll ${d20Roll} | Intelligence Modifier ${charName.intMod} | Proficiency Bonus ${charName.profBonus} | Total:  ${(d20Roll + charName.intMod + charName.profBonus)}`;
    } else {
        return `Die roll ${d20Roll} | Intelligence Modifier ${charName.intMod} | Proficiency Bonus ${charName.profBonus} | Total:  ${(d20Roll + charName.intMod)}`;
    }
}

function athleticsCheck(charName){
    if (charName.proficiencies.indexOf('Athletics') !== -1){
        return `Die roll ${d20Roll} | Strength Modifier ${charName.strMod} | Proficiency Bonus ${charName.profBonus} | Total:  ${(d20Roll + charName.strMod + charName.profBonus)}`;
    } else {
        return `Die roll ${d20Roll} | Strength Modifier ${charName.strMod} | Proficiency Bonus ${charName.profBonus} | Total:  ${(d20Roll + charName.strMod)}`;
    }
}

function deceptionCheck(charName){
    if (charName.proficiencies.indexOf('Deception') !== -1){
        return `Die roll ${d20Roll} | Charisma Modifier ${charName.charMod} | Proficiency Bonus ${charName.profBonus} | Total:  ${(d20Roll + charName.charMod + charName.profBonus)}`;
    } else {
        return `Die roll ${d20Roll} | Charisma Modifier ${charName.charMod} | Proficiency Bonus ${charName.profBonus} | Total:  ${(d20Roll + charName.charMod)}`;
    }
}

function historyCheck(charName){
    if (charName.proficiencies.indexOf('History') !== -1){
        return `Die roll ${d20Roll} | Intelligence Modifier ${charName.intMod} | Proficiency Bonus ${charName.profBonus} | Total:  ${(d20Roll + charName.intMod + charName.profBonus)}`;
    } else {
        return `Die roll ${d20Roll} | Intelligence Modifier ${charName.intMod} | Proficiency Bonus ${charName.profBonus} | Total:  ${(d20Roll + charName.intMod)}`;
    }
}

function insightCheck(charName){
    if (charName.proficiencies.indexOf('Insight') !== -1){
        return `Die roll ${d20Roll} | Wisdom Modifier ${charName.wisMod} | Proficiency Bonus ${charName.profBonus} | Total:  ${(d20Roll + charName.wisMod + charName.profBonus)}`;
    } else {
        return `Die roll ${d20Roll} | Wisdom Modifier ${charName.wisMod} | Proficiency Bonus ${charName.profBonus} | Total:  ${(d20Roll + charName.wisMod)}`;
    }
}





let cassidyAgustus = {};
    cassidyAgustus.charName = "Cassidy Agustus";
    cassidyAgustus.charRace = "Gnome";
    cassidyAgustus.charClass = "Druid";
    cassidyAgustus.proficiencies = ["Medicine", "Perception", "Religion", "Survival"];
    cassidyAgustus.profBonus = 2;
    cassidyAgustus.strScore = 10;
    cassidyAgustus.strMod = 0;
    cassidyAgustus.dexScore = 12;
    cassidyAgustus.dexMod = 1;
    cassidyAgustus.conScore = 14;
    cassidyAgustus.conMod = 2;
    cassidyAgustus.intScore = 14;
    cassidyAgustus.intMod = 2;
    cassidyAgustus.wisScore = 17;
    cassidyAgustus.wisMod = 3;
    cassidyAgustus.charScore = 8;
    cassidyAgustus.charMod = -1;

cassidyAgustus.acrobatics = cassidyAgustus.dexMod;
cassidyAgustus.animalHandling = cassidyAgustus.wisMod;
cassidyAgustus.arcana = cassidyAgustus.intMod;
cassidyAgustus.athletics = cassidyAgustus.strMod;
cassidyAgustus.deception = cassidyAgustus.charMod;
cassidyAgustus.history = cassidyAgustus.intMod;
cassidyAgustus.insight = cassidyAgustus.wisMod;
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


console.log(acrobaticsCheck(cassidyAgustus));