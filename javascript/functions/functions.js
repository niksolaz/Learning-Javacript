//The Function

//The Function constructor creates a new Function object. In JavaScript every function is actually a Function object.
//Syntax
console.log(" === Syntax Function ===");
console.log(" new Function([arg1[,arg2[, ...argN]],] functionBody);");

//Example can be run directly in your JavaScript console
//Create a function that takes two arguments and returns the sum
console.log("Example of function that takes two arguments and return the sum: ");

var sum = new Function('arg1','arg2','return arg1 + arg2');

//call the function
sum(5,8);

// >13
//show the call of the function
console.log(sum(5,8));

//Defining Functions

/*
A function definition (also called a function declaration, or function statement) consists of the function keyword, 
followed by:

- The name of the function.
- A list of arguments to the function, enclosed in parentheses and separeted by commas.
- The JavaScript statements that define the function, enclosed in curly brackets { }.
*/

//Example:
 function square(number){      // name function is 'square' and argument is number.
     return number * number;  // Defined the function: the square is n * n  
 }
 square(4); // call the function
 console.log(square(4)); // show the call of the function
 
 //Example 2 :
 //function array:
 function myFunc(theObject){  //name function  "myFunc" with arguments "theObject"
     theObject.make = "Fiat";  //defined function 
 }
 
 var myCar = {make:"Ferrari", model:"458",year: 2015}; //Object array "myCar"
 var objNumberOne, objNumberTwo; 
 
 objNumberOne = myCar.make; // get the value "Ferrari"
 
 myFunc(myCar);
 objNumberTwo = myCar.make; // get the value "Fiat"
 
 console.log(objNumberOne,objNumberTwo); //show the calls of the two object 
 console.log(myFunc(myCar)); //undefinied . Function is not defined 
 
 /*
 Note: Assigning a new object to the parameter will not have any effect outside the function, 
 because this is changing the value of the parameter rather than the value of one of the object's properties:
 */
 //Example 2.1:
 function myFunc(theObject){
  theObject = {make:"Fiat", model:"Panda",year:"1979"}; // new object to the parameter
 }
 var myCar = {make:"Ferrari", model:"458",year: 2015};
 var objNumberOne,objNumberTwo;
 
 objNumberOne = myCar.make; // gets the value "Ferrari"
 
 myFunc(myCar);
 objNumberTwo = myCar.make; // still gets the value "Ferrari"
 
 console.log(objNumberOne,objNumberTwo);
 
 //Fuction expressions:
 
 console.log("==== Function Expressions ===");
 console.log("Declaration of the function expression");
 
 var square = function(number){return number * number};
 var x = square(4); // x gets the value 16
 console.log(x);
 
 //Functon espressions are convenient when passing a function as an argument to another function.
 // Example:
 
 function map(f,a){
  var result = [],  //created a new arrary
      i;
  for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);
  return result;
 }
 
 //Function scope
 /*
 Variables defined inside a function cannot be accessed from anywhere outside the function, because the variable is
 defined  only in the scope of the function.
 However, a function can access all variables and functions defined inside the scope in wich it is defined.
 */
 console.log("=== Function Scope ===");
 //The following variables are defined in the global scope.
 var myNumberOne = 13,
     myNumberTwo = 76,
     myNumeberThree = 4,
     myName = "Nick";
     
 //this function defined in the global scope:
 function mySum(){
  return myNumberOne + myNumberTwo + myNumeberThree;
 }
 
 mySum(); // Returns 93
 console.log(mySum()); // call the function in the global scope
 
 // A nested function example regard what i wrote above.
 
 function getSum(){
  var myNumberOne = 2,
      myNumberTwo = 4,
      myNumeberThree = 10;
  function add(){
     return myName + " This is my sum: " + (myNumberOne + myNumberTwo + myNumeberThree);
  }
  return add();
      
 }
 getSum(); // returns "Nick this is my sum: 16"  
 console.log(getSum());