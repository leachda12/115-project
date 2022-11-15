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
        pageTransfer()
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

const canvas = document.getElementById('home-cover');

// $(document).ready(() => {
//     canvas.style.opacity = 1;
// })


function pageTransfer() {
    $('.container').fadeOut(500);
    $('.form-log').fadeOut(500);
    // $('html').animate({background: 'none'}, 3000);
    $('#home-cover').animate({opacity: 1}, 5000);
}
const resizeRendererToDisplaySize = (renderer) => {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    // resize only when necessary
    if (needResize) {
        //3rd parameter `false` to change the internal canvas size
        renderer.setSize(width, height, false);
    }
    return needResize;
};

let xpos = 0;
let ypos = 0;

document.addEventListener('mousemove', e => {
    xpos = e.pageX;
    ypos = e.pageY;
    console.log(xpos)
});

const getRandomParticlePos = (particleCount) => {
    const starr = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
        starr[i] = (Math.random() - 0.5) * 8;
    }
    return starr;
}

function nightSky() {
    const homePage = document.getElementById('home-cover');
    const renderer = new THREE.WebGLRenderer({ canvas: homePage });
    renderer.setClearColor(new THREE.Color('#200f33'));
    const fov = 75;
    const aspect = 2;
    const near = 0.1;
    const far = 5;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 2;
    const scene = new THREE.Scene();
    // renderer.render(scene, camera);

    const color = 0xfffff,
        intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);

    const boxWidth = 1,
        boxHeight = 1,
        boxDepth = 1;
    // const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
    // const material = new THREE.MeshPhongMaterial({color: 0x44aa88});
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(getRandomParticlePos(400), 3));
    const material = new THREE.PointsMaterial({ size: 0.05, /*color: 0x44aa88*/ })
    const cube = new THREE.Points(geometry, material);

  scene.add(cube);
  const render = (time) => {
    time *= 0.001; 
    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }
    cube.rotation.x = ypos * 0.001;
    cube.rotation.y = xpos * 0.001;

    renderer.render(scene, camera);
    requestAnimationFrame(render);
  };
  requestAnimationFrame(render);
};

nightSky();

