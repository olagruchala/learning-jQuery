$(document).ready(function() {

    $("#myInput").focus();

    let wordsIndex = 0;

    let words = [
        {
            correct: "JQUERY",
            scrable: "REYJUQ"
        },
        {
            correct: "JAVASCRIPT",
            scrable: "SJTCARVIAP"
        },
        {
            correct: "REACT",
            scrable: "RTECA"
        },
        {
            correct: "ANGULAR",
            scrable: "RANAGLU"
        }
    ];


    $("#joke-form").on("submit", function (event) {
        event.preventDefault();

        let answer = $("#joke-form").find("input").val().toUpperCase();
        //console.log(answer);

        let innerWord = words[wordsIndex];

        if (answer === innerWord.correct) {
            if (wordsIndex === words.length - 1) {
                wordsIndex = 0;
            }
            else wordsIndex++;

            $("#checking")
                .text("Bravo!!!")
                .addClass("visible");
            $("#nextWordButton").addClass("visible")
                                .focus();
        } else {
            $("#checking")
                .text("Try again...")
                .addClass("visible");
            $("#myInput").focus();
        }
    });

    $("#nextWordButton").on("click", function (event) {
        event.preventDefault();
        $("#joke-form")[0].reset();
        $("#myInput").focus();

        let innerWord = words[wordsIndex];
        //console.log(innerWord.scrable);

        $(".scrambled").html(innerWord.scrable);
        $("#nextWordButton").removeClass("visible").addClass("hidden");
        $("#checking").removeClass("visible").addClass("hidden");
    });

});
