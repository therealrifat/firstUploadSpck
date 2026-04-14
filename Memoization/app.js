// prothome ekta function nibo m mother function 
// ekta object tar por ekta function
// if else 

// total process hobe ekta cache thakbe cache er bitor jodi data thake tahole seita return korbe nahole function ta cholebe ebong empty cache return korbe
function valueSquare(num) {
  return num* num
}

function dataMemoization() {
let cacheSquare = {}

  
  return function dataSquare(num) {
    if (num in cacheSquare) {
      console.log(cacheSquare)
      console.log('print form  cache');
      return cacheSquare[num];
    } else {
      const result = valueSquare(num);
      console.log('print from Computing');
      cacheSquare[num] = result;
      return result
    }
    
  }
}
const memoSqr = dataMemoization();

console.log(memoSqr(7))
console.log(memoSqr(7))
console.log(memoSqr(8))
console.log(memoSqr(7))
console.log(memoSqr(54))
console.log(memoSqr(54))
  
