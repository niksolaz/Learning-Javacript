// Printing Variables

var a = "string";
console.log("String", a);

var a = 1234;
console.log("Number", a); 

var a = "string" + 1234;
console.log(a);

var a = 4 + 5;  // somma due interi e assegna il valore dell'espressione alla variabile a   
console.log(a);

var a = 5 - 4; 
console.log(a);

var a = 4 * 5;
console.log(a);

var a = 5 / 2;
console.log(a);

var a = 5 % 4;
console.log(a);

var a = "1234"+"1234"; //qui concatena due valori stringhe ed assegna un valore alla variabile a
console.log(a);
var a = (+"1234") + (+"1");
console.log("Value", a); // 1235

var a = "5"*"4";
console.log("'5' * '4' :", a); // 20

var a = "xx" * "yy";
console.log("'xx' * 'yy' :", a); //NaN

var a = 10;
var b = 5;
console.log("Operations:",a>b, a<b, a==b, a!=b);// true,false,false,true 
console.log("Operations:",a+b, a*b, a-b, a/b, a%b); // 15, 50, 5, 2, 0

var a = "I am";
var b = " legend";
var c = a + b;
console.log("Result: ", c);

var name = "Nick", 
    age = 39, 
    country = "Italy";
console.log("My name is " + name +" and I have "+ age +" years and I live in "+ country);
console.log("My name is %s and I have %d years and I live in %s",name,age,country);

var x = ['a','b','c','d'];
console.log("Result:", x[2]); // 'c'

//There are two basic ways to create an empty object
var obj = new Object(); // new Object() => create a new instance of Object; then, it assign the result to the variable 'obj'
// and ...
var obj = {}; // Object literal
// and ...
function Person(firstName,theCity){
    this.name = firstName;
    this.city = theCity;
}

// Define an object
var Me = new Person('Nick','Asti');
console.log('Created Object Me : ',Me);
console.log('So I print only Object Person : ', Me.name,Me.city);

// Access Object's properties
Me.name = "Jessi"; //Second method is: Me["name"] = "Jessi";
Me.city = "Alburquerque" //Second method is: Me["city"] = "Alburquerque";
var newName = Me.name; //Second method is: var newName = Me["Jessi"];
var newCity = Me.city; //Second method is: var newCity = Me["Alburquerque"];
console.log(newName,newCity);

// Object JSON
var person = {
    name: 'Nick',
    city: 'Asti'
};

// In this case , object person have two parameters,"name" and "city", with relative value, "Nick" and "Asti".
console.log('Printing parameters and values',person);
console.log('Printing values of the parameters name and city: ',person.name,person.city);

var city = { nameCity: 'Asti'}
var cap = {number: 14100};
console.log(city.nameCity);
console.log(cap.number);

var address = city.nameCity +' '+ cap.number;
console.log(address);

// Undefined Variables
var undefined_Object;
console.log('This variable is undefined: ',undefined_Object);

// Array in variable
var a = new Array();
a[0] = 'zero';
a[1] = 'one';
a[2] = 'two';

console.log('Position array: ',a);
// Length of an array
console.log('Array lenght:',a.length);
// Array can also be written..
var a = ['zero','one','two'];
// Remember — the length of the array is one more than the highest index.
a[5] = "five";
console.log('Array:', a);
console.log('Number array: ', a.length);
console.log('Array numer 4: ',a[4]);
console.log('Array:', a, "  -> length:", a.length);

//Global Variable and Local Variable
console.log("=====================");
console.log("GLOBAL vs LOCAL variables");
console.log("=====================")
var aA = 10; // global variable works outside the function , but is recalled into the function
function xX(){
    var bB = aA + 5; // bB is defined inside the function context. You can still use variable defined in parent context ("Closure")
    console.log(bB); // printing variable bB
}
xX();
console.log(aA); // Variable aA exists in this context
// console.log(bB); // This variable does not exist in this context; It would throw an exception in the code


// aA is a global variable inside this javascript file.
console.log("Global variable aA:", aA);
function myFunc(){
    var aA = 4; // It defines a new variable called aA inside the context of the function because I have used var in front of the name.
    console.log("Local variable aA:", aA); 
    // aA in this function will disappear after the function finished to execute the code.
    // the Global variable aA is still available after the execution of this function
}

function myFunc2(){
    console.log("Global variable aA used inside the function:", aA);
}

myFunc();
myFunc2();

/**
 * ====== Global Context (file)=====
 * var aA = 10;
 * var cC = 4;
 * 
 * myFunc(){
     ======= Function context =======
     var aA = 242; // This variables hides the global variable aA(10) in the Global context
     console.log(cC);
     // myFunc does not find a definition of the variable cC inside the function context.
     // myFunc look for cC in the context where myFunc is defined (Global Context). 
     // It finds a definiton of the variable cC (4) in the Global Context
     
     console.log(dD); // <- Exception!
     // Same as above. The only difference is that myFunc will not find a definition of dD in the Function Context
     // myFunc will search will look for in the previous context (Global context) for a definition but it will not find it.
     // An exception will be thrown in this case and the program will stop (if the exception has not been caught!)
     
 }
 * 
 * 
 * 
 * 
 * */
 
 var myGlobalVariable = "aaaa";
function myFirstOne(){
    
    var myFirstVariable = 2;
    console.log("I am in myFirstOne...");
    
    function myInternalOne(arg1){
        var internalVariable = 10;
        var result =  internalVariable * myFirstVariable * arg1;
        console.log("I am in myInternalOne...", myFirstVariable, internalVariable, arg1);
        return result;
    }   
    console.log("Returning the definition of myInternalOne....");
    return myInternalOne;
}

console.log("\n\n\n\n");
var myVar = myFirstOne();
console.log(myVar);
console.log("\n\nResults:\n\n");
var Result = myVar(2);
console.log(Result);
Result = myVar(24242);
console.log(Result);
Result = myVar("Not a number");
console.log(Result);

myVar = undefined;