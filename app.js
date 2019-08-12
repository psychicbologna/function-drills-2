'use strict'

function jediName(firstName, lastName) {
    return lastName.slice(0, 3) + firstName.slice(0, 2);
}

console.log(jediName('Carrie', 'Fisher'))

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