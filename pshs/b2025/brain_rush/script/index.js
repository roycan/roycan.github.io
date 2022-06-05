/* This is for the welcome message. It only appears when the browser is closed and opened again. */
let welcome = sessionStorage.getItem("welcomeMessage");

if (welcome == null) {
	welcome = 1;
}

function closePopUp() {
  popUp.style.transition = "0.5s";
  popUp.style.opacity = "0";
  popUp.style.visibility = "hidden";
  welcome++; 
  sessionStorage.setItem("welcomeMessage", welcome);
}

if (typeof(Storage)!=="undefined"){ 
	if (welcome == 1) {
		popUp.style.visibility = "visible";
		popUpMessage.innerHTML = "Welcome to Brain Rush!";
		storeNewData.style.visibility = "visible";
		openCustom();
	
		if (storedUsername.length > 0) {
			popUpMessage.innerHTML = "Welcome back " + storedUsername + "!";
			storeNewData.value = "Resume";
			closeCustom();
		}
	}
	
	else {
		popUp.style.visibility = "hidden";
	}
	
	sessionStorage.setItem("WelcomeMessage", welcome + 1);
}

else {
	alert("Your browser does not support local storage. Some features will be unavailable.");
}

/* This ensures that the user can go to the game when permission is granted. */
let allowedToPlay = localStorage.getItem("permissionStatus");
if (allowedToPlay == null) {
	allowedToPlay = "no";
}

function checkIfAllowed() {
	if (allowedToPlay == "yes") {
		window.location.href = "htdocs/playNow.html";
	}
	else {
		playPermission.style.opacity = "0.2s";
		playPermission.style.opacity = "1";
		playPermission.style.visibility = "visible";
	}
}

function closePermissionToPlay() {
	playPermission.style.transition = "0.2s";
	playPermission.style.opacity = "0";
	playPermission.style.visibility = "hidden";
}

const saveToLocalStorage2 = () => {
	if (readRules.checked) {	
		localStorage.setItem("permissionStatus", readRules.value);
	}
}

allow.addEventListener('click', saveToLocalStorage2);

function showMore() {
	welcomeImage.style.visibility = "hidden";	
	welcomeText.style.visibility = "hidden";	
	subText.style.visibility = "hidden";	
	readMore.style.visibility = "hidden";	

	details.style.opacity = "1";
	details.style.visibility = "visible";
}
	
	