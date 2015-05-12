// Learning about strings in javascript
console.log('I am a String');
console.log('This numeber is a string 12345');
console.log("This returns the length of HelloWorld ('HelloWorld.length'):",'HelloWorld'.length);
console.log("Helloworld".charAt(5));
console.log('I am Jessi White'.replace('Jessi','Walter'));
console.log('helloworld'.toUpperCase());
console.log('HELLOWORLD'.toLowerCase());
console.log('HELLO WORLD'.replace('WORLD','WALTER').toLowerCase());
console.log('HELLO WORLD'.replace('WORLD','WALTER').toUpperCase());
console.log('HELLO WORLD'.charAt(6).toLowerCase());
console.log('Walter White'.charAt(8).toUpperCase());

// Methods of the strings
var a = 'Me too are a string'; // return a string : Me too are a string
console.log(a);

var a = "I am a string";
console.log(a.indexOf('am')); // return 2

var a = "I am a string";
console.log(a.search('am')); // return 2

var a = "I am a string";
console.log(a.slice(0,10)); // extracting string parts, slice(from,to)
var a = "I am a string";
console.log(a.slice(-9,-1));
var a = "I am a string";
console.log(a.slice(9));
var a = "I am a string";
console.log(a.slice(-6));

var a = "I am a string";
console.log(a.substring(3,11)); //substring(from,to)

var a = "I am a string";
console.log(a.substr(7,6)); //substr(from,length)

//concatenating strings
var a = "Hello"; 
var b = "World";
var c = a.concat(" ",b);
console.log(a);
console.log(b);
console.log(c);

var a = "hello"+" "+"World";
var b = "hello".concat(" ","world");
console.log(a);
console.log(b);
