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

//There are two basic ways to create an empty object
var obj = new Object();
// and ...
var obj = {};
// and ...
function Person(name,city){
    this.name = name;
    this.city = city;
}
// Define an object
var Me = new Person('Nick','Asti');
console.log('Created Object Me : ',Me);
console.log('So I print only Object Person : ', Me.name,Me.city);

// Object JSON
var person = {
    name: 'Nick',
    city: 'Asti'
};
// In this case , object person have two parameters,"name" and "city", with relative value, "Nick" and "Asti".
console.log('Printing parameters and values',person);
console.log('Printing values of the parameters name and city: ',person.name,person.city);

var city = { nameCity: 'Asti'}
var cap = {number: 14100};
console.log(city.nameCity);
console.log(cap.number);

var address = city.nameCity +' '+ cap.number;
console.log(address);

var undefined_Object;
console.log('This variable is undefinied: ',undefined_Object);
