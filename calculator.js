const readlineSync = require('readline-sync');

const calculator = {
  a: 0,
  b: 0,
  read() {
    this.a = parseFloat(readlineSync.question('Enter the first number: '));
    this.b = parseFloat(readlineSync.question('Enter the second number: '));
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

module.exports = calculator;
