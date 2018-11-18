let primes = require('../src/primes-multiplication-table.js');

function makePrimesMultTable(n) {
  let primesList = primes.generatePrimesArray(n);
  let multipliedPrimes = primes.multiplyPrimes(primesList);
  primes.displayTable(multipliedPrimes);
  }

// makePrimesMultTable(10);
// makePrimesMultTable(1);
// makePrimesMultTable(0);
// makePrimesMultTable(77);
