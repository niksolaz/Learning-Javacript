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