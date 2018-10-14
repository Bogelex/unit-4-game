$(document).ready(function () {

    //.create the necessary variables
    var wins = 0;
    var losses = 0;



    //.create a random number in blue box 
    var computerPick = Math.floor(Math.random() * 100) + 40;
    console.log(computerPick);
    function randomNumber() {
        var computerPick = Math.floor(Math.random() * 100) + 40;
        return randomNumber;
    };


    $("#computer-pick").text(computerPick);


    //     //.create a random number for ruby
    var counter = 0;
    var computerPick1 = Math.floor(Math.random() * 20) + 1;
    $("#ruby").on("click", function () {
        counter = counter + computerPick1;
        // generate a new random number between 1 and 20.

        $("#score").html(counter);
        comparison();
        console.log(counter);

    });

    //.create a random number for blue
    var computerPick2 = Math.floor(Math.random() * 20) + 1;
    $("#Blue").on("click", function () {
        counter = counter + computerPick2;
        // generate a new random number between 1 and 20.
        comparison();
        $("#score").html(counter);

    });

    // },

    // //.create a random number for green
    var computerPick3 = Math.floor(Math.random() * 20) + 1;
    $("#Green").on("click", function () {
        counter = counter + computerPick3;
        // generate a new random number between 1 and 20.
        comparison();
        $("#score").html(counter);

    });

    //     //.create a random number for purple
    var computerPick4 = Math.floor(Math.random() * 20) + 1;
    $("#Purple").on("click", function () {
        counter = counter + computerPick4;
        // generate a new random number between 1 and 20.
        comparison();

        $("#score").html(counter);

    });


    // This is the compare logic statement to process
    function comparison() {
        // console.log("call comparison")
        if (computerPick === counter) {
            wins++;

            alert('You Won! Please refresh browser to play again');

            $("#wins").html("wins: " + wins);


            // document.location.reload();
        }
        else if (computerPick < counter) {
            losses++;

            alert('You lose! Please refresh browser to play again');
            $("#losses").html("losses: " + losses);


            // document.location.reload();

        }


    }


});

