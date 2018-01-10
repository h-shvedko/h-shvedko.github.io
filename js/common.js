$(document).ready(function () {

    $(document).click(function (e) {
        var container = $("#wohnungen");
        var elem = $(".grid-second-menu");

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            if(!elem.is(e.target) && elem.has(e.target).length === 0){
                elem.css("visibility", "hidden");
                elem.css("opacity", 0);
            }
        } else {
            elem.css("visibility", "visible");
            elem.css("opacity", 1);
        }
    });

    $('#anfrage').click(function () {
        $(".display-main-5").animate({
            scrollDown: $('.display-main-5')[0].scrollHeight
        }, 800);
    });
});

window.onload = function() {
    $(".preloader").hide();
}