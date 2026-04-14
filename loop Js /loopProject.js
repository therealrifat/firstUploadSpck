
function geussTheNumber(difficultyConvert) {
  let randomNumber;
  let attemp = 0;
  let maxAttemps;
  let range;
  switch (difficultyConvert) {
  case 'easy':
    range = 10
    maxAttemps = 5;
    randomNumber = Math.floor(Math.random()*10 +1);
    console.log('Well come To Jumanji 😉   ' + randomNumber )
    break;
  case 'medium':
    range = 100;
    maxAttemps = 7;
    randomNumber = Math.floor(Math.random()*100 +1);

    console.log('Well come To Squid Game'+ randomNumber);

    break;
  case 'hard':
    range = 1000;
    maxAttemps = 10;
    randomNumber = Math.floor(Math.random()*1000 +1);
    console.log('Well come To Alice In Borderland' + randomNumber )

    break;
  
  default:
   console.error('akher tum kya kehena chatehoo');
}
  while (attemp < maxAttemps) {
    let user = parseInt(prompt(`geuss The Number 1 and ${range} (inclusive)You Have ${maxAttemps - attemp} Attemps Left`))
    attemp++
    if (user === randomNumber) {
    alert(' Congratulations This Number ' + randomNumber + ' You guess the in a '+ attemp + 'attemps')
    break;
  } else if( user < randomNumber) {
    alert('too low ')
  } else{
    alert(" too high")
  }
  console.log(user)

  }
  if (maxAttemps === attemp) {
    alert(`আপনার দফাদাফি টাইম শেষ নাম্বারটি ছিল ${randomNumber}`)
  }
  }
  
// console.log(difficultyConvert);
let difficultyConvert= prompt("Choose your Difficulty Easy, Medium,Hard").toLowerCase()
geussTheNumber(difficultyConvert)