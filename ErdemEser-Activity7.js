var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };



window.onload = function () {
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("add").onclick = addScore;
	
	$("name").focus(); // Move cursor to the Name field on page load
};

function displayResults()
{
	var average = 0;
    var highestScore = 0;
	var highestName="";
    
    for(var i = 0; i < scores.length; i++) {
        average = (average * i + scores[i]) / (i + 1);
        if (scores[i] > highestScore) {
            highestScore = scores[i];
			highestName=names[i];

        }
    }
    
    $("results").innerHTML = "<h2>Results</h2><br />Average score = " + average.toFixed(2) + "<br />Highest score ="+highestName+" with a score of " + highestScore + "<br />";
}


function addScore()
{
	var newName = $("name").value.trim();
    var newScore = parseInt($("score").value.trim());
    
    if (newName === "" || isNaN(newScore) || newScore < 0 || newScore > 100) {
        alert("You must enter a name and a valid score.");
        return;
    }
    
    names.push(newName);
    scores.push(newScore);
    
    // Clear input fields
    $("name").value = "";
    $("score").value = "";
    
    $("name").focus(); // Move cursor back to the Name field after adding a score
    
  
}

function displayScores() {
	var tableContent = "<h2>Scores</h2><table><tr><td><b>Name</b></td><td><b>Score</b></td></tr>";
    
    for(var i = 0; i < names.length; i++) {
        tableContent += "<tr><td>" + names[i] + "</td><td>" + scores[i] + "</td></tr>";
    }
    

    tableContent += "</table>";
    
    $("scores_table").innerHTML = tableContent;
}

