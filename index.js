// Grab HTML p tag which will populate score total
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let homePoints = 0;
let guestPoints = 0;

function updateLeader() {
    if (homePoints > guestPoints) {
        homeScore.classList.add('leader');
        guestScore.classList.remove('leader');
    } else if (guestPoints > homePoints) {
        guestScore.classList.add('leader');
        homeScore.classList.remove('leader');
    } else {
        // If scores are tied, remove the 'leader' class from both
        homeScore.classList.remove('leader');
        guestScore.classList.remove('leader');
    }
}

function addOneHome() {
    homePoints++;
    homeScore.textContent = homePoints;
    updateLeader();
}

function addTwoHome() {
    homePoints += 2;
    homeScore.textContent = homePoints;
    updateLeader();
}

function addThreeHome() {
    homePoints += 3;
    homeScore.textContent = homePoints;
    updateLeader();
}

// Guest functions
function addOneGuest() {
    guestPoints++;
    guestScore.textContent = guestPoints;
    updateLeader();
}

function addTwoGuest() {
    guestPoints += 2;
    guestScore.textContent = guestPoints;
    updateLeader();
}

function addThreeGuest() {
    guestPoints += 3;
    guestScore.textContent = guestPoints;
    updateLeader();
}

// Reset function
function reset() {
    homePoints = 0;
    guestPoints = 0;
    homeScore.textContent = homePoints;
    guestScore.textContent = guestPoints;
    homeScore.classList.remove('leader');
    guestScore.classList.remove('leader');
}
