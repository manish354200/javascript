const randomColor=function(){
   let hex='123456789ABCDEF'
   let color='#'
   for(let i=0;i<6;i++){
     color+=hex[Math.floor(Math.random()*16)];
   }
   return color;
 }

let intervals;

const StartChangingColor= function(){
  if(!intervals){ 
  intervals=setInterval(changingByColor, 1000);
  }
  function changingByColor(){
    document.body.style.backgroundColor= randomColor();
  }
}
const StopChangingColor = function(){
    clearInterval(intervals)
   // intervals = null;
};

document.querySelector('#start').
addEventListener('click', StartChangingColor);
document.querySelector('#stop').
addEventListener('click', StopChangingColor);