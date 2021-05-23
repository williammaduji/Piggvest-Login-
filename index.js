
let form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    let values = form.elements;
    let emailOrPhone = values['email-phone'].value
    let password = values['password'].value;
    alert('Hey, Your email or phone number is ' + emailOrPhone + ', you entered ' + password + " as your password");

})

let body = document.querySelector('body');
body.addEventListener('click', function(e){
    if (e.target.getAttribute('title') === 'piggyvest'){
        alert('PiggyVest Logo'); 
    }
    if (e.target.getAttribute('class') === 'register'){
        alert('Register an account'); 
    }
    if(e.target.getAttribute('class') === 'forgot'){
        alert('Forgot Password')
    }
})