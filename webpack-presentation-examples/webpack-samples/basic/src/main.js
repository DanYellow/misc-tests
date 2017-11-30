import factorial, { foo } from './modules/factorial';
console.log('foo', foo);

const input = document.getElementById('factorialy');
const resultContainer = document.getElementById('result');

input.addEventListener('input', (e) => {
    const value = e.currentTarget.value;
    resultContainer.innerHTML = `${factorial(~~value)} possible combinations`;
});
