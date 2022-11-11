// ----- user info class ----- //

class UserData {
    constructor(username, firstName, email, password) {
        this.username = username;
        this.firstName = firstName;
        this.email = email;
        this.password = password;
    }
}



// ----- user info storage ----- //

let userDatabase = [];




// ----- fire on page load ----- //

$(document).ready(() => {
    console.log('test');
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


$('.sup-submit').click(() => {

})