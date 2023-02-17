const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

form.addEventListener('submit', (e) => {
    if(password.value !== 'Dabbas.2023' || username.value !== 'Dabbas'){
        e.preventDefault();
        alert('Incorrect Username or Password. Please try again.');
        username.value = '';
        password.value = '';
    } 
})