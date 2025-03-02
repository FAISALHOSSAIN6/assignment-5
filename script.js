let elements = document.getElementsByClassName('complete-btn');

for (let element of elements) {
   element.addEventListener('click', function (event) {

      alert('Board Update Successfully')


      element.disabled = true;
      //  -------

      const cardTitle = event.target.parentNode.parentNode.parentNode.querySelector('.card-title').innerText;

      const commentContainer = document.getElementById('comment-box');
      // document.getElementById('comment-box').style.marginTop= '4px'  ;
      let commentDiv = document.createElement('div');

      commentDiv.style.marginTop = '10px'
      commentDiv.style.backgroundColor = 'lightgray'
      commentDiv.style.borderRadius = '10px'
      commentDiv.innerText = 'You have completed the task ' + cardTitle + ' 1:32:34 AM';

      commentContainer.appendChild(commentDiv);


      // --------------
      const number = document.getElementById('num').innerText;

      const convertedNumber = parseInt(number) - 1;

      document.getElementById('num').innerText = convertedNumber;

      // -------------------------------
      if (parseInt(convertedNumber) < 1) {
         alert(" Congratulation, You have completed the task successfully ")
      }

      // ------

      const mainNumber = document.getElementById('main-num').innerText;

      const convertedMainNumber = parseInt(mainNumber) + 1;

      document.getElementById('main-num').innerText = convertedMainNumber;



   })

}

document.getElementById('new-today').addEventListener('click', function () {
   window.location.href = "question.html"
})


// ------------------
document.getElementById('clear-btn').addEventListener('click', function () {
   document.getElementById('comment-box').innerText = "";
})


const dateName = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri',]

const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

let newDate = new Date();

let currentDate = newDate.getDate();

let currentDateName = dateName[parseInt(newDate.getDate()) - 1];

let currentMonth = monthName[newDate.getMonth()];



let currentYear = newDate.getFullYear();

document.getElementById('date-name').innerText = currentDateName;


const date = document.getElementById('date');

date.innerText = currentMonth + '  ' + currentDate + ' ' + currentYear

// ---------------------------


document.getElementById('color-btn').addEventListener('click', function () {
   const randomColor = '#' + Math.floor(Math.random() * 1666678)

   document.body.style.backgroundColor = randomColor;


})