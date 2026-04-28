let fruits =['Mango', 'JackFruit','Orange','Lichi', 'Banana','Graps' ] 


// fruits.forEach(function (f) {
//   console.log(f)
// });

// fruits.forEach(fruit => console.log(fruit))

// কোনো একটা অ্যারে ভিতরের প্রথম ওয়ার্ড দিয়ে fliter করা 

const capB = fruits.filter(fruit => fruit.toLowerCase().startsWith('b'));


// যদি length অনুযায়ী বের করতে চাই fliter ইউজ করে 

const len5  = fruits.filter(fol => fol.length ===6 )

// যদি এমন দরকার হয় যে অ্যারে এর ভিতর নিদ্রিষ্ট কোনো বর্ণ থাকলে সেগুলো দেখাও 

const fruitStratG= fruits.filter(fruit => fruit.toLowerCase().includes('g') )

// console.log(fruitStratG);

const numberArr = [1,2,3,4,5,6,7,8,9]

let bigNumber = numberArr.filter(
  num => {return num >5} // curly bracket Use korle return keyword bebohar korte hobe
)
// console.log(bigNumber)


const numberArry = [1,2,3,5,4,7,9,6]
let smallNimber = numberArry.filter(num => num< 6)

// console.log(smallNimber)

const forNums = []
numberArry.forEach( num => {
  if (num < 6) {
    forNums.push(num)
  }
})

// console.log(forNums)


const Stack = [
  {
  name : 'MERN STACK',
  property : 'Mongo, Express, React, Node',
  foundation : 'JavaScript',
  tranding : true,
  prize : 5000,
},
{
    name: 'MEAN Stack',
    property: 'Mongo, Express, Angular, Node',
    foundation: 'JavaScript',
    tranding: false,
    price: 3000,
  },
  {
    name: 'Laravel',
    property: 'JavaScript, Vue, PHP, Laravel, MySQL',
    foundation: 'PHP',
    tranding: true,
    price: 4000,
  },
  {
    name: 'WordPress',
    property: 'JavaScript, PHP, WordPress, MySQL',
    foundation: 'PHP',
    tranding: false,
    price: 3500,
  },
  
]

// let userStack = Stack.filter( sk => sk.foundation === 'JavaScript')


let userStack = Stack.filter(sk => sk.foundation === 'PHP');

console.log(userStack)

const myNumber = numberArry
.map(num => num+5)
.map(num=> num*5)
.filter(num => num >= 50)


// console.log(myNumber)
let intialValue = 1; 

const jogFol = numberArr.reduce((acc,curValue,) => acc * curValue,intialValue)
console.log(jogFol)






