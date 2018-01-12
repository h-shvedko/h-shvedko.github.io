if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('../js/service-worker.min.js')
}

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
    // $(".preloader").hide();
    $('.display-main-1').css('background', 'url(/img/main_background.jpeg)');

    $('.grid-second-menu .grid-item:nth-child(1)').css('background', 'url(/img/main_wohnung1.jpeg)');
    $('.grid-second-menu .grid-item:nth-child(2)').css('background', 'url(/img/main_wohnung2.jpeg)');
    $('.grid-second-menu .grid-item:nth-child(3)').css('background', 'url(/img/main_wohnung3.jpeg)');
    $('.grid-second-menu .grid-item:nth-child(4)').css('background', 'url(/img/main_wohnung4.jpeg)');

    $('.grid-third-display .grid-item:nth-child(1)').css('background', 'url(/img/main_wohnung1.jpeg)');
    $('.grid-third-display .grid-item:nth-child(2)').css('background', 'url(/img/main_wohnung2.jpeg)');
    $('.grid-third-display .grid-item:nth-child(3)').css('background', 'url(/img/main_wohnung3.jpeg)');
    $('.grid-third-display .grid-item:nth-child(4)').css('background', 'url(/img/main_wohnung4.jpeg)');
    $('.map iframe').attr('src', 'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJy0ZcLb_UpEcRiakz-DaIkq8&key=AIzaSyD6CHCQODTf_Xp8WF1BOxTBmvU8inT4Q60');
}