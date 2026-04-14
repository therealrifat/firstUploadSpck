//object Javascript
const newSym =Symbol('key1');
const perSon = {
  // keys: value 
  firstName:'IRAN',
  lastName:'KHAN',
  age:27,
  isStudent: false,
  sex: 'male',
  'Best friends': 'Jobaer',
  [newSym]:'myKey1',

  //kibhave object er bitor method add korobo
  
  Name:function (x,y){
  return x*y;},
  
  // how to add methods in object
  bio: function(){
    return `${this.firstName} IS A GOOD BOY, HER BEST FRIEND IS  ${this['Best friends']}`
  },
}
//Normal function
function  Name(){
  return x*y;};
console.log(perSon.bio());



//Dada Access system dot notation 
console.log(perSon.firstName);
//data access system bract notion
console.log(perSon['Best friends']);
//অবজেক্ট কিভাবে ডাটা যোগ করব 
perSon.country='Bangladesh';
//অবজেক্ট আপডেট 
perSon.firstName ='Rifat';
// data freez
Object.freeze(perSon);
// ডাটা আছে কিনা কিভাবে চেক করব নিয়ম
console.log(perSon.hasOwnProperty('firstName'));

//Object ke jodi arrey hisabe dorkar hoy 

console.log(Object.keys(perSon));
console.log(Object.values(perSon));

// khibabe Object te method use korbo ba function use korbo 

