"use strict";

const generateBtn = document.getElementById('generateBtn');
const result = document.getElementById('result');

const operateRandomArray = () => {
    const numbers = [];
    let sum = 0;
    let average = 0;
    let multi = 1;

    for (let i = 0; i < 10; i++) {
        let number = Math.ceil((Math.random() - Math.random()) * 10);
        numbers.push(number);
    }

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] == -0) {
            numbers[i] = 0;
        }
    }

    const min = Math.min(...numbers);
    const max = Math.max(...numbers);

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];

        if (numbers[i] !== 0) {
            multi *= numbers[i];
        }
    }

    average = (average + sum) / 10;

    result.innerHTML = '';
    result.innerHTML = `Сгенерировано: ${numbers} <br/> Минимальное число: ${min} <br/> Максимальное число: ${max} <br/> Среднее арифметическое чисел: ${average} <br/> Сумма чисел: ${sum} <br/> Произведение чисел: ${multi}`;
};

generateBtn.addEventListener('click', operateRandomArray);