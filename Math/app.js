// Math Java Script

//If Need Round Number
//round() মেথড দশমিক এর পর যদি 30.5 থাকে 1 যোগ করে 31 করে দিবে 

let number = 30.50217968; //result 31
let num = 30.4782992 //  result 30 
console.log(Math.round(number));
console.log(Math.round(num));

// যদি এমন নম্বর দরকার হয় দশমিকরে পর যেই নম্বর থাকুক ১ যোগ করে দিবে তাহলে ceil() ইউজ করতে হবে ।
// যদি এমন নম্বর দরকার হয় দশমিকরে পর  যেই নম্বর থাকুক তা দরকার নেই তাহলে floor() মেথড ।
// round() মেথড হলো দশমিকের পর যদি 5 এর উপর থাকে তাহলে 1 যোগ করে 5 এর নিচে থাকলে 1 যোগ করে না রাউন্ড নম্বর দেখায় । 

let A = 30.0000001 
//console.log(Math.round(num)); //result 30
//console.log(Math.floor(A)); //resul 30
//console.log(Math.ceil(A)); //result 31 

//Square Value 

num2 = 3;
//console.log(Math.pow(3,2)); //result 9 

//Root Value √
//console.log(Math.sqrt(64));

// abs() always positive value দিবে "-5" হলেও রেজাল্ট     পজিটিভ 5 হবে মোট কথা ভ্যালু নেগেটিভ হোক বা পজিটিভ সবসময় পজিটিভ ভ্যালু দিবে , 

//console.log(Math.abs(5));
 
// min() method ইউজ করে মিনিয়াম ভ্যালু বের করা 
let text = [53,28,61,12,25,98,782,55,46,9,];
let minValue = Math.min(...text);
//স্প্রেড অপারেটর (...): এই তিনটি ডট অ্যারের ব্র্যাকেটগুলো ভেঙে ভেতরে থাকা সংখ্যাগুলোকে আলাদা করে বাইরে ছড়িয়ে দেয়।
//console.log(minValue); //result 9


// max() method ইউজ করে বড় ভ্যালু বের করা 

let maxValue = Math.max(...text)
//console.log(maxValue);
//PI এর ভ্যালু বের করার জন্য 
let PI = Math.PI;
//console.log(PI)

//cos ∅  ভ্যালু কি ভাবে বের করব 
//console.log(Math.cos(0*Math.PI/180));


// কিভাবে random number করব 
let random = Math.random()
//console.log(random);

//random number যদি "."দশমিক এর পর  ২ ডিজিট দরকার হয় তাহলে toFixed() মেথড ইউজ করতে হবে যত ডিজিট দরকার হয় মেথড এর ভিতর ।
//Example 
//console.log(Math.random().toFixed(2));

//যদি পূর্ণ নম্বর ১০ এর ভিতর দরকার হয় তাহলে 

//console.log(Math.random().toFixed(2)*10+1);
//console.log(Math.floor(Math.random().toFixed(2)*6+1));

// যদি লুডু এর মত দরকার হয় ৬ এর উপরে যাবে না 
let uperValue = 6;
let lowerValue = 1;
let result = Math.ceil(Math.random()*uperValue) 
console.log(result)

//ludo rolldice 
function rollDice() {
  let randomNum = Math.floor(Math.random()*6+1)
  let imgSource = '/Math/num/'+ randomNum + '.jpg' 
  document.getElementById('ludo').src =imgSource
  //console.log(imgSource)
}

function rollDice() {
  let count = 0;
  let rollingInterval = setInterval(() => {
    // লোডিং ইফেক্ট: দ্রুত রেন্ডম নাম্বার জেনারেট করা
    let tempNum = Math.floor(Math.random() * 6 + 1);
    document.getElementById('ludo').src = '/Math/img/' + tempNum + '.png';
    
    count++;
    
    // ১০ বার ঘোরার পর আসল নাম্বার শো করবে
    if (count >= 10) {
      clearInterval(rollingInterval);
      
      // ফাইনাল রেজাল্ট
      let finalNum = Math.floor(Math.random() * 6 + 1);
      document.getElementById('ludo').src = '/Math/img/' + finalNum + '.png';
      console.log("ফাইনাল নাম্বার:", finalNum);
    }
  }, 100); // প্রতি ১০০ মিলিসেকেন্ডে ইমেজ পাল্টাবে
}
//RealTime Clock

function startTimer() {
    // এখন বাটনে ক্লিক করলেই কেবল এই ইন্টারভ্যালটি চালু হবে
    setInterval(nowClock, 1000);
}

function nowClock(){
    let d = new Date();
    document.getElementById('demo').innerHTML = d.toLocaleTimeString();
};
let a = 5;
let b = ++a;
console.log(a+b);
