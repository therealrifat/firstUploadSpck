function multi(x,y){
  return x*y;
}
let ans=multi;
console.log(ans(5,6));

//code driven function

function firstFunc(firstName='Jonh', age= 20 , dateOfBirth){
 alert('MY NAME IS '+ firstName + ' I am '+ age+ ' My date of birth '+dateOfBirth); 
};

//Event driven function
function tap(){
  console.log("Tap TAP ")};
document.getElementById('btn').addEventListener('click', function(){firstFunc('rifat', 25, 2002) });
let result = "50" - 10; // এর উত্তর হবে 40
console.log(result);


function multiply(a, b) {
    let result = a * b;
    return result; // এখানে কী বসবে?
}

let output = multiply(6, 4);
console.log(output); // আউটপুট ২০ হতে হবে

function sayHello(name) {
    console.log("Hello " + name);
}

sayHello(); // আমি এখানে কোনো নাম দেইনি


let student = {
    name: "Rahim",
    id: 101,
    subjects: ["Math", "English", "Science"],
    city: "Dhaka"
};
console.log(student.subjects[1]);


let x = 10;
let y = "10";
console.log(x == y);
let p= 5;
let q = p++
console.log(p);

let apples = 5;
console.log(apples--);
console.log(apples);
console.log(10 !== '10'); 
let l = 20;
l += 10 - 2;
console.log(l);
let b = 50;
b /= 5 * 2;
console.log(b)
let discount = 0 ?? 10;
console.log(discount);
let myName = "rifat";
console.log(myName.charAt(0).toUpperCase() + myName.slice(1));

let convertTo= myName.toUpperCase();
console.log(convertTo);
