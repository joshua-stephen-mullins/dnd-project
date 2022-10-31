"use strict";

// function to roll a d20
function d20RollFunction(){
    return Math.floor(Math.random() * (20 - 1) + 1);
}

// variable for the d20 roll function
let d20Roll = d20RollFunction();

// function for calculating ability modifier when you input the ability score
function modCalc(abilityScore){
    return Math.floor((abilityScore - 10) / 2);
}

// WIP - function to check if proficient
function isProficient(charName, checkName) {
    if (charName.proficiencies.indexOf('checkName') !== -1) {
        return charName.profBonus
    }
}

// function to reassign ability scores
function addAbilityScore(abilityScore, amount){
    return charName.push(charName.abilityScore = charName.abilityScore + amount);
}

//

//<editor-fold desc="Ability Check Functions">
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
//</editor-fold>

// function for skill checks

//<editor-fold desc="Skill Check Functions">
function acrobaticsCheck(charName){
    if (charName.proficiencies.indexOf('Acrobatics') !== -1){
        return `Die roll ${d20Roll} | Dexterity Modifier ${charName.dexMod} | Proficiency Bonus ${charName.profBonus} | Total:  ${(d20Roll + charName.dexMod + charName.profBonus)}`;
    } else {
        return `Die roll ${d20Roll} | Dexterity Modifier ${charName.dexMod} | Total:  ${(d20Roll + charName.dexMod)}`;
    }
}

function animalHandlingCheck(charName){
    if (charName.proficiencies.indexOf('Animal Handling') !== -1){
        return `Die roll ${d20Roll} | Wisdom Modifier ${charName.wisMod} | Proficiency Bonus ${charName.profBonus} | Total:  ${(d20Roll + charName.wisMod + charName.profBonus)}`;
    } else {
        return `Die roll ${d20Roll} | Wisdom Modifier ${charName.wisMod} | Total:  ${(d20Roll + charName.wisMod)}`;
    }
}

function arcanaCheck(charName){
    if (charName.proficiencies.indexOf('Arcana') !== -1){
        return `Die roll ${d20Roll} | Intelligence Modifier ${charName.intMod} | Proficiency Bonus ${charName.profBonus} | Total:  ${(d20Roll + charName.intMod + charName.profBonus)}`;
    } else {
        return `Die roll ${d20Roll} | Intelligence Modifier ${charName.intMod} | Total:  ${(d20Roll + charName.intMod)}`;
    }
}

function athleticsCheck(charName){
    if (charName.proficiencies.indexOf('Athletics') !== -1){
        return `Die roll ${d20Roll} | Strength Modifier ${charName.strMod} | Proficiency Bonus ${charName.profBonus} | Total:  ${(d20Roll + charName.strMod + charName.profBonus)}`;
    } else {
        return `Die roll ${d20Roll} | Strength Modifier ${charName.strMod} | Total:  ${(d20Roll + charName.strMod)}`;
    }
}

function deceptionCheck(charName){
    if (charName.proficiencies.indexOf('Deception') !== -1){
        return `Die roll ${d20Roll} | Charisma Modifier ${charName.charMod} | Total:  ${(d20Roll + charName.charMod + charName.profBonus)}`;
    } else {
        return `Die roll ${d20Roll} | Charisma Modifier ${charName.charMod} | Total:  ${(d20Roll + charName.charMod)}`;
    }
}

function historyCheck(charName){
    if (charName.proficiencies.indexOf('History') !== -1){
        return `Die roll ${d20Roll} | Intelligence Modifier ${charName.intMod} | Proficiency Bonus ${charName.profBonus} | Total:  ${(d20Roll + charName.intMod + charName.profBonus)}`;
    } else {
        return `Die roll ${d20Roll} | Intelligence Modifier ${charName.intMod} | Total:  ${(d20Roll + charName.intMod)}`;
    }
}

function insightCheck(charName){
    if (charName.proficiencies.indexOf('Insight') !== -1){
        return `Die roll ${d20Roll} | Wisdom Modifier ${charName.wisMod} | Proficiency Bonus ${charName.profBonus} | Total:  ${(d20Roll + charName.wisMod + charName.profBonus)}`;
    } else {
        return `Die roll ${d20Roll} | Wisdom Modifier ${charName.wisMod} | Total:  ${(d20Roll + charName.wisMod)}`;
    }
}

function intimidationCheck(charName){
    if (charName.proficiencies.indexOf('Intimidation') !== -1){
        return `Die roll ${d20Roll} | Charisma Modifier ${charName.charMod} | Proficiency Bonus ${charName.profBonus} | Total:  ${(d20Roll + charName.charMod + charName.profBonus)}`;
    } else {
        return `Die roll ${d20Roll} | Charisma Modifier ${charName.charMod} | Total:  ${(d20Roll + charName.charMod)}`;
    }
}

function investigationCheck(charName){
    if (charName.proficiencies.indexOf('Investigation') !== -1){
        return `Die roll ${d20Roll} | Intelligence Modifier ${charName.intMod} | Proficiency Bonus ${charName.profBonus} | Total:  ${(d20Roll + charName.intMod + charName.profBonus)}`;
    } else {
        return `Die roll ${d20Roll} | Intelligence Modifier ${charName.intMod} | Total:  ${(d20Roll + charName.intMod)}`;
    }
}

function medicineCheck(charName){
    if (charName.proficiencies.indexOf('Medicine') !== -1){
        return `Die roll ${d20Roll} | Wisdom Modifier ${charName.wisMod} | Proficiency Bonus ${charName.profBonus} | Total:  ${(d20Roll + charName.wisMod + charName.profBonus)}`;
    } else {
        return `Die roll ${d20Roll} | Wisdom Modifier ${charName.wisMod} | Total:  ${(d20Roll + charName.wisMod)}`;
    }
}

function natureCheck(){
    if (charName.proficiencies.indexOf('Nature') !== -1){
        return `Die roll ${d20Roll} | Intelligence Modifier ${charName.intMod} | Proficiency Bonus ${charName.profBonus} | Total:  ${(d20Roll + charName.intMod + charName.profBonus)}`;
    } else {
        return `Die roll ${d20Roll} | Intelligence Modifier ${charName.intMod} | Total:  ${(d20Roll + charName.intMod)}`;
    }
}

function perceptionCheck(){
    if (charName.proficiencies.indexOf('Perception') !== -1){
        return `Die roll ${d20Roll} | Wisdom Modifier ${charName.wisMod} | Proficiency Bonus ${charName.profBonus} | Total:  ${(d20Roll + charName.wisMod + charName.profBonus)}`;
    } else {
        return `Die roll ${d20Roll} | Wisdom Modifier ${charName.wisMod} | Total:  ${(d20Roll + charName.wisMod)}`;
    }
}

function performanceCheck(charName){
    if (charName.proficiencies.indexOf('Performance') !== -1){
        return `Die roll ${d20Roll} | Charisma Modifier ${charName.charMod} | Proficiency Bonus ${charName.profBonus} | Total:  ${(d20Roll + charName.charMod + charName.profBonus)}`;
    } else {
        return `Die roll ${d20Roll} | Charisma Modifier ${charName.charMod} | Total:  ${(d20Roll + charName.charMod)}`;
    }
}

function persuasionCheck(charName){
    if (charName.proficiencies.indexOf('Persuasion') !== -1){
        return `Die roll ${d20Roll} | Charisma Modifier ${charName.charMod} | Proficiency Bonus ${charName.profBonus} | Total:  ${(d20Roll + charName.charMod + charName.profBonus)}`;
    } else {
        return `Die roll ${d20Roll} | Charisma Modifier ${charName.charMod} | Total:  ${(d20Roll + charName.charMod)}`;
    }
}

function religionCheck(charName){
    if (charName.proficiencies.indexOf('Religion') !== -1){
        return `Die roll ${d20Roll} | Intelligence Modifier ${charName.intMod} | Proficiency Bonus ${charName.profBonus} | Total:  ${(d20Roll + charName.intMod + charName.profBonus)}`;
    } else {
        return `Die roll ${d20Roll} | Intelligence Modifier ${charName.intMod} | Total:  ${(d20Roll + charName.intMod)}`;
    }
}

function slightOfHandCheck(charName){
    if (charName.proficiencies.indexOf('Sleight of Hand') !== -1){
        return `Die roll ${d20Roll} | Dexterity Modifier ${charName.dexMod} | Proficiency Bonus ${charName.profBonus} | Total:  ${(d20Roll + charName.dexMod + charName.profBonus)}`;
    } else {
        return `Die roll ${d20Roll} | Dexterity Modifier ${charName.dexMod} | Total:  ${(d20Roll + charName.dexMod)}`;
    }
}

function stealth(charName){
    if (charName.proficiencies.indexOf('Stealth') !== -1){
        return `Die roll ${d20Roll} | Dexterity Modifier ${charName.dexMod} | Proficiency Bonus ${charName.profBonus} | Total:  ${(d20Roll + charName.dexMod + charName.profBonus)}`;
    } else {
        return `Die roll ${d20Roll} | Dexterity Modifier ${charName.dexMod} | Total:  ${(d20Roll + charName.dexMod)}`;
    }
}

function survivalCheck(charName){
    if (charName.proficiencies.indexOf('Survival') !== -1){
        return `Die roll ${d20Roll} | Wisdom Modifier ${charName.wisMod} | Proficiency Bonus ${charName.profBonus} | Total:  ${(d20Roll + charName.wisMod + charName.profBonus)}`;
    } else {
        return `Die roll ${d20Roll} | Wisdom Modifier ${charName.wisMod} | Total:  ${(d20Roll + charName.wisMod)}`;
    }
}
//</editor-fold>

// weapon attacks

function daggerAttack(charName){
    if (charName.proficiencies.indexOf(simpleWeapons) !== -1){
        return `Die roll ${d20Roll} | Dexterity Modifier ${charName.dexMod} | Proficiency Bonus ${charName.profBonus} | Total:  ${(d20Roll + charName.dexMod + charName.profBonus)}`;
    } else {
        return `Die roll ${d20Roll} | Dexterity Modifier ${charName.dexMod} | Total:  ${(d20Roll + charName.dexMod)}`;
    }
}