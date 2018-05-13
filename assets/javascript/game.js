//Well first I need to add crystals in order to start the game. 

function setUpGame(){    
    totalScore = 0;
    randomScore = Math.floor(Math.random() * 120 + 19);
    $("#score-1").html('Random Result: '   +randomScore);
    redCrystal = Math.floor(Math.random() * 5);
    blueCrystal = Math.floor(Math.random() * 10);
    yellowCrystal = Math.floor(Math.random() * 15);
    greenCrystal = Math.floor(Math.random() * 20);
}

var wins = 0;
var losses = 0;
var totalScore = 0;
var randomScore;
var redCrystal;
var blueCrystal;
var yellowCrystal;
var greenCrystal;
var gameOver = false;
setUpGame();



//now I need to add the random Score into all the crystals 

$("#RC").on("click", function(){
    totalScore = redCrystal + totalScore;
    console.log(totalScore + 'RC');
    $("#scorecard-2").text(totalScore);

    if(randomScore === totalScore){
        wins++;
        $("#wins").text("wins: " + wins);
        setUpGame();
    }   else if(totalScore > randomScore){
        losses++;
        $("#losses").text("losses: " + losses);
        setUpGame();

    };

        
});



$("#BC").on("click", function(){
    totalScore = blueCrystal + totalScore;
    console.log(totalScore + 'BC');
    $("#scorecard-2").text(totalScore);

    if(randomScore === totalScore){
        wins++;
        $("#wins").text("wins: " + wins);
        setUpGame();
    }   else if(totalScore > randomScore){
        losses++;
        $("#losses").text("losses: " + losses);
        totalScore = 0
        $("#losses").text("losses: " + losses);
        setUpGame();

    };

});



$("#YC").on("click", function(){
    totalScore = yellowCrystal + totalScore;
    console.log(totalScore + 'YC');
    $("#scorecard-2").text(totalScore);

    if(randomScore === totalScore){
        wins++;
        $("#wins").text("wins: " + wins);
        setUpGame();
    }   else if(totalScore > randomScore){
        losses++;
        $("#losses").text("losses: " + losses);
        setUpGame();

    };
});



$("#GC").on("click", function(){
    totalScore = greenCrystal + totalScore;
    console.log(totalScore + 'GC');
    $("#scorecard-2").text(totalScore);

    if(randomScore === totalScore){
        wins++;
        $("#wins").text("wins: " + wins);
        setUpGame();
    }   else if(totalScore > randomScore){
        losses++;
        $("#losses").text("losses: " + losses);
        setUpGame();

    };

});

//GAME RESET
//when random randomResult=totalScore, randomResult needs to change to a different number and totalScore needs to get set to 0;
//when 

//maybe make a gameOver function?



//reset function


//when win is reached i want my totalScore and randomScore to be put to zero 



