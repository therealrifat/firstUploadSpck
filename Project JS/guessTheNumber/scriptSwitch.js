let scriptData =document.getElementById('main');
let srcScript = 'Main';
function srcCall() {
  if (srcScript==='Main') {
    document.getElementById('main').src='apps.js'
    srcScript = 'Te';
  } else if (srcScript==='Test') {
    console.log('im sorry')
  }
}