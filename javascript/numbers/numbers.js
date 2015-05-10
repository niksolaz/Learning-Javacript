// Learning about numbers in Javascript
console.log("Result", 1 + 1);

// Integer number 
var integerNumber = 20;
console.log('This is an integer number',integerNumber);
// Float number
var floatNumber = 20.1;
console.log('This is a float number',floatNumber);
// Double number
var doubleNumber = 20.1233;
console.log('This is a double number',doubleNumber);

//Arithmetic Operations with a integer,float and double numbers
// Addition +
console.log('Addition between integers:',25,'+',20, 'Result: ',25 + 20);
console.log('Addition between floats:',25.5,'+',20.4, 'Result: ',25.5 + 20.4);
console.log('Addition between doubles:',25.51,'+',20.41, 'Result: ',25.51 + 20.41);
console.log('Addition between integer and float:',25,'+',20.1, 'Result: ',25 + 20.1);
console.log('Addition between integer and double:',25,'+',20.123, 'Result: ',25 + 20.123);
console.log('Addition between float and double:',25.1,'+',20.123, 'Result: ',25.1 + 20.123);
// Subtraction -
console.log('Subtraction between integers:',25,'-',20, 'Result: ',25 - 20);
console.log('Subtraction between floats:',25.5,'-',20.4, 'Result: ',25.5 - 20.4);
console.log('Subtraction between doubles:',25.51,'-',20.41, 'Result: ',25.51 - 20.41);
console.log('Subtraction between integer and float:',25,'-',20.1, 'Result: ',25 - 20.1);
console.log('Subtraction between integer and double:',25,'-',20.123, 'Result: ',25 - 20.123);
console.log('Subtraction between float and double:',25.1,'-',20.123, 'Result: ',25.1 - 20.123);
//Multiply *
console.log('Multiply between integers:',5,'*',2, 'Result: ',5 * 2);
console.log('Multiply between floats:',5.5,'*',2.4, 'Result: ',5.5 * 2.4);
console.log('Multiply between doubles:',5.51,'*',2.41, 'Result: ',5.51 * 2.41);
console.log('Multiply between integer and float:',5,'*',2.1, 'Result: ',5 * 2.1);
console.log('Multiply between integer and double:',5,'*',2.123, 'Result: ',5 * 2.123);
console.log('Multiply between float and double:',5.1,'*',2.123, 'Result: ',5.1 * 2.123);

//Modulus /
console.log('Modulus between integers:',5,'/',2, 'Result: ',5 / 2);
console.log('Modulus between floats:',5.5,'/',2.4, 'Result: ',5.5 / 2.4);
console.log('Modulus between doubles:',5.51,'/',2.41, 'Result: ',5.51 / 2.41);
console.log('Modulus between integer and float:',5,'/',2.1, 'Result: ',5 / 2.1);
console.log('Modulus between integer and double:',5,'/',2.123, 'Result: ',5 / 2.123);
console.log('Modulus between float and double:',5.1,'/',2.123, 'Result: ',5.1 / 2.123);
//Remainder %
console.log('Remainder between integers:',5,'%',2, 'Result: ',5 % 2);
console.log('Remainder between floats:',5.5,'%',2.4, 'Result: ',5.5 % 2.4);
console.log('Remainder between doubles:',5.51,'%',2.41, 'Result: ',5.51 % 2.41);
console.log('Remainder between integer and float:',5,'%',2.1, 'Result: ',5 % 2.1);
console.log('Remainder between integer and double:',5,'%',2.123, 'Result: ',5 % 2.123);
console.log('Remainder between float and double:',5.1,'%',2.123, 'Result: ',5.1 % 2.123);

//Built-in parseInt()
console.log("Using parseInt. This convert a string number in a number");
console.log("120 in base 10:", parseInt('120',10)); //decimal base
console.log("120 in base-8:",parseInt('120',8)); // base-8 (octal)
console.log("120 in base-16:",parseInt('120',16)); //hexadecimal base
console.log("120 in base-2:", parseInt('120',2)); //binary base

console.log("Trying to convert a string without digits using parseInt");
console.log("hello is not a number (NaN):",parseInt("hello",10)); // result NaN. NaN is a special value in Javascript that means 'Not a Number'
console.log("Result is NaN because the string is not number",'\n',"NaN is a special value");

console.log("Coverting a string using the unary operator", "+'42'", ' is equal to ', +'42');
console.log("Unary operator converts a string with digits using + in front of the string");
console.log('Result: ' +'42', '42');


/**
 * TODO
 * - parseFloat
 * - NaN
 * - NaN operations
 * - Infinite
*/