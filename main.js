const signUpForm = document.querySelector('main');
const successMessage = document.querySelector('.successMessage');
const submitButton = document.getElementById('submit-btn');
const dismissButton = document.getElementById('dismiss-btn');
const submittedEmail = document.querySelector('.submitted-email');
const mainForm = document.getElementById('form');
const emailIn = document.getElementById('email');

//ADD EVENT LISTENERS

submitButton.addEventListener('click', submitEmail);
dismissButton.addEventListener('click', toggleDiv);

//FUNCTIONS
//TOGGLE

function toggleDiv() {
  signUpForm.classList.toggle('hidden');
  successMessage.classList.toggle('hidden');
}

//EMAIL VALIDATION

function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
}

//SUBMIT EMAIL

function submitEmail(event) {
  event.preventDefault();

  if (validateEmail(emailIn.value)) {
    submittedEmail.innerText = emailIn.value;
    toggleDiv();
    emailIn.value = '';
    mainForm.classList.remove('error');
  } else {
    mainForm.classList.add('error');
  }
}
