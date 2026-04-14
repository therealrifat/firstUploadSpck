// এখানে আমরা চাই একটা লজিক থাকবে ভ্যারিয়েবল এর মাধ্যমে কল এর টোটাল ক্যালকুলেশন সিস্টেম টা থাকবে । যে ফিচার থাকবে 
// রিচার্জ করার অপশন , ব্যালেন্স সিস্টেম , যে কল rate থাকবে সেই অনুযায়ী টাকা কাটবে, টাকা শেষ হলে কল ডিউরেশন রান হবে না বলবে ব্ব্যালেন্স নেই 

// let arrayTo = callDuration.split(":");
// let hours = Number(arrayTo[0])*60;
// let minutes= (hours + Number(arrayTo[1]));
// let seconds = Number(arrayTo[2]);
// let totalCallDuration = (minutes*60) + seconds;
// let vatIncluding =( callRate + (callRate * 0.15)).toFixed(2)
// console.log(totalCallDuration)


let callRateVat = 15 ;//Persentage 
let callRate = 0.35 ; //( 0.35/60) * totalCallDuration;
let callDuration = "0:04:50"; 

function calculetCallRate( ) {
  let arrayConvert = callDuration.split(":")
  let hours = Number(arrayConvert[0]) ;
  let min = Number(arrayConvert[1]);
  let seconds =Number(arrayConvert[2]);
  let totalDuration = (hours * 60 * 60) + min * 60 + seconds;
  let calculateDuration = totalDuration * (callRate /60);
  let vatAdding = (calculateDuration * (callRateVat / 100 ));
  let totalCallCost = (calculateDuration + vatAdding).toFixed(2)
  console.log(totalCallCost);
} 
calculetCallRate()