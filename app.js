const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const repeatPassword = document.getElementById('repeat-password')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('clicked')
    checkInputs();
})

function checkInputs() {
    const usernameValue = username.value.trim();
    // const emailValue = email.value.trim();
    // const passwordValue = password.value.trim();
    // const repeatPasswordValue = repeatPassword.value.trim();
    
    if(usernameValue === '') {
        // show error
        // add error class
        setErrorFor(username, 'Username cannot be blank');

    } else {
        // add success class
        setSuccessFor(username)
    }
}

function setErrorFor(input, message) {
    const formItem = input.parentElement; // .form-item
    const small = formItem.querySelector('small');

    //add error message inside small
    console.log(small.innertext);
    console.log(small.textContent);
    small.textContent = message;
    console.log(message);


    //add error class
    formItem.className = 'form-item error'
}

// function setSuccessFor(input) {
//     const 
// }