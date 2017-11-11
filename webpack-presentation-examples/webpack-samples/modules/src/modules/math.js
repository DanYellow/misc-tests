class DYMath {
  factorial(n) {
    if (Number.isNaN(n)) {
      return 0;
    }

    return [...Array(5 + 1).keys()].reduce((sum, val) => {
      if (sum === 0) {
        sum = 1;
      }
      return sum * val;
    });
  }

  static cube(n) {
    return n * n * n;
  }
}

export default new DYMath();
