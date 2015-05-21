// operator if..elseif..else
/*
JavaScript has a similar set of control structures to other languages in the C family. 
Conditional statements are supported by if and else; you can chain them together if you like:
*/
console.log("=== If ELSE ===");
var name = "Nick";
if ( name == "Mark"){
    name+= "!";
}else if( name == "Nick"){
    name +="!!";
}else{
    name = "!" + name;
}

console.log(name);

/*
JavaScript has while loops and do-while loops. 
The first is good for basic looping; the second for loops where you wish to ensure that 
the body of the loop is executed at least once:
*/

console.log("=== WHILE ===");
//While being a true condition will execute the instructions contained in the code block
var x = 1;
var i = 1;
while(i <= 5 ){ 
    // do something;
/*
Key requirement in the use of the while statement is that the instructions 
contained in the code block change the condition, otherwise you are likely to run into an infinite loop.
*/
    x = x*i;
    i++;
} 

console.log("=== DO...WHILE ===");

var x = 1;
var i = 1;
do{
    x = x*i;
    i++;
}
while(i <= 5)

/*
JavaScript's for loop is the same as that in C and Java: 
it lets you provide the control information for your loop on a single line.
*/

console.log("=== FOR ===");

var y = 1;
for (var i = 0; i <=5; i++) {
 //will execute 6 times
    i = y * i;
}
console.log(i);

//The switch statement can be used for multiple branches based on a number or string
console.log("=== SWITCH...CASE ===");
/*
The switch reference expression is compared with the expressions of the various houses. 
As soon as you locate a corresponding expression you run the statement block associated with it. 
If there is no match will run the lock associated with the default keyword.
*/

var z = "One";

switch (z.length) {
    case 1:
        // code
        z = z<3;
        console.log("One length is less 3");
        break;
    case 2:
        z = z>3;
        console.log("One length is greater 3");
    
    default:
        // code
        console.log("One length is equal 3");
}


