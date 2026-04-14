let defaultValue = 01; 
// let date = new Date()
let countValue = 0;
let displayOutput = document.getElementById('display');
let increment = () =>{
   ++countValue
  displayOutput.innerText=defaultValue + ":" + countValue + " PM";
  
  if (countValue ===59) {
    ++defaultValue;
    countValue = 0;
  }

}
let decrement = () =>{
  defaultValue = Math.floor(Math.random()* 12+1)
  displayOutput.innerText=defaultValue + ":"+ countValue + " PM";
  // console.log(typeof(defaultValue))
};
function second() {
  countValue = Math.floor(Math.random()* 59+1)
  displayOutput.innerText=defaultValue + ":" + countValue + " PM";
};