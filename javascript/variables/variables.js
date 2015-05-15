// Printing Variables
var a = "string";
console.log(a);

var a = 1234;
console.log(a);

var a = "string"+ 1234;
console.log(a);

var a = 4 + 5;
console.log(a);
var a = 5 - 4;
console.log(a);
var a = 4 * 5;
console.log(a);
var a = 5 / 2;
console.log(a);
var a = 5 % 4;
console.log(a);

var a = "1234"+"1234";
console.log(a);
var a = "5"*"4";
console.log(a);
var a = "xx"*"yy";
console.log(a);

var a = 10;
var b = 5;
console.log(a>b,a<b,a==b,a!=b);
console.log(a+b,a*b,a-b,a/b,a%b);

var a = "I am";
var b = " legend";
var c = a + b;
console.log(c);

var name = "Nick", age = 39, country = "Italy";
console.log(name +" "+ age +" "+ country);
console.log("My name is %s and I have %d years and I live in %s",name,age,country);

var x = ['a','b','c','d'];
console.log(x[2]);

var person = {
    name: 'Nick',
    city: 'Asti'
};
console.log(person);
console.log(person.name,person.city);

var city = { nameCity: 'Asti'}
var cap = {number: 14100};
console.log(city.nameCity);
console.log(cap.number);

var address = city.nameCity +' '+ cap.number;
console.log(address);
