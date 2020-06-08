
//Getting current year for footer
function getCurrentYear() {
let currentYear = document.querySelector('#currentYear');
let date = new Date();
currentYear.innerHTML = date.getFullYear();
}

//Today's date for table with posts
function getCurrentDate() {
  let months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
  ];

let today = document.querySelectorAll('#today');
let date = new Date();
for(let i = 0; i < today.length; i++) {
  today[i].innerHTML = `${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
}
}

getCurrentYear();
getCurrentDate();
