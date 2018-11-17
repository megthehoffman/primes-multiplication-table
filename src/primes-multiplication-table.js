// A program that prints out a multiplication table of the first 10 prime numbers.

/**
 * TODO: 
 * Find first 10 (or n) primes (use sieve of Eratosthenes)
 * Store primes for reference
 * Multiply the primes, only amount of times necessary to display table
 * Display table
 */

// Store first n primes in some data structure, use another function to determine if prime
function storePrimes() {
    /**
     * TESTS
     * n = 10, are all of the primes that are supposed to be here stored here
     * primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
     *
     * What if n = 1? 2? 10? 0? 4762? 8375164?
     */
}

// Determine if a number is prime
function isPrime(number) {
    /**
     * If a number is prime, then it will not have a prime factor > Math.sqrt(number)
     * EX: to find all primes less than 100, every composite integer < 100 will have a prime factor less than Math.sqrt(100) = 10
     * Primes less than 10: 2, 3, 5, 7, so only need to check numbers for divisibility against these 
     * Need to start at 3 (because 1 is not prime and 2 is), and loop through each number to check primality, until we accumulate n primes 
     * EX: to check if 3 is prime, only need to check divisibility by numbers less than Math.floor(Math.sqrt(3)) = 1, if that number is >= 2
     *
     * TESTS
     * Is 1 prime? 2? 3? 13? 541? 105943? 0?
     */

}

// Complete necessary multiplication of primes to fill table
function multiplyPrimes() {

}

// Display table with the values from multiplyPrimes()
function displayTable () {

}
