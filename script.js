function validatePhoneNumber(input_str) {
    var re = /^\d{10}$/;
    return re.test(input_str);
}

function validateEmail(userEmail) {
    var regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    return regex.test(userEmail);
}

function checkForm() {

    let fname = document.getElementsByName('firstname');
    console.log(fname.value);

    if(fname.value == '')
    {
        alert('First name is required');
        return false;
    }

    let phone = document.getElementById('phone');
    let bCheckPhone = validatePhoneNumber(phone.value);
    let errorSpan = document.getElementById('phoneError');
    if( !bCheckPhone ) {
        //alert('Phone number is not valid, must be 10 digits');
        errorSpan.innerText = 'Phone must be 10 digits';
        return false;
    }
    else
    {
        errorSpan.innerText = '';
    }

    let email = document.getElementById('email');
    let bCheckEmail = validateEmail(email.value);
    let errorEmail = document.getElementById('emailError');
    if( !bCheckEmail ) {

        errorEmail.innerText = 'Email is not valid, must have @';
        return false;
    }
    else
    {
        errorEmail.innerText = '';
    }

    let password1 = document.getElementById('psw');
    let password2 = document.getElementById('psw-repeat');
    let passworError = document.getElementById('passwordMatchError');

    if(password1.value != password2.value )
    {
        passworError.innerText = 'Password not match';
        return false;
    }
    else
    {
        passworError.innerText = '';
    }


    return true;
}