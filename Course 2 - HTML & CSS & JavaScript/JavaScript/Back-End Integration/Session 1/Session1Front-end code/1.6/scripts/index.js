

function signUpSubmit(firstName, lastName, email, password, mobile) {
    var params = {
        first_name: firstName.value,
        last_name: lastName.value,
        email: email.value,
        password: password.value,
        mobile_number: mobile.value
    }
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/api/v1/signup');
    xhr.send(JSON.stringify(params));
    xhr.onreadystatechange();
    console.log(params);
}


