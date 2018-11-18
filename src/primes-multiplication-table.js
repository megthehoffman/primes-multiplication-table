// A program that prints out a multiplication table of the first 10 prime numbers.

/**
 * TODO: 
 * Find first 10 (or n) primes (use sieve of Eratosthenes)
 * Store primes for reference
 * Multiply the primes, only amount of times necessary to display table
 * Display table
 */

module.exports = {

  // Store first n primes in some data structure, use another function to determine if prime
  generatePrimesList: function(n) {
    /**
     * TESTS
     * n = 10, are all of the primes that are supposed to be here stored here
     * primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
     *
     * What if n = 1? 2? 10? 0? 4762? 8375164?
     */
  },

  // Determine if a number is prime, called by generatePrimesList
  isPrime: function(number) {
    if (number <= 1) {
      return false;
    }
    
    const numberSqrt = Math.floor(Math.sqrt(number));
    let i = 2;
    while (i <= numberSqrt) {
      if (number % i === 0) {
        return false;
      }
      i += 1;
    }

    return true;
  },

  // Complete necessary multiplication of primes to fill table
  multiplyPrimes: function() {

  },

  // Display table with the values from multiplyPrimes()
  displayTable: function() {

  },

}
