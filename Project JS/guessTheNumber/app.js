let userInput = document.getElementById('inputFiled');
let labelInstraction = document.getElementById('inputLabel');
let displayOutput = document.getElementById('display');
let singelButton = document.getElementById('singleButton');
let range;
let randomNumber; 
let attempt = 0
let maxAttems;
let victorySentence = ['BOOYHA!!','Chicken Dinner 🐔 পেয়েছেন দাওয়াদ দিবেন কবে?', ' আপনাকে অভিনন্দন ', 'Hurray ',' এত Energy কই পাও ⚡',' WOW Just Hero ','  সাবাশ আপনি AIB এর উসাগি নাকি?',' আপনি তো দেখি 456 নম্বর প্লেয়ার','Bah!! শুধু তুমি আমার মনের কথা বুজলে!' ];
let gameStates = 'chooseDifficulty';

function guessTheNumber() {
  let rawInput = userInput.value.trim();
  
  if (gameStates === 'chooseDifficulty') {
    let diffculty = rawInput.toLowerCase();
    
    switch (diffculty) {
      case 'easy':
        range = 10;
        maxAttems = 3;
        break;
      case 'medium':
        range = 100;
        maxAttems = 5;
        break;
      case 'hard':
        range = 1000;
        maxAttems = 7;
        break;
      
        default:
          displayOutput.innerText=`ভুল লিখেছেন সঠিক ভাবে Difficulty নির্বাচন করুন`;
          labelInstraction.innerText=`Easy, Medium, Hard`;
        return;
    }
    attempt = 0;
    randomNumber= Math.floor(Math.random()*range +1)
    // randomNumber = 4; 
    displayOutput.innerText=`এখন 1 থেকে ${range} মধ্যে একটা নম্বর গেস করুন `;
    
    singelButton.innerText='CHECK';// Button Value Change,
    gameStates = 'playTheGame';
    userInput.value="";
    userInput.placeholder= 'এবার সংখ্যা লিখুন';
    labelInstraction.innerText=`আপনার কাছে সুযোগ আছে মাত্র ${maxAttems} বার । `;
    userInput.type='number';
  }
  else if (gameStates === 'playTheGame') {
    let rawData = parseInt(userInput.value)
    if (isNaN(rawData)) {
      displayOutput.innerText="অনুগ্রহ করে সঠিক Valid নম্বর দিন"
      return;
    }
    attempt++
    if (rawData=== randomNumber) {
      let randomSentence = Math.floor((Math.random()*victorySentence.length-1)+1)
      displayOutput.innerText = victorySentence[randomSentence];
      userInput.type = 'text';
      userInput.value="";
      userInput.placeholder= `Easy/ Medium/ Hard`;

      singelButton.innerText='START';// Button Value Change,
      gameStates = 'chooseDifficulty';
      labelInstraction.innerText=' আবার শুরু করতে Difficulty সিলেক্ট করুন (easy, medium, hard)';
    } else if (attempt>=maxAttems) {
      displayOutput.innerText= `গেইম ওভার! 
      আপনার চেষ্টার জন্য ধন্যবাদ নম্বর টি ছিল: ${randomNumber}।`
      userInput.type = 'text';
      singelButton.innerText='START AGAIN';// Button Value Change,

      gameStates = 'chooseDifficulty';
      labelInstraction.innerText=' আবার শুরু করতে Difficulty সিলেক্ট করুন (Easy, Medium, Hard)';
      userInput.placeholder= 'EASY /  MEDIUM / HARD';
    
      userInput.value="";
    }
    else {
      let hint = rawData > randomNumber   ? "ছোটো সংখ্যা ট্রাই করুন" : "বড় সংখ্যা ট্রাই করুন";
      displayOutput.innerText= `"${rawData}" এর থেকে  ${hint}`
      userInput.value="";
      labelInstraction.innerText= `আর মাত্র সুযোগ আছে ${maxAttems-attempt} বার ।`;
    }
    
    // userInput.type='number';
    
  }
  

}