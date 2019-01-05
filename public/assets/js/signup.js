import {
    signUpUser
} from"../../../routes/users";

$(document).ready(function () {

    var signUpButton = $('#signUpButton');
    var firstnameInput = $('input#first_name');
    var lastnameInput = $('input#last_name');
    var phoneInput = $('input#phone');
    var locationInput = $('input#location');
    var usernameInput = $('input#username_input');
    var emailInput = $("input#email_input");
    var passwordInput = $("input#password_input");

    var repeatPasswordInput = $("input#password2_input");

    signUpButton.on('click', function (event) {
      event.preventDefault();
        var userData = {
            first_name: firstnameInput.val().trim(),
            last_name: lastnameInput.val().trim(),
            phone: phoneInput.val().trim(),
            location: locationInput.val().trim(),
            username: usernameInput.val().trim(),
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.first_name || !userData.last_name || !userData.phone || !userData.location || !userData.username || !userData.email || !userData.password) {
            return alert("Please don't leave fields blank");
        }

        signUpUser(userData.first_name, userData.last_name, userData.phone, userData.location, userData.username, userData.email, userData.password);
        firstnameInput.val("");
        lastnameInput.val("");
        phoneInput.val("");
        locationInput.val("");
        usernameInput.val("");
        emailInput.val("");
        passwordInput.val("");
        repeatPasswordInput.val("");

    });

    function signUpUser(first_name, last_name, phone, location, username, email, password) {
        $.post('/users/signup', {
            first_name: first_name,
            last_name: last_name,
            phone: phone,
            location: location,
            username: username,
            email: email,
            password: password
        }).then(function (data) {
            if (data.duplicateUser) {
                alert("Sorry, that username is already in use.")
            } else {
                window.location = data.redirect;
            }
        }).catch(function (err) {
            console.log(err);
        });
    }

});