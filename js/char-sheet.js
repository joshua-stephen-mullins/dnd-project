"use strict";

let cassidyAgustus = {};
    cassidyAgustus.charName = "Cassidy Agustus";
    cassidyAgustus.charRace = "Gnome";
    cassidyAgustus.charClass = "Druid";
    cassidyAgustus.profBonus = 2;
    cassidyAgustus.strScore = 12;
    cassidyAgustus.strMod = 1;
    cassidyAgustus.dexScore = 14;
    cassidyAgustus.dexMod = 2;
    cassidyAgustus.conScore = 16;
    cassidyAgustus.conMod = 3;
    cassidyAgustus.intScore = 11;
    cassidyAgustus.intMod = 10;
    cassidyAgustus.wisScore = 12;
    cassidyAgustus.wisMod = 1;
    cassidyAgustus.charScore = 8;
    cassidyAgustus.charMod = -1;


function d20Roll(){
    return Math.floor(Math.random() * (20 - 1) + 1);
}

function strCheck(char){
    return d20Roll() + char.strMod;
}function dexCheck(char){
    return d20Roll() + char.dexMod;
}function conCheck(char){
    return d20Roll() + char.conMod;
}function intCheck(char){
    return d20Roll() + char.intMod;
}function wisCheck(char){
    return d20Roll() + char.wisMod;
}function charCheck(char){
    let roll = d20Roll()
    return "Die roll | " + roll + " Charisma modifier " + char.charMod + " | Total: " + (roll + char.charMod);
}

console.log(charCheck(cassidyAgustus));