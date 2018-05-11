//Well first I need to add crystals in order to start the game. 

var wins = 0;
var losses = 0;
var totalScore = 0;
var randomScore;
var redCrystal;
var blueCrystal;
var yellowCrystal;
var greenCrystal;
var gameOver = false;



//Crystals onclick to generate random numbers.
randomScore = Math.floor(Math.random() * 120 + 19);
console.log(randomScore);

$("#score-1").html('Random Result: '   +randomScore);

//now I need to add the random Score into all the crystals 

redCrystal = Math.floor(Math.random() * 5);
$("#RC").on("click", function(){
    totalScore = redCrystal + totalScore;
    console.log(totalScore + 'RC');
    $("#scorecard-2").text(totalScore);

    if(randomScore === totalScore){
        wins++;
        $("#wins").text("wins: " + wins);
    }   else if(totalScore > randomScore){
        losses++;
        $("#losses").text("losses: " + losses);
    };

    
});

blueCrystal = Math.floor(Math.random() * 10);

$("#BC").on("click", function(){
    totalScore = blueCrystal + totalScore;
    console.log(totalScore + 'BC');
    $("#scorecard-2").text(totalScore);

    if(randomScore === totalScore){
        wins++;
        $("#wins").text("wins: " + wins);
    }   else if(totalScore > randomScore){
        losses++;
        $("#losses").text("losses: " + losses);
    };

});

yellowCrystal = Math.floor(Math.random() * 15);

$("#YC").on("click", function(){
    totalScore = yellowCrystal + totalScore;
    console.log(totalScore + 'YC');
    $("#scorecard-2").text(totalScore);

    if(randomScore === totalScore){
        wins++;
        $("#wins").text("wins: " + wins);
    }   else if(totalScore > randomScore){
        losses++;
        $("#losses").text("losses: " + losses);
    };
});

greenCrystal = Math.floor(Math.random() * 20);

$("#GC").on("click", function(){
    totalScore = greenCrystal + totalScore;
    console.log(totalScore + 'GC');
    $("#scorecard-2").text(totalScore);

    if(randomScore === totalScore){
        wins++;
        $("#wins").text("wins: " + wins);
    }   else if(totalScore > randomScore){
        losses++;
        $("#losses").text("losses: " + losses);
    };

});

//GAME RESET

function reset(){
    if(randomResult === wins){
        randomResult = 0; 
    }
};

reset();

//reset function



