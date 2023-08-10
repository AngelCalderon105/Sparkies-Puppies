import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js'; //retrieves function from file
import { getDatabase, ref, push } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js'; //retrieves function from file

const appSettings = {
    databaseURL: "https://calderon-bulldogs-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);

const customersInDB = ref(database, "Customers");



const inputName = document.querySelector('#input-name');
const inputEmail = document.querySelector('#input-email');
const inputPhone = document.querySelector('#input-phone');
const submitButton = document.querySelector('#form-submit');

const formContainer = document.getElementById('form-container');
const form = document.getElementById('reminderForm');
const thankYouMessage = document.querySelector('#thankYouMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let nameValue = inputName.value;
    let emailValue = inputEmail.value;
    let phoneValue = inputPhone.value;
    let userInfo = `${nameValue}, ${emailValue}, ${phoneValue}`;
    push(customersInDB, userInfo);
    inputName.value ='';
    inputEmail.value ='';
    inputPhone.value ='';
    formContainer.classList.add('hidden');
    thankYouMessage.classList.remove('hidden');
});
