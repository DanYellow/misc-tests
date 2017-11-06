const DYMath = require('./modules/math');

const input = document.getElementById('factorialy');
const resultContainer = document.getElementById('result');

input.addEventListener('input', (e) => {
    const value = e.currentTarget.value;
    let computedValue = DYMath.cube(value);
    if(process.env.NODE_ENV === 'development') {
        computedValue = DYMath.factorial(value); 
    }
    resultContainer.innerHTML = `${~~computedValue} possible combinations`;
});
