function Start(){
    console.log("start() started");
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    console.log("update seconds row to Reading Data");
    document.getElementById("startButton").disabled = true;
    console.log("start button disabled");
    document.getElementById("stopButton").disabled = false;
    console.log("stop button enabled");
}

function Stop(){
    console.log("stop() started");
    clearInterval(timer);
    console.log("update seconds row to hard wire table data");
    document.getElementById("startButton").disabled = false;
    console.log("start button enabled");
    document.getElementById("stopButton").disabled = true;
    console.log("stop button disabled");
}


// for the assignment, we need a timer to count down from 50 to 0 by 5 sec increments and show "blastoff at 0"
//for my example we are going to count down from 20 to 0 by 2 sec increments and show "blastoff" at 0


function betterCTDown() {
    //This is the better blast off timer
    console.log("betterCTDown() started"); 
    //variable to track time
    currTime = 50
    //for loop to save typing
    for (var i = 0; i <= 10; i++) {
        console.log(i);
        setTimeout(function () {
            document.getElementById("blastOffText").innerHTML = currTime;
            if (currTime == 0) {
                //if we are done and need blastoff
                document.getElementById("blastOffText").innerHTML = "Blastoff";
            } else if (currTime < 25) {
                //bc the admiral wants this 
                document.getElementById("blastOffText").innerHTML =
                    "Warning Less than 1/2 way to launch, time left = " + currTime;
            } else {
                //everything else
                document.getElementById("blastOffText").innerHTML = currTime;
            }
            //we are iterating by fives
            currTime = currTime - 5;
            //5000 to wait 5 seconds between counts
        }, 5000 * i);
    }
}

var numWins = 0; //Base display number of Wins
var numLost = 0; //Base display number of Lost
var numTie = 0; //Base display number of Ties

function playCraps() {
    console.log("playCraps() started...)");
    //display that the button has been clicked in the console log
    var die1 = 6 * Math.random();
    // pick a random number, multiply by 6 and store in die1
    var roundDie1 = Math.ceil(die1); //Rounds die1 up
    console.log("The random number is: " + die1);   //display die1 on the browser at the die1Res position
    console.log("The rounded number is: " + roundDie1);  //Display the rounded number of die1
    document.getElementById("die1Res").innerHTML = "The rounded number is: " + roundDie1; //Shows the rounded number for die1 on the browser
    var die2 = 6 * Math.random();
    // pick a random number, multiply by 6 and store in die2
    console.log("die1 is " + die1);
    console.log("die2 is " + die2);
    var roundDie2 = Math.ceil(die2); //Rounds die2 up
    console.log("The random number is: " + die2);  //display die2 on the browser at the die2Res position
    console.log("The rounded number is: " + roundDie2); //display the rounded number of die2
    document.getElementById("die2Res").innerHTML = "The rounded number is: " + roundDie2; //Shows the rounded number for die2 on the browser
    var sum = roundDie1 + roundDie2;        //add die1 and die2 up and store in sum
    console.log("The sum of the two dice roll is: " + sum); //Displays the sum of die1 and die2
    document.getElementById("sumRes").innerHTML = "The sum of the two dice roll is: " + sum; // Shows the sum of die1 and die2 in the browser
    if (sum == 7 || sum == 11) { //Shows how to achieve a loss
        document.getElementById("crapsRes").innerHTML = "Craps, you lose!"; //Shows when the player loses in Craps
        numLost = numLost + 1; //Increase Lost counter by 1
    } else if (roundDie1 == roundDie2 && roundDie2 % 2 == 0) { //Shows how to achieve a win
        document.getElementById("crapsRes").innerHTML = "Doubles, you win!!!"; //Shows when the player wins in Craps
        numWins = numWins + 1; //Increase Win counter by 1
    } else { //Shows how to achieve a tie
        document.getElementById("crapsRes").innerHTML = "Tie, please try again."; //Shows when the player ties in Craps
        numTie = numTie + 1; //Increase Tie counter by 1
    }
    document.getElementById("wins").innerHTML = numWins; //Displays wins as the number of rounds won
    document.getElementById("losses").innerHTML = numLost; //Displays losses as the number of rounds lost
    document.getElementById("ties").innerHTML = numTie; //Displays ties as the number of rounds tied
}

function playStation() {
    console.log("playStation() started");
    mySound = new sound("Bruno Walter - Beethoven, Symphony No. 1, Menuetto.mp3");
    mySound.play();
    setTimeout(function(){
        mySound.stop();
    }, 60000);
}

function sound(srcFile){
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}