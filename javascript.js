//Getting General Elements
let edit = document.querySelector('#editPhoto');
let del = document.querySelector('#deletePhoto');
let avatar = document.querySelector('#avatar');
let upload = document.querySelector('#upload');
let okBtn = document.querySelector('#okBtn');
let source;
let passwordBtn = document.querySelector('#passwordBtn');

//edit.addEventListener('click', editPhoto);
//del.addEventListener('click', deletePhoto);
//upload.addEventListener('click', uploadPhoto);
//okBtn.addEventListener('click', updatePhoto);
passwordBtn.addEventListener('click',checkPassword);


function deletePhoto() {
avatar.src = 'img/avatar.png';
source = '';
}

function uploadPhoto() {
  source = URL.createObjectURL(event.target.files[0]);
}

function updatePhoto() {
  if(source != null && source !== undefined) {
    avatar.src = source;
  } else {
    avatar.src = 'img/avatar.png';
  }

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

function checkPassword() {
let password = 'peppa_Pig834';
let currentPassword = document.querySelector('#currentPassword');
let text = document.querySelector('#passwordChangeSuccess');
let successAlert = document.createElement('div');
let container = document.querySelector('#mainContainer');
successAlert.classList.add('alert','alert-success');
successAlert.innerHTML = 'Password Changed Successfully!';
if(currentPassword.value == password) {
text.innerHTML = '';
text.appendChild(successAlert);
container.classList.add('mb-5');
}
}

getCurrentYear();
getCurrentDate();
