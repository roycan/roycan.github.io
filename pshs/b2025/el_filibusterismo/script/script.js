const myQuestions = [
  {
    question: "1. Ano ang planong inimungkahi ni Simoun para mapabilis ang takbo ng mga bapor na katulad ng Tabo?",
    answers: {
      a: "Ipaganda ang imprastraktura ng mga lawa",
      b: "Bumili ng bagong mga Tabor mula sa mga Tsino",
      c: "Magpalaki ng mga itik",
      d: "Gumawa ng bagong canal gamit ang sapilitang paggawa"
    },
    correctAnswer: "D",
    answered: false
  },
  {
    question: "2. Sino ang natira sa kulungan sa Kabanata 31?",
    answers: {
      a: "Isagani",
      b: "Basilio",
      c: "Makaraig",
      d: "Huli"
    },
    correctAnswer: "B",
    answered: false
  },
  {
    question: "3. Ano ang ginawa ni Padre Florentino sa kayamanan ni Simoun?",
    answers: {
      a: "Ginamit para sa sarili",
      b: "Ibinigay sa Simbahan upang gamitin laban sa  rebelde",
      c: "Itinapon sa dagat",
      d: "Pinagbili ng armas para makatulong sa mga rebel"
    },
    correctAnswer: "C",
    answered: false
  },
  {
    question: "4. Sino ang naging Matanglawin?",
    answers: {
      a: "Cabesang Tales",
      b: "Tandang Selo",
      c: "Isagani",
      d: "Basilio"
    },
    correctAnswer: "A",
    answered: false
  },
  {
    question: "5. Ano ang pangalang ginamit ni Tano?",
    answers: {
      a: "Mautang",
      b: "Gabriel",
      c: "Carolino",
      d: "Ybanez"
    },
    correctAnswer: "C",
    answered: false
  }
];

var qstnNo = 0; //current question number
const maxVal = myQuestions.length;
var correctInput = 0;

localStorage.setItem("attempts", 0);//current attempt number
localStorage.setItem("quizDone", false);

function next(){
  if ((qstnNo==maxVal-1)&&(myQuestions[qstnNo].answered==true)){
    //intercepts the if statement below if the last question is reached
    console.log("Next button pressed on last question, were going to brazil");
    
    localStorage.setItem("score", correctInput);//set score tally
    localStorage.setItem("quizDone", true);
    localStorage.setItem("amountQuestions", maxVal);

    window.location.href = "website4.html";//go to website 4 for score tally   
    return
  }
  
  if (((qstnNo >=0)&&!(qstnNo>=maxVal-1))&&(myQuestions[qstnNo].answered==true)){ 
    console.log(qstnNo+": "+ "Passed next first test") 
    qstnNo ++;
  }
  else{
    alert("You have not submitted your answer yet. Please press submit before proceeding to the next question.");
    return
  }

  let question= myQuestions[qstnNo].question;
  document.getElementById("question").innerHTML = question;

  let choice1 = myQuestions[qstnNo].answers.a;
  document.getElementById("btn1").innerHTML = choice1;

  let choice2 = myQuestions[qstnNo].answers.b;
  document.getElementById("btn2").innerHTML = choice2;

  let choice3 = myQuestions[qstnNo].answers.c;
  document.getElementById("btn3").innerHTML = choice3;

  let choice4 = myQuestions[qstnNo].answers.d;
  document.getElementById("btn4").innerHTML = choice4;

  document.body.style.backgroundColor = "#F6F6F2";
  }

function prev(){
  if (!(qstnNo <= 0)){
    qstnNo = qstnNo -1;  
  }

  let question= myQuestions[qstnNo].question;
  document.getElementById("question").innerHTML = question;

  let choice1 = myQuestions[qstnNo].answers.a;
  document.getElementById("btn1").innerHTML = choice1;

  let choice2 = myQuestions[qstnNo].answers.b;
  document.getElementById("btn2").innerHTML = choice2;

  let choice3 = myQuestions[qstnNo].answers.c;
  document.getElementById("btn3").innerHTML = choice3;

  let choice4 = myQuestions[qstnNo].answers.d;
  document.getElementById("btn4").innerHTML = choice4;
}

function validate(){ 
  //first function to be called upon submit
  //checks if there is user input
  //find checked choice

  let choiceCaller;
  let userInput;
  let currentChoice; 
  
  if ((choice1.checked||choice2.checked||choice3.checked||choice4.checked)&&(myQuestions[qstnNo].answered!=true)){ 
    myQuestions[qstnNo].answered = true; //make it so that question had submission

    for(i=1;i<5;i++){ 
      choiceCaller="choice";
      choiceCaller = choiceCaller + i;
      currentChoice = document.getElementById(choiceCaller);

      if (currentChoice.checked){ //checks if current choice is checked
        console.log("User input: " + currentChoice.value);
        console.log("Answered?: "+ myQuestions[qstnNo].answered);
        console.log("Respond:" + myQuestions.answered!=true);
        userInput = currentChoice.value; //if checked, currentChoice = userInput
        checker(userInput)
        break
      }
    }
  }
  else{
    alert("Either you have no choice checked or you have already submitted your answer")
    return
  }
}

function checker(userInput){
  correctChoice = myQuestions[qstnNo].correctAnswer
  console.log("Correct Answer: " + correctChoice);
  console.log("User Input: " + userInput);

  if (userInput == correctChoice){ correct() } 
  else { wrong() }
}

function correct(){
  //changes color of user input and body background to bright green
  console.log("User input was Right");
  document.body.style.backgroundColor = "green";
  correctInput ++;
}

function wrong(){
  //changes color of user input and body background to red
  console.log("User input was wrong");
  document.body.style.backgroundColor = "red";
}
