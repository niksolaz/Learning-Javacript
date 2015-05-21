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
var x = 10;
var i = 1;
while(i == x){ 
    // do something;
/*
Key requirement in the use of the while statement is that the instructions 
contained in the code block change the condition, otherwise you are likely to run into an infinite loop.
*/
    i += 1;
    return(i);
} 


