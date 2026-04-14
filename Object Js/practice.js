const person = {
  firstName: 'Rifat',
  lastName: 'Islam',
  age: 21,
  dateofBirth:1900,
  "Best Friend": "Hasib", 
};
// object update
person.age = 25;
person.dateofBirth = 2002;
person.distric = 'Bagerhat';

//console.log(person);
//console.log(person.firstName);


const student = {
  name: 'Rafsan',
  age: 10,
  isStudent: true
};
// dot notation access
console.log(student.name);

//bracket notation access
console.log(student['age'])

//property value update 
student.age = 12;

//property add 
student.City = 'Bagerhat'
console.log(student);

let smartPhone = {
  Brand: 'Redmi' ,
  Model: 'Note 10s',
  RAM: '6GB',
  ROM:'128GB',
  Battery: '5000 mAh',
  showInfo: function(){
    return `This is a Phone ${this.Brand} ${this. Model}`
  },
}
console.log(smartPhone.showInfo());

let car = {
  brand: 'BMW',
  model: 'X2x',
  color: 'red',
};

delete car.color
console.log(car);
