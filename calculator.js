// calculator.js
const readlineSync = require('readline-sync');

const calculator = {
  a: 0,
  b: 0,
  read: function() {
    this.a = parseFloat(readlineSync.question('Enter the first number: '));
    this.b = parseFloat(readlineSync.question('Enter the second number: '));
  },
  sum: function() {
    return this.a + this.b;
  },
  mul: function() {
    return this.a * this.b;
  }
};

module.exports = calculator;
