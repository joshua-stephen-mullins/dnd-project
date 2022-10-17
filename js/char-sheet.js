"use strict";

let cassidyAgustus = [
    {
        charName: "Cassidy Agustus",
        charRace: "Gnome",
        charClass: "Druid",
        profBonus: 2,
        str: 10,
        dex: 10,
        con: 10,
        int: 10,
        wis: 10,
        char: 10,
    }
]


function strCheck(){
    return Math.random() * (20 - 1) + 1 + cassidyAgustus.str;
}

console.log(strCheck());