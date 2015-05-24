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