let userData =document.getElementById('inputUser');
let displayResult = document.getElementById('displayOutput');
let oparation;
function calCuletor() {
  let rawData = userData.value;
  let sign = '+';
  let check = rawData.includes(sign);
  // oparation = '+';
  
  let spareateData= rawData.split(sign)
  let [fristData, lastData,] = spareateData;
  let fristNum = parseInt(fristData);
  let lastNum = parseInt(lastData);
  let result = fristNum + lastNum;
  console.log(lastData)
  displayResult.innerText=result;
}