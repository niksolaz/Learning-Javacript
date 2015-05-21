// operator if..elseif..else
/*
JavaScript has a similar set of control structures to other languages in the C family. 
Conditional statements are supported by if and else; you can chain them together if you like:
*/

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