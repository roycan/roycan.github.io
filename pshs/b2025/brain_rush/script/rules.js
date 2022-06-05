/* The functions below determine whether or not the user is allowed to play. */
let allowedToPlay = localStorage.getItem("permissionStatus");
if (allowedToPlay == null) {
	allowedToPlay = "no";
}

function checkIfAllowed() {
	if (allowedToPlay == "yes") {
		window.location.href = "playNow.html";
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
