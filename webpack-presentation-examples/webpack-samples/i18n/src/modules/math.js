const factorial = (n) => {
    if(isNaN(n)) {
        return 0;
    }

    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

const cube = (n) => {
    if(isNaN(n)) {
        return 0;
    }

    return n * n * n;
}

module.exports = {
    factorial,
    cube
}