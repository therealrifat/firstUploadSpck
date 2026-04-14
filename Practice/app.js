/*
// ইউজারের সাবস্ক্রিপশন স্ট্যাটাস ট্র্যাক করার জন্য একটি অবজেক্ট


const userAccount = {
    isSubscribed: false
};

function toggleSubscription() {
    const btn = document.getElementById('subBtn');

    // লজিক চেক: যদি সাবস্ক্রাইব করা না থাকে (false হয়)
    if (userAccount.isSubscribed === false) {
        userAccount.isSubscribed = true; // স্ট্যাটাস পরিবর্তন
        btn.innerText = "Unsubscribe";   // বাটনের লেখা পরিবর্তন
        btn.style.backgroundColor = "gray"; // স্টাইল পরিবর্তন (ঐচ্ছিক)
        console.log("সবাইকে স্বাগতম! আপনি সাবস্ক্রাইব করেছেন।");
    } 
    // যদি অলরেডি সাবস্ক্রাইব করা থাকে (true হয়)
    else {
        userAccount.isSubscribed = false; // স্ট্যাটাস আগের অবস্থায় ফেরত
        btn.innerText = "Subscribe";      // বাটনের লেখা আগের মতো
        btn.style.backgroundColor = "red";
        console.log("আপনি আন-সাবস্ক্রাইব করেছেন।");
    }
}

*/
let x = "3"-5+2;
console.log(x);

let time = 19;

if (time < 12) {
    document.getElementById('text').innerHTML= 'Good morning 😎'
}else if (time< 18) {
    document.getElementById('text').innerHTML= 'Good Afternoon 🤪'

} else {
    document.getElementById('text').innerHTML= 'Good Night 🌃'}

/*

let min = prompt("Test For write");
function minCalculate() {
    let rate =35/60;
    return (rate*min)*0.15
}
console.log(minCalculate());

*/
/*
function output() {
    let inputValue = document.getElementById("userInput").value;
    document.getElementById("display").innerText = "আপনি লিখেছেন: " + inputValue
}*/



function minrate() {
    let inputValue = document.getElementById("userInput").value;
    let min = parseInt(inputValue) || 0;
    let rate = 35/60;
    let Vat = (rate*min)*0.15;
    let totalCost =(rate*min)+Vat;
    document.getElementById('display').innerText= Math.floor(totalCost) +' TK';
};

let text = "1:25";

let sparate = text.split(":");
let min = parseInt(sparate[0])||0;
let sec = parseInt(sparate[1])||0;
let min2 = 

console.log(min);


let cashOutCharge = 18.50 // per thousand 
let blanceAmount = 1000;
let perThousand = cashOutCharge/ 1000;
let rate = blanceAmount - (blanceAmount * perThousand) 
console.log('Cash Out: '+ rate + " Charges: " + cashOutCharge);

let totalBlance = 3632; // target Blance Zero


//object 
let voterId = {
    'Voter No': 799,
    'Voter No': 46465751698,
    Name: 'Rifat Islam',
    fatherName:'Md Shahidul Islam',
    motherName:'Rani Begum',
    dateOfBirth:'07/05/2002',
    gender: 'Male',

}

let customer80 ={
    fullName:'Mahamudul Hasan',
    Mobile:'019518****97',
    Distric:'Cumilla',
    Thana: 'Daudkandi',
    Village: 'Rahematkandi',
    DeliveryAddress: function(){
        return `Jella: ${this.Distric}, Thana: ${this.Thana} Village: ${this.Village}`}
}
console.log(customer80['DeliveryAddress()']);
function dcrhe() {
    let inputValue = document.getElementById("userInput").value;
if (inputValue==3) {
    document.getElementById('display').innerText=customer80.DeliveryAddress();
}
else {
    document.getElementById('display').innerText='What the fuck';

}
};

// number check
let customerData= {
    "01719046223":"Rifat Islam",
    "017828275531":"Moon",
    "01942447559":"Ammu",
    "01753793738":"Ammu M",
};

let dameData= {
    Name:'rifat',
    Number:'017190'
}

function check(){
    let inputValue = document.getElementById("userText").value;
    let name = customerData[inputValue];
    
    if (name) {
        document.getElementById('display').innerText= name
    } else {
        document.getElementById('display').innerText='WTF'
    }
};


//console.log(Object.keys(customerData));

//document.getElementById('text').innerText='Rifat';
//document.getElementById('text').style.fontSize='200px';
function textCall() {
let text = document.getElementById('userText').value;
let finalText =text.toUpperCase()
document.getElementById('text').innerText=finalText;
document.getElementById('text').style.fontSize='120px';
document.getElementById('text').style.color='red';
};

