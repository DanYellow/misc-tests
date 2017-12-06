function factorial (n) {
    if(isNaN(n)) {
        return 0;
    }

    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

export default factorial;

export const foo = "bar"