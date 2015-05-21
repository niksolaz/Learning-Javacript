//Date

console.log("==== Contructor ====");
//Creates a JavaScript Date instance that represents a single moment in time. 
//Date objects are based on a time value that is the number of milliseconds since 1 January, 1970 UTC.

/*
Contructor

new Date();
new Date(value);
new Date(dateString);
new Date(year,month[,day[,hour[,minutes[,second[,milliseconds]]]]]);
*/

//Example: several ways to create a Date object
var today = new Date();
var birthdayOne = new Date('April 13, 1976 07:30:00');
var birthdayTwo = new Date('1990-05-21T03:47:00');
var birthdayThree = new Date(1982,08,25);
var birthdayFour = new Date(1992,07,06,5,20,0);
console.log(today);
console.log(birthdayOne);
console.log(birthdayTwo);
console.log(birthdayThree);
console.log(birthdayFour);