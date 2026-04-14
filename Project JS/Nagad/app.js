/*
let totalBlance = 2750;
let chargePerThoussnd = 12.99;
let ekTakay = 1 + (chargePerThoussnd/1000);
let amount = (totalBlance / ekTakay).toFixed(2);
console.log(amount);

*/
const calculate = ()=>{
  
  const inputField = document.getElementById('userInput'); 
  const cashOutCharge = document.getElementById('charge'); 
  const displayArea = document.getElementById('text');
  
  
  // string conver to number 
  const totalBalance = Number(inputField.value)||0;
  const CASH_OUT_RATE = Number(cashOutCharge.value)||12.99;
  
  // const CASH_OUT_RATE = 12.99;
  const ratePerTaka = 1 + (CASH_OUT_RATE / 1000); 
  

  //Calculation 
  const receivedAmount = (totalBalance / ratePerTaka).toFixed(2); 
  
  const totalCharge = (totalBalance - receivedAmount).toFixed(2);
   displayArea.innerText= `আপনি পাবেন:  ${receivedAmount} টাকা ।  (চার্জ কাটবে ${totalCharge})`;

  
};