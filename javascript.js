//Getting General Elements
let edit = document.querySelector('#editPhoto');
let del = document.querySelector('#deletePhoto');
let avatar = document.querySelector('#avatar');
let upload = document.querySelector('#upload');
let okBtn = document.querySelector('#okBtn');
let source;

//edit.addEventListener('click', editPhoto);
del.addEventListener('click', deletePhoto);
upload.addEventListener('click', uploadPhoto);
okBtn.addEventListener('click', updatePhoto);

function deletePhoto() {
avatar.src = 'img/avatar.png';
}

function uploadPhoto() {
  source = URL.createObjectURL(event.target.files[0]);
}

function updatePhoto() {
  avatar.src = source;
}


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
