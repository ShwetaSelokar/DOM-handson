let id = document.getElementById("text");
console.log(id);

const tagName = document.getElementsByTagName('h1')
console.log(tagName[1].innerText);

let className = document.getElementsByClassName('box');
console.log(className[3].innerText);

const text=document.getElementById('heading1');
addEventListener("click", function(){
   text.innerText= 'Hello World';
   text.style.color='red';
})

function changeText(){
    let button = document.querySelector('#content');
    button.innerText='"Welcome to Elevation academy"';
}

const text1=document.getElementById('heading');
   addEventListener("click", function(){
   text1.innerText= 'Welcome to Elevation academy';
   text1.style.color='red';
})

//const changeFlexDirection = document.getElementsByClassName("parentCard");
//addEventListener("click", function(){
  //  changeFlexDirection.style.flexDirection="column";
//})

function changeFlexDirection() {
    let changeDimension = document.getElementsByClassName('parentCard');
    changeDimension[0].style.flexDirection = 'column'
  }
  
  function timer(){
    let date=new Date()
    let hr=date.getHours()
    let min=date.getMinutes()
    let sec=date.getSeconds()
    let clock=document.getElementById("clock")
    clock.innerText=`${hr}hr : ${min}min : ${sec}sec`
}
setInterval(timer,1000)