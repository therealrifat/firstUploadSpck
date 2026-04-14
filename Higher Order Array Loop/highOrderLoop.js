const friendzToday = ['Iran','Jobayer','Hasib','Aminul'];

// for of loop use 
friendzToday.shift()

for (let person of friendzToday) {
  // console.log(person)
};

for (let i = 0; i < friendzToday.length; i++) {
  // console.log(friendzToday[i])
};
const myname = 'Rifat Islam';
for (let name of myname) {
  // console.log(name)
};

let country = new Map(
  [
    ['BD', 'Bangladesh'],
    ['In', 'India'],
    ['PK','Pakistan'],
    ['Cn','China'],
  ]
)
country.set('NZ','Newzeland')

for (let [key, value, ]of country) {
  // console.log(key ,value)
}



for (let i= 0; i < friendzToday.length; i++){
  // console.log(friendzToday[i])
}
friendzToday.push('Rafsan')


friendzToday.unshift('Moon')
for (let person of friendzToday) {
  // console.log(person)
}


const district= new Map(
  [
    ['BD','Bagerhat'],
    ['CT','Chattogram'],
    ['RJ','Rajshahi']
  ]
)

//ম্যাপে নতুন কোনো জোড়া যোগ করতে বা আগের কোনো মান পরিবর্তন করতে set ব্যবহার করা হয়।

district.set('BR','Barisal')

// console.log(district.get('CT'))

//ম্যাপে নির্দিষ্ট কোনো Key আছে কি না তা জানতে এটি ব্যবহার করা হয়। এটি true বা false রিটার্ন করে।

// console.log(district.has('RJ'))

//delete: নির্দিষ্ট একটি Key মুছে ফেলে।
district.delete('BR')


// console.log(district.get('BR'))

//ম্যাপে কয়টি জোড়া ডেটা আছে তা জানতে size প্রপার্টি ব্যবহার করা হয়।

// console.log(district.size);

//  ম্যাপ এর ডাটা কি এবং পেয়ার হিসেবে পেতে যেমন 'BD : BAGERHAT '
for (let [keys, vlaue] of district) {
  console.log(keys +':'+ vlaue)
}

// ম্যাপে কি দরকার হয় যেমন BD CT
for (let key of district.keys()) {
  console.log(key)
}

// forEach 
district.forEach((value,key)=>{
  // console.log(key +'='+ value)
})
//district.keys()শুধু চাবিগুলো দেবে।
// district.values()শুধু মানগুলা দেবে।
//district.entries() চাবি ও মান—দুইই দেবে।

let text = "";
for (const x of district.entries()) {
  text += x + '<br/>';
}
document.getElementById('yes').innerHTML= text;
// console.log(text)
let display= '';
for (let friend of friendzToday) {
  display+= friend
  document.getElementById('yes').innerText= display;
}