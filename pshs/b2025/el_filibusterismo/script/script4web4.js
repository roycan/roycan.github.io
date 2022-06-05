//prints score and attempt from local storage here

//score
let score = String(localStorage.getItem("score"));
console.log("Score: " + score);
let perfectScore = String(localStorage.getItem("amountQuestions"));
console.log("Perfect: " + perfectScore);
toBePrinted = "Your score is " + score + " out of " + perfectScore;
console.log(toBePrinted);

//verdict
let verdict = "";
if (score == perfectScore){
    verdict = "Congratulations! You got all the questions correct!";
}
else if ((score < perfectScore)&&(score > perfectScore/2)){
    verdict = "You got more than half of the questions correct. Keep trying!";
}
else{
    verdict = "You got less than half of the questions correct. Try again!";
}


if (localStorage.getItem("quizDone")=="true"){
    document.getElementById("score").innerHTML = toBePrinted;
    document.getElementById("verdict").innerHTML = verdict;
    localStorage.clear
}
else {
    alert = "You have not finished the quiz yet. You will be redirected to the quiz page.";
    window.location.href = "website2.html";
}





