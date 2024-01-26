// step 1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step 2: get the email address inside the email input field
    // always remember to use .value to get the text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);
    // step 3: get password
    // 3.a : set id on the html element
    // 3.b : get the element
    // 3.c : get the value from the element
    const passwordField = document.getElementById('user-pass');
    const pass = passwordField.value;
    // console.log(pass);

    // DO NOT VERIFY email password on the client site

    // step 4 : verify email and password 

    if(email === 'admin@baaperbank.com' && pass === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Are you sure you entered the right email address and password?')
    }
})