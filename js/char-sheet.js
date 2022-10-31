"use strict";

let dwarf = {};
dwarf.speed = 25;
dwarf.asi = addAbilityScore(conScore, 2);


let charName = {};
    charName.charName = "Cassidy Agustus";
    charName.charRace = dwarf;
    charName.charClass = "Druid";
    charName.proficiencies = ["Medicine", "Perception", "Religion", "Survival", simpleWeapons];
    charName.profBonus = 2;
    charName.strScore = 10;
    charName.strMod = modCalc(charName.strScore);
    charName.dexScore = 12;
    charName.dexMod =  modCalc(charName.dexScore);
    charName.conScore = 14;
    charName.conMod = modCalc(charName.conScore);
    charName.intScore = 14;
    charName.intMod = modCalc(charName.intScore);
    charName.wisScore = 17;
    charName.wisMod = modCalc(charName.wisScore);
    charName.charScore = 8;
    charName.charMod = modCalc(charName.charScore);

    // ability checks WIP - include

    charName.acrobatics = charName.dexMod;
    charName.animalHandling = charName.wisMod;
    charName.arcana = charName.intMod;
    charName.athletics = charName.strMod;
    charName.deception = charName.charMod;
    charName.history = charName.intMod;
    charName.insight = charName.wisMod;
    charName.intimidation = charName.charMod;
    charName.investigation = charName.intMod;
    charName.nature = charName.intMod;
    charName.perception = charName.wisMod;
    charName.performance = charName.charMod;
    charName.persuasion = charName.charMod;
    charName.religion = charName.intMod;
    charName.slightOfHand = charName.dexMod;
    charName.stealth = charName.dexMod;
    charName.survival = charName.wisMod;

console.log(acrobaticsCheck(charName));


