//Register user to start the game
//after registration redirect to game page
//
window.onload = function() {
    //check session

    let player = sessionStorage.getItem('current');
    if (player != null) {
        window.location = 'game.html';
    }
}

function maybeRegisterUserToPlay() {

    //save user to localStorage no duplicate
    let user_email = document.getElementById('email').value;
    let fullname = document.getElementById('fullname').value;

    if (!window.localStorage) {
        // localStorage not supported
        alert('Please use latest browser instead to play');
    }
    //alert(user_email);

    let player = JSON.parse(localStorage.getItem(user_email));


    if (player == null) {

        //set user 
        localStorage.setItem(user_email, JSON.stringify({
            name: fullname,
            email: user_email,
            points: 0,
        }));
    }

    sessionStorage.setItem('current', user_email);
    window.location = 'game.html';
    return false;
}

/** display all players and their points */