// ----- fire on page load ----- //

$(document).ready(() => {

});

// ----- user info storage ----- //

let userDatabase = [];



// ----- user info class ----- //

class UserData {
    constructor(username, firstName, email, password) {
        this.username = username;
        this.firstName = firstName;
        this.email = email;
        this.password = password;
    };
};

// test classes to populate the array
userDatabase.push(new UserData('adawg53', 'Adam', 'adawg53@email.com', 'password123'));
userDatabase.push(new UserData('mononokay', 'David', 'leachda12@gmail.com', '03091994'));
userDatabase.push(new UserData('ChrisWright515', 'Chris', 'ChrisWright515@email.com', 'iHave2Kids'));
userDatabase.push(new UserData('mildishgambino', 'Donald', 'don-glover@email.com', 'til3005'));






// ----- database functions ----- //

function addUser() {
    userDatabase.push(new UserData(
        $('.sup-user').val(),
        $('.sup-name').val(),
        $('.sup-email').val(),
        $('.sup-password').val()
    ));
}


function checkForInput() {
    if ($('.sup-user').value === '' || $('.sup-name').value === '' || $('.sup-email').value === '' || $('.sup-password').value === '') {
        return false;
    }
    else {
        return true;
    }
}


function userDupeCheck() {
    return userDatabase.some(({ username }) => username === $('.sup-user').value);
}

function emailDupeCheck() {
    return userDatabase.some(({ email }) => email === $('.sup-email').value);
}

function checkConfirmPass() {
    let pass = document.getElementById('sup-password').value
    // $('sup-confirm').textContent  JQUERY wasnt working for some reason
    let confirm = document.getElementById('sup-confirm').value
    if (pass === confirm) {
        return true
    }
    else {
        return false
    }
}



// ----- event functions ----- //

$('.sup-submit').click(() => {
    if (checkForInput() && checkPassReqs() && !userDupeCheck() && !emailDupeCheck() && checkConfirmPass()) {
        addUser();
        // console.log(userDatabase);
        $('.sup-good').show()
        $('.sup-bad').hide()
    }
    else {
        // console.log('error');
        $('.sup-bad').show()
        $('.sup-good').hide()
    }
});



// ----- Go to signup page ----- //
$('.go-to-sup').click(() => {
    $(".form-log").addClass('animate__animated')
    $('.form-log').toggleClass('animate__zoomOutLeft')
    $(".form-log").removeClass('animate__zoomInRight')

    $('.form-sup').css("visibility", "visible")
    $(".form-sup").addClass('animate__animated')
    $(".form-sup").toggleClass('animate__zoomInRight')
    $(".form-sup").removeClass('animate__zoomOutLeft')
});

// ----- Go Back to log-in----- //
$('.back-btn').click(() => {
    $(".form-sup").removeClass('animate__zoomInRight')
    $(".form-sup").addClass('animate__zoomOutLeft')

    $(".form-log").addClass('animate__zoomInRight')
    $(".form-log").removeClass('animate__zoomOutLeft')
});



// ----- Show password requirements ----- //

$('.sup-password').focusin(() => {
    $('.pass-needs').slideDown(500);
    $('.sup-password').focusout(() => {
        $('.pass-needs').slideUp(500);
    });
});



// ----- Signup Password verification ----- //
// i believe we're going to have to use regex for this one
$('.sup-password').on('input', () => {
    let pass = $('.sup-password').val();
    let passLength = pass.length;
    let passUpper = /[A-Z]/.test(pass);
    let passLower = /[a-z]/.test(pass);
    let passNum = /[0-9]/.test(pass);
    let passSpecial = /[^A-Za-z0-9]/.test(pass);

    // $('.sup-password')
    // (passLength < 8 || !passUpper || !passLower || !passNum || !passSpecial) {

    if (passLength >= 8) {
        // console.log("more than 8")
        $('.length-req').addClass("pass-req-check")
        $('.length-req ion-icon').attr("name", "checkmark-outline")
    }
    if (passUpper) {
        // console.log('has uppercase')
        $('.upper-req').addClass("pass-req-check")
        $('.upper-req ion-icon').attr("name", "checkmark-outline")
    }
    if (passLower) {
        // console.log('has lowercase')
        $('.lower-req').addClass("pass-req-check")
        $('.lower-req ion-icon').attr("name", "checkmark-outline")
    }
    if (passNum) {
        // console.log('has number')
        $('.num-req').addClass("pass-req-check")
        $('.num-req ion-icon').attr("name", "checkmark-outline")

    }
    if (passSpecial) {
        // console.log('has special char')
        $('.spec-req').addClass("pass-req-check")
        $('.spec-req ion-icon').attr("name", "checkmark-outline")
    }
    if (passLength < 8 || !passUpper || !passLower || !passNum || !passSpecial) {
        // console.log(false)
    }
    else {
        // console.log(true)
        checkPassReqs()
    }


})
function checkPassReqs() {
    req1 = document.getElementsByClassName('pass-req')[0]
    req2 = document.getElementsByClassName('pass-req')[1]
    req3 = document.getElementsByClassName('pass-req')[2]
    req4 = document.getElementsByClassName('pass-req')[3]
    req5 = document.getElementsByClassName('pass-req')[4]

    // console.log(reqs)
    if (req1.classList.contains('pass-req-check') && req2.classList.contains('pass-req-check') && req3.classList.contains('pass-req-check') && req4.classList.contains('pass-req-check') && req5.classList.contains('pass-req-check')) {
        return true
    }
    else {
        return false
    }
}

// ----- Log-in ----- //

$('.log-submit').click(() => {
    let logPassword = $('.log-pass').val()
    let logUsername = $('.log-user').val()
    let listUsers = []
    let listPass = []
    for (users of userDatabase) {
        listUsers.push(users.username)
        listPass.push(users.password)
    }
    if (listUsers.indexOf(logUsername) > 0 && listPass.indexOf(logPassword) > 0) {
        $('.welcome').show()
        $('.err-mess').hide()
        console.log(listUsers)
        console.log(listPass)
        window.open("http://google.com")
    }
    else if (listUsers.indexOf(logUsername) < 0 || listPass.indexOf(logPassword) < 0) {
        $('.err-mess').show()
        $('.welcome').hide()
    }
})
function checkForInput() {
    if ($('.sup-user').value === '' || $('.sup-name').value === '' || $('.sup-email').value === '' || $('.sup-password').value === '') {
        return false;
    }
    else {
        return true;
    }
}


$('.sup-sub')






// ---------- Landing Page ---------- //


function tran

