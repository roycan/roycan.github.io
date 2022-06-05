/* The few functions below save the total games played. */
let totalGames = localStorage.getItem("gamesPlayed");

if (totalGames !== null) {
	totalNumber.innerHTML = totalGames;
}

/* All the functions below are for getting all the scores and sorting them in the table. */
let allScores = localStorage.getItem("allSaved");
let storedScores = JSON.parse(localStorage.getItem("allSaved"));

var sortedArray = storedScores.sort(function(a, b) {
  if (a.streak == b.streak) {
    return b.money - a.money;
  }
  return a.streak - b.streak;
});

sortedArray.reverse();


/* The lengthy code below is to ensure that no problems occur when displaying the scores. */
if (sortedArray.length == 1) {
	name1.innerHTML = sortedArray[0].name;
	wealth1.innerHTML = "₱ " + sortedArray[0].money;
	streak1.innerHTML = sortedArray[0].streak;
	date1.innerHTML = sortedArray[0].date;
}
if (sortedArray.length == 2) {
	name1.innerHTML = sortedArray[0].name;
	name2.innerHTML = sortedArray[1].name;
	
	wealth1.innerHTML = "₱ " + sortedArray[0].money;
	wealth2.innerHTML = "₱ " + sortedArray[1].money;
	
	streak1.innerHTML = sortedArray[0].streak;
	streak2.innerHTML = sortedArray[1].streak;
	
	date1.innerHTML = sortedArray[0].date;
	date2.innerHTML = sortedArray[1].date;
}
if (sortedArray.length == 3) {
	name1.innerHTML = sortedArray[0].name;
	name2.innerHTML = sortedArray[1].name;
	name3.innerHTML = sortedArray[2].name;
	
	wealth1.innerHTML = "₱ " + sortedArray[0].money;
	wealth2.innerHTML = "₱ " + sortedArray[1].money;
	wealth3.innerHTML = "₱ " + sortedArray[2].money;
	
	streak1.innerHTML = sortedArray[0].streak;
	streak2.innerHTML = sortedArray[1].streak;
	streak3.innerHTML = sortedArray[2].streak;
	
	date1.innerHTML = sortedArray[0].date;
	date2.innerHTML = sortedArray[1].date;
	date3.innerHTML = sortedArray[2].date;
}
if (sortedArray.length == 4) {
	name1.innerHTML = sortedArray[0].name;
	name2.innerHTML = sortedArray[1].name;
	name3.innerHTML = sortedArray[2].name;
	name4.innerHTML = sortedArray[3].name;
	
	wealth1.innerHTML = "₱ " + sortedArray[0].money;
	wealth2.innerHTML = "₱ " + sortedArray[1].money;
	wealth3.innerHTML = "₱ " + sortedArray[2].money;
	wealth4.innerHTML = "₱ " + sortedArray[3].money;
	
	streak1.innerHTML = sortedArray[0].streak;
	streak2.innerHTML = sortedArray[1].streak;
	streak3.innerHTML = sortedArray[2].streak;
	streak4.innerHTML = sortedArray[3].streak;
	
	date1.innerHTML = sortedArray[0].date;
	date2.innerHTML = sortedArray[1].date;
	date3.innerHTML = sortedArray[2].date;
	date4.innerHTML = sortedArray[3].date;
}
if (sortedArray.length == 5) {
	name1.innerHTML = sortedArray[0].name;
	name2.innerHTML = sortedArray[1].name;
	name3.innerHTML = sortedArray[2].name;
	name4.innerHTML = sortedArray[3].name;
	name5.innerHTML = sortedArray[4].name;
	
	wealth1.innerHTML = "₱ " + sortedArray[0].money;
	wealth2.innerHTML = "₱ " + sortedArray[1].money;
	wealth3.innerHTML = "₱ " + sortedArray[2].money;
	wealth4.innerHTML = "₱ " + sortedArray[3].money;
	wealth5.innerHTML = "₱ " + sortedArray[4].money;
	
	streak1.innerHTML = sortedArray[0].streak;
	streak2.innerHTML = sortedArray[1].streak;
	streak3.innerHTML = sortedArray[2].streak;
	streak4.innerHTML = sortedArray[3].streak;
	streak5.innerHTML = sortedArray[4].streak;
	
	date1.innerHTML = sortedArray[0].date;
	date2.innerHTML = sortedArray[1].date;
	date3.innerHTML = sortedArray[2].date;
	date4.innerHTML = sortedArray[3].date;
	date5.innerHTML = sortedArray[4].date;
}
if (sortedArray.length == 6) {
	name1.innerHTML = sortedArray[0].name;
	name2.innerHTML = sortedArray[1].name;
	name3.innerHTML = sortedArray[2].name;
	name4.innerHTML = sortedArray[3].name;
	name5.innerHTML = sortedArray[4].name;	
	name6.innerHTML = sortedArray[5].name;
	
	wealth1.innerHTML ="₱ " +  sortedArray[0].money;
	wealth2.innerHTML = "₱ " + sortedArray[1].money;
	wealth3.innerHTML = "₱ " + sortedArray[2].money;
	wealth4.innerHTML = "₱ " + sortedArray[3].money;
	wealth5.innerHTML = "₱ " + sortedArray[4].money;
	wealth6.innerHTML = "₱ " + sortedArray[5].money;

	streak1.innerHTML = sortedArray[0].streak;
	streak2.innerHTML = sortedArray[1].streak;
	streak3.innerHTML = sortedArray[2].streak;
	streak4.innerHTML = sortedArray[3].streak;
	streak5.innerHTML = sortedArray[4].streak;
	streak6.innerHTML = sortedArray[5].streak;
	
	date1.innerHTML = sortedArray[0].date;
	date2.innerHTML = sortedArray[1].date;
	date3.innerHTML = sortedArray[2].date;
	date4.innerHTML = sortedArray[3].date;
	date5.innerHTML = sortedArray[4].date;
	date6.innerHTML = sortedArray[5].date;
}
if (sortedArray.length == 7) {
	name1.innerHTML = sortedArray[0].name;
	name2.innerHTML = sortedArray[1].name;
	name3.innerHTML = sortedArray[2].name;
	name4.innerHTML = sortedArray[3].name;
	name5.innerHTML = sortedArray[4].name;	
	name6.innerHTML = sortedArray[5].name;	
	name7.innerHTML = sortedArray[6].name;	
	
	wealth1.innerHTML = "₱ " + sortedArray[0].money;
	wealth2.innerHTML = "₱ " + sortedArray[1].money;
	wealth3.innerHTML = "₱ " + sortedArray[2].money;
	wealth4.innerHTML = "₱ " + sortedArray[3].money;
	wealth5.innerHTML = "₱ " + sortedArray[4].money;
	wealth6.innerHTML = "₱ " + sortedArray[5].money;
	wealth7.innerHTML = "₱ " + sortedArray[6].money;
	
	streak1.innerHTML = sortedArray[0].streak;
	streak2.innerHTML = sortedArray[1].streak;
	streak3.innerHTML = sortedArray[2].streak;
	streak4.innerHTML = sortedArray[3].streak;
	streak5.innerHTML = sortedArray[4].streak;
	streak6.innerHTML = sortedArray[5].streak;
	streak7.innerHTML = sortedArray[6].streak;
	
	date1.innerHTML = sortedArray[0].date;
	date2.innerHTML = sortedArray[1].date;
	date3.innerHTML = sortedArray[2].date;
	date4.innerHTML = sortedArray[3].date;
	date5.innerHTML = sortedArray[4].date;
	date6.innerHTML = sortedArray[5].date;
	date7.innerHTML = sortedArray[6].date;
}
if (sortedArray.length == 8) {
	name1.innerHTML = sortedArray[0].name;
	name2.innerHTML = sortedArray[1].name;
	name3.innerHTML = sortedArray[2].name;
	name4.innerHTML = sortedArray[3].name;
	name5.innerHTML = sortedArray[4].name;	
	name6.innerHTML = sortedArray[5].name;	
	name7.innerHTML = sortedArray[6].name;	
	name8.innerHTML = sortedArray[7].name;	
	
	wealth1.innerHTML = "₱ " + sortedArray[0].money;
	wealth2.innerHTML = "₱ " + sortedArray[1].money;
	wealth3.innerHTML = "₱ " + sortedArray[2].money;
	wealth4.innerHTML = "₱ " + sortedArray[3].money;
	wealth5.innerHTML = "₱ " + sortedArray[4].money;
	wealth6.innerHTML = "₱ " + sortedArray[5].money;
	wealth7.innerHTML = "₱ " + sortedArray[6].money;
	wealth8.innerHTML = "₱ " + sortedArray[7].money;
	
	streak1.innerHTML = sortedArray[0].streak;
	streak2.innerHTML = sortedArray[1].streak;
	streak3.innerHTML = sortedArray[2].streak;
	streak4.innerHTML = sortedArray[3].streak;
	streak5.innerHTML = sortedArray[4].streak;
	streak6.innerHTML = sortedArray[5].streak;
	streak7.innerHTML = sortedArray[6].streak;
	streak8.innerHTML = sortedArray[7].streak;
	
	date1.innerHTML = sortedArray[0].date;
	date2.innerHTML = sortedArray[1].date;
	date3.innerHTML = sortedArray[2].date;
	date4.innerHTML = sortedArray[3].date;
	date5.innerHTML = sortedArray[4].date;
	date6.innerHTML = sortedArray[5].date;
	date7.innerHTML = sortedArray[6].date;
	date8.innerHTML = sortedArray[7].date;
}
if (sortedArray.length == 9) {
	name1.innerHTML = sortedArray[0].name;
	name2.innerHTML = sortedArray[1].name;
	name3.innerHTML = sortedArray[2].name;
	name4.innerHTML = sortedArray[3].name;
	name5.innerHTML = sortedArray[4].name;	
	name6.innerHTML = sortedArray[5].name;	
	name7.innerHTML = sortedArray[6].name;	
	name8.innerHTML = sortedArray[7].name;	
	name9.innerHTML = sortedArray[8].name;	
	
	wealth1.innerHTML = "₱ " + sortedArray[0].money;
	wealth2.innerHTML = "₱ " + sortedArray[1].money;
	wealth3.innerHTML = "₱ " + sortedArray[2].money;
	wealth4.innerHTML = "₱ " + sortedArray[3].money;
	wealth5.innerHTML = "₱ " + sortedArray[4].money;
	wealth6.innerHTML = "₱ " + sortedArray[5].money;
	wealth7.innerHTML = "₱ " + sortedArray[6].money;
	wealth8.innerHTML = "₱ " + sortedArray[7].money;
	wealth9.innerHTML = "₱ " + sortedArray[8].money;
	
	streak1.innerHTML = sortedArray[0].streak;
	streak2.innerHTML = sortedArray[1].streak;
	streak3.innerHTML = sortedArray[2].streak;
	streak4.innerHTML = sortedArray[3].streak;
	streak5.innerHTML = sortedArray[4].streak;
	streak6.innerHTML = sortedArray[5].streak;
	streak7.innerHTML = sortedArray[6].streak;
	streak8.innerHTML = sortedArray[7].streak;
	streak9.innerHTML = sortedArray[8].streak;
	
	date1.innerHTML = sortedArray[0].date;
	date2.innerHTML = sortedArray[1].date;
	date3.innerHTML = sortedArray[2].date;
	date4.innerHTML = sortedArray[3].date;
	date5.innerHTML = sortedArray[4].date;
	date6.innerHTML = sortedArray[5].date;
	date7.innerHTML = sortedArray[6].date;
	date8.innerHTML = sortedArray[7].date;
	date9.innerHTML = sortedArray[8].date;
}
if (sortedArray.length > 9) {
	name1.innerHTML = sortedArray[0].name;
	name2.innerHTML = sortedArray[1].name;
	name3.innerHTML = sortedArray[2].name;
	name4.innerHTML = sortedArray[3].name;
	name5.innerHTML = sortedArray[4].name;	
	name6.innerHTML = sortedArray[5].name;	
	name7.innerHTML = sortedArray[6].name;	
	name8.innerHTML = sortedArray[7].name;	
	name9.innerHTML = sortedArray[8].name;	
	name10.innerHTML = sortedArray[9].name;	
	
	wealth1.innerHTML = "₱ " + sortedArray[0].money;
	wealth2.innerHTML = "₱ " + sortedArray[1].money;
	wealth3.innerHTML = "₱ " + sortedArray[2].money;
	wealth4.innerHTML = "₱ " + sortedArray[3].money;
	wealth5.innerHTML = "₱ " + sortedArray[4].money;
	wealth6.innerHTML = "₱ " + sortedArray[5].money;
	wealth7.innerHTML = "₱ " + sortedArray[6].money;
	wealth8.innerHTML = "₱ " + sortedArray[7].money;
	wealth9.innerHTML = "₱ " + sortedArray[8].money;
	wealth10.innerHTML = "₱ " + sortedArray[9].money;
	
	streak1.innerHTML = sortedArray[0].streak;
	streak2.innerHTML = sortedArray[1].streak;
	streak3.innerHTML = sortedArray[2].streak;
	streak4.innerHTML = sortedArray[3].streak;
	streak5.innerHTML = sortedArray[4].streak;
	streak6.innerHTML = sortedArray[5].streak;
	streak7.innerHTML = sortedArray[6].streak;
	streak8.innerHTML = sortedArray[7].streak;
	streak9.innerHTML = sortedArray[8].streak;
	streak10.innerHTML = sortedArray[9].streak;
	
	date1.innerHTML = sortedArray[0].date;
	date2.innerHTML = sortedArray[1].date;
	date3.innerHTML = sortedArray[2].date;
	date4.innerHTML = sortedArray[3].date;
	date5.innerHTML = sortedArray[4].date;
	date6.innerHTML = sortedArray[5].date;
	date7.innerHTML = sortedArray[6].date;
	date8.innerHTML = sortedArray[7].date;
	date9.innerHTML = sortedArray[8].date;
	date10.innerHTML = sortedArray[9].date;
}

