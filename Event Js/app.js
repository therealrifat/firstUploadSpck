//Event Javascript
/*
 Click 👉 onclick
 Dubble Click 👉 ondblclick
 Right Click 👉 oncontextmenu
 Hover 👉 onmouseenter
 Hover out 👉 onmouseout
  on key press will only work body or from onkeypress.
  on key up will only work on body just press up arrow key 👉 onkeyup.
  on load will only work on body 👉 onload
  on resize will work on body 👉 onresize
  on scroll will work on body 👉 onscroll
*/
function subs(){
  document.getElementById('btn').innerHTML='Subscribed'
  document.getElementById('btn').style.backgroundColor='#000fff';
} 

/*
function like(){
  document.getElementById('likes').innerHTML='<i class="fa-solid fa-heart"></i> Liked'
};*/


function keyPress(){
  document.getElementById("text").innerHTML='Key Press ⌨️'
}

/*
function onload(){
  alert('test onload')
  document.getElementById('text').innerHTML='web site load properly complete'
}
*/
 
 function onScroll(){
   document.getElementById('text').innerHTML='Your now scroll 🤪'
 };
 
 
 
 document.getElementById('ul').addEventListener('click',function(e) {
   console.log('ul click');
   
 }, // true
 );
 document.getElementById('li').addEventListener('click',function(e) {
   console.log('li click');
   
 },//true
 )
 
 document.getElementById('likes').ondblclick= function(){
   document.getElementById('likes').innerHTML='Heart🤎'
 }