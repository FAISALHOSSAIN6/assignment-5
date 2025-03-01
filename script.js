let elements =  document.getElementsByClassName('btn');

for(let element of elements){
   element.addEventListener('click', function(){
    alert('hello')

   const number = document.getElementById('num').innerText;

   const convertedNumber = parseInt(number) + 1;
   document.getElementById('num').innerText = convertedNumber;
   
   })
    
}
