let elements =  document.getElementsByClassName('complete-btn');

for(let element of elements){
   element.addEventListener('click', function(event){
    alert('Board Update Successfully')
      
    element.disabled = true;
   //  -------
      
     const cardTitle = event.target.parentNode.parentNode.parentNode.querySelector('.card-title').innerText;
   
   const commentContainer = document.getElementById('comment-box');
   // document.getElementById('comment-box').style= 8  ;
   let commentDiv = document.createElement('div');
   commentDiv.innerText = 'You have completed the task ' + cardTitle + ' 1:32:34 AM';
      
   commentContainer.appendChild(commentDiv);
  

// --------------
   const number = document.getElementById('num').innerText;

   const convertedNumber = parseInt(number) - 1;
   
   document.getElementById('num').innerText = convertedNumber;

   if(parseInt(convertedNumber) < 1){
      alert("Congratulation")
   }

// ------

   const mainNumber = document.getElementById('main-num').innerText;

   const convertedMainNumber = parseInt(mainNumber) + 1 ;

   document.getElementById('main-num').innerText =convertedMainNumber;

      
      
   })
    
}

document.getElementById('new-today').addEventListener('click',function(){
   window.location.href = "question.html"
})
