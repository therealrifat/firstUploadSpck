let userData =document.getElementById('inputUser');
let displayResult = document.getElementById('displayOutput');
let totalResult = 0;
function calCuletor() {
  
let userText = userData.value;
if (userText.includes('+')) {
  let textData = userText.split('+')
  const numData = textData.map(Number)
  for (let num of numData) {
    totalResult= totalResult + num
  }
  displayResult.innerText = totalResult;
  totalResult = 0;
} else if (userText.includes('-')) {
  let textData = userText.split('-')
  const numData = textData.map(Number)
  totalResult=numData[0]
  for (let num of numData.slice(1)) {
    totalResult= totalResult - num
  }
  displayResult.innerText = totalResult;
  totalResult = 0;
} else if (userText.includes('*')) {
  let textData = userText.split('*')
  totalResult= 1
  const numData = textData.map(Number)
  for (let num of numData) {
  totalResult = totalResult * num
  }
  displayResult.innerText = totalResult;
  totalResult = 0;
} else if (userText.includes('/')) {
  let textData = userText.split('/')
  let [fristData, lastData,]= textData;
  let fristNum = parseInt(fristData);
  let lastNum = parseInt(lastData);
  function devided() {
    let result = fristNum / lastNum
    displayResult.innerText = result;
  }
  devided()
} }