import factorial, { foo } from './modules/factorial';
import { isPrime } from 'my-module';

const input = document.getElementById('factorialy');
const resultContainer = document.getElementById('result');

console.log('isPrime', isPrime(9))

input.addEventListener('input', (e) => {
    const value = e.currentTarget.value;
    resultContainer.innerHTML = `${factorial(~~value)} possible combinations`;
});
