// Object constructor
// Object initialiser or literal
//{ [ nameValuePair1[, nameValuePair2[, ...nameValuePairN] ] ] }

// Called as a constructor
//new Object([value])

var object = {          //creating an object
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
