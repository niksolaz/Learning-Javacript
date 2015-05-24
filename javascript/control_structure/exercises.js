/*
  if condition1 is true print "nicola", otherwise print "domenico"
*/
var condition1 = 1;
if(condition1 === 1){ 
    console.log('nicola'); 
    
}else {
  console.log('domenico');
} 


/*
  if condition1 is true, print "nicola", otherwise if condition1 is false and condition2 is true print "David". Otherwise print
  "Domenico"
*/
var condition1 = false, 
    condition2 = true;
if(condition1 === true){
  console.log('nicola');
}else if(condition2 === true){
  console.log('david');
}else{
  console.log('domenico');
}
/*
  if condition1 is equal to 'casa' AND condition2 is a an integer equals to 4, then print "Hello world"
*/
var condition1 = 'casa',
    condition2 = 4;
if((condition1 === 'casa')&&(condition2 === 4)){
  console.log('Hello world');
  
}


/*
  if condition1 is equal to 'casa' AND condition2 is a an integer NOT equals to 4, then print "Hello world"
*/
var condition1 = 'casa',
    condition2 = 5;
if((condition1 === 'casa')&&(condition2 !== 4)){
  console.log('hello world');
}
/*
  if condition1 is equal to 'nicola' OR condition2 is equal to 'domenico', then print "nicola & domenico". Otherwise print "Not found"
*/
var condition1 = 'Nicolas',
    condition2 = 'Domenico';
if((condition1 === 'Nicola')||(condition2 === 'Domenico')){
  console.log('%s & %s',condition1,condition2);
}else{
  console.log('Not Found!');
}
/*
  if condition1 is a function (check the type), then print the function and execute it. 
  Otherwise, print that the condition is not a function
*/
var condition1 = function condition1(){
  console.log("I am condition1"); 
}
if(typeof condition1 === "function"){
  console.log("I am a function"); 
  condition1();
}else{ 
  console.log('Not a Function!');
}

/* 
  if condition1 is a boolean (check the type) AND condition1 is equal to true, print ' i am a true boolean'.
*/
var condition1 = true;
if((typeof condition1 === 'boolean') && (condition1 === true)){
  console.log('I am a true boolean');
}

/* if condition1 is a boolean AND condition1 is equal to false, then print ' I am a false boolean' */
var condition1 = false;
if((typeof condition1 === 'boolean') && (condition1 === false)){
  console.log('I am a false boolean');
}

/* if condtion1 is a string AND condition1 is equal to "nicola", then print "I am nicola" */
var condition1 = 'nicola';
if((typeof condition1 === 'string')&&(condition1 === 'nicola')){
  console.log('I am %s',condition1);
}

/* if condition1 is an object, then print "I am an object" */
var condition1 = {} ;
if(typeof condition1 === 'object'){
  console.log('I am an object');
}
/* if condition1 is an object and it has a property firstName equal to 'nicola', then print 'I am Nicola inside the object' */
var condition1 = {
  firstName : 'nicola'
};
if((typeof condition1 === 'object')&&(condition1.firstName === 'nicola')){
  console.log('I am Nicola inside the object');
}

/*
  if condition1 is true AND it is a boolean, then print " I am a boolean".Otherwise "Fail!"
*/
var condition1 = true;
if ((condition1 === true) && (typeof condition1 === 'boolean')){
    console.log("I am a boolean");
    
}else{
    console.log("Fail!");
}

/*
  if condition1 is equal to the sum of 10 + 2, then print "12". Otherwise print "Fail!"
*/
var condition1 = 10 + 2;
if(condition1 === 12){
  console.log('12');
}else{
  console.log('Fail!');
}
/*
  if condition1 is NOT undefined, print " I am not undefined". 
*/
var condition1 = 2;
if(condition1 !== undefined){
  console.log('I am not undefined');
}
/*
  if condition1 is NOT null, print "I am not null".
*/
var condition1 = 2;
if(condition1 !== null){
  console.log('I am not null');
}

/*
  Check if a condition is true WITHOUT using any comparison operators (===, !==, <=, >=, >, <..etc)
  Hint: 
    - undefined, null, empty string (''), 0 are considered equal to false. 
    - All the rest is considered true.
*/
var condition1 = function(){
    console.log("Bambina..");
};

if(condition1){
  console.log('Ciao Ciao');
  if(typeof condition1 === 'function'){
      condition1();
  }else{
      console.log("I am not a function but a %s", typeof condition1);
  }
  
}else{
  console.log('Fail!');
}


// =====WHILE ====
/*
  create a cycle while where:
  - the condition is a number (i) lower than 10;
  - when the condition is true, print the value of i.
  - i must be defined outside the while cycle and you must 
    increase i inside the cycle while
*/
var i = 1;
while(i<10){
  
  console.log(i + ' i am lower than 10');
  i = i + 1; // i++ is similar
}
/*
  Create the same example but using do-while
*/
var i = 1;
do{
  console.log(i);
  i = i + 1; 
}
while(i<10)



/*
 Create the same example with the cycle for
*/
console.log("===FOR===");
for(var i = 1; i<10; i++){ 
  console.log(i);
}
console.log('I am a cycle FOR : ',i);


