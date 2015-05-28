/**
 * Write a JavaScript function which accepts an argument and returns the type.
 * */
 console.log('----Exercises-------');
 function typeOfArgument(arg){
   return typeof arg;
 }
 console.log(typeOfArgument("casa"));
 console.log('-----------------------');
/**
 * Write a JavaScript program to compute the exponent of a number. 
   Note : The exponent of a number says how many times the base number is used as a factor.
   82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.
 * */
 
 
 /**
  * Write a JavaScript program to get the first n Fibonacci numbers.
  * Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . 
  * Each subsequent number is the sum of the previous two.
  * */

  var i;
  var fib = [];
  fib[0] = 0;
  fib[1] = 1;
  for(i=2; i<=10; i++)
  {
    fib[i] = fib[i-1] + fib[i-2];
    console.log(fib[i]);
  }
  console.log('-----------------------');
  /**
   *  Write a JavaScript program to check whether a number is even or not.
   * */
   
   
  /**
   * Write a JavaScript program to compute the sum of an array of integers.
   * Example : var array = [1, 2, 3, 4, 5, 6]
   * Expected Output : 21 
   * */
   
   
  /**
   * Write a JavaScript program to get the integers in range (x, y)
   * Example : range(2, 9)
   * Expected Output : [3, 4, 5, 6, 7, 8]
   * */

   function getIntegerRange(arg1,arg2){
       var range = [];
       var x = arg1;
       var y = arg2 - 1;
        while (x < y) {
            x += 1;
            range.push(x);
            console.log(range);
        }
   }
   console.log(getIntegerRange(1,10));
 
  /**
   * Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
   * */
   
  /**
   * Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
   * */
   
  /**
   * Write a JavaScript function that checks whether a passed string is palindrome or not?
   * A palindrome is word, phrase, or sequence that reads the same backward as forward, 
   * e.g., madam or nurses run.
   * */
   
  /**
   * Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
   * Example string : 'Web Development Tutorial' 
   * Expected Output : 'Development'
   * */
   