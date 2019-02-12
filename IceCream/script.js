var flavor = ["vanila", "strawberry", "chocolate"];
var index = 1;

$("button").on("click", function() {

        //tworzymy div i zapisujemy w zmiennej
    var newScope = $("<div>");
        //dodajemy klasę .scope i .strawberry
    newScope.addClass("scope " + flavor[index]);
        //dodajemy newScope do strony
    $("#iceCremeDiv").prepend(newScope);

    if (index >= 2) {
        index = 0;
    } else {
        index++;
    }
});
