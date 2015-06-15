/**
 * Write a JavaScript function which accepts an argument and returns the type.
 * */
 console.log('----Exercises-------');
 console.log('------EX 1--------');
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
 console.log('------EX 2--------');
 function exponentNumber(base,expn){
  return Math.pow(base,expn);
 }
 console.log(exponentNumber(8,2));
 console.log('-----------------------');
 /**
  * Write a JavaScript program to get the first n Fibonacci numbers.
  * Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . 
  * Each subsequent number is the sum of the previous two.
  * */
 console.log('------EX 3--------');
 
 function fibonacci(N){  //inserito parametro N 
  var i;
  var fib = [];
  fib[0] = 0;  
  fib[1] = 1;
  for(i=2; i<=N; i++)   // sostituito i<=10 con i<=N ; prima del cambio la funzione ritornava due volte 55
  {
    fib[i] = fib[i-1] + fib[i-2];
  //  fib.push(fib[i]);           
  }
  //console.log(fib);
  return fib;
 }
 console.log(fibonacci(10)); //valore del parametro N
 /*  
 function iterativeFibonacci(n){
   var i;
   var fibs = [];
   fibs[0] = 0;
   fibs[1] = 1;
      
   for(i=2; i<=n; i++){
     fibs[i] = fibs[i-2] + fibs[i-1];
   }
   return fibs;
 }
 
 function recursiveFibonacci(n){
   if (n===1)   
   {  
     return [0, 1];  
   }   
   else   
   {  
     var s = recursiveFibonacci(n - 1);  
     s.push(s[s.length - 1] + s[s.length - 2]);  
     return s;  
   } 
 
 }
 console.log("Iterative fibonacci:", iterativeFibonacci(10));
 console.log("Recursive fibonacci:", recursiveFibonacci(10));
 */
  console.log('-----------------------');
  /**
   *  Write a JavaScript program to check whether a number is even or not.
   * */
  console.log('------EX 4--------');
  function myNumberEven(number){
   var N = number % 2;
   if(N == 0){
    console.log('EVEN');
   }else{
    console.log('UNEVEN');
   };
  }
  console.log(myNumberEven(44));
  console.log('-----------------------');
   
  /**
   * Write a JavaScript program to compute the sum of an array of integers.
   * Example : var array = [1, 2, 3, 4, 5, 6]
   * Expected Output : 21 
   * */
  console.log('------EX 5--------');
  if(typeof Array.prototype.sum !== 'function'){
   Array.prototype.sum = function(){
    var total = 0;
    for(var i=0; i<this.length; i += 1){
     total += this[i];
    }
    return total;
   };
  }
  function sumArray(){
   var arr = [2,3,4,5,6,10];
   if(typeof arr.sum() === 'number'){
   console.log('The sum of the array is: ',arr.sum());
   }else{
    console.log('An element of the array is not a Number');
   }
  }
  sumArray();
  console.log('-----------------------');
   
  /**
   * Write a JavaScript program to get the integers in range (x, y)
   * Example : range(2, 9)
   * Expected Output : [3, 4, 5, 6, 7, 8]
   * */
   console.log('------EX 6--------');
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
  console.log('------EX 7--------');
  function gcd(a,b){
   if(!b){
    return a;
   }
   return gcd(b, a%b);
  }
  console.log(gcd(3456,234));
  console.log('-----------------------');
  /**
   * Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
   * */
  function prime(N){
   var x = 2;
   var y = N - 1;
   while(x<y){
    x += 1;
    if(N%2==0){
     console.log('Not a number prime');
    }else if((N/N==1)&&(N%N==0)&&(N/x!=1)){
     console.log('Number is prime: %d ',N);
    }
   }
   console.log('Prime N: ',N);//while
  }//function prime
  console.log('Prime: ',prime(11));
  console.log('-----------------------');
  /**
   * Write a JavaScript function that checks whether a passed string is palindrome or not?
   * A palindrome is word, phrase, or sequence that reads the same backward as forward, 
   * e.g., madam or nurses run.
   * */
  console.log('------EX 9--------');
  function palind(str){
   var len = str.length;
   var i;
   for(i=0;i<len;i++){
    if(str[i] !== str[len - 1 - i]){
     console.log('Not Palindrome');
     return false;
    } //if
   }// for
   console.log(' %s is Palindrome',str);
   return true;
  } //function
  console.log('Example 1: ',palind('Madam'.toUpperCase()));
  console.log('Example 2: ',palind('Fox'.toUpperCase()));
  console.log('Example 3: ',palind('MODELLO 1234321 olledom'.toUpperCase()));
  console.log('-----------------------');
  /**
   * Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
   * Example string : 'Web Development Tutorial' 
   * Expected Output : 'Development'
   * */
   console.log('------EX 10--------');
   function longestString(str){
    var nameString = str;
    var regString = /\w[a-z.]+/gi;
    var longString = nameString.match(regString);
    console.log(longString);
   }
   console.log(longestString('Alfa Numeric String'));
   console.log('-----------------------');
   
   