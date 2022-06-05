/* The function below is for starting the game. */
var isPlaying = false;
let warningCount = 0;
username.placeholder = "Your Name";

function startGame() {
	isPlaying = true;
	start.style.visibility = "hidden";
	mainScreen.style.transition = "2s";
	mainScreen.style.opacity = "0";
	mainScreen.style.visibility = "hidden";
	
	user3.style.backgroundColor = storedBgColor;	
	userHead3.style.backgroundColor = storedHeadColor;	
	leftEye3.style.backgroundColor = storedLeftEyeColor;	
	rightEye3.style.backgroundColor = storedRightEyeColor;	
	userBody3.style.backgroundColor = storedBodyColor;	
	
	startTimer();
}

/* This code is for detecting whenever the user switches tabs */
document.addEventListener("visibilitychange", function() {
	warningNumber.innerHTML = warningCount;
	document.title = "WARNING!";
	
	if (warningCount == 5) {
		gameOver();
	}
	  
    if (document.hidden && isPlaying) {
		warning.style.transition = "0.3s";
		warning.style.opacity = "1";
		warning.style.visibility = "visible";
		
		warningCount++;
	}
	else {
		document.title = "Brain Rush";
	}
});

function closeWarning() {
	warning.style.transition = "0.3s";
	warning.style.opacity = "0";
	warning.style.visibility = "hidden";
}

/* The two functions below are for the two timers used in the game. */
const PREP = document.getElementById("prepCountdown");
let timeLeft = 4;
let timeLeft2 = 24;

function startTimer() {	
	let prepTimer = setInterval(function(){
	if(timeLeft <= 0){
		clearInterval(prepTimer);
		PREP.innerHTML = "Go!";
		PREP.style.transition = "1s";
		PREP.style.opacity = "0";
		PREP.style.visibility = "hidden";
		
		if(levelNumber > 1) {
			PREP.style.transition = "1s";
			gameInterface.style.transitionDelay = "1s";
			gameInterface.style.opacity = "1";
			gameInterface.style.visibility = "visible";
			pageCheck();
		}
		
		else { 
			PREP.style.transition = "1s";
			gameInterface.style.transition = "1s";
			gameInterface.style.opacity = "1";
			gameInterface.style.visibility = "visible";
		}
		
		start2ndTimer();
	} else {
		PREP.innerHTML = timeLeft;
	}
	timeLeft -= 1;
	}, 1000);
}

function start2ndTimer() {
	timer = setInterval(function h(){
		if(timeLeft2 <= -1){
			clearInterval(timer);
			checkAnswer();			
		} 
		
		else {
			timerFill.style.transition = "25s";
			timerCountdown.innerHTML = timeLeft2;
			timerFill.style.transitionTimingFunction = "linear";
			timerFill.style.backgroundColor = "#A81B1B";
			timerFill.style.width = "0px";
			
			if (levelNumber == 2){
				timerFill.style.transition = "20s";
			}
			
			if (levelNumber == 3){
				timerFill.style.transition = "15s";
			}
		}
		timeLeft2 -= 1;
		}, 1000);	
}


/* The few functions below control the quiz navigation. */
let levelNumber = 1;
let counter = 0;
let number = 1;
let questionPosition = 0;	

var questions = ["The popular children's song It's Raining, It's Pouring mentions an old man doing what?",
"Which state is known as the Sunshine State?",
" In Destiny, a popular video game series, the player is accompanied by a robot companion. What are these companions called?", 
"Junji Ito’s Uzumaki is one of his most popular works. What does this horror story focus on?",
 "Gorillaz is a band with 4 virtual members. Which one of the choices is not a virtual member of said band?"];
var aChoices = ["Snoring", "Florida", "Lights", "Hair", "2d"];
var bChoices = ["Cooking", "Arizona", "Lightbearers", "Mosquitos", "Murdoc"];
var cChoices = ["Laughing", "Hawaii", "Ghosts", "Spirals", "Noodle"];
var dChoices = ["Yelling", "Pennsylvania", "Shells", "Typhoons", "Sprout"];


function nextQuestion() {
	timeLeft2 = 25;
	
	if (levelNumber == 2) {
		timeLeft2 = 20;
	}
	
	if (levelNumber == 3) {
		timeLeft2 = 15;
	}
	
	number++;
	counter++;
	
	pageCheck();
	
	if  (number !== 6 && number !== 11 && number !== 16) {
			start2ndTimer();
	}
	
	gameChoice1.style.transition = "1s";
	gameChoice1.style.opacity = "1";		
	gameChoice2.style.transition = "1s";
	gameChoice2.style.opacity = "1";		
	gameChoice3.style.transition = "1s";
	gameChoice3.style.opacity = "1";			
	gameChoice4.style.transition = "1s";
	gameChoice4.style.opacity = "1";	
}

function nextPage() {
	number++;
	counter++;	
	
	pageCheck();
}

function previousPage() {
	number--;
	counter--;
	
	pageCheck();
}

/* The function below changes the quiz's content when the previous or next button is pressed */
function pageCheck() {
	
	if (counter < aChoices.length){
		choiceA.innerHTML = aChoices[counter];
		choiceB.innerHTML = bChoices[counter];
		choiceC.innerHTML = cChoices[counter];
		choiceD.innerHTML = dChoices[counter];
	}

	if (counter < questions.length){
		questionNumber.innerHTML = number;
		questionArea.innerHTML = questions[counter];
	}
		
	if (counter == questionPosition) {
		coverNext.style.transition = "1s";
		coverNext.style.opacity = "1";
		coverNext.style.visibility = "visible";
		nextFix.style.visibility = "hidden";
		
		disableFix.style.visibility = "hidden";
		disableFixSubmit.style.visibility = "hidden";
	}	

	if (counter < questionPosition) {
		next.style.visibility = "hidden";
		coverNext.style.visibility = "hidden";	
		nextFix.style.transition = "1s";
		nextFix.style.opacity = "1";
		nextFix.style.visibility = "visible";
		
		disableFix.style.visibility = "visible";
		disableFixSubmit.style.visibility = "visible";
	}
	
	if (questionPosition == 6) {
		coverPrevious.style.transition = "1s";
		coverPrevious.style.opacity = "0";
		coverPrevious.style.visibility = "hidden";
		
		previous.style.transition = "1s";
		previous.style.opacity = "1";
		previous.style.visibility = "visible";
	}
	
	if (counter == 0) {
		coverPrevious.style.transition = "1s";
		coverPrevious.style.opacity = "1";
		coverPrevious.style.visibility = "visible";
		
		previous.style.transition = "1s";
		previous.style.opacity = "0";
		previous.style.visibility = "hidden";
	}
	
	switch(counter) {
		case 0:
			if (levelNumber == 1) {
				choice1.value = "correct";
				choice4.value = "wrong";
				choice1.checked = true;
				
				gameChoice1.style.opacity = "1";		
				gameChoice2.style.opacity = "0.5";		
				gameChoice3.style.opacity = "0.5";			
				gameChoice4.style.opacity = "0.5";
			}
			
			else if (levelNumber == 2) {
				money.innerHTML = "₱ 2,000";
				money2.innerHTML = "₱ 4,000";
				money3.innerHTML = "₱ 8,000";
				money4.innerHTML = "₱ 6,000";
				rewardMoney.innerHTML = "₱ 32,000";
				
				choice2.value = "correct";
				choice4.value = "wrong";
				choice2.checked = true;
				
				gameChoice1.style.opacity = "0.5";		
				gameChoice2.style.opacity = "1";		
				gameChoice3.style.opacity = "0.5";			
				gameChoice4.style.opacity = "0.5";
			}
			
			else if (levelNumber == 3) {
				money.innerHTML = "₱ 64,000";
				money2.innerHTML = "₱ 125,000";
				money3.innerHTML = "₱ 250,000";
				money4.innerHTML = "₱ 500,000";
				rewardMoney.innerHTML = "₱ 1,000,000";
				
				choice2.value = "correct";
				choice3.value = "wrong";
				choice2.checked = true;
				
				gameChoice1.style.opacity = "0.5";		
				gameChoice2.style.opacity = "1";		
				gameChoice3.style.opacity = "0.5";			
				gameChoice4.style.opacity = "0.5";
			}
			
			if (questionPosition == 0) {
				coverPrevious.style.visibility = "hidden";
				fix.checked = true;
				
				gameChoice1.style.opacity = "1";		
				gameChoice2.style.opacity = "1";		
				gameChoice3.style.opacity = "1";			
				gameChoice4.style.opacity = "1";
			}
		
			money.style.textDecoration = "underline";
			money2.style.textDecoration = "none";
			money3.style.textDecoration = "none";
			money4.style.textDecoration = "none";
			rewardMoney.style.textDecoration = "none";
			
		break;
		
		case 1:
			if (levelNumber == 1) {
				choice1.checked = true;
				
				gameChoice1.style.opacity = "1";		
				gameChoice2.style.opacity = "0.5";		
				gameChoice3.style.opacity = "0.5";			
				gameChoice4.style.opacity = "0.5";
			}
			
			else if (levelNumber == 2) {
				choice1.value = "correct";
				choice2.value = "wrong";
				choice1.checked = true;
				
				gameChoice1.style.opacity = "1";		
				gameChoice2.style.opacity = "0.5";		
				gameChoice3.style.opacity = "0.5";			
				gameChoice4.style.opacity = "0.5";
			}
			
			else if (levelNumber == 3) {
				choice3.value = "correct";
				choice2.value = "wrong";
				choice3.checked = true;
				
				gameChoice1.style.opacity = "0.5";		
				gameChoice2.style.opacity = "0.5";		
				gameChoice3.style.opacity = "1";			
				gameChoice4.style.opacity = "0.5";
			}
		
			if (questionPosition == 1) {
				fix.checked = true;
			}
			
			money.style.textDecoration = "none";
			money2.style.textDecoration = "underline";
			money3.style.textDecoration = "none";
			money4.style.textDecoration = "none";
			rewardMoney.style.textDecoration = "none";
			
		break;
		
		case 2:
			if (levelNumber == 1) {
				choice1.value = "wrong";
				choice3.value = "correct";
				choice3.checked = true;
				
				gameChoice1.style.opacity = "0.5";		
				gameChoice2.style.opacity = "0.5";		
				gameChoice3.style.opacity = "1";			
				gameChoice4.style.opacity = "0.5";
			}
			
			else if (levelNumber == 2) {
				choice2.value = "correct";
				choice1.value = "wrong";
				choice2.checked = true;
				
				gameChoice1.style.opacity = "0.5";		
				gameChoice2.style.opacity = "1";		
				gameChoice3.style.opacity = "0.5";			
				gameChoice4.style.opacity = "0.5";
			}
			
			else if (levelNumber == 3) {
				choice4.value = "correct";
				choice3.value = "wrong";
				choice4.checked = true;
				
				gameChoice1.style.opacity = "0.5";		
				gameChoice2.style.opacity = "0.5";		
				gameChoice3.style.opacity = "0.6";			
				gameChoice4.style.opacity = "1";
			}
			if (questionPosition == 2) {
				fix.checked = true;
			}
			
			money.style.textDecoration = "none";
			money2.style.textDecoration = "none";
			money3.style.textDecoration = "underline";
			money4.style.textDecoration = "none";
			rewardMoney.style.textDecoration = "none";
			
		break;
		
		case 3:
			if (levelNumber == 1) {
				choice3.checked = true;
				
				gameChoice1.style.opacity = "0.5";		
				gameChoice2.style.opacity = "0.5";		
				gameChoice3.style.opacity = "1";			
				gameChoice4.style.opacity = "0.5";
			}
			
			else if (levelNumber == 2) {
				choice4.value = "correct";
				choice2.value = "wrong";
				choice4.checked = true;
				
				gameChoice1.style.opacity = "0.5";		
				gameChoice2.style.opacity = "0.5";		
				gameChoice3.style.opacity = "0.5";			
				gameChoice4.style.opacity = "1";
			}
		
			if (questionPosition == 3) {
				fix.checked = true;
				
				gameChoice1.style.opacity = "0.5";		
				gameChoice2.style.opacity = "0.5";		
				gameChoice3.style.opacity = "0.5";			
				gameChoice4.style.opacity = "1";
			}
			
			money.style.textDecoration = "none";
			money2.style.textDecoration = "none";
			money3.style.textDecoration = "none";
			money4.style.textDecoration = "underline";
			rewardMoney.style.textDecoration = "none";
			
		break;
		
		case 4:
			if (levelNumber == 1) {
				choice4.value = "correct";
				choice3.value = "wrong";
				choice4.checked = true;
				
				gameChoice1.style.opacity = "0.5";		
				gameChoice2.style.opacity = "0.5";		
				gameChoice3.style.opacity = "0.5";			
				gameChoice4.style.opacity = "1";
			}
			
			else if (levelNumber == 2) {
				choice3.value = "correct";
				choice4.value = "wrong";
				choice3.checked = true;
				
				gameChoice1.style.opacity = "0.5";		
				gameChoice2.style.opacity = "0.5";		
				gameChoice3.style.opacity = "1";			
				gameChoice4.style.opacity = "0.5";
			}
			
			else if (levelNumber == 3) {
				choice2.value = "correct";
				choice4.value = "wrong";
				choice2.checked = true;
				
				gameChoice1.style.opacity = "0.5";		
				gameChoice2.style.opacity = "1";		
				gameChoice3.style.opacity = "0.5";			
				gameChoice4.style.opacity = "0.5";
			}
		
			money.style.textDecoration = "none";
			money2.style.textDecoration = "none";
			money3.style.textDecoration = "none";
			money4.style.textDecoration = "none";
			rewardMoney.style.textDecoration = "underline";
			rewardMoney.style.color = "#fcc761";
			
			if (questionPosition == 4) {
				fix.checked = true;
			}
		break;
		
		case 5:
			if (levelNumber == 3) {
				summaryCongrats();
			}
			else {
			levelComplete();	
			}
		break;
		
		default:
		alert("If you get this alert, an error has most likely ocurred. Please refresh your browser for good measure.");
	}
}

/* The function below is for the actions done when an answer is submitted. */
let streakCounter = 0;	
	
function checkAnswer() {
	clearAndDisable();
	
	let answer = document.querySelector('input[name="choices"]:checked').value;
	if (answer === "correct") {
		questionPosition++;
		streakCounter += 1;
		answerStreak.innerHTML = streakCounter;
		answerStreak2.innerHTML = streakCounter;
		
		next.style.transition = "0.5s";
		next.style.opacity = "1";
		next.style.visibility = "visible";
		
		coverNext.style.transition = "1s";
		coverNext.style.opacity = "0";
		coverNext.style.visibility = "hidden";
		
		if (number == 5) {
			moneyGained.innerHTML = 1000;
			moneyGained2.innerHTML = 1000;
			moneyGained3.innerHTML = 1000;
			
			questionPosition++;
		}
		
		if (number == 10) {
			moneyGained.innerHTML = 32000;
			moneyGained2.innerHTML = 32000;
			moneyGained3.innerHTML = 32000;
			
			questionPosition++;
		}
	
		if (number == 15) {
			moneyGained.innerHTML = 1000000;
			moneyGained2.innerHTML = 1000000;
			moneyGained3.innerHTML = 1000000;
			
			questionPosition++;
		}
		
		if (questionPosition == 6) {
			coverPrevious.style.transition = "1s";
			coverPrevious.style.opacity = "0";
			coverPrevious.style.visibility = "hidden";	
			
			previous.style.transition = "1s";
			previous.style.opacity = "1";
			previous.style.visibility = "visible";
		}		
	}
	
	else {
		gameOver();
	}
	
	return false;
}

/* This function lets the user know the right or wrong answer. It also prevents the user from interacting with features after submission. */
let disableFix = document.getElementById("coverForm");
let disableFixSubmit = document.getElementById("coverSubmit");
let disableFixTimer = document.getElementById("coverGameTimer");

function clearAndDisable() {
	timerFill.style.transition = "2s";
	timerFill.style.backgroundColor = "#1BA832";
	timerFill.style.width = "190px";

	clearInterval(timer);
	disableFix.style.visibility = "visible";
	disableFixSubmit.style.visibility = "visible";
	
	if (choice1.value == "correct") {
		gameChoice2.style.transition = "1s";
		gameChoice2.style.opacity = "0.5";		
		gameChoice3.style.transition = "1s";
		gameChoice3.style.opacity = "0.5";		
		gameChoice4.style.transition = "1s";
		gameChoice4.style.opacity = "0.5";
	}
	
	if (choice2.value == "correct") {
		gameChoice1.style.transition = "1s";
		gameChoice1.style.opacity = "0.5";		
		gameChoice3.style.transition = "1s";
		gameChoice3.style.opacity = "0.5";		
		gameChoice4.style.transition = "1s";
		gameChoice4.style.opacity = "0.5";
	}	
	
	if (choice3.value == "correct") {
		gameChoice1.style.transition = "1s";
		gameChoice1.style.opacity = "0.5";		
		gameChoice2.style.transition = "1s";
		gameChoice2.style.opacity = "0.5";		
		gameChoice4.style.transition = "1s";
		gameChoice4.style.opacity = "0.5";
	}	
	
	if (choice4.value == "correct") {
		gameChoice1.style.transition = "1s";
		gameChoice1.style.opacity = "0.5";		
		gameChoice2.style.transition = "1s";
		gameChoice2.style.opacity = "0.5";		
		gameChoice3.style.transition = "1s";
		gameChoice3.style.opacity = "0.5";
	}
}

/* This function is for when the user receives a game over. */
function gameOver(){
	isPlaying = false;
	clearInterval(timer);
	
	timerFill.style.backgroundColor = "#1BA832";
	timerFill.style.width = "190px";
	
	gameInterface.style.transition = "3s";
	gameInterface.style.transitionDelay = "2s";
	gameInterface.style.opacity = "0.8";
	
	gameOverScreen.style.transition = "3s";
	gameOverScreen.style.transitionDelay = "2s";
	gameOverScreen.style.opacity = "1";
	gameOverScreen.style.visibility = "visible";
	
	sum =  JSON.parse(storedFinalMoney) + parseInt(moneyGained3.innerHTML);	
	totalMoney.innerHTML = sum;	
	localStorage.setItem("finalMoney", sum);	

	sum2 = JSON.parse(storedFinalAnswers) + parseInt(answerStreak2.innerHTML);
	totalCorrectAnswers.innerHTML = sum2;
	localStorage.setItem("finalAnswers", sum2);	
	
	saveScore();
}


/* This function notifies the user if a level has been completed. */
function levelComplete() {
	gameInterface.style.transition = "1s";
	gameInterface.style.opacity = "0.8";
	
	levelCompleteScreen.style.transition = "3s";
	levelCompleteScreen.style.opacity = "1";
	levelCompleteScreen.style.visibility = "visible";
	
	levelConfetti.style.transition = "3s";
	levelConfetti.style.opacity = "1";
	levelConfetti.style.visibility = "visible";
	
	counter = 0;
	questionPosition = 0;
	levelNumber++;
	
	if (levelNumber == 2) {
		timeLeft2 = 20;
		questions = ["What is the molar mass of water?","Globe and Jerusalem are a type of what?",
		"Where would you wear a peruke?","Which of these is a type of hat?",
		"In the popular 2022 film, The Batman, who were the twin actors who played as the bouncers at the Iceberg Lounge?"];
		aChoices = ["15.99 g/mol", "Artichokes", "Around the neck", "Sausage Roll", "Royer Twins"];
		bChoices = ["18.02 g/mol", "Bears", "On the head", "Scrambled Egg", "Kinsman Twins"];
		cChoices = ["10.78 g/mol", "Clocks", "Around the waist", "Marmalade", "Carver Twins"];
		dChoices = ["24.36 g/mol", "Diamonds", "On the wrist", "Pork Pie", "Phelps Twins"];
	}
	
	if (levelNumber == 3) {
		timeLeft2 = 15;
		questions = ["What country has competed the most times in the Summer Olympics yet hasn’t won a gold medal?",
		"12 Minutes, a 2021 video game, features a star-studded cast. The voice actor of the main character also plays a role in the X-men film series. Who is this actor?",
		"Now used to refer to a cat, the word tabby is derived from the name of a district of what world capital?",
		"What is the painting “La Gioconda” more usually known as?",
		"The creator of this game is Victoria Alexandra I. Ordona. What does I. stand for?"];
		aChoices = ["France", "Jennifer Lawrence", "Moscow", "The Last Supper", "Inay"];
		bChoices = ["Philippines", "Hugh Jackman", "New Delhi","The American Gothic", "Ibay"];
		cChoices = ["Norway", "Jame McAvoy", "Cairo", "The Starry Night", "Inday"];
		dChoices = ["West Germany", "Michael Fassbender", "Baghdad", "The Mona Lisa", "Iday"];
	}
		
}

function newLevel() {
	levelCompleteScreen.style.transition = "0.2s";
	levelCompleteScreen.style.opacity = "0";
	levelCompleteScreen.style.visibility = "hidden";
	levelConfetti.style.transition = "0.5s";
	levelConfetti.style.opacity = "0";
	levelConfetti.style.visibility = "hidden";
	
	gameInterface.style.transition = "1s";
	gameInterface.style.opacity = "1";
	gameInterface.style.opacity = "0";
	
	disableFix.style.visibility = "hidden";
	disableFixSubmit.style.visibility = "hidden";
	
	PREP.style.transitionDelay = "1s";
	PREP.style.transition = "1s";
	PREP.style.opacity = "1";
	PREP.style.visibility = "visible";
	
	rewardMoney.style.color = "#cde3ff";
	levelNum.innerHTML = levelNumber;
	startTimer();
}

/*This function shows the user's final scores and congratulates them of their winnings. */		
function summaryCongrats() {
	isPlaying = false;
	
	gameInterface.style.transition = "1s";
	gameInterface.style.opacity = "0";
	gameInterface.style.visibility = "hidden";
	
	levelConfetti.style.transition = "1s";
	levelConfetti.style.opacity = "0";
	
	levelConfetti2.style.transition = "1s";
	levelConfetti2.style.opacity = "1";
	levelConfetti2.style.visibility = "visible";
	
	confettiHeader.style.transition = "1s";
	confettiHeader.style.opacity = "1";
	confettiHeader.style.visibility = "visible";
	
	confettiText.style.transition = "1s";
	confettiText.style.opacity = "1";
	confettiText.style.visibility = "visible";
	
	confettiButton1.style.transition = "1s";
	confettiButton1.style.opacity = "1";
	confettiButton1.style.visibility = "visible";
	
	confettiButton2.style.transition = "1s";
	confettiButton2.style.opacity = "1";
	confettiButton2.style.visibility = "visible";
	
	sum =  JSON.parse(storedFinalMoney) + parseInt(moneyGained3.innerHTML);	
	totalMoney.innerHTML = sum;	
	localStorage.setItem("finalMoney", sum);	

	sum2 = JSON.parse(storedFinalAnswers) + parseInt(answerStreak2.innerHTML);
	totalCorrectAnswers.innerHTML = sum2;
	localStorage.setItem("finalAnswers", sum2);	
	
	saveScore();
}	

/* The code below saves the user's stats whenever a game is finished */
let gamesPlayed = localStorage.getItem("gamesPlayed");

if (gamesPlayed == null) {
	gamesPlayed = 0;
}

function saveScore(){
	var storedScores = JSON.parse(localStorage.getItem("allSaved"));
	if (storedScores == null) {
		storedScores = [];
	}
	
	var saveStreak = answerStreak2.innerHTML;
	var saveMoney = moneyGained3.innerHTML;
	var today = new Date();
	var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	
	var storedUsername = localStorage.getItem("finalAvatarName");
	if (storedUsername == null) storedUsername = "Player";
	var save = {
		"name": storedUsername,
		"money": JSON.parse(saveMoney),
		"streak": JSON.parse(saveStreak),
		"date": date
	};
	
	localStorage.setItem("save", JSON.stringify(save))
	storedScores.push(save);
	localStorage.setItem("allSaved", JSON.stringify(storedScores));
	localStorage.setItem("gamesPlayed", JSON.parse(gamesPlayed) + 1);
}




