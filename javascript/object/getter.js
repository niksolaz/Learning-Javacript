//getter methods

console.log("Syntax: ");
console.log("The get syntax binds an object property \n to a function that will be called when that property is looked up.");
console.log("{get prop() { ... } }");
console.log("{get [expression]() { ... } }");

// prop: The name of the property to bind to the given function.
// expression: Starting with ECMAScript 6, you can also use expressions for a computed property name to bind to the given function.
/*
Description
Sometimes it is desirable to allow access to a property that returns a dynamically computed value, 
or you may want reflect the status of an internal variable without requiring the use of explicit method calls. 
In JavaScript, this can be accomplished with the use of a getter. 
It is not possible to simultaneously have a getter bound to a property and have that property actually hold a value, 
although it is possible to use a getter and a setter in conjunction to create a type of pseudo-property.
- It can have an identifier which is either a number or a string;
-It must have exactly zero parameters 
 (see Incompatible ES5 change: literal getter and setter functions must now have exactly zero or one arguments for more information);
-It must not appear in an object literal with another get or 
 with a data entry for the same property ({ get x() { }, get x() { } } and { x: ..., get x() { } } are forbidden). 
A getter can be removed using the delete operator
*/

console.log("Example");

var log = ['test'];
var obj ={
    get latest(){
        if (log.length == 0) return undefined;
        return log[log.length -1]
    }
}
console.log(obj.latest);

console.log("If you want to remove the getter, you can just delete it: delete obj.latest;");
    
