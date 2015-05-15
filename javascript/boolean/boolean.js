// Printing Booleans object 

var x = false;
var y = true;
console.log(x&&y,x&&x,y&&y); // AND
console.log(x||y,x||x,y||y); // OR
console.log(!x,!y); // NOT

console.log(x == y,x == x,y == y); // EQUAL TO
console.log(x!=y, x!=x, y!=y); // NOT EQUAL

var a = 5;
var b = 8;
var c = '3';

console.log(a === 5); // equal value and equal type
console.log(a === '5'); // equal value and equal type

console.log( a!== b); // not equal value and not equal type

console.log(a > b); // greater than
console.log(a < b); // less than
console.log(a >= b); // greater than or equal to
console.log(a <= b); // less than or equal to

console.log('The a == c is not equal, beacuse a is number and c is string. So result: ',a == c);

console.log((a >= b) && (b <= a));

console.log(Boolean(''));
console.log(Boolean(234));


