/**
 * Create a function called myFunc that takes two parameter (arg1 and arg2).
 * The function must print the value of arg and arg2
 * The function must return arg+arg2.
 * 
 * -Execute the function with two arguments
 * -Execute the function with one argument
 * -Execute the function with three arguments
 * */
 function myFunc(arg1,arg2){
     console.log('arg1: ',arg1);
     console.log('arg2: ',arg2);
     var result = arg1 +arg2;
     console.log('Sum of the arg1 + arg2: ',result);
     return result;
 }
 myFunc(10,20);
 myFunc(10);
 myFunc(20,30,40);
 
 /**
 * Create a function that take 3 parameters.
 * - a string
 * - a number
 * - a function
 * check the type of the first two arguments.if they are 'string' AND 'number',
 * execute the function. Otherwise, print a message saying that the arguments are invalid
 * */
 function myFunc(arg1,arg2,arg3){
     console.log('arg1: ',arg1,' type of ',typeof arg1);
     console.log('arg2: ',arg2,' type of ',typeof arg2);
     if((typeof arg1 === 'string')&&(typeof arg2 === 'number')){ 
         console.log('This is a string: ',arg1);
         console.log('This is a number: ',arg2)
         if(typeof arg3 === 'function'){
             var result = arg3();
             console.log(result);
             return result;
         }
     }else{
         console.log('Arguments are invalid!!');
     }
 }
 myFunc('string',1234,function(){
     return 'I am function';
 });
 myFunc(true, 34343, function(){
     return 'I am function'; 
 });
 /**
 * Create a function with two arguments:
 * - boolean
 * - function. The function must print the value of the two arguments
 * 
 * if first argument is a boolean and it is equal to true, then execute the function.
 * 
 * */
 function myFunc(arg1,arg2){
     console.log('=====');
     if((typeof arg1 === 'boolean')&&(arg1 === true)){
         if(typeof arg2 === 'function'){
             var result = arg2(arg1, arg2);
             console.log(result);
             return result;
         }
     }
 }
 myFunc(true,function(first, second){
     console.log('This arg1 is: ',first,'This arg2 is: ',typeof second);
 });
 /**
 * Create a function called myFunc with two arguments
 * - string
 * - a function called myCallback. This function has two parameters:
 *     - err
 *     - data
 *     The function must print the value of err and data
 * 
 * check that the type of the arguments of myFunc are valid (typeof).
 * the if the arguments are invalid. Print this message 'arguments are invalid' and return null.
 * 
 * otherwise:
 *  if the first parameter is equal to 'nicola', execute myCallback with:
 *     - err = null
 *     - data = "Everything was fine. Executing the callback..."
 *  else execute myCallback with:
 *     - err = "Oops. The first argument was invalid".
 *     - data = null
 * */
 console.log('=====|||||=====');
 function myFunc(arg1,arg2){
     if((typeof arg1 === 'string')&&(typeof arg2 === 'function')){
         console.log('valid!');
         if(arg1 === 'nicola'){
             var result = arg2(null,'Everything was fine. Executing the callback...');//<- read the text
             console.log('Equal nicola');
             return result;
         }else{
             result = arg2("Oops. The first argument was invalid",null);
             console.log('Not equal nicola');
             return result;
         }
     }else{
         console.log('arguments are invalid');
         return null;
     }
 }
 myFunc('nicola',function myCallback(err,data) {
     console.log('err: ',err,' data: ',data);
 });
 
 /**
 * Create a function called Recursive with an argument that is a number higher than 0.
 * 
 * The function must print the value of the argument
 * 
 * IF)The function must return the arg if it is is equal to 0, 
 * else)otherwise execute the function Recursive with (arg - 1) + arg
 * 
 * 
 * 
 * 
 * */
 console.log('=====|||||=====');
 function Recursive(arg){
     console.log(arg);
     if(arg > 0){
         return Recursive(arg - 1);
     }else{
         console.log(arg,'I am zero');
         return arg;    
     }                                     
 }
 Recursive(3);
 /**
  *  Create a function called myFunc.
  *  This function should print 'Hello world'.
  * 
  *  - execute this function after 10 seconds. Hint: SetTimeout
  *  - execute this function EVERY 5 seconds. Hint: SetInterval
  * http://www.w3schools.com/js/js_timing.asp dove ho preso info
  * 
  * */
  console.log('||||=====|||||=====|||||');
 
  function myFunc(){
      console.log('Hello World');
  }
  
   setTimeout(function(){
       console.log('After 10 second Hello World');
   },10000);
   setTimeout(myFunc, 10000); // <- reference to the function myFunc. Another way
   
   /*setInterval(function(){
       console.log('Every 5 second')
   },5000);*/
  myFunc();
  /**
   * Create a function called factorial that take a parameter n. n is a number.
   * if n is equal to 0 return 1.
   * otherwise: return n * factorial(n - 1)
   * 
   * */
   function factorial(n){
       if(n === 0){
           return 1;
       }else{
           console.log('Higher Zero: ',n);
           return n * factorial(n - 1);
       }
   }
   factorial(5);
   
   /*
   Another way to write callbacks
   */
   function myCallback(callbackArg){
       console.log("Print something...", callbackArg);
   }
   
   var myRealFunction = function(arg1, callback){
       console.log("arg1", arg1);
       console.log("callback", typeof callback);
       
       setTimeout(callback.bind(callback, "Hooray after 3 secs"), 3000); 
       
   }
   
   // Another way to add the callback during execution time
   myRealFunction("Ciao12321", myCallback); // Just the name of the function.
   
/**
 * Create a function incrementer that take a number as input.
 * The function needs to return a function that take a parameter (value) and
 * the function returns the sum of (input + value);
 * */
 console.log('---------------------');
 function incrementer(input){
    console.log("====== Incrementer =====");
    console.log("Incrementer:", input);
    console.log("Ending the function Incrementer. Still memorizing the input %d inside the internal function.");
    return function sum(value){
        console.log("====== Internal function (sum) ======");
        console.log("Incrementing %d of %d ==> %d", value, input, input+value);
        return value + input;
    }
    
 }
 var my5Incrementer = incrementer(5); // This return the function sum to my5Incrementer. input is 5
 console.log(my5Incrementer(10)); // 15
 console.log(my5Incrementer(2)); //7
 
 var my100Incrementer = incrementer(100);
 console.log(my100Incrementer(40)); // 140
 