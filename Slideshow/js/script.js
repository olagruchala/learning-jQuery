$(document).ready(function () {

    $("img").hide();
    $("#subtitle").hide();

    let $nextButton = $("#nextButton");
    let $prevButton = $("#prevButton");

    let $pictures = [
        $("#pic0"),
        $("#pic1"),
        $("#pic2"),
        $("#pic3"),
        $("#pic4"),
        $("#pic5"),
        $("#pic6"),
        $("#pic7"),
        $("#pic8")
    ];

    let index = 0;
    $pictures[index].fadeIn(1000);
    $("#subtitle").html($pictures[index].attr("alt")).fadeIn(1000);


    //obsługa przycisku "Następny"
    $nextButton.on("click", function () {

        let $subtitle = $("#subtitle");
        $subtitle.fadeOut(500);
        $pictures[index].fadeOut(500);

        if (index === $pictures.length -1) {
            index = 0;
        } else {
            index++;
        }

        $subtitle.html($pictures[index].attr("alt")).fadeIn(1000);
        $pictures[index].fadeIn(1000);
    });


    //obsługa przycisku "Poprzedni"
    $prevButton.on("click", function () {

        let $subtitle = $("#subtitle");
        $subtitle.fadeOut(500);
        $pictures[index].fadeOut(500);

        if (index === 0) {
            index = $pictures.length -1;
        } else {
            index--;
        }

        $subtitle.html($pictures[index].attr("alt")).fadeIn(1000);
        $pictures[index].fadeIn(1000);
    });
});

