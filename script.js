'use strict';

const forSchleife = document.querySelector('#forschleife');
const whileSchleife = document.querySelector('#whileschleife');
const doWhileSchleife = document.querySelector('#dowhileschleife');


// For-Schleife

let ausgabe = 150;
const anzahlAusgabe = 15;

for (let i = 1; i <= anzahlAusgabe; i++) {
    if ((i - 1) % 2 === 0) {
        document.querySelector('#forschleife').innerHTML += '<span class="violet">' + ausgabe + '</span><br />';
    } else {
        document.querySelector('#forschleife').innerHTML += ausgabe + '<br />';
    }
    ausgabe -= 21;
    document.querySelector('#forschleife').innerHTML += ausgabe + '<br />';
    ausgabe += 2;
}

// While-Schleife

let a = 1;
let ausgabe2 = 150;

while (a <= 15) {
    if ((a - 1) % 2 === 0) {
        document.querySelector('#whileschleife').innerHTML += '<span class="violet">' + ausgabe2 + '</span><br />';
    } else {
        document.querySelector('#whileschleife').innerHTML += ausgabe2 + '<br />';
    }
    ausgabe2 -= 21;
    document.querySelector('#whileschleife').innerHTML += ausgabe2 + '<br />';
    ausgabe2 += 2;
    a++;
}

// Do-While-Schleife

let b = 1;
let ausgabe3 = 150;

do {
    if ((b - 1) % 2 === 0) {
        document.querySelector('#dowhileschleife').innerHTML += '<span class="violet">' + ausgabe3 + '</span><br />';
    } else {
        document.querySelector('#dowhileschleife').innerHTML += ausgabe3 + '<br />';
    }
    ausgabe3 -= 21;
    document.querySelector('#dowhileschleife').innerHTML += ausgabe3 + '<br />';
    ausgabe3 += 2;
    b++;
} while (b <= 15);