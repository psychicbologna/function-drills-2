//JediName
'use strict';

function jediName(firstName, lastName) {
    return lastName.slice(0, 3) + firstName.slice(0, 2);
}

//console.log(jediName('Carrie', 'Fisher'));

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

//console.log(beyond(0));

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

//console.log(decode(message));

//How many days in a month

function daysInAMonth(month, leapYear) {
    let days = '';
    switch (month) {
        case 'January':
        case 'March':
        case 'May':
        case 'July':
        case 'August':
        case 'October':
        case 'December':
            days = `${month} has 31 days`;
            break;
        case 'April':
        case 'June':
        case 'September':
        case 'November':
            days = `${month} has 30 days`;
            break;
        case 'February':
            if (leapYear === true) {
                days = `${month} has 29 days`;
            } else {
                days = `${month} has 28 days`;
            }
            break;
            default:
                days = 'Must provide a valid month.';
    }
    return days;
}

console.log(daysInAMonth('February', false));

//Rock Paper Scissors

function rockPaperScissors(number) {
    const randomNo = Math.floor(Math.random() * 3) + 1;
    const rock = 1;
    const paper = 2;
    const scissors = 3;

    const name = ['rock', 'paper', 'scissors'];

    console.log(`You are ${name[number - 1]}, your opponent is ${name[randomNo - 1]}.`)

    if (randomNo === number) {
        console.log(`It's a tie!`);
    } else if (randomNo != number) {
        switch (number) {
            case rock:
                if (randomNo === paper){
                    console.log('You lose!');
                } else if (randomNo === scissors){
                    console.log('You win!')
                }
                break;
            case paper:
                if (randomNo === scissors){
                    console.log('You lose!');
                } else if (randomNo === rock){
                    console.log('You win!')
                }
                break;
            case scissors:
                if (randomNo === rock){
                    console.log('You lose!');
                } else if (randomNo === paper){
                    console.log('You win!')
                }
                break;
        }
    } else {
        throw new Error('Write a number please dude.');
    }
}

try {
    rockPaperScissors(3);
} catch(e) {
    console.log(`${e.name}: ${e.message}`)
}
