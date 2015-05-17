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

var a = "foo", // In this case , we have created three objects a,b,c  
    b = 42,
    c = {};
var o = {   // We have set parameters a,b,c with value of the parameters var a,b,c
    a:a,
    b:b,
    c:c
};
var x = {a:12,b:"ala",c:{ a:a,b:b,c:c}}; //parameters first a,b,c are several from c:{a,b,c}

console.log(a); // print "foo"
console.log(b); // print 42
console.log(c); // print {}
console.log(o); // print {a: 'foo', b: 42, c: {}}
console.log(x); // print { a: 12, b: 'ala', c: { a: 'foo', b: 42, c: {} } }