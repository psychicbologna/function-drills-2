//JediName
'use strict';

function jediName(firstName, lastName) {
    return lastName.slice(0, 3) + firstName.slice(0, 2);
}

console.log(jediName('Carrie', 'Fisher'));

//To Infinity

function beyond(num) {
    switch (true) {
        case num === Infinity:
            console.log('And beyond');
            break;
        case Number.isFinite(num) && num > 0:
            console.log('To infinity');
            break;
        case Number.isFinite(num) && num < 0:
            console.log('To negative infinity');
            break;
        case num === 0:
            console.log('Staying home');
            break;
        default:
        console.log('All done');
    }
}

console.log(beyond(0));

//Cracking the Code
const message = [
    'craft',
    'block',
    'argon',
    'meter',
    'bells',
    'brown',
    'croon',
    'droop'
];

function decode(secretMessage) {
    let arr = [];
    for (let i = 0; i < secretMessage.length; i++) {
        arr.push(letterCase(secretMessage[i], secretMessage[i][0]));
    }
    return arr;
}

function letterCase(word, firstLetter) {
    let result = '';
    switch (firstLetter) {
        case 'a':
            result = word[1];
        break;
        case 'b':
            result = word[2];
        break;
        case 'c':
            result = word[3];
        break;
        case 'd':
            result = word[4];
        break;
        default:
            result = ' ';
    }
    return result;
}

console.log(decode(message));