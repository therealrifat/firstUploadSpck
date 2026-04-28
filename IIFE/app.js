/*
*Immediately Invoked function expression (IIFE)
*/
const aFunction = function (a, b) {
  console.log( a * b)
};
aFunction(5,5);
aFunction(2,7);

(function (a,b) {
  console.log(a+b)
})(4,6);

(function (a,b) {
  console.log(a*b)
})(5,4);
((a,b) =>console.log(a*b))(7,8);

//DOM

(function () {
  const h3 = document.querySelector('.h3');
  const h4 = document.querySelector('.h4');
  h3.style.backgroundColor = 'red';
  h4.style.backgroundColor = 'green';
})();

const myModule = (function () {
  let privateVar =  "this is Private Variable";
  function privateFunc() {
    console.log('This is my Private Function')
  }
  return {
    publicVar: "this is public variable",
    publicMethod: function () {
     privateFunc()
     return ('This is public method')
    },
  }
  
})();

//console.log(myModule.privateVar) // Unaccessible
//console.log(myModule.privateFunc()) //Unaccessible

//console.log(myModule.publicVar)//Accessible
//console.log(myModule.publicMethod())//Accessible
