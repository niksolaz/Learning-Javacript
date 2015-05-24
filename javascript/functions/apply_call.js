
var name = "Nicola";
var age = 39;

var myFunc = function myFunc(param1, param2){
    console.log("I am %s and I have %d years old", this.name, this.age);
    console.log("Param1:", param1);
    console.log("Param2:", param2);
}

myFunc("casa", 42);
// This is the same. 
// First parameter is 'this'. If this is null, it is implicitly set at runtime.
// the second parameter is an array containing all the parameter values of the function
myFunc.apply(null, ["casa", 42]); //<- this is the global scope.

console.log("\n\n");
console.log("==== APPLY ====");
var newObj = {
    name: "Domenico",
    age: 33
};

myFunc.apply(newObj, ["casa", 42]); //<- this is myObj


// Another example
var anotherObj = {
    name: 'David',
    age: 23,
    myFunc: myFunc
}

anotherObj.myFunc("casa", 42); //<-- this is anotherObj
anotherObj.myFunc.apply(newObj, ["casa", 42]); // <--- this is newObj

// ==== CALL =====
// Call is equal to apply with the only difference that it takes a list of parameters
// instead of an array of parameters as Apply does.
console.log("====== CALL ======");
anotherObj.myFunc.call(newObj, "casa", 42);



// Another example
console.log("\n\n");
console.log("==== ANOTHER EXAMPLE FOR APPLY ====");

var person = {
   firstname: "Domenico",
   city: "Oslo",
   country: "Norway",
   printMe: function(){
       console.log("I am %s and I live in %s, %s", this.firstname, this.city, this.country);
   }
};

person.printMe()

// Person2 does not have printMe.
var person2 = {
   firstname: "Nicola",
   city: "Asti",
   country: "Asti"
};

// Now, this is the global context..
person.printMe.apply(person2, []);// Empty array because printMe does not take any parameter

var person3 = {
    firstname:"David",
    city: "Havana",
    printMe: function(){
        console.log("I am %s and I live in %s", this.firstname, this.city);
    }
}

person3.printMe();

var person4 = {
    firstname:"Silvio",
    city: "Milano",
    country: "Italy"
}
person3.printMe.apply(person4,[]);
person.printMe.apply(person4,[]);