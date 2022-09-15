'use strict';

const screen = document.getElementById('screen');

let lastOpperand = '';
let memory = 0;
let x = '';

function inputCharacter(character) {
    if (character === '.') {
        // logic for floating point
    } else {
        x += character;
        screen.value = x;
    }
}

function calculate() {}

function operate(operator) {
    if (x === '') {
        return;
    }
    if (lastOpperand === '') {
        switch (operator) {
            case '+':
                lastOpperand = '+';
                memory += x;
                break;
            case '-':
                lastOpperand = '-';
                memory += x;
                break;
            case '*':
                lastOpperand = '*';
                memory += x;
                break;
            case '/':
                lastOpperand = '/';
                memory += x;
                break;
        }
        screen.value = '';
        console.log('current memory', memory);
    }
}

function reset(type) {
    switch (type) {
        case 'soft':
            x = '';
            screen.value = '';
            break;
        case 'hard':
            x = '';
            lastOpperand = '';
            screen.value = '';
            break;
        default:
            alert('Something bad happened!');
            break;
    }
}
