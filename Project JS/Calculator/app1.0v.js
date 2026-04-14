let userData =document.getElementById('inputUser');
let displayResult = document.getElementById('displayOutput');

function calCuletor() {
  
let userText = userData.value;
if (userText.includes('+')) {
  let textData = userText.split('+')
  let [fristData, lastData,]= textData;
  // console.log(textData)
  let fristNum = parseInt(fristData);
  let lastNum = parseInt(lastData);
  function addCal() {
    let result = fristNum + lastNum
    displayResult.innerText = result;
  }
  addCal()
  
} else if (userText.includes('-')) {
  let textData = userText.split('-')
  let [fristData, lastData,]= textData;
  // console.log(textData)
  let fristNum = parseInt(fristData);
  let lastNum = parseInt(lastData);
  function subtractCal() {
    let result = fristNum - lastNum
    displayResult.innerText = result;
  }
  subtractCal()
} else if (userText.includes('*')) {
  let textData = userText.split('*')
  let [fristData, lastData,]= textData;
  // console.log(textData)
  let fristNum = parseInt(fristData);
  let lastNum = parseInt(lastData);
  function multi() {
    let result = fristNum * lastNum
    displayResult.innerText = result;
  }
  multi()
} else if (userText.includes('/')) {
  let textData = userText.split('/')
  let [fristData, lastData,]= textData;
  // console.log(textData)
  let fristNum = parseInt(fristData);
  let lastNum = parseInt(lastData);
  function devided() {
    let result = fristNum / lastNum
    displayResult.innerText = result;
  }
  devided()
} }
// [fristData, lastData,]= text;
// console.log(result)

