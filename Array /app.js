// 2 Bhave Array Neya jay 
//Javascript Array
const language = [ 'HTML', 'Javascript', 'Python', 'CSS', 'Bootstrap', 
];

const lang = new Array('PHP', 'English','Bangla');

// Ki Bhabe index item dore replace korbo 
language[0] = 'Tailwind CSS';
language[5] = 'react JS';
console.log(language);

// Ki bhave array first item er access nebo! index number diye !
//console.log(language[0]);

// Ki bhave array last item er access nebo!
const lastItem =language[language.length - 1]
//console.log(lastItem)

// pop() method use korle last item delete kora jabe 

language.pop();


// Ki bhave array last item add korbo !
language.push('Angular.JS');

//Add Frist Item
language.unshift('Basic computing');

//delete Frist Item
language.shift()


console.log(language);

// letest access way

//console.log(language.at(5));  
//console.log(language [2]);
//console.log(language.toString()); 
//console.log(language.join(' * '));
//console.log(language.length);

const person =[];
person['firstName']='Rifat';
person['lastName']='Islam';
person[2]= 35;
//console.log(person);

const num =[20];
//console.log(num);
const number =new Array(20);
//console.log(number);

const x =[1,2,3,4];
const y =[2,3,4,5];
const p =[7,8,9]
const z = x.concat(y,p);
// console.log(z);

const a = [[1,2,3],
[4,5,6],[7,8,9]];

//console.log(a);
//console.log(a.flat());

// language array-er 2 number index e 'Iran' ar 'jk' add kora hoyeche
language.splice(2, 2, 'Iran','JK');
console.log(language);


let data = ['Jannat', '01768019101', 'Daniyapara Sirajdikhan, Munshiganj']
const && [Name, Number, Address ]= data

console.log(Number)