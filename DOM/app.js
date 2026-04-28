document.querySelector('h1').innerText =' Subscribe';
const box = document.querySelector('.box');
box.style.backgroundColor = "red";
box.style.width = "100px";
box.style.height = "100px";

document.getElementById('box').style.backgroundColor ="Blue";
const menuItem = document.querySelectorAll('a');
menuItem[0].style.color  = 'red';

menuItem.forEach(function (i) {
  i.style.color ='red';
  i.style.fontSize ='20px';
})

const cusClass = document.getElementsByClassName("nav-link");

const convertClass = Array.from(cusClass) ;

for (let i = 0; i < cusClass.length; i++) {
  // console.log(cusClass[i])
};

convertClass.forEach(function (i) {
  i.style.backgroundColor = '#262626';
  i.style.margin = '0 0 15px';
  i.style.padding = '10px 20px';
})
