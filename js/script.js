
var line1 = document.querySelector('.line1')
var line2 = document.querySelector('.line2')
var line3 = document.querySelector('.line3')
var line4 = document.querySelector('.line4')
var line5 = document.querySelector('.line5')
var active = document.querySelector('.active')

setTimeout(
   function (){
 
    line1.classList.remove( 'active')
    line2.classList.add( 'active')
},2000 
)
setTimeout(
   function (){
 
    line2.classList.remove( 'active')
    line3.classList.add( 'active')
},4000 
)
setTimeout(
  function (){

   line3.classList.remove( 'active')
   line4.classList.add( 'active')
},8000 
)
setTimeout(
  function (){

   
   line1.classList.add( 'active')
   line2.classList.add( 'active')
   line3.classList.add( 'active')
   line4.classList.add( 'active')
},10000 
)