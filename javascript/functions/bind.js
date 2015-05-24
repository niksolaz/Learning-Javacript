// BIND
// Bind take two parameters:
// 1) the context(this)
// 2) a list of arguments for the functions
//
// Bind return the same function with a different context (this)
var myFunc = function myFunc(arg1,arg2){
    console.log("MyBeautifulFunc", arg1,arg2)
    return "hoooray the King!";
};

// Executing myFunc
myFunc("ciao",1234);

// Returing myFunc with a new context. Not executing it.
myFunc.bind(this, "ciao",1234);

var obj = {
    abc: "domenico"
}

// Bind returns a function with a new context
// Return myFunc with 'this' setted to myFunc.
// In this case, it is only returning the function and assigning it to newFunction
var newFunction = myFunc.bind(obj, "ciao",1234);
console.log("newFunction", newFunction);

// Return myFunc with this setted to myFunc :)
var anotherOne = myFunc.bind(myFunc, "ciao",1234);
console.log("anotherOne", anotherOne);

//HERE
// Now, I execute a function and return the value to a variable
var hooray = myFunc.bind(myFunc, "Ciao",7777)(); // <-- notice the last two (). It creating a func and executing it. The result will be assigned to hooray
// This is like calling myFunc("ciao");
console.log(hooray); 


var myHoorayFunc = myFunc.bind(myFunc, "ciao",5364); // Return a new function myFunc with same context e first parameter equals to "ciao"
var hooray = myHoorayFunc(); // Execute this new function and assign the value to the variable hooray
console.log("hooray Nick!!", hooray);


// SetTimeout wants a callback. Two ways:
// First way: Good if your callback does not need parameters
setTimeout(function callback(){
    console.log("Printing after 2 seconds");
}, 2000);

// Second way: if you need parameters
var callback = function callback(arg1){
    console.log("arg1", arg1);
    console.log("Printing after a while...");
}
// Need to use bind
setTimeout(callback.bind(callback, "my argument"), 10000);
