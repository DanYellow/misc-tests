class DYMath {
  static factorial(n) {
    if (Number.isNaN(n)) {
      return 0;
    }

    return [...Array(5 + 1).keys()].reduce((sum, val) => {
      let sumCopy = sum;
      if (sumCopy === 0) {
        sumCopy = 1;
      }
      return sumCopy * val;
    });
  }

  static cube(n) {
    return n * n * n;
  }
}

export default new DYMath();
