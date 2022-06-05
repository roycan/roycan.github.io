username.placeholder = "Your Name";

/* The three functions of code below are for the customization screen. */
function changeToRed(formElement) {
	let input = formElement.value;
	if (input.length == "") {
	formElement.style.borderColor = "red";
	}
	else {
		changeToGreen(formElement);
	}
}

function changeToGreen(formElement) {
	formElement.style.borderColor = "green";
}

function changeToNormal() {
	username.style.borderColor = "#010530";
	bgColor.style.borderColor = "#010530";
	headColor.style.borderColor = "#010530";
	leftEyeColor.style.borderColor = "#010530";
	rightEyeColor.style.borderColor = "#010530";
	bodyColor.style.borderColor = "#010530";
	
	user2.style.backgroundColor = "#cde3ff";
	userHead2.style.backgroundColor = "#141849";
	leftEye2.style.backgroundColor = "#cde3ff";
	rightEye2.style.backgroundColor = "#cde3ff";
	userBody2.style.backgroundColor = "#141849";
}

/* The two functions below are for the opening and closing of the avatar customization screen.*/
function openCustom() {
	customization.style.transition = "0.2s";
	customization.style.opacity = "1";
	customization.style.visibility = "visible";
}

function closeCustom() {
	if (username.value == "") {
		username.style.borderColor = "red";
		username.placeholder = "This is empty!";
	}
	else {
	customization.style.transition = "0.2s";
	customization.style.opacity = "0";
	customization.style.visibility = "hidden";
	}
}

/* The two functions below are for the opening and closing of the confirmation screen. */
function openConfirmation() {
	confirmationScreen.style.transition = "0.2s";
	confirmationScreen.style.opacity = "1";
	confirmationScreen.style.visibility = "visible";
}

function closeConfirmation() {
	confirmationScreen.style.transition = "0.2s";
	confirmationScreen.style.opacity = "0";
	confirmationScreen.style.visibility = "hidden";
}

function clearAll() {
	localStorage.clear();
	document.location.reload(true);
}

/* The next few functions save the user's avatar. */
/* This is for storing the background color. */
const inputBgColor = document.getElementById("bgColor");
const displayedBgColor = document.getElementById("user2");
const storedBgColor = localStorage.getItem("finalAvatarBgColor");

function a(){
	displayedBgColor.style.backgroundColor = inputBgColor.value;
}

user.style.backgroundColor = storedBgColor;		
displayedBgColor.style.backgroundColor = storedBgColor;
inputBgColor.addEventListener('input', a);

/* This is for storing the head color. */
const inputHeadColor = document.getElementById("headColor");
const displayedHeadColor = document.getElementById("userHead2");
const storedHeadColor = localStorage.getItem("finalAvatarHeadColor");

function b(){
	displayedHeadColor.style.backgroundColor = inputHeadColor.value;
}

userHead.style.backgroundColor = storedHeadColor;	
userHead.style.backgroundColor = storedHeadColor;	
displayedHeadColor.style.backgroundColor = storedHeadColor;	
inputHeadColor.addEventListener('input', b);

/* This is for storing the left eye color. */
const inputLeftEyeColor = document.getElementById("leftEyeColor");
const displayedLeftEyeColor = document.getElementById("leftEye2");
const storedLeftEyeColor = localStorage.getItem("finalAvatarLeftEyeColor");

function c(){
	displayedLeftEyeColor.style.backgroundColor = inputLeftEyeColor.value;
}

leftEye.style.backgroundColor = storedLeftEyeColor;	
displayedLeftEyeColor.style.backgroundColor = storedLeftEyeColor;
inputLeftEyeColor.addEventListener('input', c);

/* This is for storing the right eye color. */
const inputRightEyeColor = document.getElementById("rightEyeColor");
const displayedRightEyeColor = document.getElementById("rightEye2");
const storedRightEyeColor = localStorage.getItem("finalAvatarRightEyeColor");

function d(){
	displayedRightEyeColor.style.backgroundColor = inputRightEyeColor.value;
}

rightEye.style.backgroundColor = storedRightEyeColor;	
displayedRightEyeColor.style.backgroundColor = storedRightEyeColor;
inputRightEyeColor.addEventListener('input', d);

/* This is for storing the body color. */
const inputBodyColor = document.getElementById("bodyColor");
const displayedBodyColor = document.getElementById("userBody2");
const storedBodyColor = localStorage.getItem("finalAvatarBodyColor");

function e(){
	displayedBodyColor.style.backgroundColor = inputBodyColor.value;
}

userBody.style.backgroundColor = storedBodyColor;	
displayedBodyColor.style.backgroundColor = storedBodyColor;
inputBodyColor.addEventListener('input', e);

/* This is for storing the username. */
const inputUsername = document.getElementById("username");
const fixedName = document.getElementById("fixName");
const storedUsername = localStorage.getItem("finalAvatarName");
	
if (inputUsername) {
	fixedName.textContent = storedUsername;
}

if (fixedName.textContent.length > 1) {
	yourName.innerHTML = storedUsername;
	inputUsername.value = storedUsername;
}
inputUsername.addEventListener('input', letter => {
	fixedName.textContent = letter.target.value;
});

/* This is for saving all the data above. */
const saveToLocalStorage = () => {
	localStorage.setItem("finalAvatarBgColor", displayedBgColor.style.backgroundColor);
	localStorage.setItem("finalAvatarHeadColor", displayedHeadColor.style.backgroundColor);
	localStorage.setItem("finalAvatarLeftEyeColor", displayedLeftEyeColor.style.backgroundColor);
	localStorage.setItem("finalAvatarBodyColor", displayedBodyColor.style.backgroundColor);
	localStorage.setItem("finalAvatarRightEyeColor", displayedRightEyeColor.style.backgroundColor);
	localStorage.setItem("finalAvatarName", fixedName.textContent);
}

save.addEventListener('click', saveToLocalStorage);

/* These functions are for showing the user's stats. */
let sum = 0;
let sum2 = 0;
const storedFinalMoney = localStorage.getItem("finalMoney");
const storedFinalAnswers = localStorage.getItem("finalAnswers");

if (storedFinalMoney.length > 0) {
	totalMoney.innerHTML = storedFinalMoney;
}

if (storedFinalAnswers.length > 0) {
	totalCorrectAnswers.innerHTML = storedFinalAnswers;
}
 
 
 