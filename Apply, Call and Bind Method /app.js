/*
* Java Script Apply and Call Method
*/

// don't repeat your self 

const greenLine ={
  bus: 'Green Line Paribahan',
  bCode:'GL',
  ticket: [], 
  book(seatNum, name){
    console.log(`${name} booked seat on ${this.bus} ticket ${this.bCode}--${seatNum}`)
    this.ticket.push({ticketInfo: `${this.bCode} -${
      seatNum
    }`, name})
  }
}

greenLine.book('C1', 'Rifat Islam')
greenLine.book('C2', 'Rafsan Islam')
console.log(greenLine)

const shohag  ={
  bus: 'Shohag Paribahan',
  bCode: 'SH',
  ticket:[]
} 
const book = greenLine.book
book.call(shohag, 'D3','Shaidul Islam');
book.call(shohag, 'D2','Sanny Islam');
book.call(greenLine, 'A4','Sultana Islam');
console.log(shohag)


const dola= {
  bus: 'Dola Paribahan',
  bCode: 'DL',
  ticket:[]
  
}


book.call(dola, 'H1','Hridoy Khalifa')

//apply method 

const ticketData = ['B1','Sabiya Islam']

book.apply(greenLine,ticketData)
book.apply(dola,['J1','Sadin Islam'])

//Bind method

// const ticketSH = book.bind(shohag);
// ticketSH('E1', 'Iran Khan')

// jodi predifinee korte chai 

const ticketSH = book.bind(shohag, 'E1');
ticketSH('Jobayer Khan')
ticketSH('Iran Khan')


// const person = {
//   firstName:'Nisrat',
//   lastName: 'Jahan',
//   displayName: function() {
//     return(this.firstName + ' '+ this.lastName)
//   }
// }
// const display = person.displayName();
// console.log(display);

const person = {
  firstName:'Nisrat',
  lastName: 'Jahan',
  displayName: function() {
    console.log(this.firstName + ' '+ this.lastName)
  }
}
// const display = person.displayName; 
// console.log(setTimeout(display.bind(person), 2000));

greenLine.busses = 20;
// console.log(greenLine)


greenLine.buyBus = function () {
  // console.log(this)
  this.busses++
  console.log(this.busses)
}

// greenLine.buyBus();

document.querySelector('.btn').addEventListener("click",greenLine.buyBus.bind(greenLine));

// partial Application 
const addTAX = (rate, value)=> value + (value * rate) / 100;
// console.log(addTAX(10, 200));

const addVAT = addTAX.bind(null, 15)
console.log(addVAT(200))