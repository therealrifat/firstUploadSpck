// Javascript Higher Order Array Loop 
const fruits=['Mango','Apple','Orange','Graps','Banana' ] ;
for(let fruit = 0; fruit < fruits.length; fruit++){
  // console.log(fruits[fruit])
};

for ( const fruit of fruits) {
  // console.log(fruit)
}
const myName = 'Rifat Islam';
for (const name  of myName) {
  // console.log(`each char is ${name}`);
};
const country= new Map(
  [
    ['Bn','Bangladesh'],
    ['In','India'],
    ['Pk','Pakistan'],
    ['Np', 'Nepal'],
    ['Cn','China']
  ]
) 

// country.set('NZ','Newzeland')


for (const key  of country) {
  // console.log(key)
}
for (const [key, value]  of country) {
  // console.log(key, ':',value)
    
  }


const myCountry = {
  Bn : 'Bangladesh',
  In : 'India',
  Pk : 'Pakistan',
  Np : 'Nepal',
  Cn : 'China',

}

//  for in loop use kore  object use kora 

for (const key in myCountry) {
  // console.log(key, ':', myCountry[key]);
}

// for of loop  use kore object ber kora 

for (const key of Object.keys(myCountry)) {
  // console.log(key)
}
// for in loop use kore array ber kora 

for (const key in fruits) {
  // console.log(fruits[key])
}   

// video callback niye kotha bola hoye se erat bisoy bistarito bolte hobe 


// forEach loop uses 

fruits.forEach(function (xx) {
  // console.log(xx)
})

// for Each arrow function 
fruits.forEach((yy)=>{
  // console.log(yy)
})


fruits.forEach((yy, zz, aa)=>{
  // console.log(yy, zz,aa)
})

//function ta age niye bahire use kore tar por use kora

// function myFruit(fruit) {
//   console.log(fruit)
// }

// fruits.forEach(myFruit);


const stack =[
  {
   name: 'MERN Stack',
   PROPERTY: 'Mongo, React, Express,Note,'
  },
  {
    name: 'Laravel',
    PROPERTY: 'javaScript, Vue, PHP , Laravel, MySql'
  },
  {
    name: 'Wordpress',
    PROPERTY: 'javaScript , Wordpress, MySql'
  }
]
stack.forEach(info =>{
  console.log(`want to learn ${info.name}? Learn this ${info.PROPERTY}`)
})