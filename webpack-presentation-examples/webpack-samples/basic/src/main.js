// const factorial = require('./modules/factorial');

import factorial from './modules/factorial';

const input = document.getElementById('factorialy');
const resultContainer = document.getElementById('result');

input.addEventListener('input', (e) => {
    const value = e.currentTarget.value;
    resultContainer.innerHTML = `${factorial(~~value)} possible combinations`;
});
