"use strict";

let cassidyAgustus = {};
    cassidyAgustus.charName = "Cassidy Agustus";
    cassidyAgustus.charRace = dwarf;
    cassidyAgustus.charClass = "Druid";
    cassidyAgustus.proficiencies = ["Medicine", "Perception", "Religion", "Survival"];
    cassidyAgustus.profBonus = 2;
    cassidyAgustus.strScore = 10;
    cassidyAgustus.strMod = modCalc(cassidyAgustus.strScore);
    cassidyAgustus.dexScore = 12;
    cassidyAgustus.dexMod =  modCalc(cassidyAgustus.dexScore);
    cassidyAgustus.conScore = 14;
    cassidyAgustus.conMod = modCalc(cassidyAgustus.conScore);
    cassidyAgustus.intScore = 14;
    cassidyAgustus.intMod = modCalc(cassidyAgustus.intScore);
    cassidyAgustus.wisScore = 17;
    cassidyAgustus.wisMod = modCalc(cassidyAgustus.wisScore);
    cassidyAgustus.charScore = 8;
    cassidyAgustus.charMod = modCalc(cassidyAgustus.charScore);

    // ability checks WIP - include

    cassidyAgustus.acrobatics = cassidyAgustus.dexMod;
    cassidyAgustus.animalHandling = cassidyAgustus.wisMod;
    cassidyAgustus.arcana = cassidyAgustus.intMod;
    cassidyAgustus.athletics = cassidyAgustus.strMod;
    cassidyAgustus.deception = cassidyAgustus.charMod;
    cassidyAgustus.history = cassidyAgustus.intMod;
    cassidyAgustus.insight = cassidyAgustus.wisMod;
    cassidyAgustus.intimidation = cassidyAgustus.charMod;
    cassidyAgustus.investigation = cassidyAgustus.intMod;
    cassidyAgustus.nature = cassidyAgustus.intMod;
    cassidyAgustus.perception = cassidyAgustus.wisMod;
    cassidyAgustus.performance = cassidyAgustus.charMod;
    cassidyAgustus.persuasion = cassidyAgustus.charMod;
    cassidyAgustus.religion = cassidyAgustus.intMod;
    cassidyAgustus.slightOfHand = cassidyAgustus.dexMod;
    cassidyAgustus.stealth = cassidyAgustus.dexMod;
    cassidyAgustus.survival = cassidyAgustus.wisMod;

console.log(acrobaticsCheck(cassidyAgustus));