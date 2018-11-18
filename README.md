# primes-multiplication-table
Coding challenge for Funding Circle US. This program prints out a multiplication table of the first N prime numbers, where N is an integer and where the first row and column of the table have N primes. When run, main.js executes with an N = 10, as this was the primary goal of the program. However, the program can be used for any N from 0 to very large numbers.

## Usage
`npm i primes-multiplication-table`

`const primes = require('../src/primes-multiplication-table.js');`

`primes.makePrimesMultTable(10);`

See Example Usage below.

## Programming Process
primes-multiplication-table.js contains four separate functions, each of which perform a specific task in the overall purpose of the program. 

* **generatePrimesArray:** Takes in an integer, n, that represents the first N prime numbers desired--calls on the isPrime function to determine if a given number is prime or not
* **isPrime:** Utilizes the theory behind the *sieve of Eratosthenes* (I am a math major, after all) to determine primality
* **multiplyPrimes:** Takes the primes array generated by generatePrimesArray as a parameter and multiplies each item in the array by the other items in the array to produce an array of arrays, each of which represents a row in the eventual multiplication table
* **displayTable:** Takes the array of arrays as a parameter and prints each array (row) of the multiplication table with the appropriate spacing

The AirBnb JavaScript [style guide](https://github.com/airbnb/javascript/blob/master/README.md) was used to direct the styling of the program. 

## Runtime Complexity
The real time of execution for the program when N = 10 and when N = 1001 are as follows:

**N = 10**
`real	0m0.095s`
`user	0m0.071s`
`sys	0m0.021s`

**N = 1001**
`real	0m0.849s`
`user	0m0.557s`
`sys	0m0.138s`

* **generatePrimesArray** and **isPrime:** The overall runtime of generatePrimesArray, which within it calls isPrime, is O(n + m^(3/2)), where n is the number of primes to accumulate, and m is the number of composite numbers that are checked in order to accumulate those n primes. Because all composite integers have at least one prime factor, none of which exceed sqrt(n + m), the runtime for isPrime as a standalone function is O(sqrt(n + m)), so the runtime for generatePrimesArray as an standalone function is O(n + m). The cost of pushing primes to the array is an amortized cost of O(1). It's possible that this runtime could be improved by passing in the already accumulated primes each time a new number is passed to isPrime. Doing so would eliminate the need to re-check all numbers (composite and prime) lower than the sqrt(n), and instead only check against all accumulated primes less than a given number. 

* **multiplyPrimes:** Due to the nested .forEach loops, this function has a runtime of O(n^2), where n still refers to the number of primes in the array generated previously. It is possible that because of the way that multiplication tables are inherently set up, the multiplication process could be cut almost in half, since each number in the first row and first column of a multiplication table is multiplied by each other twice. 

* **displayTable:** For the same reason as multiplyPrimes (nested .forEach loops), displayTable has a runtime complexity of O(n^2). 

## Testing
The program was developed using BDD, via the open source [Jasmine Behavior-Driven JavaScript](https://jasmine.github.io/pages/getting_started.html) testing framework. Jasmine was selected over other commonly utilized options (such as Mocha and Jest) because it is independent of the DOM and other JavaScript frameworks, and comes with all of the necessary basics out of the box. Mocha is extremely versatile, but requires using the assertion library, and Jest is best for large projects, and is often used alongside React.

## Examples Usages

`primes.makePrimesMultTable(10);`

```
       2   3   5   7  11  13  17  19  23  29
   2   4   6  10  14  22  26  34  38  46  58
   3   6   9  15  21  33  39  51  57  69  87
   5  10  15  25  35  55  65  85  95 115 145
   7  14  21  35  49  77  91 119 133 161 203
  11  22  33  55  77 121 143 187 209 253 319
  13  26  39  65  91 143 169 221 247 299 377
  17  34  51  85 119 187 221 289 323 391 493
  19  38  57  95 133 209 247 323 361 437 551
  23  46  69 115 161 253 299 391 437 529 667
  29  58  87 145 203 319 377 493 551 667 841
```

`primes.makePrimesMultTable(0);`

`Oops, you told me you wanted zero primes! So here's a nonexistent table.`


`primes.makePrimesMultTable(1);`

```
   2
 2 4
```

`primes.makePrimesMultTable(22);`

```
         2    3    5    7   11   13   17   19   23   29   31   37   41   43   47   53   59   61   67   71   73   79
    2    4    6   10   14   22   26   34   38   46   58   62   74   82   86   94  106  118  122  134  142  146  158
    3    6    9   15   21   33   39   51   57   69   87   93  111  123  129  141  159  177  183  201  213  219  237
    5   10   15   25   35   55   65   85   95  115  145  155  185  205  215  235  265  295  305  335  355  365  395
    7   14   21   35   49   77   91  119  133  161  203  217  259  287  301  329  371  413  427  469  497  511  553
   11   22   33   55   77  121  143  187  209  253  319  341  407  451  473  517  583  649  671  737  781  803  869
   13   26   39   65   91  143  169  221  247  299  377  403  481  533  559  611  689  767  793  871  923  949 1027
   17   34   51   85  119  187  221  289  323  391  493  527  629  697  731  799  901 1003 1037 1139 1207 1241 1343
   19   38   57   95  133  209  247  323  361  437  551  589  703  779  817  893 1007 1121 1159 1273 1349 1387 1501
   23   46   69  115  161  253  299  391  437  529  667  713  851  943  989 1081 1219 1357 1403 1541 1633 1679 1817
   29   58   87  145  203  319  377  493  551  667  841  899 1073 1189 1247 1363 1537 1711 1769 1943 2059 2117 2291
   31   62   93  155  217  341  403  527  589  713  899  961 1147 1271 1333 1457 1643 1829 1891 2077 2201 2263 2449
   37   74  111  185  259  407  481  629  703  851 1073 1147 1369 1517 1591 1739 1961 2183 2257 2479 2627 2701 2923
   41   82  123  205  287  451  533  697  779  943 1189 1271 1517 1681 1763 1927 2173 2419 2501 2747 2911 2993 3239
   43   86  129  215  301  473  559  731  817  989 1247 1333 1591 1763 1849 2021 2279 2537 2623 2881 3053 3139 3397
   47   94  141  235  329  517  611  799  893 1081 1363 1457 1739 1927 2021 2209 2491 2773 2867 3149 3337 3431 3713
   53  106  159  265  371  583  689  901 1007 1219 1537 1643 1961 2173 2279 2491 2809 3127 3233 3551 3763 3869 4187
   59  118  177  295  413  649  767 1003 1121 1357 1711 1829 2183 2419 2537 2773 3127 3481 3599 3953 4189 4307 4661
   61  122  183  305  427  671  793 1037 1159 1403 1769 1891 2257 2501 2623 2867 3233 3599 3721 4087 4331 4453 4819
   67  134  201  335  469  737  871 1139 1273 1541 1943 2077 2479 2747 2881 3149 3551 3953 4087 4489 4757 4891 5293
   71  142  213  355  497  781  923 1207 1349 1633 2059 2201 2627 2911 3053 3337 3763 4189 4331 4757 5041 5183 5609
   73  146  219  365  511  803  949 1241 1387 1679 2117 2263 2701 2993 3139 3431 3869 4307 4453 4891 5183 5329 5767
   79  158  237  395  553  869 1027 1343 1501 1817 2291 2449 2923 3239 3397 3713 4187 4661 4819 5293 5609 5767 6241
```

For more on the use of `npm`, you can check out the docs [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).
