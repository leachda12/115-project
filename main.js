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



// ----- fire on page load ----- //

$(document).ready(() => {
    
});



// ----- database functions ----- //

function addUser() {
    userDatabase.push(new UserData(
        $('.sup-user').value,
        $('.sup-name').value,
        $('.sup-email').value,
        $('.sup-password').value
    ));
}

function checkUser(u) {
    
}

function checkPass() {

}

// ----- event functions ----- //

// ----- Go to signup page ----- //
$('.go-to-sup').click(() => {
    console.log('test');
    $(".form-log").css("transform", "scale(0.0, 0.0)")
    $(".form-sup").css({"transform": "scale(1.0,1.0)", "visibility": "visible"})
});
// ----- Show password requirements ----- //
$('.sup-password').click(() => {
    console.log('test');
    $(".pass-needs").css("display", "block")
});


// $('.sup-submit').click(() => {
//     if (userDatabase.forEach(e => e.name === $('.sup-name').value) && userDatabase.forEach(e => e.username === $('.sup-user').value)){}
// }


// ----- Signup Password verification ----- //
$('.sup-password').keyup(() => {
    var length = $('.sup-password').val()
    if(length.length >= 8){
        console.log('test')
        $('.upper-req').removeClass("pass-reqX")
        $('.upper-req').css("color", "green")
        $('.upper-req').attr("name" , "checkmark-outline")
    }
    
})
