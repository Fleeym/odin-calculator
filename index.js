'use strict';

const screen = document.getElementById('screen');
const memoryText = document.getElementById('memory');

let addedDecimal = false;
let lastOpperand = '';
let memory = 0;
let x = '';

function inputCharacter(character) {
    if (addedDecimal === true && character === '.') {
        return;
    }

    x += character;
    screen.value = x;

    if (character === '.') {
        addedDecimal = true;
    }
}

function calculate() {
    console.log(x);

    updateMemory();
    lastOpperand = '';
    updateScreen();
}

function operate(operator) {
    if (x === '') {
        return;
    }

    if (lastOpperand === '') {
        lastOpperand = operator;
        memory = Number(x);
    } else {
        updateMemory();
        switch(operator) {
            case '+':
                lastOpperand = '+';
                break;
            case '-':
                lastOpperand = '-';
                break;
            case '*':
                lastOpperand = '*';
                break;
            case '/':
                lastOpperand = '/';
                break;
        }
    }
    updateScreen();
}

function updateMemory() {
    switch (lastOpperand) {
        case '+':
            memory += Number(x);
            break;
        case '-':
            memory -= Number(x);
            break;
        case '*':
            memory *= Number(x);
            break;
        case '/':
            memory /= Number(x);
            break;
    }
    memory = parseFloat(memory).toFixed(2);
}

function backspace() {
    x = x.substring(0, x.length - 1);
    screen.value = x;
}

function updateScreen() {
    if (lastOpperand !== '') {
        memoryText.textContent = `${memory} ${lastOpperand}`;
        memoryText.classList.add('active');
        screen.value = '';
        x = '';
    } else {
        memoryText.textContent = '';
        screen.value = `${memory}`;
        memoryText.classList.remove('active');
        x = memory;
    }
    addedDecimal = false;
}

function reset(type) {
    switch (type) {
        case 'soft':
            x = '';
            screen.value = '';
            addedDecimal = false;
            break;
        case 'hard':
            x = '';
            lastOpperand = '';
            addedDecimal = false;
            memory = 0;
            screen.value = '';
            memoryText.textContent = '';
            memoryText.classList.remove('active');
            break;
        default:
            alert('Something bad happened!');
            break;
    }
    addedDecimal = false;
}

function isFloat(number) {
    return number % 1 === 0
}
