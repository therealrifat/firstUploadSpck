let userInput = document.getElementById('inputFiled');
let displayOutput = document.getElementById('display');
let labelInstruction = document.getElementById('inputLabel');

let randomNumber;
let range;
let attempts = 0;
let maxAttempts;
let gameState = 'choose_difficulty'; // বর্তমান অবস্থা মনে রাখার জন্য

function guessTheNumber() {
    let rawData = userInput.value.trim();
    
    // পর্যায় ১: ডিফিকাল্টি চুজ করা
    if (gameState === 'choose_difficulty') {
        let difficulty = rawData.toLowerCase();
        
        switch (difficulty) {
            case 'easy': maxAttempts = 5; range = 10; break;
            case 'medium': maxAttempts = 7; range = 100; break;
            case 'hard': maxAttempts = 10; range = 1000; break;
            default:
                labelInstruction.innerText = "ভুল লিখেছেন! easy, medium অথবা hard লিখুন।";
                return; // ভুল হলে এখানেই থেমে যাবে
        }
        
        // গেম সেটআপ
        randomNumber = Math.floor(Math.random() * range) + 1;
        attempts = 0;
        gameState = 'playing'; // অবস্থা পরিবর্তন করে দিলাম
        
        labelInstruction.innerText = `এখন ১ থেকে ${range}-এর মধ্যে একটি সংখ্যা গেস করুন।`;
        displayOutput.innerText = `আপনার কাছে ${maxAttempts} বার সুযোগ আছে।`;
        userInput.value = ""; // ইনপুট খালি করে দেওয়া
        userInput.placeholder = "সংখ্যাটি লিখুন";
        userInput.type='number';
    } 
    
    // পর্যায় ২: নাম্বার গেস করা
    else if (gameState === 'playing') {
        let guess = parseInt(rawData);
        
        
        if (isNaN(guess)) {
            displayOutput.innerText = "দয়া করে একটি বৈধ সংখ্যা লিখুন!";
            
            return;
        }

        attempts++;
        
        
        if (guess === randomNumber) {
            displayOutput.innerText = `অভিনন্দন! আপনি ${attempts} বারে সঠিক উত্তর দিয়েছেন।`;
            gameState = 'choose_difficulty'; // গেম শেষ, আবার শুরু হবে
            labelInstruction.innerText = "আবার খেলতে চাইলে difficulty লিখুন (easy, medium, hard)";
            userInput.type='text';
        } else if (attempts >= maxAttempts) {
            displayOutput.innerText = `গেম ওভার! সঠিক সংখ্যাটি ছিল ${randomNumber}।`;
            userInput.type='text';
            gameState = 'choose_difficulty';
            labelInstruction.innerText = "আবার শুরু করতে difficulty লিখুন।";
        } else {
            // ভুল উত্তরের জন্য হিন্টস দেওয়া
            let hint = guess > randomNumber ? "বেশি লিখে ফেলেছেন!" : "আরও বড় সংখ্যা ট্রাই করুন!";
            displayOutput.innerText = `${hint}
            আপনার কাছে ${maxAttempts - attempts} বার সুযোগ বাকি।`;
        }
        userInput.value = ""; // প্রতিবার ইনপুট খালি করা
    }
}
