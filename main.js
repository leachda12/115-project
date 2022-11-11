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
    if (userDatabase.forEach(e => e.name === $('.sup-name').value) && userDatabase.forEach(e => e.username === $('.sup-user').value))
};