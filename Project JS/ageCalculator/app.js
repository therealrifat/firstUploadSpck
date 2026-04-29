function Calculate() {
  const dateOfBirth = document.getElementById('dateOfBirth').value;
  const toDay = document.getElementById('Today').value;
  let outPut = document.getElementById('display');
  // console.log(dateOfBirth + " " + toDay)
   let arrToDay = toDay.split('-')
   let arryConvert = dateOfBirth.split('-')

   let arryBirth =[] 

   let arryToDay = []

  arrToDay.forEach(function (i) {
    let stringToNumber= parseFloat(i)
    arryToDay.push(stringToNumber)
  })

  arryConvert.forEach(function (i) {
    let stringToNumber= parseFloat(i)
    arryBirth.push(stringToNumber)
  })
   let calYears = arryToDay[0] - arryBirth[0];
   let calMonth = arryToDay[1] - arryBirth[1];
   let calDays = arryToDay[2] - arryBirth[2];


  if (calMonth < 0) {
   calYears =calYears - 1
   calMonth =calMonth + 12;
  }
  if (calDays < 0) {
   calMonth =calMonth - 1
   calDays =calDays + 30;
  }
  
  
outPut.innerText =`বয়স: ${calYears} বছর, ${calMonth} মাস, ${calDays} দিন`

}


let arrayNumber = Number(arryConvert[0])
console.log(typeof(arrayNumber))
let years = Number(arryConvert[0]);
let months = (years*12)+ Number(arryConvert[1]);
let days = (years * 365) + Number(arryConvert[1])*30+ Number(arryConvert[2]);
let weeks = Math.floor(days / 7);
let hours= days * 24;
let minutes= hours * 60;
(`তোমার বয়স ${months} মাস , ${weeks} সপ্তাহ, ${days} দিন, ${hours} ঘন্টা, ${minutes} মিনিট`)

