let userInput = document.getElementById('inputFiled');
let array =[];
let displayOutput = document.getElementById('displayPtag');
let victorySentence = ['BOOYHA!!','Chicken Dinner 🐔 পেয়েছেন দাওয়াদ দিবেন কবে?', ' আপনাকে অভিনন্দন ', 'Hurray ',' এত পাওয়ার কই পাও ⚡',' WOW Just Hero ',' আপনি AIB এর উসাগি নাকি?',' আপনি তো দেখি 456 নম্বর প্লেয়ার',' শুধু তুমি আমার মনের কথা বুজলে!' ];
console.log(victorySentence.length-1)
function addString() {
  let randomSentence = Math.floor((Math.random()*victorySentence.length-1)+1)
  displayOutput.innerText=victorySentence[randomSentence];
  
  console.log(victorySentence[randomSentence])
}
  