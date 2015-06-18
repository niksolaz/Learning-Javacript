/* Callbacks

*/

var myFunc = function myFunc(arg1, arg2, arg3){
    console.log("==== myFunc =====");
    console.log("arg1:", arg1, " of type:", typeof arg1);
    console.log("arg2:", arg2, " of type:", typeof arg2);
    console.log("arg3:", arg3, " of type:", typeof arg3);

    if( typeof arg3 === 'function' && arg3 ){
        // We will execute this part of code only if:
        // - arg3 is not false, undefined, null or empty string
        // - arg3 is a function ( if arg3 is a function, typeof arg3 will return 'function')
        var random = Math.random();
        var myData = {
            number: random
        };
        var myError = "An error has occurred.";
        var result = arg3(myError, myData); // Execute the function and assign the value to result
        console.log("Result:", result);
        return result;
    }
    console.log("\n\n");
}
myFunc(1, 2, 3); 
myFunc("nick", true, {});
myFunc("nick", undefined, null);
myFunc("nick", 3);
myFunc("nick", true, function(){ 
    return "this is the result from the callback";
});

myFunc("nick", true, function(err, data){
   console.log("===== CALLBACK ====");
   console.log("I am in the callback...");
   console.log("Err: ", err);
   console.log("Data: ", data);
   console.log("I am not returning anything back.");
   console.log("===== END CALLBACK ====");
});

console.log('----------------------------------');

var sum = function(x,y){
    return x + y;
};
console.log('Value var sum = function(x,y){..}:   ',sum);
var Sum = sum(4,6);
console.log('This is result of var Sum = sum(4,6): ',Sum);

var def = function(x,y){
    return x - y;
};
console.log('Value var def = function(x,y){..}:   ',def);
var Def = def(20,4);
console.log('This is result of var Def = def(20,4): ',Def);

console.log('Now i call my callback function: myFuncCallback with 3 parameters ');
console.log('First parameter is a callback that return other 2 parameters');
function myFuncCallback(callback,sub1,sub2){
    if(callback && typeof callback === 'function'){  //ensure it is passed a function
        return callback(sub1,sub2);
    }
};
console.log('this return callback reported at the sum variable:  ',myFuncCallback(sum,15,25),'..with values of 15 and 25');
console.log('this return callback reported at the def variable:  ',myFuncCallback(def,55,25),'..with values of 55 and 25');
console.log('I can change parameters of myFuncCallback , that will run the callback defined');

console.log('----------------------------------');

var num = [11,3,24];
console.log('Element into array now: ',num);

num.forEach(function(val,ind){
    console.log(val);
});

var numX = num.push(100); 
console.log('this is number of element into array num after push(): ',numX);
console.log(num);

function showValue(val,ind){
    console.log(val);
}
var num;  
num.forEach(showValue); // I'm passed name of functiont like callback



