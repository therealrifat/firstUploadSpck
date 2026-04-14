
let customerData= {
    Name:'rifat',
    Number:'017190',
    isNumber:true,
};
function check() {
let inputData = document.getElementById('userText').value;
let finalText = customerData[inputData];
document.getElementById('text').innerText=finalText;
};

// small latter convert to capitalist
let x ='rifat';
let y = x.toUpperCase() // result: RIFAT
console.log(y); 
//CAPITALS LETTER CONVERT TO SMALL LETTER
let a = 'RAFSAN' ;
let b = a.toLowerCase() ; //result: rafsan
// console.log(b);

function Capital() {
    let capitalize=inputFrom.toUpperCase() ;
    document.getElementById('text').innerText=(capitalize);
};



function linkGenerate() {
    let inputFrom = document.getElementById('userText').value;
    const link ="https://merchant.pathao.com/tracking?consignment_id=";
    let result = link + inputFrom;
    document.getElementById('text').innerText=result;
};

function copyText() {
    // নির্দিষ্ট স্ট্রিং যা আপনি কপি করতে চান
    let textToCopy = "মিরপুর-১০, ঢাকা, বাংলাদেশ"; 

    // ক্লিপবোর্ডে কপি করার আধুনিক মেথড
    navigator.clipboard.writeText(textToCopy).then(function() {
        // কপি সফল হলে এখানে যা লিখবেন তা কাজ করবে
        let msg = document.getElementById("copyMsg");
        msg.innerText = "কপি হয়েছে!";
        
        // ২ সেকেন্ড পর মেসেজটি মুছে ফেলার জন্য
        setTimeout(() => {
            msg.innerText = "";
        }, 2000);
        
    }).catch(function(err) {
        // যদি কোনো কারণে কপি না হয়
        // console.error('কপি করতে সমস্যা হয়েছে: ', err);
    });
}

// Javascript date 24 February 2026

//for loop use 
// const friends = ["Rifat", "Iran", "Jobaer"];
// for (let i = 0; i < friends.length; i++ ){
//   if (friends[i]=== "Iran") {
//     console.log(`Yess Iran is my friend`)
//   } else {
//     console.log("চেক করছি " + friends[i]);
//   }
// };


for(let i = 1 ; i<11; i++){
  //console.log("5 × "+i+ " = "+ 5 * i)
};

for(let i = 10; i >= 0; i--){
 // console.log(i)
}

for(let i = 1; i < 10; i =i+2){
  // console.log(i)
}
let numbers = [10,20,30,40] 
let total = 0; 
for(let i = 0; i < numbers.length; i++){
  total= total + numbers[i];
}
// console.log(`সবগুলার যোগ ফল ${total}`)

let count = 0;
for (let i = 1; i <= 3; i++) {
    count = count + 5;
}
// console.log(count);





// date 25 Feb 26 Math





// let y = 12;
// if (y > 5 && y< 15) {
//     console.log("সঠিক");
// } else {
//   console.log(`ভুল`)
// };
//round() মেথড দশমিক এর পর যদি 30.5 থাকে 1 যোগ করে 31 করে দিবে 
let twoDigit = 30.56;
// console.log(Math.round(twoDigit));

// ceil() মেথড 
let j = 36.01;
// console.log(Math.ceil(j)); // Expect Result 37

let k = 36.9907;
// console.log(Math.floor(k));

//pow() মেথড square ভ্যালু বের করার জন্য 
let squareValue = Math.pow(3,4);
// console.log(squareValue); //result 81


let arrayNumber = [125,55,5,66,14,268,2,35,52,];

//max() মেথড হলো অ্যারে থেকে বড় নম্বর / max নম্বর টা বের করা। 
let maxValue = Math.max(...arrayNumber);
// console.log(maxValue);

//min()  মেথড হলো অ্যারে থেকে ছোটো বা মিনিমাম নাম্বার টা বের করা ।

let minValue = Math.min(...arrayNumber);

// console.log(minValue);

let upperValue = 6; 
let randomNumberGenerate =Math.floor(Math.random()*upperValue+1);
// console.log(randomNumberGenerate);
const imagesText = document.getElementById('images');
let imgSoruce = '/Math/img/'+randomNumberGenerate+'.png';
// imagesText.src=imgSoruce

let m = 5 ;
let n = ++m
// console.log(m + n); 



//26 February 2026.   Javascript array

// Array te je method gula use kori
//unshift(), shift(), pop(), push(), toString(), join()


const friendz = ['Jobayer', 'Hasib', 'Iran'];


// Replace 
friendz[0]='Sabuj',



// array te new item frist index e  add korbo 
friendz.unshift('Sabbir')

// console.log(friendz);

// shift( ) method holo 

friendz.shift();

// access item dore
friendz[0]


// last item er access neyar niyom

let arrayLastItem = friendz[friendz.length-1];

// index  
let smartAsces = friendz.at(2);

// last item delete korar niyom 
friendz.pop()


// push() method holo array te  ekdom last item kono add korar jonno use kori 

friendz.push('Jakariya');

// array jodi string hisabe dorkar hoy tahole toString() method use korte hobe ;

let convertToString = friendz.toString();
//join() মেথড হলো কোনো অ্যারে এর ভিতর কোনো এলিমেন্ট অ্যাড করতে চাইলে 
let joinMethod = friendz.join(' * ');

let xx = [1,2,3,4];
let yy = [3,4,5,6,7]
let zz = [8,12,22,14]
let nameJanina  = xx.reverse()

let resultConcat= xx.concat(yy);
console.log(nameJanina);
// Math, Array, Object, Number, Condition Statment / if else , Loop,  string,

let capitalName = 'moon';
let converToString = capitalName.slice(0,1).toUpperCase()+capitalName.slice(1,capitalName.length)
// console.log(converToString);



let fullName = 'rifat';
let converToUpper = `${fullName[0].toUpperCase()}${fullName.slice(1).toLowerCase()}`;
console.log(converToUpper);

const capitalizedWord = (srt)=> srt.charAt(0).toUpperCase() + srt.slice(1).toLowerCase();

// console.log(capitalizedWord(fullName))

// মাসকে বছরে কনভার্ট করা ।
let totaMonth = 321;
let years = Math.floor(totaMonth/12);

let monthCalcu = totaMonth % 12;

let resultDate= `Year: ${years} Month: ${monthCalcu}`
console.log(resultDate);

let weatherToDay = 'rainy';// rainy, cloudy, sunny
if (weatherToDay === 'rainy') {
    console.log(`আজকে বৃষ্টি হবে ☔`);
} else if (weatherToDay === 'cloudy' ){
        console.log(`আকাশ মেঘলা, সাথে ছাতা রাখা ভালো  🌂`)
} else {
    console.log(`আজকে বৃষ্টি হবে না দরকার নেই 🌂`)
};

// if else ইউজ করা হয়েছে যেখানে নম্বর গ্রেডিং ।

// let englishMark = 120;
// if (englishMark > 100 || englishMark < 0) {
//     console.log(`invaild Number`)
// }else if (englishMark >= 80 ) {
//     console.log(`You are Great: A+`)
// }else if (englishMark >= 70){
//     console.log(`A`)
// }else if (englishMark >= 33){
//     console.log(`Pass`)
// }else {
//     console.log(`fail`)
// };


// loop use forEach

// let markList = [40,58,89,105,23,-6];
// markList.forEach((mark) =>{
// if (mark > 100 || mark < 0) {
//     console.log(`${mark} invaild Number!`)
// }else if (mark >= 80 ) {
//     console.log(`${mark} You are Great: A+`)
// }else if (mark >= 70){
//     console.log(`${mark} A`)
// }else if (mark >= 33){
//     console.log(`${mark} Pass`)
// }else {
//     console.log(`${mark} fail`)
// }
// })






// switch case today 28 February 26





// let dayNumbers = 7;
// switch (dayNumbers) {
//     case 1:
//         console.log(`Saturday`)
//         break;
//     case 2:
//         console.log(`Sunday`)
//         break;
//     case 3:
//         console.log(`Monday`)
//         break;
//     case 4:
//         console.log(`Tuesday`)
//         break;
//     case 5:
//         console.log(`Wednesday`)
//         break;
//     case 6:
//         console.log(`Thursday`)
//         break;
//     case 7:
//         console.log(`Friday`)
//         break;
//     default:
//         console.log(`Waqt per rahe jada uchal mat`)
// };


const yearToDay = new Date().getFullYear();
function calculetAge(birthYear) {
    let age =  yearToDay -  birthYear;
    return age
}

function buttonHandel() {
    const userInput = document.getElementById('userText');
    const displayOutput = document.getElementById('text');
    let birthYear = Number(userInput.value)
    let calculetYear = calculetAge(birthYear)
    if (userInput.value  ==='') {
        displayOutput.innerText = `Jada Uchal mat Bichho! `
    }
    else if (birthYear >= yearToDay) {
        displayOutput.innerText = `আপনি কি ভবিষ্যৎ থেকে এসেছেন নাকি`
    } else {
        displayOutput.innerText = calculetYear;
    }
    
}


function jogFol(x,y,z){
    let calculator = x + y + z
    return calculator
}
// console.log(jogFol(4,5,6))


//Positive and Nagetive Number Check 


function checkNumber(ourNumbers) {
    if (ourNumbers > 0) {
    return `${ourNumbers} is Positive number`
    } else if (ourNumbers < 0) {
    return `${ourNumbers} is Nagitive number`
    }else {
    return `${ourNumbers} This is the Zero `
}}
// console.log(checkNumber(0))


// today 01 march 26


/*


let myDay = "01/03/1999"; 
let parts = myDay.split("/"); // ["01", "03", "1999"]

// জাভাস্ক্রিপ্ট মাসে ০ থেকে শুরু করে (জানুয়ারি = ০), তাই মাস থেকে ১ বিয়োগ করতে হয়
let birthDate = new Date(parts[2], parts[1] - 1, parts[0]);
let today = new Date();

let diff = today - birthDate; // এটি মিলিসেকেন্ডে ফলাফল দেবে

// মিলিসেকেন্ড থেকে বছরে রূপান্তর
let age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));

console.log("আপনার নিখুঁত বয়স: " + diff);


function getDetailedAge(bDay, bMonth, bYear) {
    let today = new Date();
    let currYear = today.getFullYear();
    let currMonth = today.getMonth() + 1; // জানুয়ারী = ১ করার জন্য
    let currDay = today.getDate();

    // প্রাথমিক বিয়োগ
    let y = currYear - bYear;
    let m = currMonth - bMonth;
    let d = currDay - bDay;

    // দিনের হিসাব ঠিক করা
    if (d < 0) {
        // গত মাসে কত দিন ছিল তা বের করার স্মার্ট উপায়
        let lastMonthDays = new Date(currYear, currMonth - 1, 0).getDate();
        d += lastMonthDays;
        m--; // মাস থেকে ১ কমালাম
    }

    // মাসের হিসাব ঠিক করা
    if (m < 0) {
        m += 12;
        y--; // বছর থেকে ১ কমালাম
    }

    return `${y} বছর, ${m} মাস, ${d} দিন`;
}

console.log(getDetailedAge(01, 2, 2026)); 


function startCountdown() {
    let seconds = 10; // আমরা ১০ থেকে শুরু করছি

    // setInterval শুরু করা (১০০০ms বা ১ সেকেন্ড পরপর চলবে)
    let timer = setInterval(function() {
        console.log(seconds); // কনসোলে বর্তমান সেকেন্ড দেখাচ্ছে
        
        // স্ক্রিনে দেখানোর জন্য (যদি আপনার HTML-এ 'display' আইডি থাকে)
        document.getElementById('display').innerText = seconds;

        seconds++; // প্রতি সেকেন্ডে ১ করে কমছে

        // যখন ০-তে পৌঁছাবে, তখন টাইমার বন্ধ করতে হবে
        if (seconds > 20) {
            clearInterval(timer); // টাইমার থামিয়ে দেওয়া
            console.log("সময় শেষ! ⏰");
        }
    }, 1000);
}

startCountdown();
*/


function myDateOfBirth() {
    let userInput = document.getElementById('userText');
    
    let myDateOfBirth = userInput.value.split("-");
    
    console.log(myDateOfBirth);
   
}

let randomNums= Math.floor(Math.random()*1000)
console.log(randomNums)
/*
at: ƒ at()
concat: ƒ concat()
constructor: ƒ Array()
copyWithin: ƒ copyWithin()
entries: ƒ entries()
every: ƒ every()
fill: ƒ fill()
filter: ƒ filter()
find: ƒ find()
findIndex: ƒ findIndex()
findLast: ƒ findLast()
findLastIndex: ƒ findLastIndex()
flat: ƒ flat()
flatMap: ƒ flatMap()
forEach: ƒ forEach()
includes: ƒ includes()
indexOf: ƒ indexOf()
join: ƒ join()
keys: ƒ keys()
lastIndexOf: ƒ lastIndexOf()
length: 3
map: ƒ map()
pop: ƒ pop()
push: ƒ push()
reduce: ƒ reduce()
reduceRight: ƒ reduceRight()
reverse: ƒ reverse()
shift: ƒ shift()
slice: ƒ slice()
some: ƒ some()
sort: ƒ sort()
splice: ƒ splice()
toLocaleString: ƒ toLocaleString()
toReversed: ƒ toReversed()
toSorted: ƒ toSorted()
toSpliced: ƒ toSpliced()
toString: ƒ toString()
unshift: ƒ unshift()
values: ƒ values()
with: ƒ with()
Symbol(Symbol.iterator): ƒ values()
Symbol(Symbol.unscopables): Object
__proto__: Object
*/


let listedArray = [12,10,25,26];
let newArrayList =listedArray.map( num=> num*2 )
// console.log(newArrayList)
// let lowerName = rifat;

function stringConverter(Nam) {
    let strCapital = Nam.charAt(0).toUpperCase()+ Nam.slice(1).toLowerCase();
    return strCapital;
};

console.log(stringConverter('sabiya'));



let nameConverter = (str)=> str.charAt(0).toLowerCase() + str.slice(1).toUpperCase();

// console.log(nameConverter('rifat'));

let nameList = ["rifat", "moon", "rafasa","shahidul","rani","sumi","sunny"];

let namecaptialize = nameList.map(str=>str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() );
// console.log(namecaptialize);


/*
let customeData = ['Jannat', '01768019101', 'Daniyapara Sirajdikhan, Munshiganj'];

//পুরোনো পদ্ধতি array 

let customerName= customeData[0];
let customerNumber= customeData[1];



//আধুনিক পদ্ধতি 
const[Name, Number, Address ]= customeData

console.log(customerNumber)
*/

// for(let i = 0; i <= 10; i=i+1){
//   console.log(i)
// }

/*
let defaultValue= 1;
let isAlert = false;
function increment() {
    let userResult = document.getElementById('display');
     ++ defaultValue ;
    userResult.innerText=defaultValue
    // return update

    if (defaultValue >= 5 && isAlert==false) {
    console.log(" Bohat Jada Ho geya " + defaultValue)
    isAlert= true
}
}


function decrement () {
    let userResult = document.getElementById('display');
    // let nowupDate = --defaultValue;
    if (defaultValue > 0) {
        --defaultValue
         userResult.innerText=defaultValue;

    }
    if (defaultValue < 5) {
        isAlert = false
    }
}

function reset() {
    let userResult = document.getElementById('display');
    defaultValue = 1;
    isAlert = false;
    userResult.innerHTML=defaultValue;
    console.clear()
    console.log("কাউন্টার রিসেট করা হয়েছে।");
};
*/
