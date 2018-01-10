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

    $('#anfrage, .button-anfrage').click(function () {
        $("html").animate({
            scrollTop: $(document).height() - $('.display-main-5')[0].scrollHeight
        }, 1000);
    });

    $('.grid-arrow-down i').click(function () {
        $("html").animate({
            scrollTop: $('.display-main-3')[0].scrollHeight
        }, 1000);
    });
});

window.onload = function() {
    $(".preloader").hide();
}