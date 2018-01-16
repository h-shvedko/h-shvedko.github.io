if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.min.js').then(function (registration) {
    }).catch(function (err) {
        console.log('ServiceWorker registration failed: ', err);
    });
}

$(document).ready(function () {

    $(document).click(function (e) {
        var container = $("#wohnungen");
        var elem = $(".grid-second-menu");

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            if (!elem.is(e.target) && elem.has(e.target).length === 0) {
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

    $('#anfahrt').click(function () {
        $("html").animate({
            scrollTop: $(document).height() - $('.display-main-4')[0].scrollHeight
        }, 1000);
    });

    $('.grid-arrow-down i').click(function () {
        $("html").animate({
            scrollTop: $('.display-main-3')[0].scrollHeight
        }, 1000);
    });

    $('.grid-arrow-down-wohnung i').click(function () {
        $("html").animate({
            scrollTop: $('.display-main-5')[0].scrollHeight
        }, 1000);
    });

    $('.photo-over').click(function (e) {
        var name = $(this).parent().attr('data-name');
        $('.gallery').css('visibility', 'visible');
        $('.gallery .overlay').css('opacity', 0.8);
        $('.gallery>div>img').attr('src', '/img/' + name + '_page.jpeg');
    });

    $('#close, .gallery>.overlay').click(function () {
        $('.gallery .overlay').css('opacity', 0);
        $('.gallery>div>img').attr('src', '');
        $('.gallery').css('visibility', 'hidden');
    });
});

window.onload = function () {
    $(".preloader").hide();
    $('.map iframe').attr('src', 'https://www.google.com/maps/embed/v1/place?q=place:Goettingen&key=AIzaSyD6CHCQODTf_Xp8WF1BOxTBmvU8inT4Q60');
}