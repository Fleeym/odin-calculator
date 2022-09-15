'use strict';

const screen = document.getElementById('screen');
const memoryText = document.getElementById('memory');

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
                memory += Number(x);
                break;
            case '-':
                lastOpperand = '-';
                memory += Number(x);
                break;
            case '*':
                lastOpperand = '*';
                memory += Number(x);
                break;
            case '/':
                lastOpperand = '/';
                memory += Number(x);
                break;
        }
        memoryText.textContent = `${memory} ${lastOpperand}`;
        memoryText.classList.add('active');
        screen.value = '';
        x = '';
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
            memory = 0;
            screen.value = '';
            memoryText.textContent = '';
            memoryText.classList.remove('active');
            break;
        default:
            alert('Something bad happened!');
            break;
    }
}
