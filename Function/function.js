/*// Basic Functions 
function myFunction() {
  console.log('Hello function');
}
myFunction();

*/

/* 
What is Function Parameter?
//Function parameters are listed inside the parentheses() in the function definition 
What is function argument?
//Function arguments are the values received by the function when it is the invoked 
*/

//Code-Driven Invocation 
function myFunction(fullName, age=31 , dateOfbirth=1991) {
  console.log('Hello ' +  fullName+ 'I am '+age +' My Date Of Birth '+ dateOfbirth);
}
myFunction("Rafsan ",05, 2021);
myFunction("RIFAT ",25);

//Event driven function 

function isSubscribe() {
  console.log('SUBSCRIBES');
}
document.getElementById('btn').addEventListener('click',isSubscribe);

//Automatic (Self-Invoked) Invocation 
(function(message) {
  console.log('Iam Self-Invoking Function', message)
})('Hello Rifat');

//function expression 

let maths = function(x,y) {
  return x * y;
  
};
console.log(maths(3,6));
console.log(maths(3,8));

function newFunc(){
  let firstName='RIFAT';
  console.log(firstName);
}
newFunc();

//anonymous function
let number =[3,4,6,8];
let sqNumber= number.map(function(number){
  return number*number;
})
console.log(sqNumber);


/*

//Regular Function

let add =function(x,y){
  return x+y;
};
console.log(add(3,7));

*/


//arrow Function

let add = (x, y) => x * y;
console.log(add(3, 7));


//Nest Function
/*
function Greet(fristName){
  function SayHello(){
    alert('Hello ' + fristName);
  }
  return SayHello();
}
Greet('RIFAT');

*/
function SayHello(firstName){
    alert(`Hello ${firstName}`);
  };
SayHello('Rifat');

let Sum=[4,7,8,9];
let Sums = Sum.map(function(Sum) {
  return Sum+Sum;
})
console.log(Sums)

//Regular function
function mUlti(x,y){
  return x*y;
}
alert(mUlti(5,6));
