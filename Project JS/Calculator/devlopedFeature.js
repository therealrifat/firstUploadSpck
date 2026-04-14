let stringData = "53+12+6+7*2+8";
let stringAry = stringData.split(/([*+-])/)
let resultTest  = Number(stringAry[0])
for (let i = 1; i < stringAry.length; i=i+2) {
  let operator= stringAry[i]
  let numberDigit = Number(stringAry[i+1])
if (operator==='*') {
  resultTest= resultTest * numberDigit
  // console.log(resultTest)
} else if (operator==='-' ) {
  resultTest= resultTest - numberDigit
  // console.log('resultTest')
} else if (operator==='+') {
  resultTest= resultTest + numberDigit
}
// console.log(resultTest)
}
  

// frist te Gun × er kaj x + -

let test = stringData.indexOf('6')
console.log(test)