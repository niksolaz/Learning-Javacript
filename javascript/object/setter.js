//setter methods

console.log("Syntax: ");
console.log("The set syntax binds an object property to a function \n to be called when there is an attempt to set that property.");
console.log("{set prop(val) { ... } }");
console.log("{set [expression](val) { ... } }");

//prop: the name of the property to bind to the given function.
//val: an alias for the variable that holds the value attempted to be assigned to prop.
//expression: starting with ECMAScript 6, you can also use expressions for a computed property name to bind to the given function.
/*
Description
In JavaScript, a setter can be used to execute a function whenever a specified property is attempted to be changed. 
Setters are most often used in conjunction with getters to create a type of pseudo-property. 
It is not possible to simultaneously have a setter on a property that holds an actual value.
- It can have an identifier which is either a number or a string;
- It must have exactly one parameter (see Incompatible ES5 change: 
    literal getter and setter functions must now have exactly zero or one arguments for more information);
- It must not appear in an object literal with another set or with a data entry for the same property.
    ( { set x(v) { }, set x(v) { } } and { x: ..., set x(v) { } } are forbidden )
*/