describe("Primes multiplcation table", function() {
  let primes = require('../src/primes-multiplication-table.js');


  describe("isPrime", function() {
    it("determines if a given integer is prime", function() {
      expect(primes.isPrime(0)).toBe(false);
      expect(primes.isPrime(1)).toBe(false);
      expect(primes.isPrime(2)).toBe(true);
      expect(primes.isPrime(3)).toBe(true);
      expect(primes.isPrime(4)).toBe(false);
      expect(primes.isPrime(13)).toBe(true);
      expect(primes.isPrime(99)).toBe(false);
      expect(primes.isPrime(105943)).toBe(true);
    });
  });
});

