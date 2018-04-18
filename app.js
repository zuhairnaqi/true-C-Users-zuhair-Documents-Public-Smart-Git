
//First Page Code 

function selectTeam(){
    window.location.assign("index2.html");
    console.log("hello");
}


//Second Page Code

var team1Score = 0;
var team2Score = 0;
var count=0;
var out=0;
var showScore1 = document.getElementById("score");
var teamARuns = document.getElementById("runs");
var teamBRuns =  document.getElementById("runs2");
var showScore2 = document.getElementById("score2");
var marquee = document.getElementById("marquee");
var endOver1 = document.getElementById("endMatch1");
var endOver2 = document.getElementById("endMatch2");
var result = document.getElementById("results");

// var teamAButton = document.getElementById("team-a-button");
var playAgain = document.getElementById("playAgain");

var button = document.getElementById("button");



function OnBall(){
    var number = Math.floor(Math.random()*7);
    if(count<12){
        if(count<=10){
            if(out===2){
                alert("Team A Both Players Are Out.");
                count=11;
                }
            else if(number===number && number!==0){
                team1Score += number;
                teamARuns.innerHTML=number;
                count +=1;
            }
            else if(number===0){
                teamARuns.innerHTML=number;
                count+=1;
                alert("Ohh Your Player Is Out");
                out +=1
            }
            console.log(out);
        }
        else if(count===11){
            team1Score += number;
            teamARuns.innerHTML=number;
                count +=1;
                
                showScore1.innerHTML=team1Score;
                endOver1.innerHTML="<br><br>Team A has Matched over with " + out + " wickets<br> Team A Targeted:" + (team1Score + 1);
                button.innerHTML="Click to Start Match Of B Team!";
                marquee.innerHTML="Now Team B's turn.Let see Team B will beat Team A or Not."
                return false;
            }
            showScore1.innerHTML=team1Score + "/" + out;
         }
    else if(count<26 && count>11){
        if(count===12){
            button.innerHTML="Team B";
             count +=1;
             out=0;
        }
        else if(count>=13 && count<25){
                if(out===2){
                alert("Team B Both Players Are Out.");
                count=25;
                }
                else if(number===number && number!==0){
                      team2Score += number;
                      teamBRuns.innerHTML=number;
                      count +=1;
                  }
               else{
                teamBRuns.innerHTML=number;
                count+=1;
                out +=1;
                alert("Ohh Your Player Is Out");
                  }
         }
        else if(count===25){
                     endOver2.innerHTML="<br><br>Team B has Match over with " + out + " wickets <br> Team B runs: " + (team2Score);
                   var winner ;
               if(team1Score>team2Score){
                    result.innerHTML= "Team A beats Team B by " + (team1Score-team2Score) + " Runs";
                    marquee.innerHTML="Congratulations Team A!. " + "Team A beats Team B by " + (team1Score-team2Score) + " Runs";
                  }
                else if(team2Score>team1Score){
                     result.innerHTML= "Team B beats Team A by " + (team2Score-team1Score) + " Runs";
                     marquee.innerHTML="Congratulations Team B !   " + "Team B beats Team A by " + (team2Score-team1Score) + " Runs";
                 }
             playAgain.innerHTML="Wants To Play Again?";
             button.innerHTML="Click Here";
             count +=1;
             return false;
          }
    showScore2.innerHTML=team2Score + "/" + (out);
    }
    else if(count===26){
        window.location.reload();
    }
    console.log(count);
    return false;   
}
