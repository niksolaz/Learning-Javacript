// Object constructor
// Object initialiser or literal
//{ [ nameValuePair1[, nameValuePair2[, ...nameValuePairN] ] ] }

// Called as a constructor
//new Object([value])

var object = {          //Creating an object. An object can be one or more parameters.
    one:"pink",       // Object have 3 parameters : one, two , three 
    two:42,
    three: {      //Three have another parameter four
        four:12
        
    },
}
//Accessing properties 
console.log(object.one); //"pink"
console.log(object["two"]); //42
console.log(object.one = "three"); // "three" 
console.log(object.one = object.three); //{four:12}
console.log(object.one = object.three.four); //12

console.log("==========");
// Insert variables into object
var a = "foo", // In this case , we have created three objects a,b,c  
    b = 42,  // These are variables that are to be inserted into an object
    c = {};
var o = {   // We have set parameters a,b,c with value of the parameters var a,b,c
    a:a,    
    b:b,
    c:c
};
var x = {a:12,b:"ala",c:{ a:a,b:b,c:c}}; //parameters first a,b,c are several from c:{a,b,c}
                                         // the property  are different into object x
                                         
console.log(a); // print "foo"
console.log(b); // print 42
console.log(c); // print {}
console.log(o); // print {a: 'foo', b: 42, c: {}}
console.log(x); // print { a: 12, b: 'ala', c: { a: 'foo', b: 42, c: {} } }

console.log("==========");
//Duplicate property names
console.log("Duplicate property names");

var a = {x: 1, x: 2};  //the second property overwrite the first
console.log("var a = {x: 1, x: 2};");
console.log("The second property overwrite the first: ",a); // {x: 2}
/* 
In ECMAScript 5 strict mode code, duplicate property names were considered a SyntaxError.  
With the introduction of computed property names making duplication possible at runtime, 
ECMAScript 6 has removed this restriction.
*/
/*
function haveES6DuplicatePropertySemantics(){
    "use strict";
    try{
        ({prop:1,prop:2});
        //No error thrown, duplicate property names allowed in strict mode
    }catch(e){
        // Error thrown, duplicates prohibited in strict mode
        return false;
    }
}
haveES6DuplicatePropertySemantics()
*/
console.log("==========");
console.log("Methods definitions");
//Methods definitions
//A property of an object can also refer to a function or getter or setter method
//check the files: getter and setter methods in the object directory
/* 
var o ={
    property: function ([parameters]){},
    get property(){},
    set property(value){},
};
*/

//Boolean Object
console.log("==========");
console.log("Boolean Object");
//equivalent to o = new Boolean(true);
var o = new Object(true);
console.log(o);
//equivalent to o = new Boolean(false);
var o = new Object(Boolean());
console.log(o);